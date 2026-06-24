#!/usr/bin/env node

const { execFileSync } = await import("node:child_process");

const symbols = ["SPY", "QQQ", "DIA", "IWM", "SMH", "TLT", "UUP", "HYG", "LQD", "GLD"];
const now = new Date();
const from = new Date(now);
from.setDate(from.getDate() - 45);

function fmtDate(date) {
  return date.toISOString().slice(0, 10);
}

function parseNumber(value) {
  if (value === null || value === undefined) return null;
  const parsed = Number(String(value).replace(/[$,%\s,]/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
}

function pctChange(fromValue, toValue) {
  if (!Number.isFinite(fromValue) || !Number.isFinite(toValue) || fromValue === 0) return null;
  return (toValue / fromValue - 1) * 100;
}

function curlJson(url) {
  const text = execFileSync(
    "curl",
    [
      "-sS",
      "--max-time",
      "15",
      "-H",
      "user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125 Safari/537.36",
      "-H",
      "accept: application/json,text/plain,*/*",
      "-H",
      "origin: https://www.nasdaq.com",
      "-H",
      "referer: https://www.nasdaq.com/",
      url,
    ],
    { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 }
  );
  return JSON.parse(text);
}

function fetchSymbol(symbol) {
  const infoUrl = `https://api.nasdaq.com/api/quote/${symbol}/info?assetclass=etf`;
  const histUrl =
    `https://api.nasdaq.com/api/quote/${symbol}/historical?assetclass=etf&fromdate=${fmtDate(from)}&todate=${fmtDate(now)}&limit=9999`;
  const infoJson = curlJson(infoUrl);
  const histJson = curlJson(histUrl);
  const primary = infoJson?.data?.primaryData || {};
  const rows = (histJson?.data?.tradesTable?.rows || [])
    .map((row) => ({ date: row.date, close: parseNumber(row.close), volume: parseNumber(row.volume) }))
    .filter((row) => Number.isFinite(row.close))
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const latest = rows.at(-1);
  const previous = rows.at(-2);
  const weekAgo = rows.at(-6) || rows[0];
  const monthAgo = rows[0];
  return {
    symbol,
    last: parseNumber(primary.lastSalePrice) ?? latest?.close ?? null,
    percentChange: parseNumber(primary.percentageChange) ?? (previous && latest ? pctChange(previous.close, latest.close) : null),
    volume: parseNumber(primary.volume) ?? latest?.volume ?? null,
    marketStatus: primary.marketStatus ?? null,
    lastTradeTimestamp: primary.lastTradeTimestamp ?? latest?.date ?? null,
    latestHistoricalDate: latest?.date ?? null,
    sevenTradingDayPct: weekAgo && latest ? pctChange(weekAgo.close, latest.close) : null,
    thirtyCalendarDayPct: monthAgo && latest ? pctChange(monthAgo.close, latest.close) : null,
  };
}

function runUsSnapshot() {
  const results = symbols.map((symbol) => {
    try {
      return fetchSymbol(symbol);
    } catch (error) {
      return { symbol, error: String(error?.message || error) };
    }
  });
  return {
    source: "Nasdaq quote API ETF proxy via curl",
    generatedAt: now.toISOString(),
    symbols: results,
  };
}

function find(rows, symbol) {
  return rows.find((row) => row.symbol === symbol) || { symbol, error: "missing" };
}

function pct(value) {
  return Number.isFinite(Number(value)) ? Number(value) : null;
}

function classifyRisk(rows) {
  const validRows = rows.filter((row) => !row.error && Number.isFinite(Number(row.percentChange)));
  if (validRows.length < 5) {
    return {
      regime: "unavailable",
      score: null,
      interpretation:
        "宏观 ETF 代理行情有效样本不足，不能判断 risk-on/risk-off；crypto 报告应降低宏观置信度。",
    };
  }
  const qqq = pct(find(rows, "QQQ").percentChange);
  const spy = pct(find(rows, "SPY").percentChange);
  const smh = pct(find(rows, "SMH").percentChange);
  const uup = pct(find(rows, "UUP").percentChange);
  const tlt = pct(find(rows, "TLT").percentChange);
  const hyg = pct(find(rows, "HYG").percentChange);
  const lqd = pct(find(rows, "LQD").percentChange);
  const gold = pct(find(rows, "GLD").percentChange);

  let score = 0;
  if (qqq != null) score += qqq > 0.5 ? 2 : qqq < -0.5 ? -2 : 0;
  if (spy != null) score += spy > 0.4 ? 1 : spy < -0.4 ? -1 : 0;
  if (smh != null) score += smh > 0.8 ? 1 : smh < -0.8 ? -1 : 0;
  if (uup != null) score += uup > 0.3 ? -2 : uup < -0.3 ? 1 : 0;
  if (tlt != null) score += tlt > 0.5 ? 1 : tlt < -0.5 ? -1 : 0;
  if (hyg != null) score += hyg > 0.2 ? 1 : hyg < -0.2 ? -1 : 0;
  if (lqd != null) score += lqd < -0.3 ? -1 : 0;
  if (gold != null && qqq != null) score += gold > 0.8 && qqq < 0 ? -1 : 0;

  const regime = score >= 3 ? "risk-on" : score <= -3 ? "risk-off" : "mixed";
  return {
    regime,
    score,
    interpretation:
      regime === "risk-on"
        ? "美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。"
        : regime === "risk-off"
          ? "跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。"
          : "跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。",
  };
}

let output;
try {
  const data = runUsSnapshot();
  const rows = data.symbols || [];
  output = {
    generatedAt: new Date().toISOString(),
    source: data.source,
    symbols: rows,
    riskProxy: classifyRisk(rows),
    gaps:
      "This is an ETF proxy layer for macro risk appetite, not official DXY/yield/VIX levels. ETF flows and macro event calendar remain separate gaps.",
  };
} catch (error) {
  output = {
    generatedAt: new Date().toISOString(),
    error: String(error?.message || error),
    gaps: "Macro proxy unavailable; crypto report must lower confidence and avoid macro-driven conclusions.",
  };
}

console.log(JSON.stringify(output, null, 2));
