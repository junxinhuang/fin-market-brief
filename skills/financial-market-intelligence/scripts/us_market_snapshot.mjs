#!/usr/bin/env node

const symbols = process.argv.slice(2);
const targets = symbols.length
  ? symbols
  : ["SPY", "QQQ", "DIA", "IWM", "XLK", "XLF", "XLE", "XLV", "XLY", "GLD"];

const now = new Date();
const from = new Date(now);
from.setDate(from.getDate() - 45);

const fmt = (date) => date.toISOString().slice(0, 10);
const headers = {
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125 Safari/537.36",
  accept: "application/json,text/plain,*/*",
  origin: "https://www.nasdaq.com",
  referer: "https://www.nasdaq.com/",
};

function parseNumber(value) {
  if (value === null || value === undefined) return null;
  const cleaned = String(value).replace(/[$,%\s,]/g, "");
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function pct(fromValue, toValue) {
  if (!fromValue || !toValue) return null;
  return ((toValue / fromValue - 1) * 100).toFixed(2);
}

async function fetchJson(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const text = await res.text();
  return JSON.parse(text);
}

async function fetchSymbol(symbol) {
  const infoUrl = `https://api.nasdaq.com/api/quote/${symbol}/info?assetclass=etf`;
  const histUrl =
    `https://api.nasdaq.com/api/quote/${symbol}/historical?assetclass=etf` +
    `&fromdate=${fmt(from)}&todate=${fmt(now)}&limit=9999`;

  const [infoJson, histJson] = await Promise.all([fetchJson(infoUrl), fetchJson(histUrl)]);
  const primary = infoJson?.data?.primaryData ?? {};
  const rows = histJson?.data?.tradesTable?.rows ?? [];
  const closes = rows
    .map((row) => ({
      date: row.date,
      close: parseNumber(row.close),
      volume: parseNumber(row.volume),
    }))
    .filter((row) => row.close)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const latest = closes.at(-1);
  const previous = closes.at(-2);
  const weekAgo = closes.at(-6) ?? closes[0];
  const monthAgo = closes[0];
  const oneDayPct = previous && latest ? Number(pct(previous.close, latest.close)) : null;
  const last = parseNumber(primary.lastSalePrice) ?? latest?.close ?? null;

  return {
    symbol,
    last,
    netChange: parseNumber(primary.netChange),
    percentChange: parseNumber(primary.percentageChange) ?? oneDayPct,
    volume: parseNumber(primary.volume) ?? latest?.volume ?? null,
    marketStatus: primary.marketStatus ?? null,
    lastTradeTimestamp: primary.lastTradeTimestamp ?? latest?.date ?? null,
    latestHistoricalDate: latest?.date ?? null,
    historyRows: closes.length,
    oneDayPct,
    sevenTradingDayPct: weekAgo && latest ? Number(pct(weekAgo.close, latest.close)) : null,
    thirtyCalendarDayPct: monthAgo && latest ? Number(pct(monthAgo.close, latest.close)) : null,
  };
}

const results = [];
for (const symbol of targets) {
  try {
    results.push(await fetchSymbol(symbol));
  } catch (error) {
    results.push({ symbol, error: error.message });
  }
}

console.log(
  JSON.stringify(
    {
      source: "Nasdaq quote API ETF proxy",
      generatedAt: now.toISOString(),
      symbols: results,
    },
    null,
    2,
  ),
);
