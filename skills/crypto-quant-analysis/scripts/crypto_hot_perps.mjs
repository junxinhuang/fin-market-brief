#!/usr/bin/env node

const { execFileSync } = await import("node:child_process");

const limit = Number(process.argv[2] || 20);
const HYPERLIQUID_INFO = "https://api.hyperliquid.xyz/info";
const MAJORS = new Set(["BTC", "ETH", "SOL"]);

function postJson(url, body, timeoutMs = 20000) {
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

function number(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function pctChange(current, previous) {
  if (!Number.isFinite(current) || !Number.isFinite(previous) || previous === 0) return null;
  return (current / previous - 1) * 100;
}

function percentileRank(rows, key, value) {
  if (!Number.isFinite(value)) return 0;
  const values = rows.map((row) => row[key]).filter(Number.isFinite).sort((a, b) => a - b);
  if (values.length <= 1) return 0;
  let below = 0;
  for (const item of values) {
    if (item <= value) below += 1;
  }
  return below / values.length;
}

function classify(row) {
  if (row.dayNtlVlmUsd < 5_000_000 || row.openInterestUsd < 2_000_000) {
    return "不碰：流动性/OI 偏低";
  }
  if (Math.abs(row.funding) > 0.00008 || Math.abs(row.premium || 0) > 0.002) {
    return "只观察：衍生品拥挤或溢价异常";
  }
  if (row.score >= 70) return "可交易：高成交/高OI/有波动，等待技术位确认";
  return "只观察：热度足够但交易信号需二次确认";
}

const data = postJson(HYPERLIQUID_INFO, { type: "metaAndAssetCtxs" });
const universe = data?.[0]?.universe || [];
const contexts = data?.[1] || [];

const rows = universe
  .map((asset, index) => {
    const ctx = contexts[index] || {};
    const markPx = number(ctx.markPx);
    const prevDayPx = number(ctx.prevDayPx);
    const openInterestBase = number(ctx.openInterest) || 0;
    const openInterestUsd = Number.isFinite(markPx) ? openInterestBase * markPx : null;
    return {
      symbol: asset.name,
      maxLeverage: asset.maxLeverage,
      markPx,
      prevDayPx,
      change24hPct: pctChange(markPx, prevDayPx),
      funding: number(ctx.funding),
      premium: number(ctx.premium),
      openInterestBase,
      openInterestUsd,
      dayNtlVlmUsd: number(ctx.dayNtlVlm) || 0,
      dayBaseVlm: number(ctx.dayBaseVlm) || 0,
    };
  })
  .filter((row) => row.symbol && !MAJORS.has(row.symbol) && Number.isFinite(row.markPx));

for (const row of rows) {
  row.absMove24hPct = Math.abs(row.change24hPct || 0);
  row.absFunding = Math.abs(row.funding || 0);
  row.absPremium = Math.abs(row.premium || 0);
}

for (const row of rows) {
  const volumeScore = percentileRank(rows, "dayNtlVlmUsd", row.dayNtlVlmUsd) * 35;
  const oiScore = percentileRank(rows, "openInterestUsd", row.openInterestUsd) * 25;
  const moveScore = percentileRank(rows, "absMove24hPct", Math.abs(row.change24hPct || 0)) * 20;
  const fundingScore = percentileRank(rows, "absFunding", Math.abs(row.funding || 0)) * 10;
  const premiumScore = percentileRank(rows, "absPremium", Math.abs(row.premium || 0)) * 10;
  row.score = volumeScore + oiScore + moveScore + fundingScore + premiumScore;
}

const ranked = rows
  .map((row) => ({ ...row, treatment: classify(row) }))
  .sort((a, b) => b.score - a.score)
  .slice(0, Number.isFinite(limit) && limit > 0 ? limit : 20);

const output = {
  generatedAt: new Date().toISOString(),
  source: "Hyperliquid metaAndAssetCtxs",
  method:
    "Ranks non-BTC/ETH/SOL perpetuals by 24h notional volume, open interest USD, 24h move, funding extremity, and premium extremity. This is a hot-perp candidate screener, not a standalone buy/sell signal.",
  gaps:
    "叙事/新闻/社交热度仍需接新闻源、CoinGecko/DEX Screener 或人工确认；本脚本只解决永续市场热度候选。",
  top: ranked,
};

console.log(JSON.stringify(output, null, 2));
