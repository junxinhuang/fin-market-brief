#!/usr/bin/env node

const symbol = (process.argv[2] || "ETH").toUpperCase();
const now = Date.now();
const { execFileSync } = await import("node:child_process");
const fetchMarketWide = symbol === "BTC";

const HYPERLIQUID_INFO = "https://api.hyperliquid.xyz/info";

async function postJson(url, body, timeoutMs = 15000) {
  const text = execFileSync(
    "curl",
    [
      "-sS",
      "--max-time",
      String(Math.ceil(timeoutMs / 1000)),
      "-H",
      "Content-Type: application/json",
      "-d",
      JSON.stringify(body),
      url,
    ],
    { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 }
  );
  return JSON.parse(text);
}

async function getJson(url, timeoutMs = 15000) {
  const text = execFileSync("curl", ["-sS", "--max-time", String(Math.ceil(timeoutMs / 1000)), url], {
    encoding: "utf8",
    maxBuffer: 20 * 1024 * 1024,
  });
  return JSON.parse(text);
}

function pctChange(current, previous) {
  if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) return null;
  return ((current / previous - 1) * 100);
}

function sumPeggedUsd(rows, path) {
  return (rows || []).reduce((sum, row) => {
    const value = path.split(".").reduce((acc, key) => acc?.[key], row);
    return sum + (Number.isFinite(Number(value)) ? Number(value) : 0);
  }, 0);
}

async function ethereumGas() {
  const text = execFileSync(
    "curl",
    [
      "-sS",
      "--max-time",
      "15",
      "-H",
      "Content-Type: application/json",
      "-d",
      JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_gasPrice",
        params: [],
        id: 1,
      }),
      "https://ethereum-rpc.publicnode.com",
    ],
    { encoding: "utf8", maxBuffer: 1024 * 1024 }
  );
  const json = JSON.parse(text);
  if (!json.result) throw new Error(JSON.stringify(json));
  const wei = BigInt(json.result);
  return {
    source: "ethereum-rpc.publicnode.com",
    gasPriceWei: wei.toString(),
    gasPriceGwei: Number(wei) / 1e9,
  };
}

async function candles(interval, lookbackMs) {
  return postJson(HYPERLIQUID_INFO, {
    type: "candleSnapshot",
    req: {
      coin: symbol,
      interval,
      startTime: now - lookbackMs,
      endTime: now,
    },
  });
}

async function stablecoinLiquidity() {
  const json = await getJson("https://stablecoins.llama.fi/stablecoins?includePrices=true", 20000);
  const assets = json?.peggedAssets || [];
  const current = sumPeggedUsd(assets, "circulating.peggedUSD");
  const prevDay = sumPeggedUsd(assets, "circulatingPrevDay.peggedUSD");
  const prevWeek = sumPeggedUsd(assets, "circulatingPrevWeek.peggedUSD");
  const prevMonth = sumPeggedUsd(assets, "circulatingPrevMonth.peggedUSD");
  const chains = (json?.chains || [])
    .map((row) => ({
      name: row.name,
      currentUsd: Number(row.totalCirculatingUSD?.peggedUSD),
    }))
    .filter((row) => Number.isFinite(row.currentUsd))
    .sort((a, b) => b.currentUsd - a.currentUsd)
    .slice(0, 8);
  return {
    source: "DeFiLlama stablecoins API",
    totalUsd: current,
    change1dUsd: current - prevDay,
    change7dUsd: current - prevWeek,
    change30dUsd: current - prevMonth,
    change1dPct: pctChange(current, prevDay),
    change7dPct: pctChange(current, prevWeek),
    change30dPct: pctChange(current, prevMonth),
    topChains: chains,
  };
}

async function binanceLongShort() {
  const pair = `${symbol}USDT`;
  const [globalRows, topRows] = await Promise.all([
    getJson(`https://fapi.binance.com/futures/data/globalLongShortAccountRatio?symbol=${pair}&period=1h&limit=24`, 12000),
    getJson(`https://fapi.binance.com/futures/data/topLongShortAccountRatio?symbol=${pair}&period=1h&limit=24`, 12000),
  ]);
  const latestGlobal = Array.isArray(globalRows) ? globalRows.at(-1) : null;
  const latestTop = Array.isArray(topRows) ? topRows.at(-1) : null;
  return {
    source: "Binance USD-M Futures public data",
    symbol: pair,
    globalAccountRatio: latestGlobal
      ? {
          longShortRatio: Number(latestGlobal.longShortRatio),
          longAccount: Number(latestGlobal.longAccount),
          shortAccount: Number(latestGlobal.shortAccount),
          timestamp: Number(latestGlobal.timestamp),
        }
      : null,
    topTraderAccountRatio: latestTop
      ? {
          longShortRatio: Number(latestTop.longShortRatio),
          longAccount: Number(latestTop.longAccount),
          shortAccount: Number(latestTop.shortAccount),
          timestamp: Number(latestTop.timestamp),
        }
      : null,
  };
}

async function binanceLiquidations() {
  const pair = `${symbol}USDT`;
  const rows = await getJson(`https://fapi.binance.com/fapi/v1/allForceOrders?symbol=${pair}&limit=100`, 12000);
  const list = Array.isArray(rows) ? rows : [];
  const notional = list.reduce((sum, row) => sum + Number(row.price || 0) * Number(row.origQty || 0), 0);
  const buyNotional = list
    .filter((row) => row.side === "BUY")
    .reduce((sum, row) => sum + Number(row.price || 0) * Number(row.origQty || 0), 0);
  const sellNotional = list
    .filter((row) => row.side === "SELL")
    .reduce((sum, row) => sum + Number(row.price || 0) * Number(row.origQty || 0), 0);
  return {
    source: "Binance USD-M Futures allForceOrders",
    symbol: pair,
    count: list.length,
    notionalUsd: notional,
    buyNotionalUsd: buyNotional,
    sellNotionalUsd: sellNotional,
    latest: list.slice(-10),
  };
}

function vwapFromCandles(rows) {
  let pv = 0;
  let vol = 0;
  for (const row of rows || []) {
    const close = Number(row.c);
    const v = Number(row.v);
    if (Number.isFinite(close) && Number.isFinite(v)) {
      pv += close * v;
      vol += v;
    }
  }
  return vol > 0 ? pv / vol : null;
}

function summarizeBook(book) {
  const bids = book?.levels?.[0] || [];
  const asks = book?.levels?.[1] || [];
  const bestBid = bids[0] ? Number(bids[0].px) : null;
  const bestAsk = asks[0] ? Number(asks[0].px) : null;
  return {
    source: "Hyperliquid l2Book",
    time: book?.time || null,
    bestBid,
    bestAsk,
    spread: bestBid != null && bestAsk != null ? bestAsk - bestBid : null,
    spreadPct:
      bestBid != null && bestAsk != null
        ? ((bestAsk - bestBid) / ((bestAsk + bestBid) / 2)) * 100
        : null,
    bidDepthTop20: bids.reduce((sum, level) => sum + Number(level.sz || 0), 0),
    askDepthTop20: asks.reduce((sum, level) => sum + Number(level.sz || 0), 0),
    topBids: bids.slice(0, 10),
    topAsks: asks.slice(0, 10),
  };
}

function findAsset(metaAndCtxs) {
  const universe = metaAndCtxs?.[0]?.universe || [];
  const contexts = metaAndCtxs?.[1] || [];
  const idx = universe.findIndex((asset) => asset.name === symbol);
  if (idx < 0) return null;
  return { meta: universe[idx], context: contexts[idx] };
}

async function settle(name, fn) {
  try {
    return { ok: true, data: await fn() };
  } catch (error) {
    return { ok: false, error: String(error?.message || error) };
  }
}

const [
  metaAndCtxs,
  candles1h,
  candles4h,
  candles1d,
  book,
  fundingHistory,
  gas,
  fearGreed,
  stablecoins,
  longShort,
  liquidations,
] = await Promise.all([
  settle("metaAndAssetCtxs", () => postJson(HYPERLIQUID_INFO, { type: "metaAndAssetCtxs" })),
  settle("candles1h", () => candles("1h", 36 * 60 * 60 * 1000)),
  settle("candles4h", () => candles("4h", 8 * 24 * 60 * 60 * 1000)),
  settle("candles1d", () => candles("1d", 40 * 24 * 60 * 60 * 1000)),
  settle("l2Book", () => postJson(HYPERLIQUID_INFO, { type: "l2Book", coin: symbol })),
  settle("fundingHistory", () =>
    postJson(HYPERLIQUID_INFO, {
      type: "fundingHistory",
      coin: symbol,
      startTime: now - 48 * 60 * 60 * 1000,
      endTime: now,
    })
  ),
  settle("ethereumGas", ethereumGas),
  settle("fearGreed", () => getJson("https://api.alternative.me/fng/?limit=1")),
  settle("stablecoinLiquidity", () => (fetchMarketWide ? stablecoinLiquidity() : { skipped: "market-wide data fetched on BTC only" })),
  settle("binanceLongShort", () => (fetchMarketWide ? binanceLongShort() : { skipped: "market-wide optional source fetched on BTC only" })),
  settle("binanceLiquidations", () => (fetchMarketWide ? binanceLiquidations() : { skipped: "market-wide optional source fetched on BTC only" })),
]);

const asset = metaAndCtxs.ok ? findAsset(metaAndCtxs.data) : null;
const h1 = candles1h.ok ? candles1h.data : [];
const h4 = candles4h.ok ? candles4h.data : [];
const d1 = candles1d.ok ? candles1d.data : [];

const output = {
  symbol,
  generatedAt: new Date().toISOString(),
  primarySource: "Hyperliquid public API",
  realtime: asset
    ? {
        meta: asset.meta,
        markPx: Number(asset.context.markPx),
        midPx: asset.context.midPx == null ? null : Number(asset.context.midPx),
        oraclePx: Number(asset.context.oraclePx),
        prevDayPx: Number(asset.context.prevDayPx),
        premium: asset.context.premium == null ? null : Number(asset.context.premium),
        funding: Number(asset.context.funding),
        openInterestBase: Number(asset.context.openInterest),
        dayNtlVlmUsd: Number(asset.context.dayNtlVlm),
        dayBaseVlm: Number(asset.context.dayBaseVlm),
      }
    : { error: metaAndCtxs.error || "symbol not found" },
  klines: {
    "1h": { ok: candles1h.ok, count: h1.length, vwap: vwapFromCandles(h1), candles: h1.slice(-24) },
    "4h": { ok: candles4h.ok, count: h4.length, vwap: vwapFromCandles(h4), candles: h4.slice(-18) },
    "1d": { ok: candles1d.ok, count: d1.length, vwap: vwapFromCandles(d1), candles: d1.slice(-30) },
  },
  fundingHistory: fundingHistory.ok ? fundingHistory.data.slice(-24) : { error: fundingHistory.error },
  orderBook: book.ok ? summarizeBook(book.data) : { error: book.error },
  ethereumGas: gas.ok ? gas.data : { error: gas.error },
  sentiment: {
    fearGreed: fearGreed.ok ? fearGreed.data : { error: fearGreed.error },
    ethereumSocialSentiment: "缺失/未验证：需要 LunarCrush、Santiment、X/Reddit API 或其他社交数据源。",
  },
  onchainLiquidity: {
    stablecoins: stablecoins.ok ? stablecoins.data : { error: stablecoins.error },
  },
  externalDerivatives: {
    longShortRatio: longShort.ok ? longShort.data : { error: longShort.error },
    liquidationOrders: liquidations.ok ? liquidations.data : { error: liquidations.error },
  },
  etfFlows: {
    spotEtfFlows:
      "缺失/未验证：Farside 页面当前有 Cloudflare challenge，不适合作为无人值守主源；需要找到稳定 JSON/CSV 镜像或接入付费/带 key 数据源。",
  },
  predictionMarkets: {
    polymarketGamma:
      "接口入口：https://gamma-api.polymarket.com/markets?active=true&closed=false&search=<query>；当前环境偶发超时，查询时需重试。",
  },
  unavailable: {
    liquidationHeatmap:
      "缺失/未验证：Hyperliquid public API 不提供跨市场 liquidation heatmap；Binance 强平流只能作为近期强平订单代理，不能替代热力图。",
    longShortRatio:
      "Hyperliquid public API 当前快照不提供账户多空比；已尝试 Binance public long/short ratio，可用时展示，不可用时标记。",
    exchangeFlowsWalletSocial:
      "缺失/未验证：需要专门链上/社交数据源，例如 Alva、Santiment、LunarCrush、Nansen、Arkham 或自建索引。",
  },
};

console.log(JSON.stringify(output, null, 2));
