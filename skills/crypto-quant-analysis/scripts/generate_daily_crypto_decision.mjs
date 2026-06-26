#!/usr/bin/env node

const { execFileSync } = await import("node:child_process");
const fs = await import("node:fs");
const path = await import("node:path");

const ROOT = process.cwd();
const SCRIPT_DIR = path.resolve("skills/crypto-quant-analysis/scripts");
const OUT_DIR = path.resolve("reports/crypto/daily");
const MAJORS = ["BTC", "ETH", "SOL"];

function runJson(script, args = [], timeoutMs = 120000) {
  const stdout = execFileSync("node", [path.join(SCRIPT_DIR, script), ...args], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 80 * 1024 * 1024,
    timeout: timeoutMs,
  });
  return JSON.parse(stdout);
}

function bjtNow(date = new Date()) {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

function mdTable(rows, columns) {
  const header = `| ${columns.map((col) => col.label).join(" |")} |`;
  const sep = `| ${columns.map(() => "---").join(" |")} |`;
  const body = rows.map((row) => `| ${columns.map((col) => String(col.value(row) ?? "")).join(" |")} |`);
  return [header, sep, ...body].join("\n");
}

function n(value, digits = 2) {
  if (!Number.isFinite(Number(value))) return "缺失";
  const num = Number(value);
  const useDigits = Math.abs(num) >= 1000 && digits === 2 ? 0 : digits;
  return num.toLocaleString("en-US", {
    maximumFractionDigits: useDigits,
    minimumFractionDigits: useDigits,
  });
}

function pct(value, digits = 2) {
  if (!Number.isFinite(Number(value))) return "缺失";
  const num = Number(value);
  if (Math.abs(num) > 0 && Math.abs(num) < 0.1) return num > 0 ? "+<0.1%" : "-<0.1%";
  return `${num >= 0 ? "+" : ""}${num.toFixed(digits)}%`;
}

function rate(value) {
  if (!Number.isFinite(Number(value))) return "缺失";
  return pct(Number(value) * 100, 3);
}

function usd(value) {
  if (!Number.isFinite(Number(value))) return "缺失";
  const num = Number(value);
  if (Math.abs(num) >= 1e9) return `$${formatScaled(num / 1e9)}B`;
  if (Math.abs(num) >= 1e6) return `$${formatScaled(num / 1e6)}M`;
  return `$${n(num, 0)}`;
}

function base(value, digits = 2) {
  if (!Number.isFinite(Number(value))) return "缺失";
  const num = Number(value);
  if (Math.abs(num) >= 1e6) return `${formatScaled(num / 1e6)}M`;
  if (Math.abs(num) >= 1e3) return `${formatScaled(num / 1e3)}K`;
  return n(num, digits);
}

function formatScaled(value) {
  const abs = Math.abs(Number(value));
  const digits = abs >= 100 ? 0 : abs >= 10 ? 1 : 2;
  return Number(value).toLocaleString("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

function whole(value) {
  if (!Number.isFinite(Number(value))) return "缺失";
  return Math.round(Number(value)).toLocaleString("en-US");
}

function compactUsd(value) {
  if (!Number.isFinite(Number(value))) return "缺失";
  const num = Number(value);
  if (Math.abs(num) >= 1e9) return `$${formatScaled(num / 1e9)}B`;
  if (Math.abs(num) >= 1e6) return `$${formatScaled(num / 1e6)}M`;
  if (Math.abs(num) >= 1e3) return `$${formatScaled(num / 1e3)}K`;
  return `$${whole(num)}`;
}

function compactBase(value) {
  if (!Number.isFinite(Number(value))) return "缺失";
  const num = Number(value);
  if (Math.abs(num) >= 1e6) return `${formatScaled(num / 1e6)}M`;
  if (Math.abs(num) >= 1e3) return `${formatScaled(num / 1e3)}K`;
  return whole(num);
}

function compactPct(value, signed = true) {
  if (!Number.isFinite(Number(value))) return "缺失";
  const num = Number(value);
  if (Math.abs(num) > 0 && Math.abs(num) < 0.1) return `${signed && num > 0 ? "+" : ""}<0.1%`;
  const digits = Math.abs(num) >= 10 ? 1 : 2;
  return `${signed && num > 0 ? "+" : ""}${num.toFixed(digits)}%`;
}

function compactRate(value) {
  if (!Number.isFinite(Number(value))) return "缺失";
  return compactPct(Number(value) * 100, false);
}

function latestCandle(snapshot, tf) {
  return snapshot?.klines?.[tf]?.candles?.at(-1) || null;
}

function vwapFromRows(rows) {
  let pv = 0;
  let vol = 0;
  for (const row of rows || []) {
    const close = Number(row.c);
    const volume = Number(row.v);
    if (Number.isFinite(close) && Number.isFinite(volume)) {
      pv += close * volume;
      vol += volume;
    }
  }
  return vol > 0 ? pv / vol : null;
}

function candleSummary(snapshot, tf) {
  const candle = latestCandle(snapshot, tf);
  if (!candle) return { text: "缺失", close: null, open: null, high: null, low: null, volume: null };
  const open = Number(candle.o);
  const close = Number(candle.c);
  const high = Number(candle.h);
  const low = Number(candle.l);
  const volume = Number(candle.v);
  const vwap = snapshot?.klines?.[tf]?.vwap;
  const body = close >= open ? "阳线" : "阴线";
  const pos = Number.isFinite(vwap) ? (close >= vwap ? `VWAP上方，VWAP ${n(vwap)}` : `VWAP下方，VWAP ${n(vwap)}`) : "VWAP缺失";
  return {
    open,
    close,
    high,
    low,
    volume,
    vwap,
    text: `${body} O:${n(open)} H:${n(high)} L:${n(low)} C:${n(close)}，${pos}`,
  };
}

function windowStats(snapshot, days) {
  const rows = (snapshot?.klines?.["1d"]?.candles || []).slice(-days);
  if (!rows.length) return null;
  const highs = rows.map((row) => Number(row.h)).filter(Number.isFinite);
  const lows = rows.map((row) => Number(row.l)).filter(Number.isFinite);
  const first = rows[0];
  const latest = rows.at(-1);
  const start = Number(first.o);
  const close = Number(latest.c);
  const high = highs.length ? Math.max(...highs) : null;
  const low = lows.length ? Math.min(...lows) : null;
  const changePct = Number.isFinite(start) && start !== 0 && Number.isFinite(close) ? (close / start - 1) * 100 : null;
  const rangePos =
    Number.isFinite(close) && Number.isFinite(high) && Number.isFinite(low) && high !== low
      ? ((close - low) / (high - low)) * 100
      : null;
  return {
    days,
    high,
    low,
    close,
    changePct,
    rangePos,
    vwap: vwapFromRows(rows),
  };
}

function trendContext(snapshot) {
  const price = Number(snapshot?.realtime?.markPx);
  const seven = windowStats(snapshot, 7);
  const thirty = windowStats(snapshot, 30);
  let regime = "缺失/未验证";
  if (seven && thirty && Number.isFinite(price)) {
    if (price > seven.vwap && price > thirty.vwap && seven.changePct > 0) {
      regime = "短中期共振修复";
    } else if (price > seven.vwap && price < thirty.vwap) {
      regime = "短线反弹，但仍低于30d成本区";
    } else if (price < seven.vwap && price < thirty.vwap) {
      regime = "短中期仍弱";
    } else {
      regime = "中期震荡修复";
    }
  }
  return { seven, thirty, regime };
}

function supportResistance(snapshot) {
  const h1 = snapshot?.klines?.["1h"]?.candles || [];
  const h4 = snapshot?.klines?.["4h"]?.candles || [];
  const recent = [...h1.slice(-12), ...h4.slice(-6)];
  const lows = recent.map((row) => Number(row.l)).filter(Number.isFinite).sort((a, b) => a - b);
  const highs = recent.map((row) => Number(row.h)).filter(Number.isFinite).sort((a, b) => b - a);
  const price = Number(snapshot?.realtime?.markPx);
  const supports = lows.filter((x) => x < price).slice(-3);
  const resistances = highs.filter((x) => x > price).slice(0, 3).sort((a, b) => a - b);
  return {
    support: supports.length ? `${n(Math.min(...supports))}-${n(Math.max(...supports))}` : "缺失",
    resistance: resistances.length ? `${n(Math.min(...resistances))}-${n(Math.max(...resistances))}` : "缺失",
  };
}

function coinalyzeLatest(snapshot, key) {
  const data = snapshot?.externalDerivatives?.coinalyze?.[key];
  if (!Array.isArray(data)) return null;
  return data[0]?.history?.at(-1) || null;
}

function coinalyzeChange(snapshot, key) {
  const data = snapshot?.externalDerivatives?.coinalyze?.[key];
  const rows = Array.isArray(data) ? data[0]?.history || [] : [];
  if (rows.length < 2) return null;
  return { first: rows[0], latest: rows.at(-1) };
}

function coinalyzeOiPct(snapshot) {
  const change = coinalyzeChange(snapshot, "openInterestHistory");
  if (!change?.latest?.c || !change?.first?.o) return null;
  return (Number(change.latest.c) / Number(change.first.o) - 1) * 100;
}

function liquidationTotals(snapshot) {
  const data = snapshot?.externalDerivatives?.coinalyze?.liquidationHistory;
  const rows = Array.isArray(data) ? data[0]?.history || [] : [];
  const last6 = rows.slice(-6);
  const longs = last6.reduce((sum, row) => sum + Number(row.l || 0), 0);
  const shorts = last6.reduce((sum, row) => sum + Number(row.s || 0), 0);
  return { longs, shorts, rows: last6 };
}

function orderBookSummary(snapshot) {
  const book = snapshot?.orderBook;
  if (!book) return { text: "缺失/未验证", skew: null };
  const bid = Number(book.bidDepthTop20);
  const ask = Number(book.askDepthTop20);
  const skew = Number.isFinite(bid) && Number.isFinite(ask) && ask > 0 ? bid / ask : null;
  const tilt =
    Number.isFinite(skew) && skew > 1.25
      ? "买盘更厚，短线回踩承接较好"
      : Number.isFinite(skew) && skew < 0.8
        ? "卖盘更厚，反弹上方抛压更明显"
        : "买卖盘接近平衡";
  return {
    skew,
    bestBid: Number(book.bestBid),
    bestAsk: Number(book.bestAsk),
    spread: Number(book.spread),
    spreadPct: Number(book.spreadPct),
    bidDepthTop20: bid,
    askDepthTop20: ask,
    text: `bid ${n(book.bestBid)} / ask ${n(book.bestAsk)}，spread ${n(book.spread, 4)} (${n(book.spreadPct, 4)}%)，top20 bid ${base(bid)} / ask ${base(ask)}，${tilt}`,
  };
}

function positionPressure(snapshot, price, longShort, liq) {
  const oiBase = Number(snapshot?.realtime?.openInterestBase);
  const oiNotionalUsd = Number.isFinite(oiBase) && Number.isFinite(price) ? oiBase * price : null;
  const longPct = Number(longShort?.l);
  const shortPct = Number(longShort?.s);
  const hasLongShort =
    Number.isFinite(longPct) &&
    Number.isFinite(shortPct) &&
    longPct > 0 &&
    shortPct > 0 &&
    Math.abs(longPct + shortPct - 100) <= 2;
  const longNotionalUsd = Number.isFinite(oiNotionalUsd) && hasLongShort ? oiNotionalUsd * (longPct / 100) : null;
  const shortNotionalUsd = Number.isFinite(oiNotionalUsd) && hasLongShort ? oiNotionalUsd * (shortPct / 100) : null;
  const longLiqUsd = Number.isFinite(Number(liq?.longs)) && Number.isFinite(price) ? Number(liq.longs) * price : null;
  const shortLiqUsd = Number.isFinite(Number(liq?.shorts)) && Number.isFinite(price) ? Number(liq.shorts) * price : null;
  const longLiqPctOfSide = Number.isFinite(longLiqUsd) && Number.isFinite(longNotionalUsd) && longNotionalUsd > 0 ? (longLiqUsd / longNotionalUsd) * 100 : null;
  const shortLiqPctOfSide = Number.isFinite(shortLiqUsd) && Number.isFinite(shortNotionalUsd) && shortNotionalUsd > 0 ? (shortLiqUsd / shortNotionalUsd) * 100 : null;
  const bands = [10, 25, 50].map((leverage) => ({
    leverage,
    longLiqPx: Number.isFinite(price) ? price * (1 - 1 / leverage) : null,
    shortLiqPx: Number.isFinite(price) ? price * (1 + 1 / leverage) : null,
  }));
  let read = "缺失/未验证：缺少 OI 或多空比，无法估算。";
  if (Number.isFinite(longNotionalUsd) && Number.isFinite(shortNotionalUsd)) {
    if (longNotionalUsd > shortNotionalUsd * 1.25) {
      read = "估算多头存量更大；若跌破支撑/VWAP，潜在多杀空间更值得警惕。";
    } else if (shortNotionalUsd > longNotionalUsd * 1.25) {
      read = "估算空头存量更大；若突破压力位，潜在逼空空间更值得警惕。";
    } else {
      read = "估算多空存量接近，强平方向更依赖突破/跌破触发。";
    }
    if (liq?.shorts > liq?.longs * 2) {
      read += " 近6小时空头强平较多，部分逼空燃料可能已释放。";
    } else if (liq?.longs > liq?.shorts * 2) {
      read += " 近6小时多头强平较多，部分多杀压力可能已释放。";
    }
    if (Number.isFinite(shortLiqPctOfSide) && shortLiqPctOfSide >= 1) {
      read += ` 空头燃料消耗约${compactPct(shortLiqPctOfSide, false)}，追多要更挑位置。`;
    } else if (Number.isFinite(longLiqPctOfSide) && longLiqPctOfSide >= 1) {
      read += ` 多头燃料消耗约${compactPct(longLiqPctOfSide, false)}，追空要更挑位置。`;
    }
  }
  return {
    source: "估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。",
    oiNotionalUsd,
    longNotionalUsd,
    shortNotionalUsd,
    longLiqUsd,
    shortLiqUsd,
    longLiqPctOfSide,
    shortLiqPctOfSide,
    longPct: hasLongShort ? longPct : null,
    shortPct: hasLongShort ? shortPct : null,
    hasLongShort,
    bands,
    read,
  };
}

function trendLine(asset) {
  const seven = asset.trend?.seven;
  const thirty = asset.trend?.thirty;
  const sevenText = seven
    ? `7d ${pct(seven.changePct)}，区间 ${n(seven.low)}-${n(seven.high)}，位置 ${n(seven.rangePos, 1)}%，VWAP ${n(seven.vwap)}`
    : "7d 缺失/未验证";
  const thirtyText = thirty
    ? `30d ${pct(thirty.changePct)}，区间 ${n(thirty.low)}-${n(thirty.high)}，位置 ${n(thirty.rangePos, 1)}%，VWAP ${n(thirty.vwap)}`
    : "30d 缺失/未验证";
  return `${asset.trend?.regime || "缺失/未验证"}；${sevenText}；${thirtyText}`;
}

function gasSummary(snapshots) {
  const gas = snapshots?.ETH?.ethereumGas;
  if (!gas?.gasPriceGwei) return "缺失/未验证";
  const gwei = Number(gas.gasPriceGwei);
  const level = gwei < 5 ? "链上交易很便宜，gas 本身不是风险源" : gwei < 30 ? "gas 正常" : "gas 偏高，链上拥堵可能压制部分 ETH beta";
  return `${n(gwei, 4)} gwei，${level}`;
}

function fearGreedSummary(snapshots) {
  const row = snapshots?.BTC?.sentiment?.fearGreed?.data?.[0] || snapshots?.ETH?.sentiment?.fearGreed?.data?.[0];
  if (!row) return "缺失/未验证";
  return `${row.value} / ${row.value_classification}`;
}

function inferAsset(snapshot) {
  const price = Number(snapshot?.realtime?.markPx);
  const prevDay = Number(snapshot?.realtime?.prevDayPx);
  const chg = Number.isFinite(price) && Number.isFinite(prevDay) ? (price / prevDay - 1) * 100 : null;
  const h1 = candleSummary(snapshot, "1h");
  const h4 = candleSummary(snapshot, "4h");
  const d1 = candleSummary(snapshot, "1d");
  const funding = Number(snapshot?.realtime?.funding);
  const ls = coinalyzeLatest(snapshot, "longShortRatio");
  const oiChange = coinalyzeChange(snapshot, "openInterestHistory");
  const oiPct = coinalyzeOiPct(snapshot);
  const liq = liquidationTotals(snapshot);
  const levels = supportResistance(snapshot);
  const orderBook = orderBookSummary(snapshot);
  const trend = trendContext(snapshot);
  const pressure = positionPressure(snapshot, price, ls, liq);

  let score = 0;
  const reasons = [];
  if (Number.isFinite(chg)) {
    if (chg > 2) {
      score += 1;
      reasons.push("24h 价格走强");
    } else if (chg < -2) {
      score -= 1;
      reasons.push("24h 价格偏弱");
    }
  }
  if (Number.isFinite(h1.vwap) && Number.isFinite(price)) {
    if (price > h1.vwap) {
      score += 1;
      reasons.push("价格站在1h VWAP上方");
    } else {
      score -= 1;
      reasons.push("价格低于1h VWAP");
    }
  }
  if (Number.isFinite(h4.vwap) && Number.isFinite(price)) {
    if (price > h4.vwap) {
      score += 1;
      reasons.push("价格站在4h VWAP上方");
    } else {
      score -= 1;
      reasons.push("价格低于4h VWAP");
    }
  }
  if (trend.thirty && Number.isFinite(price) && Number.isFinite(trend.thirty.vwap)) {
    if (price < trend.thirty.vwap) {
      score -= 0.75;
      reasons.push("价格仍低于30d日线VWAP，中期反弹尚未确认反转");
    } else {
      score += 0.75;
      reasons.push("价格站上30d日线VWAP，中期修复质量更好");
    }
  }
  if (trend.seven && Number.isFinite(trend.seven.changePct)) {
    if (trend.seven.changePct > 5 && Number.isFinite(trend.seven.rangePos) && trend.seven.rangePos > 75) {
      score -= 0.5;
      reasons.push("7d涨幅较大且接近区间上沿，追多性价比下降");
    } else if (trend.seven.changePct < -5 && Number.isFinite(trend.seven.rangePos) && trend.seven.rangePos < 30) {
      score -= 0.5;
      reasons.push("7d趋势仍弱，反弹需要更多确认");
    }
  }
  if (Number.isFinite(funding) && funding > 0.00005) {
    score -= 1;
    reasons.push("funding偏高，追多成本上升");
  }
  if (ls?.l > 65) {
    score -= 1;
    reasons.push(`Coinalyze多头占比${n(ls.l)}%，多头较拥挤`);
  } else if (ls?.s > 55) {
    score += 1;
    reasons.push(`Coinalyze空头占比${n(ls.s)}%，存在逼空燃料`);
  }
  if (Number.isFinite(oiPct)) {
    if (oiPct > 2 && Number.isFinite(chg) && chg > 0) {
      score += 1;
      reasons.push(`Coinalyze OI 24h约${pct(oiPct)}，上涨伴随杠杆流入`);
    } else if (oiPct > 2 && Number.isFinite(chg) && chg <= 0) {
      score -= 1;
      reasons.push(`Coinalyze OI 24h约${pct(oiPct)}但价格不强，杠杆堆积风险`);
    } else if (oiPct < -2) {
      reasons.push(`Coinalyze OI 24h约${pct(oiPct)}，偏去杠杆`);
    }
  }
  if (liq.shorts > liq.longs * 2) {
    score -= 0.5;
    reasons.push("近6小时空头强平较多，短线追多可能已释放一部分");
  } else if (liq.longs > liq.shorts * 2) {
    score += 0.5;
    reasons.push("近6小时多头强平较多，短线下跌压力可能部分释放");
  }

  const bias = score >= 2 ? "偏多" : score <= -2 ? "偏空" : "震荡";
  const strategy =
    bias === "偏多"
      ? "回踩支撑后做多，不追高"
      : bias === "偏空"
        ? "反弹压力失败后做空，不在支撑位追空"
        : "区间交易或等待突破/跌破确认";

  return {
    symbol: snapshot.symbol,
    price,
    change24hPct: chg,
    h1,
    h4,
    d1,
    funding,
    premium: Number(snapshot?.realtime?.premium),
    dayNtlVlmUsd: Number(snapshot?.realtime?.dayNtlVlmUsd),
    dayBaseVlm: Number(snapshot?.realtime?.dayBaseVlm),
    openInterestBase: Number(snapshot?.realtime?.openInterestBase),
    orderBook,
    trend,
    pressure,
    longShort: ls,
    oiChange,
    oiPct,
    liq,
    levels,
    score,
    bias,
    strategy,
    reasons,
  };
}

function riskBudget(marketBias, macroRegime) {
  if (macroRegime === "risk-off") return "总仓位 0%-15%，单笔 2%-5%，优先减风险或等反弹失败。";
  if (marketBias === "偏多") return "总仓位 20%-35%，单笔 5%-10%，只在回踩确认后加仓。";
  if (marketBias === "偏空") return "总仓位 15%-30%，单笔 5%-8%，做空只在压力失败或跌破反抽失败后执行。";
  return "总仓位 0%-20%，单笔 2%-5%，中间位置不开重仓。";
}

function consensus(assets, macro) {
  const total = assets.reduce((sum, item) => sum + item.score, 0);
  let bias = total >= 4 ? "偏多" : total <= -3 ? "偏空" : "震荡";
  if (macro?.riskProxy?.regime === "risk-off" && bias === "偏多") bias = "震荡偏多但降仓";
  if (macro?.riskProxy?.regime === "risk-on" && bias === "偏空") bias = "震荡偏空但不追空";
  return {
    score: total,
    bias,
    main:
      bias.includes("偏多")
        ? "主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。"
        : bias.includes("偏空")
          ? "主策略是反弹做空弱势币，避免在刚强平后追空。"
          : "主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。",
  };
}

function summarizeNews(news, hotSymbols) {
  const articles = news?.articles || [];
  const major = articles.filter((article) => article.matchedKeywords?.some((k) => ["BTC", "ETH", "SOL"].includes(k))).slice(0, 5);
  const hot = articles.filter((article) => article.matchedKeywords?.some((k) => hotSymbols.includes(k))).slice(0, 5);
  const macro = articles.filter((article) => article.narrativeTags?.includes("macro")).slice(0, 3);
  return { major, hot, macro };
}

function lineForArticle(article) {
  return `- ${article.source}: ${article.title} (${article.publishedAt || "时间缺失"})`;
}

function hotCandidates(hot) {
  return (hot?.top || []).slice(0, 8).map((row) => ({
    symbol: row.symbol,
    score: row.score,
    change24hPct: row.change24hPct,
    volume: row.dayNtlVlmUsd,
    oi: row.openInterestUsd,
    funding: row.funding,
    treatment: row.treatment,
  }));
}

function buildReportContext({ snapshots, hot, news, macro }) {
  const assets = MAJORS.map((symbol) => inferAsset(snapshots[symbol]));
  const view = consensus(assets, macro);
  const hotRows = hotCandidates(hot);
  const newsSummary = summarizeNews(news, hotRows.map((row) => row.symbol));
  const macroRegime = macro?.riskProxy?.regime || "unavailable";
  const risk = riskBudget(view.bias, macroRegime);
  const fearGreed = fearGreedSummary(snapshots);
  const ethGas = gasSummary(snapshots);
  return { snapshots, hot, news, macro, assets, view, hotRows, newsSummary, macroRegime, risk, fearGreed, ethGas };
}

function renderReport(context) {
  const { snapshots, assets, view, hotRows, newsSummary, macro, macroRegime, risk, fearGreed, ethGas } = context;

  const lines = [];
  lines.push(`# 每日加密交易决策`);
  lines.push("");
  lines.push(`生成时间：${bjtNow()} 北京时间`);
  lines.push(`覆盖资产：BTC / ETH / SOL / 热门永续候选`);
  lines.push("");
  lines.push(`## 1. 总判断`);
  lines.push("");
  lines.push(`- 市场状态：${view.bias}`);
  lines.push(`- 今日主策略：${view.main}`);
  lines.push(`- 风险偏好：${macroRegime}。${macro?.riskProxy?.interpretation || "宏观代理缺失，降低宏观置信度。"}`);
  lines.push(`- 情绪代理：Fear & Greed ${fearGreed}；ETH gas ${ethGas}。`);
  lines.push(`- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。`);
  lines.push(`- 仓位建议：${risk}`);
  lines.push(`- 置信度：中等偏低到中等。原因是核心合约数据已接入，但 true liquidation heatmap、ETF flow、社交情绪仍缺。`);
  lines.push("");
  lines.push(`我的猜测：当前更像“风险事件缓和后的修复行情”，不是无脑牛市启动。若 BTC 能稳在 1h/4h VWAP 上方，短线回踩多比追空更顺；但多头占比偏高的币不能追高。`);
  lines.push("");

  lines.push(`## 2. 数据缺口`);
  lines.push("");
  lines.push(`- 强平热力图：缺失/未验证；当前只使用 Coinalyze 已发生强平流。`);
  lines.push(`- ETF flows：缺失/未验证；还未接稳定 BTC/ETH ETF flow API。`);
  lines.push(`- ETH 社交情绪：缺失/未验证；当前只有 RSS 新闻叙事和 Fear & Greed。`);
  lines.push(`- 宏观代理：${macroRegime === "unavailable" ? "当前不可用，不能用它放大结论。" : "已用 ETF 代理行情判断，但不是官方 DXY/收益率/VIX。"}`);
  lines.push("");

  lines.push(`## 3. 宏观与消息面`);
  lines.push("");
  lines.push(`宏观/新闻结论：${newsSummary.macro.length ? "新闻层显示宏观/地缘事件仍是 BTC 反弹的重要催化，尤其是伊朗/霍尔木兹相关风险缓和叙事。" : "RSS 未抓到足够明确的宏观催化，今日更多依赖市场结构。"}`);
  lines.push(`预测市场入口：${snapshots.BTC?.predictionMarkets?.polymarketGamma || "缺失/未验证"}。`);
  lines.push("");
  lines.push(`主要新闻：`);
  lines.push(...(newsSummary.major.length ? newsSummary.major.map(lineForArticle) : ["- 缺失/未验证：未抓到足够资产相关新闻。"]));
  lines.push("");
  lines.push(`交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。`);
  lines.push("");

  for (const [assetIndex, asset] of assets.entries()) {
    lines.push(`## ${assetIndex + 4}. ${asset.symbol}`);
    lines.push("");
    lines.push(`- 实时价格：${n(asset.price)}，24h 相对 prevDay：${pct(asset.change24hPct)}`);
    lines.push(`- 成交/持仓：24h notional volume ${usd(asset.dayNtlVlmUsd)}，base volume ${base(asset.dayBaseVlm)} ${asset.symbol}，Hyperliquid OI ${base(asset.openInterestBase)} ${asset.symbol}；Coinalyze OI 24h ${Number.isFinite(asset.oiPct) ? pct(asset.oiPct) : "缺失/未验证"}。`);
    lines.push(`- 7d/30d背景：${trendLine(asset)}`);
    lines.push(`- 1h结构：${asset.h1.text}`);
    lines.push(`- 4h结构：${asset.h4.text}`);
    lines.push(`- 1d结构：${asset.d1.text}`);
    lines.push(`- funding/premium：funding ${rate(asset.funding)}，premium ${rate(asset.premium)}`);
    lines.push(`- Coinalyze long/short：${asset.longShort ? `ratio ${n(asset.longShort.r, 4)}，long ${n(asset.longShort.l)}%，short ${n(asset.longShort.s)}%` : "缺失/未验证"}`);
    lines.push(`- 估算多/空持仓：总 OI ${usd(asset.pressure?.oiNotionalUsd)}；估多仓 ${usd(asset.pressure?.longNotionalUsd)}；估空仓 ${usd(asset.pressure?.shortNotionalUsd)}。${asset.pressure?.source}`);
    lines.push(`- 估算强平价带：10x 多/空 ${n(asset.pressure?.bands?.[0]?.longLiqPx)} / ${n(asset.pressure?.bands?.[0]?.shortLiqPx)}；25x 多/空 ${n(asset.pressure?.bands?.[1]?.longLiqPx)} / ${n(asset.pressure?.bands?.[1]?.shortLiqPx)}；50x 多/空 ${n(asset.pressure?.bands?.[2]?.longLiqPx)} / ${n(asset.pressure?.bands?.[2]?.shortLiqPx)}。未计维护保证金、真实入场分布和逐仓/全仓差异。`);
    lines.push(`- 近6小时强平流：long liq ${n(asset.liq.longs, 4)}，short liq ${n(asset.liq.shorts, 4)}。这是已发生强平流，不是热力图。`);
    lines.push(`- 盘口深度/spread：${asset.orderBook.text}`);
    lines.push(`- 支撑：${asset.levels.support}`);
    lines.push(`- 压力：${asset.levels.resistance}`);
    lines.push(`- 判断：${asset.bias}。${asset.reasons.slice(0, 6).join("；") || "信号不足，等待确认。"}`);
    lines.push(`- 策略：${asset.strategy}`);
    lines.push(`- 触发条件：${asset.bias === "偏多" ? `回踩 ${asset.levels.support} 不破，1h 重新站回 VWAP 后试多。` : asset.bias === "偏空" ? `反弹 ${asset.levels.resistance} 失败，1h 收不回 VWAP 后试空。` : `突破 ${asset.levels.resistance} 或跌破 ${asset.levels.support} 后等反抽/回踩确认。`}`);
    lines.push(`- 失效条件：${asset.bias === "偏多" ? `跌破 ${asset.levels.support} 且 OI 上升、价格不收回。` : asset.bias === "偏空" ? `放量站上 ${asset.levels.resistance} 且 short liquidation 扩大。` : `区间上下沿被放量突破。`}`);
    lines.push("");
  }

  lines.push(`## 7. 热门叙事币`);
  lines.push("");
  lines.push(mdTable(hotRows, [
    { label: "币种", value: (row) => row.symbol },
    { label: "热度分", value: (row) => n(row.score, 1) },
    { label: "24h", value: (row) => pct(row.change24hPct) },
    { label: "成交额", value: (row) => usd(row.volume) },
    { label: "OI", value: (row) => usd(row.oi) },
    { label: "funding", value: (row) => rate(row.funding) },
    { label: "处理", value: (row) => row.treatment },
  ]));
  lines.push("");
  lines.push(`热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。`);
  if (newsSummary.hot.length) {
    lines.push("");
    lines.push(`热门币相关新闻：`);
    lines.push(...newsSummary.hot.map(lineForArticle));
  }
  lines.push("");

  lines.push(`## 8. 仓位与执行`);
  lines.push("");
  lines.push(`- 今日总仓位上限：${risk}`);
  lines.push(`- 主交易：优先 BTC/ETH/SOL，不优先小币追涨。`);
  lines.push(`- 首仓：A 级机会 5%-10%，B 级 2%-5%；没有回踩/反抽确认不进。`);
  lines.push(`- 加仓：只在盈利方向加仓；突破回踩确认或跌破反抽失败才加。`);
  lines.push(`- 止损：放在结构失效位外，不用“感觉”扛单。`);
  lines.push(`- 止盈：第一目标在近端支撑/压力，第二目标看 VWAP 延伸和已发生强平流释放方向。`);
  lines.push(`- 暂停交易条件：宏观代理不可用且新闻出现重大突发、盘口 spread 异常、funding/OI 极端但价格横盘。`);
  lines.push("");

  lines.push(`## 9. 触发清单`);
  lines.push("");
  lines.push(`- 做多触发：BTC 稳在 1h/4h VWAP 上方，ETH/SOL 回踩不破，Coinalyze OI 不出现“价格横盘但杠杆猛增”的坏组合。`);
  lines.push(`- 做空触发：主流币冲压力失败，1h 收不回 VWAP，且 long ratio 偏高或 OI 堆积。`);
  lines.push(`- 降仓触发：BTC 跌回关键支撑下方，RSS 出现监管/安全/宏观冲击，或强平流显示多头连续释放但价格不反弹。`);
  lines.push(`- 重新评估触发：true heatmap 接入、ETF flow 接入、或 BTC 突破/跌破日报关键位。`);
  lines.push("");

  return lines.join("\n");
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function tag(text, tone = "neutral") {
  return `<span class="tag ${tone}">${esc(text)}</span>`;
}

function biasTone(value) {
  if (String(value).includes("偏多")) return "good";
  if (String(value).includes("偏空")) return "bad";
  if (String(value).includes("震荡")) return "watch";
  return "neutral";
}

function pctTone(value) {
  if (!Number.isFinite(Number(value))) return "neutral";
  if (Number(value) > 0) return "good";
  if (Number(value) < 0) return "bad";
  return "neutral";
}

function riskTags(asset) {
  const tags = [];
  if (asset.trend?.thirty && Number.isFinite(asset.price) && Number.isFinite(asset.trend.thirty.vwap) && asset.price < asset.trend.thirty.vwap) {
    tags.push(tag("低于30d VWAP", "watch"));
  }
  if (asset.trend?.seven?.rangePos > 85) tags.push(tag("7d高位", "watch"));
  if (asset.longShort?.l > 65) tags.push(tag("多头拥挤", "bad"));
  if (asset.oiPct > 2) tags.push(tag("OI上升", "watch"));
  if (asset.orderBook?.skew > 1.25) tags.push(tag("买盘厚", "good"));
  if (asset.orderBook?.skew < 0.8) tags.push(tag("卖盘厚", "bad"));
  return tags.length ? tags.join(" ") : tag("无极端项", "neutral");
}

function htmlTable(headers, rows) {
  return `<table>
    <thead><tr>${headers.map((header) => `<th>${esc(header)}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
  </table>`;
}

function renderHtmlReport(context) {
  const { snapshots, assets, view, hotRows, newsSummary, macro, macroRegime, risk, fearGreed, ethGas } = context;
  const generated = bjtNow();
  const prediction = snapshots.BTC?.predictionMarkets?.polymarketGamma || "缺失/未验证";
  const macroText = newsSummary.macro.length
    ? "新闻层显示宏观/地缘事件仍是 BTC 反弹的重要催化，尤其是伊朗/霍尔木兹相关风险缓和叙事。"
    : "RSS 未抓到足够明确的宏观催化，今日更多依赖市场结构。";
  const tradeMeaning =
    "新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。";

  const summaryRows = [
    ["市场状态", tag(view.bias, biasTone(view.bias)), "综合 BTC/ETH/SOL 短线结构、7d/30d背景、OI、强平流、宏观代理"],
    ["今日主策略", esc(view.main), "短线执行看 1h/4h；仓位上限受 30d 背景压制"],
    ["风险偏好", tag(macroRegime, macroRegime === "risk-on" ? "good" : macroRegime === "risk-off" ? "bad" : "watch"), esc(macro?.riskProxy?.interpretation || "宏观代理缺失，降低宏观置信度。")],
    ["情绪/链上", esc(`Fear & Greed ${fearGreed}；ETH gas ${ethGas}`), "Fear & Greed 是市场代理，ETH 社交情绪仍未接稳定源"],
    ["仓位建议", tag(risk, "watch"), "总仓与单笔都按信号质量动态调整"],
    ["置信度", tag("中等偏低到中等", "watch"), "核心合约数据已接入；true heatmap、ETF flow、社交情绪仍缺"],
  ];

  const gapRows = [
    ["强平热力图", tag("缺失/未验证", "bad"), "当前只使用 Coinalyze 已发生强平流，不使用伪 heatmap。"],
    ["ETF flows", tag("缺失/未验证", "bad"), "还未接稳定 BTC/ETH ETF flow API。"],
    ["ETH 社交情绪", tag("缺失/未验证", "bad"), "当前只有 RSS 新闻叙事和 Fear & Greed。"],
    ["宏观代理", tag(macroRegime === "unavailable" ? "缺失/未验证" : "已接代理", macroRegime === "unavailable" ? "bad" : "watch"), macroRegime === "unavailable" ? "当前不可用，不能用它放大结论。" : "已用 ETF 代理行情判断，但不是官方 DXY/收益率/VIX。"],
  ];

  const assetOverviewRows = assets.map((asset) => [
    `<strong>${esc(asset.symbol)}</strong>`,
    esc(whole(asset.price)),
    `<span class="${pctTone(asset.change24hPct)}">${esc(compactPct(asset.change24hPct))}</span>`,
    tag(asset.bias, biasTone(asset.bias)),
    tag(asset.trend?.regime || "缺失", asset.trend?.regime?.includes("低于30d") ? "watch" : "neutral"),
    `<span class="${pctTone(asset.trend?.seven?.changePct)}">${esc(compactPct(asset.trend?.seven?.changePct))}</span>`,
    esc(compactPct(asset.trend?.seven?.rangePos, false)),
    `<span class="${pctTone(asset.trend?.thirty?.changePct)}">${esc(compactPct(asset.trend?.thirty?.changePct))}</span>`,
    esc(whole(asset.trend?.thirty?.vwap)),
    esc(compactUsd(asset.dayNtlVlmUsd)),
    esc(`${compactBase(asset.openInterestBase)} ${asset.symbol}`),
    `<span class="${pctTone(asset.oiPct)}">${esc(Number.isFinite(asset.oiPct) ? compactPct(asset.oiPct) : "缺失")}</span>`,
    esc(asset.longShort ? `${n(asset.longShort.r, 1)} / ${compactPct(asset.longShort.l, false)}L` : "缺失"),
    esc(`${compactBase(asset.liq.longs)} / ${compactBase(asset.liq.shorts)}`),
    esc(whole(asset.orderBook.bestBid)),
    esc(whole(asset.orderBook.bestAsk)),
    esc(`${n(asset.orderBook.spread, 4)} (${compactPct(asset.orderBook.spreadPct, false)})`),
    esc(compactBase(asset.orderBook.bidDepthTop20)),
    esc(compactBase(asset.orderBook.askDepthTop20)),
    riskTags(asset),
    esc(asset.strategy),
  ]);

  const pressureRows = assets.map((asset) => {
    const band = (leverage) => asset.pressure?.bands?.find((row) => row.leverage === leverage) || {};
    return [
      `<strong>${esc(asset.symbol)}</strong>`,
      esc(compactUsd(asset.pressure?.oiNotionalUsd)),
      esc(asset.pressure?.hasLongShort ? `${compactUsd(asset.pressure?.longNotionalUsd)} (${compactPct(asset.pressure?.longPct, false)})` : "缺失/未验证"),
      esc(asset.pressure?.hasLongShort ? `${compactUsd(asset.pressure?.shortNotionalUsd)} (${compactPct(asset.pressure?.shortPct, false)})` : "缺失/未验证"),
      esc(asset.pressure?.hasLongShort ? `${compactUsd(asset.pressure?.longLiqUsd)} (${compactPct(asset.pressure?.longLiqPctOfSide, false)})` : "缺失/未验证"),
      esc(asset.pressure?.hasLongShort ? `${compactUsd(asset.pressure?.shortLiqUsd)} (${compactPct(asset.pressure?.shortLiqPctOfSide, false)})` : "缺失/未验证"),
      esc(`${whole(band(10).longLiqPx)} / ${whole(band(10).shortLiqPx)}`),
      esc(`${whole(band(25).longLiqPx)} / ${whole(band(25).shortLiqPx)}`),
      esc(`${whole(band(50).longLiqPx)} / ${whole(band(50).shortLiqPx)}`),
      asset.pressure?.read?.includes("多头存量更大")
        ? tag(asset.pressure.read, "watch")
        : asset.pressure?.read?.includes("空头存量更大")
          ? tag(asset.pressure.read, "info")
          : esc(asset.pressure?.read || "缺失/未验证"),
    ];
  });

  const assetDetailBlocks = assets
    .map((asset) => {
      const detailRows = [
        ["实时价格", esc(`${whole(asset.price)}，24h ${compactPct(asset.change24hPct)}`)],
        ["成交/持仓", esc(`24h notional volume ${compactUsd(asset.dayNtlVlmUsd)}；base volume ${compactBase(asset.dayBaseVlm)} ${asset.symbol}；Hyperliquid OI ${compactBase(asset.openInterestBase)} ${asset.symbol}；Coinalyze OI 24h ${Number.isFinite(asset.oiPct) ? compactPct(asset.oiPct) : "缺失/未验证"}`)],
        ["7d/30d背景", esc(trendLine(asset))],
        ["1h K线", esc(asset.h1.text)],
        ["4h K线", esc(asset.h4.text)],
        ["1d K线", esc(asset.d1.text)],
        ["funding / premium", esc(`funding ${rate(asset.funding)}；premium ${rate(asset.premium)}`)],
        ["Coinalyze long/short", esc(asset.longShort ? `ratio ${n(asset.longShort.r, 4)}；long ${n(asset.longShort.l)}%；short ${n(asset.longShort.s)}%` : "缺失/未验证")],
        [
          "估算多/空持仓",
          esc(
            asset.pressure?.hasLongShort
              ? `总 OI ${compactUsd(asset.pressure?.oiNotionalUsd)}；估多仓 ${compactUsd(asset.pressure?.longNotionalUsd)}；估空仓 ${compactUsd(asset.pressure?.shortNotionalUsd)}。${asset.pressure?.source}`
              : `总 OI ${compactUsd(asset.pressure?.oiNotionalUsd)}；多空拆分缺失/未验证。缺少有效 long/short ratio 时不能把多仓或空仓写成 0。`
          ),
        ],
        [
          "已强平/存量",
          esc(
            asset.pressure?.hasLongShort
              ? `多平 ${compactUsd(asset.pressure?.longLiqUsd)}，占估多仓 ${compactPct(asset.pressure?.longLiqPctOfSide, false)}；空平 ${compactUsd(asset.pressure?.shortLiqUsd)}，占估空仓 ${compactPct(asset.pressure?.shortLiqPctOfSide, false)}。`
              : `近6小时已发生强平流可看方向，但因多空存量缺失，不能计算“占估多仓/空仓”的比例。`
          ),
        ],
        ["估算强平价带", esc(`10x 多/空 ${whole(asset.pressure?.bands?.[0]?.longLiqPx)} / ${whole(asset.pressure?.bands?.[0]?.shortLiqPx)}；25x 多/空 ${whole(asset.pressure?.bands?.[1]?.longLiqPx)} / ${whole(asset.pressure?.bands?.[1]?.shortLiqPx)}；50x 多/空 ${whole(asset.pressure?.bands?.[2]?.longLiqPx)} / ${whole(asset.pressure?.bands?.[2]?.shortLiqPx)}。未计维护保证金、真实入场分布和逐仓/全仓差异。`)],
        ["近6小时强平流", esc(`long liq ${compactBase(asset.liq.longs)}；short liq ${compactBase(asset.liq.shorts)}。这是已发生强平流，不是热力图。`)],
        ["盘口深度/spread", esc(asset.orderBook.text)],
        ["支撑/压力", esc(`支撑 ${asset.levels.support}；压力 ${asset.levels.resistance}`)],
        ["判断", `${tag(asset.bias, biasTone(asset.bias))} ${esc(asset.reasons.slice(0, 6).join("；") || "信号不足，等待确认。")}`],
        ["策略", esc(asset.strategy)],
        ["触发条件", esc(asset.bias === "偏多" ? `回踩 ${asset.levels.support} 不破，1h 重新站回 VWAP 后试多。` : asset.bias === "偏空" ? `反弹 ${asset.levels.resistance} 失败，1h 收不回 VWAP 后试空。` : `突破 ${asset.levels.resistance} 或跌破 ${asset.levels.support} 后等反抽/回踩确认。`)],
        ["失效条件", esc(asset.bias === "偏多" ? `跌破 ${asset.levels.support} 且 OI 上升、价格不收回。` : asset.bias === "偏空" ? `放量站上 ${asset.levels.resistance} 且 short liquidation 扩大。` : `区间上下沿被放量突破。`)],
      ];
      return `<section><h2>${esc(asset.symbol)} 详细面板</h2>${htmlTable(["项目", "内容"], detailRows)}</section>`;
    })
    .join("");

  const hotRowsHtml = hotRows.map((row) => [
    `<strong>${esc(row.symbol)}</strong>`,
    esc(n(row.score, 1)),
    `<span class="${pctTone(row.change24hPct)}">${esc(pct(row.change24hPct))}</span>`,
    esc(usd(row.volume)),
    esc(usd(row.oi)),
    esc(rate(row.funding)),
    row.treatment.includes("不碰") ? tag(row.treatment, "bad") : tag(row.treatment, "good"),
  ]);

  const newsRows = (newsSummary.major.length ? newsSummary.major : []).map((article) => [
    esc(article.source),
    esc(article.title),
    esc(article.publishedAt || "时间缺失"),
  ]);
  const hotNewsRows = (newsSummary.hot.length ? newsSummary.hot : []).map((article) => [
    esc(article.source),
    esc(article.title),
    esc(article.publishedAt || "时间缺失"),
  ]);

  const executionRows = [
    ["今日总仓位上限", tag(risk, "watch")],
    ["主交易", "优先 BTC/ETH/SOL，不优先小币追涨。"],
    ["首仓", "A 级机会 5%-10%，B 级 2%-5%；没有回踩/反抽确认不进。"],
    ["加仓", "只在盈利方向加仓；突破回踩确认或跌破反抽失败才加。"],
    ["止损", "放在结构失效位外，不用“感觉”扛单。"],
    ["止盈", "第一目标在近端支撑/压力，第二目标看 VWAP 延伸和已发生强平流释放方向。"],
    ["暂停交易条件", "宏观代理不可用且新闻出现重大突发、盘口 spread 异常、funding/OI 极端但价格横盘。"],
  ];

  const triggerRows = [
    ["做多触发", tag("机会", "good"), "BTC 稳在 1h/4h VWAP 上方，ETH/SOL 回踩不破，Coinalyze OI 不出现“价格横盘但杠杆猛增”的坏组合。"],
    ["做空触发", tag("注意", "watch"), "主流币冲压力失败，1h 收不回 VWAP，且 long ratio 偏高或 OI 堆积。"],
    ["降仓触发", tag("风险", "bad"), "BTC 跌回关键支撑下方，RSS 出现监管/安全/宏观冲击，或强平流显示多头连续释放但价格不反弹。"],
    ["重新评估", tag("复盘", "info"), "true heatmap 接入、ETF flow 接入、或 BTC 突破/跌破日报关键位。"],
  ];

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>每日加密交易决策 ${esc(generated)}</title>
  <style>
    :root { color-scheme: light; --bg:#f6f7f9; --panel:#ffffff; --ink:#17202a; --muted:#667085; --line:#d9dee7; --head:#eef2f7; --good:#0f7b45; --good-bg:#e8f6ee; --bad:#b42318; --bad-bg:#fde8e7; --watch:#9a5b00; --watch-bg:#fff4db; --info:#175cd3; --info-bg:#e8f0ff; --neutral:#475467; --neutral-bg:#f2f4f7; }
    * { box-sizing: border-box; }
    body { margin:0; background:var(--bg); color:var(--ink); font:14px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif; }
    main { max-width: 1480px; margin: 0 auto; padding: 28px; }
    header { display:flex; justify-content:space-between; gap:24px; align-items:flex-end; padding: 10px 0 22px; border-bottom: 2px solid var(--line); }
    h1 { margin:0; font-size:28px; letter-spacing:0; }
    h2 { margin:28px 0 10px; font-size:18px; }
    h3 { margin:20px 0 8px; font-size:15px; }
    .sub { color:var(--muted); margin-top:6px; }
    .panel { background:var(--panel); border:1px solid var(--line); border-radius:8px; padding:16px; margin:16px 0; }
    table { width:100%; border-collapse:collapse; background:var(--panel); border:1px solid var(--line); margin:10px 0 20px; }
    th { background:var(--head); color:#344054; text-align:left; font-weight:700; font-size:12px; text-transform:none; }
    th, td { border:1px solid var(--line); padding:9px 10px; vertical-align:top; }
    td { min-width:72px; }
    .table-scroll { overflow-x:auto; }
    .overview-table { min-width:1680px; font-size:12px; }
    .overview-table th, .overview-table td { white-space:nowrap; padding:7px 8px; }
    .overview-table td:nth-last-child(2), .overview-table td:last-child { white-space:normal; min-width:150px; }
    .tag { display:inline-block; border-radius:999px; padding:2px 8px; font-size:12px; font-weight:700; white-space:nowrap; }
    .good { color:var(--good); } .bad { color:var(--bad); } .watch { color:var(--watch); } .info { color:var(--info); }
    .tag.good { background:var(--good-bg); color:var(--good); } .tag.bad { background:var(--bad-bg); color:var(--bad); }
    .tag.watch { background:var(--watch-bg); color:var(--watch); } .tag.info { background:var(--info-bg); color:var(--info); }
    .tag.neutral { background:var(--neutral-bg); color:var(--neutral); }
    .muted { color:var(--muted); }
    .note { border-left:4px solid var(--watch); padding:10px 12px; background:#fffaf0; margin:12px 0 18px; }
    .grid { display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap:16px; }
    @media (max-width: 980px) { main { padding:16px; } header { display:block; } .grid { grid-template-columns:1fr; } table { display:block; overflow-x:auto; white-space:normal; } }
  </style>
</head>
<body>
  <main>
    <header>
      <div>
        <h1>每日加密交易决策</h1>
        <div class="sub">生成时间：${esc(generated)} 北京时间｜覆盖资产：BTC / ETH / SOL / 热门永续候选</div>
      </div>
      <div>${tag(view.bias, biasTone(view.bias))} ${tag(macroRegime, macroRegime === "risk-on" ? "good" : macroRegime === "risk-off" ? "bad" : "watch")}</div>
    </header>
    <section class="panel">
      <h2>总判断</h2>
      ${htmlTable(["项目", "状态", "解释"], summaryRows)}
      <div class="note"><strong>我的猜测：</strong>当前更像“风险事件缓和后的修复行情”，不是无脑牛市启动。若 BTC 能稳在 1h/4h VWAP 上方，短线回踩多比追空更顺；但多头占比偏高的币不能追高。</div>
    </section>
    <section class="panel">
      <h2>数据缺口</h2>
      ${htmlTable(["数据项", "状态", "处理方式"], gapRows)}
    </section>
    <section class="panel">
      <h2>宏观与消息面</h2>
      ${htmlTable(["项目", "内容"], [
        ["宏观/新闻结论", esc(macroText)],
        ["预测市场入口", esc(prediction)],
        ["交易含义", esc(tradeMeaning)],
      ])}
      <h3>主要新闻</h3>
      ${newsRows.length ? htmlTable(["来源", "标题", "时间"], newsRows) : `<p class="muted">缺失/未验证：未抓到足够资产相关新闻。</p>`}
    </section>
    <section class="panel">
      <h2>主流币总览</h2>
      <div class="table-scroll">
        <table class="overview-table">
          <thead><tr>${["币种", "价格", "24h", "判断", "7d/30d状态", "7d", "7d位置", "30d", "30d VWAP", "成交额", "OI", "OI变化", "多空比", "强平L/S", "买一", "卖一", "spread", "top20买", "top20卖", "注意项", "策略"].map((header) => `<th>${esc(header)}</th>`).join("")}</tr></thead>
          <tbody>${assetOverviewRows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </section>
    <section class="panel">
      <h2>持仓与强平空间估算</h2>
      <div class="note">这是代理估算：用 Hyperliquid OI、当前标记价和 Coinalyze 多空占比拆分多/空存量；强平价带按 10x/25x/50x 粗略推算，未计维护保证金、真实开仓价分布、逐仓/全仓差异。它用于判断“哪边燃料更多”，不是精确强平热力图。</div>
      ${htmlTable(["币种", "估算总OI", "估多仓", "估空仓", "多平/估多仓", "空平/估空仓", "10x 多/空强平", "25x 多/空强平", "50x 多/空强平", "解读"], pressureRows)}
    </section>
    ${assetDetailBlocks}
    <section class="panel">
      <h2>热门叙事币</h2>
      ${htmlTable(["币种", "热度分", "24h", "成交额", "OI", "funding", "处理"], hotRowsHtml)}
      <div class="note">热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被标成“不碰”的币，即使涨幅大也先排除。</div>
      ${hotNewsRows.length ? `<h3>热门币相关新闻</h3>${htmlTable(["来源", "标题", "时间"], hotNewsRows)}` : ""}
    </section>
    <section class="panel">
      <h2>仓位与执行</h2>
      ${htmlTable(["项目", "规则"], executionRows)}
    </section>
    <section class="panel">
      <h2>触发清单</h2>
      ${htmlTable(["触发项", "颜色", "条件"], triggerRows)}
    </section>
  </main>
</body>
</html>`;
}

const snapshots = {};
for (const symbol of MAJORS) {
  snapshots[symbol] = runJson("crypto_realtime_snapshot.mjs", [symbol]);
}

const hot = runJson("crypto_hot_perps.mjs", ["12"]);
const hotSymbols = hotCandidates(hot).slice(0, 6).map((row) => row.symbol);
const news = runJson("crypto_news_snapshot.mjs", [...MAJORS, ...hotSymbols]);
const macro = runJson("crypto_macro_snapshot.mjs");

const context = buildReportContext({ snapshots, hot, news, macro });
const markdown = renderReport(context);
const html = renderHtmlReport(context);
fs.mkdirSync(OUT_DIR, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
const reportPath = path.join(OUT_DIR, `${stamp}-crypto-decision.md`);
const htmlPath = path.join(OUT_DIR, `${stamp}-crypto-decision.html`);
fs.writeFileSync(reportPath, markdown);
fs.writeFileSync(path.join(OUT_DIR, "latest.md"), markdown);
fs.writeFileSync(htmlPath, html);
fs.writeFileSync(path.join(OUT_DIR, "latest.html"), html);

console.log(
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      reportPath,
      htmlPath,
      latestPath: path.join(OUT_DIR, "latest.md"),
      latestHtmlPath: path.join(OUT_DIR, "latest.html"),
      symbols: MAJORS,
      hotSymbols,
      note: "Report uses Coinalyze liquidation history as realized liquidation flow; true liquidation heatmap remains unavailable.",
    },
    null,
    2
  )
);
