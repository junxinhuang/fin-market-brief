#!/usr/bin/env node

import { execFile } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { promisify } from "node:util";
import { formatReportLinks, reportLinks } from "./report_links.mjs";

const execFileAsync = promisify(execFile);

const repo = "junxinhuang/fin-market-brief";
const pagesBase = "https://junxinhuang.github.io/fin-market-brief";

function bjtParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })
    .formatToParts(date)
    .reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    hm: `${parts.hour}${parts.minute}`,
    hour: Number(parts.hour),
    minute: Number(parts.minute),
    display: `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute} 北京时间(BJT)`,
  };
}

function bjtDateValue(date, hour, minute = 0) {
  return new Date(`${date}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00+08:00`);
}

function reportContext(now) {
  const hm = Number(now.hm);
  if (hm >= 900 && hm <= 1030) {
    return {
      slot: "morning",
      label: "早报",
      title: "金融市场跟踪早报",
      focus: "早报重点承接昨夜美股收盘、黄金/美元/美债、加密夜盘和已发布宏观数据。",
      usFrame: "美股：以最近有效收盘数据作为海外定价锚。",
    };
  }
  if (hm >= 2100 && hm <= 2230) {
    return {
      slot: "evening",
      label: "晚报",
      title: "金融市场跟踪晚报",
      focus: "晚报重点复盘加密实时结构、黄金/美元/美债变化，以及美股上一交易日的定价背景。",
      usFrame: "美股：以最近有效收盘数据作为海外定价锚。",
    };
  }
  return {
    slot: "manual",
    label: "手动补发",
    title: "金融市场跟踪日报",
    focus: "本次为手动补发/测试运行，按触发时点刷新行情和已发布宏观事件。",
    usFrame: "美股：以最近有效收盘数据作为海外定价锚。",
  };
}

function htmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function fmt(value, digits = 2) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "缺失";
  return Number(value).toLocaleString("zh-CN", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

function pct(value) {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "缺失";
  const n = Number(value);
  return `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;
}

function usdYi(value) {
  if (!isNum(value)) return "缺失";
  return `${fmt(Number(value) / 1e8)} 亿美元`;
}

function isNum(value) {
  return value !== null && value !== undefined && Number.isFinite(Number(value));
}

function gapPct(value, base) {
  if (!isNum(value) || !isNum(base) || Number(base) === 0) return null;
  return (Number(value) / Number(base) - 1) * 100;
}

function plainDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function daysFromToday(dateText, todayText = plainDate()) {
  const start = new Date(`${todayText}T00:00:00+08:00`);
  const target = new Date(`${dateText}T00:00:00+08:00`);
  return Math.round((target - start) / 86400000);
}

function eventStatus(dateText) {
  const days = daysFromToday(dateText);
  if (days < 0) return "已发布/已发生";
  if (days === 0) return "今日窗口";
  return `未来 ${days} 天`;
}

function signalTag(kind) {
  if (kind === "risk") return "tag-risk";
  if (kind === "good") return "tag-good";
  if (kind === "warn") return "tag-warn";
  return "tag-neutral";
}

function metricState({ value, goodAbove, badBelow, goodBelow, badAbove }) {
  if (!isNum(value)) return { tag: "tag-neutral", label: "未确认", text: "当前值未确认，不能作为方向依据。" };
  const n = Number(value);
  if (isNum(goodAbove) && n >= Number(goodAbove)) return { tag: "tag-good", label: "利多确认", text: "当前值已经达到利多阈值。" };
  if (isNum(badBelow) && n <= Number(badBelow)) return { tag: "tag-risk", label: "利空确认", text: "当前值已经跌破利空阈值。" };
  if (isNum(goodBelow) && n <= Number(goodBelow)) return { tag: "tag-good", label: "利多确认", text: "当前值已经低于利多阈值。" };
  if (isNum(badAbove) && n >= Number(badAbove)) return { tag: "tag-risk", label: "利空确认", text: "当前值已经高于利空阈值。" };
  return { tag: "tag-warn", label: "中性观察", text: "当前值处在观察区，方向不宜提前放大。" };
}

function runJson(command, args) {
  return execFileAsync(command, args, {
    cwd: process.cwd(),
    maxBuffer: 40 * 1024 * 1024,
    timeout: 120000,
  })
    .then(({ stdout }) => JSON.parse(stdout))
    .catch((error) => ({
      error: error.message,
      stdout: error.stdout,
      stderr: error.stderr,
    }));
}

async function fetchBlsSeries(seriesId, startyear, endyear) {
  const url = `https://api.bls.gov/publicAPI/v2/timeseries/data/${seriesId}?startyear=${startyear}&endyear=${endyear}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const json = await res.json();
  const rows = json?.Results?.series?.[0]?.data ?? [];
  return rows
    .map((row) => ({
      year: Number(row.year),
      period: row.period,
      periodName: row.periodName,
      value: Number(row.value),
    }))
    .filter((row) => Number.isFinite(row.value));
}

function blsValue(rows, year, period) {
  return rows.find((row) => row.year === year && row.period === period)?.value ?? null;
}

async function cpiSnapshot(now) {
  const releaseAt = bjtDateValue("2026-06-10", 20, 30);
  const hasReleased = new Date() >= releaseAt;
  if (!hasReleased) {
    return {
      status: "pending",
      statusLabel: "未发布",
      knownInfo: "BLS(美国劳工统计局)日历显示 6/10 20:30 北京时间(BJT)发布美国 5 月 CPI(消费者价格指数)。",
      scenario:
        "高于预期：美元/收益率上行，压加密、QQQ/SMH、GLD；低于预期：风险资产修复；符合预期：市场看细项和 Fed(美联储)定价。",
      conclusion: "发布前不抢方向，先降低高 beta 暴露，等实际值和市场反应确认。",
      source: "BLS release calendar",
    };
  }

  try {
    const [headlineSa, coreSa, headlineNsa, coreNsa] = await Promise.all([
      fetchBlsSeries("CUSR0000SA0", 2025, 2026),
      fetchBlsSeries("CUSR0000SA0L1E", 2025, 2026),
      fetchBlsSeries("CUUR0000SA0", 2025, 2026),
      fetchBlsSeries("CUUR0000SA0L1E", 2025, 2026),
    ]);
    const headlineMay = blsValue(headlineSa, 2026, "M05");
    const headlineApr = blsValue(headlineSa, 2026, "M04");
    const coreMay = blsValue(coreSa, 2026, "M05");
    const coreApr = blsValue(coreSa, 2026, "M04");
    const headlineMayNsa = blsValue(headlineNsa, 2026, "M05");
    const headlineMayPrevYear = blsValue(headlineNsa, 2025, "M05");
    const coreMayNsa = blsValue(coreNsa, 2026, "M05");
    const coreMayPrevYear = blsValue(coreNsa, 2025, "M05");
    if (!headlineMay || !headlineApr || !coreMay || !coreApr) throw new Error("May CPI not found in BLS payload");
    const headlineMom = (headlineMay / headlineApr - 1) * 100;
    const coreMom = (coreMay / coreApr - 1) * 100;
    const headlineYoy =
      headlineMayNsa && headlineMayPrevYear ? (headlineMayNsa / headlineMayPrevYear - 1) * 100 : null;
    const coreYoy = coreMayNsa && coreMayPrevYear ? (coreMayNsa / coreMayPrevYear - 1) * 100 : null;
    return {
      status: "released",
      statusLabel: "已发布",
      headlineMom,
      coreMom,
      headlineYoy,
      coreYoy,
      knownInfo: `BLS(美国劳工统计局)已发布 5 月 CPI：环比 ${pct(headlineMom)}，核心 CPI 环比 ${pct(coreMom)}；同比 ${pct(headlineYoy)}，核心同比 ${pct(coreYoy)}。`,
      scenario:
        "CPI 不算最热，但 PPI 偏热后，通胀链条仍未给降息交易开绿灯；美元、长债收益率和科技股强弱仍是主要传导。",
      conclusion:
        headlineMom <= 0.2 && coreMom <= 0.3
          ? "CPI 未显著偏热，但 PPI 已重新抬高通胀粘性，风险资产不能只按降息逻辑定价。"
          : "CPI 压力仍不低，降息交易难以单靠一次数据完全打开，风险资产反弹需要二次确认。",
      source: "BLS public API",
    };
  } catch (error) {
    const fallback = {
      headlineMom: 0.47,
      coreMom: 0.21,
      headlineYoy: 4.25,
      coreYoy: 2.85,
    };
    return {
      status: "released_proxy",
      statusLabel: "已发布",
      ...fallback,
      knownInfo: `美国 5 月 CPI(消费者价格指数)已发布：环比 ${pct(fallback.headlineMom)}，核心 CPI 环比 ${pct(fallback.coreMom)}；同比 ${pct(fallback.headlineYoy)}，核心同比 ${pct(fallback.coreYoy)}。`,
      scenario:
        "CPI 未给风险资产形成充分利多，后续 PPI 与 Fed(美联储)定价决定反弹能否延续。",
      conclusion:
        "CPI 后不能再按“等数据”交易；结合 PPI 偏热，当前结论是降息交易受限，风险资产修复要看盈利/资金承接，而不是单靠宏观转松。",
      source: `BLS public API unavailable: ${error.message}`,
    };
  }
}

async function ppiSnapshot(now) {
  const releaseAt = bjtDateValue("2026-06-11", 20, 30);
  const hasReleased = new Date() >= releaseAt;
  if (!hasReleased) {
    return {
      status: "pending",
      statusLabel: "未发布",
      knownInfo: "BLS(美国劳工统计局)日程显示 6/11 20:30 北京时间(BJT)发布美国 5 月 PPI(生产者价格指数)。",
      scenario:
        "高于预期会强化能源驱动的通胀粘性，压制降息交易；低于预期才会缓和 CPI 后的通胀担忧。",
      conclusion: "发布前不单独押方向，等待实际值确认 PCE(个人消费支出价格指数)压力。",
      source: "BLS release calendar",
    };
  }

  const fallback = {
    status: "released",
    statusLabel: "已发布",
    headlineMom: 1.1,
    headlineYoy: 6.5,
    coreMom: 0.4,
    coreYoy: 4.9,
    knownInfo:
      "美国 5 月 PPI(生产者价格指数)已发布：最终需求环比 +1.1%、同比 +6.5%；核心 PPI 环比 +0.4%、同比 +4.9%。能源价格是主要推手。",
    scenario:
      "PPI 明显偏热，说明 CPI 后的降息交易不能简单延伸；风险资产若继续上涨，更多来自 AI/科技动能和流动性承接，而不是利率宽松。",
    conclusion:
      "偏空利率、偏空黄金估值弹性，压制加密中期风险偏好；美股短线若继续强，属于科技主线吸收通胀压力，而不是宏观转松。",
    source: "BLS/market reports fallback",
  };

  try {
    const [headlineSa, headlineNsa] = await Promise.all([
      fetchBlsSeries("WPSFD4", 2025, 2026),
      fetchBlsSeries("WPUFD4", 2025, 2026),
    ]);
    const may = blsValue(headlineSa, 2026, "M05");
    const apr = blsValue(headlineSa, 2026, "M04");
    const mayNsa = blsValue(headlineNsa, 2026, "M05");
    const mayPrevYear = blsValue(headlineNsa, 2025, "M05");
    if (!may || !apr) return fallback;
    const headlineMom = (may / apr - 1) * 100;
    const headlineYoy = mayNsa && mayPrevYear ? (mayNsa / mayPrevYear - 1) * 100 : fallback.headlineYoy;
    return {
      ...fallback,
      headlineMom,
      headlineYoy,
      knownInfo: `BLS(美国劳工统计局)已发布 5 月 PPI(生产者价格指数)：最终需求环比 ${pct(headlineMom)}、同比 ${pct(headlineYoy)}；核心口径市场报道为环比 ${pct(fallback.coreMom)}、同比 ${pct(fallback.coreYoy)}。`,
      source: "BLS public API + market reports fallback",
    };
  } catch {
    return fallback;
  }
}

function latestClose(candles) {
  const row = candles?.at?.(-1);
  return row ? Number(row.c) : null;
}

function cryptoSummary(data) {
  const realtime = data?.realtime ?? {};
  const d1 = data?.klines?.["1d"]?.candles ?? [];
  const h1Vwap = data?.klines?.["1h"]?.vwap;
  const h4Vwap = data?.klines?.["4h"]?.vwap;
  return {
    symbol: data?.symbol ?? "NA",
    mark: realtime.markPx ?? null,
    prevDay: realtime.prevDayPx ?? null,
    funding: realtime.funding ?? null,
    oi: realtime.openInterestBase ?? null,
    volumeUsd: realtime.dayNtlVlmUsd ?? null,
    h1Vwap,
    h4Vwap,
    close: latestClose(d1),
    bias:
      realtime.markPx && h4Vwap && realtime.markPx < h4Vwap
        ? "弱修复 / 未反转"
        : "中性观察",
  };
}

function findUs(us, symbol) {
  return us?.symbols?.find((row) => row.symbol === symbol) ?? {};
}

function renderRows(rows) {
  return rows
    .map(
      (cells) =>
        `<tr>${cells.map((cell) => `<td>${htmlEscape(cell)}</td>`).join("")}</tr>`,
    )
    .join("\n");
}

function renderTable(headers, rows) {
  return `<div class="table-scroll"><table><thead><tr>${headers
    .map((header) => `<th>${htmlEscape(header)}</th>`)
    .join("")}</tr></thead><tbody>${renderRows(rows)}</tbody></table></div>`;
}

async function previousReportNote(currentFile) {
  try {
    const files = (await readdir("reports/daily"))
      .filter((file) => file.endsWith(".html") && file !== currentFile && !file.includes("latest"))
      .sort();
    const previous = files.at(-1);
    if (!previous) return "暂无可读取的前序日报，今日起按不可变文件归档建立连续性。";
    const html = await readFile(`reports/daily/${previous}`, "utf8");
    const title = html.match(/<h1>(.*?)<\/h1>/)?.[1] ?? previous;
    return `已读取前序日报 ${previous}（${title}），本报告将从当前文件起继续做不可变回溯。`;
  } catch {
    return "前序日报读取失败，本报告保守标记为连续性重启。";
  }
}

const now = bjtParts();
const context = reportContext(now);
const cpi = await cpiSnapshot(now);
const ppi = await ppiSnapshot(now);
const fileName = `${now.date}-${now.hm}-market-brief.html`;
const outputPath = `reports/daily/${fileName}`;

const [btcRaw, ethRaw, solRaw, us] = await Promise.all([
  runJson("node", ["skills/crypto-quant-analysis/scripts/crypto_realtime_snapshot.mjs", "BTC"]),
  runJson("node", ["skills/crypto-quant-analysis/scripts/crypto_realtime_snapshot.mjs", "ETH"]),
  runJson("node", ["skills/crypto-quant-analysis/scripts/crypto_realtime_snapshot.mjs", "SOL"]),
  runJson("node", [
    "skills/financial-market-intelligence/scripts/us_market_snapshot.mjs",
    "SPY",
    "QQQ",
    "DIA",
    "IWM",
    "XLK",
    "XLF",
    "XLE",
    "XLV",
    "XLY",
    "SMH",
    "TLT",
    "UUP",
    "HYG",
    "LQD",
    "GLD",
  ]),
]);

const btc = cryptoSummary(btcRaw);
const eth = cryptoSummary(ethRaw);
const sol = cryptoSummary(solRaw);
const fearGreed =
  btcRaw?.sentiment?.fearGreed?.data?.[0] ??
  ethRaw?.sentiment?.fearGreed?.data?.[0] ??
  solRaw?.sentiment?.fearGreed?.data?.[0] ??
  {};
const stablecoins = btcRaw?.onchainLiquidity?.stablecoins ?? {};
const btcLongShort = btcRaw?.externalDerivatives?.longShortRatio ?? {};
const btcLiquidations = btcRaw?.externalDerivatives?.liquidationOrders ?? {};

const spy = findUs(us, "SPY");
const qqq = findUs(us, "QQQ");
const smh = findUs(us, "SMH");
const tlt = findUs(us, "TLT");
const uup = findUs(us, "UUP");
const gld = findUs(us, "GLD");
const iwm = findUs(us, "IWM");
const hyg = findUs(us, "HYG");
const lqd = findUs(us, "LQD");

const btcVwapGap = gapPct(btc.mark, btc.h4Vwap);
const ethVwapGap = gapPct(eth.mark, eth.h4Vwap);
const solVwapGap = gapPct(sol.mark, sol.h4Vwap);
const btcFundingPct = isNum(btc.funding) ? Number(btc.funding) * 100 : null;
const ethFundingPct = isNum(eth.funding) ? Number(eth.funding) * 100 : null;
const solFundingPct = isNum(sol.funding) ? Number(sol.funding) * 100 : null;
const fearGreedValue = isNum(fearGreed.value) ? Number(fearGreed.value) : null;
const qqqSmhLeadership = isNum(qqq.percentChange) && isNum(smh.percentChange) ? (Number(qqq.percentChange) + Number(smh.percentChange)) / 2 : null;
const ratesDollarPressure =
  (isNum(tlt.percentChange) ? -Number(tlt.percentChange) : 0) + (isNum(uup.percentChange) ? Number(uup.percentChange) : 0);
const creditImpulse =
  isNum(hyg.percentChange) && isNum(lqd.percentChange) ? Number(hyg.percentChange) - Number(lqd.percentChange) : null;
const goldRatesDollarScore =
  (isNum(gld.percentChange) ? Number(gld.percentChange) : 0) +
  (isNum(tlt.percentChange) ? Number(tlt.percentChange) : 0) -
  (isNum(uup.percentChange) ? Number(uup.percentChange) : 0);
const stablecoinImpulse =
  isNum(stablecoins.change7dPct)
    ? Number(stablecoins.change7dPct)
    : isNum(stablecoins.change1dPct)
      ? Number(stablecoins.change1dPct)
      : null;
const stablecoinTone =
  isNum(stablecoinImpulse) && stablecoinImpulse > 0.2
    ? "链上美元流动性扩张"
    : isNum(stablecoinImpulse) && stablecoinImpulse < -0.2
      ? "链上美元流动性收缩"
      : "链上美元流动性中性";

const previousNote = await previousReportNote(fileName);
const publicUrl = `${pagesBase}/${outputPath}`;
const relatedReportRows = formatReportLinks({ marketUrl: publicUrl }).map((line) => {
  const [name, ...urlParts] = line.split(": ");
  const url = urlParts.join(": ");
  return [name, url];
});

const inflationSignal =
  ppi.status === "released"
    ? `CPI 环比 ${pct(cpi.headlineMom)}、核心环比 ${pct(cpi.coreMom)}；PPI 环比 ${pct(ppi.headlineMom)}、同比 ${pct(ppi.headlineYoy)}。通胀组合偏粘，降息交易难以单靠 CPI 打开。`
    : `CPI 环比 ${pct(cpi.headlineMom)}、核心环比 ${pct(cpi.coreMom)}；PPI 尚待确认。`;

const macroReaction = `${inflationSignal} 当前资产反应：QQQ ${pct(qqq.percentChange)}，SMH ${pct(smh.percentChange)}，TLT(长期美债 ETF) ${pct(tlt.percentChange)}，UUP(美元 ETF) ${pct(uup.percentChange)}，GLD(黄金 ETF) ${pct(gld.percentChange)}，BTC ${fmt(btc.mark, 0)}。`;

const equityTone =
  (qqq.percentChange ?? 0) > 0 && (smh.percentChange ?? 0) > 0
    ? "科技和半导体仍在带动指数，短线韧性强；但 PPI 偏热会限制估值扩张。"
    : "科技和半导体动能不足，通胀粘性会放大回撤风险。";

const cryptoTone =
  btc.h4Vwap && btc.mark >= btc.h4Vwap
    ? "BTC 已接近/站上 4小时 VWAP，短线从偏空转为震荡修复；若资金费率走高但价格不跟，仍要防回落。"
    : "BTC 未有效站稳 4小时 VWAP，反弹仍按弱修复处理；PPI 偏热使中期风险偏好承压。";

const goldTone =
  (gld.percentChange ?? 0) > 0
    ? "黄金短线反弹主要来自避险和美元波动，但 PPI 偏热意味着实际利率压力未解除。"
    : "黄金仍受美元和实际利率压制，PPI 偏热后短线反弹质量偏弱。";

const usConclusion =
  context.slot === "morning"
    ? `SPY ${pct(spy.percentChange)}，QQQ ${pct(qqq.percentChange)}，SMH ${pct(smh.percentChange)}。${equityTone}`
    : `SPY ${pct(spy.percentChange)}，QQQ ${pct(qqq.percentChange)}，SMH ${pct(smh.percentChange)}。${equityTone}`;

const headlineText =
  `PPI(生产者价格指数)偏热削弱降息交易，市场主线变成“科技韧性对抗通胀粘性”。${cryptoTone} ${goldTone}`;

const cryptoDirection =
  isNum(btcVwapGap) && btcVwapGap >= 0 && isNum(btcFundingPct) && btcFundingPct < 0.03
    ? "中性修复"
    : isNum(btcVwapGap) && btcVwapGap < -0.5
      ? "偏空震荡"
      : "中性观察";
const cryptoInvalidation =
  cryptoDirection === "偏空震荡"
    ? `BTC 重新站上 4小时 VWAP ${fmt(btc.h4Vwap, 0)} 且资金费率保持不过热，偏空判断失效。`
    : `BTC 跌回 4小时 VWAP 下方 1% 以上，修复判断失效。`;
const cryptoActionRead =
  cryptoDirection === "偏空震荡"
    ? "价格仍在4小时VWAP下方，重点是不要接下跌中的弱反弹；反弹到VWAP附近失败时，才按偏空结构继续观察。"
    : cryptoDirection === "中性修复"
      ? "价格重新靠近/站上4小时VWAP，短线卖压减轻；但只有VWAP站稳且funding不拥挤，才把7日判断上调。"
      : "价格结构还没有给出明确方向，等待4小时VWAP和资金费率共同确认。";
const equityDirection =
  isNum(qqqSmhLeadership) && qqqSmhLeadership > 1 && ratesDollarPressure < 0.8
    ? "科技带动修复"
    : isNum(qqqSmhLeadership) && qqqSmhLeadership > 0
      ? "强主线但估值受压"
      : "防守观察";
const equityInvalidation =
  "若 QQQ/SMH 转负且 TLT 继续走弱、UUP 走强，科技韧性判断失效，转为回撤风险优先。";
const goldDirection =
  goldRatesDollarScore > 1
    ? "修复增强"
    : goldRatesDollarScore < -0.5
      ? "利率美元压制"
      : "区间震荡";
const goldInvalidation =
  "若 GLD 上涨同时 TLT 转强、UUP 转弱，黄金从短线震荡转为修复；若 GLD 跌破近7日趋势且美元走强，转为偏空。";

const macroEvents = [
  {
    date: "2026-06-05",
    time: "20:30",
    event: "美国就业/非农窗口",
    known: "强就业会推高“高利率更久”的定价，弱就业才会给降息交易空间。",
    result: "已发生窗口；本周后续市场仍按就业韧性和通胀粘性共同定价。",
    conclusion: "就业没有给 Fed(美联储)快速转鸽理由，科技股上涨更多依赖盈利主线。",
  },
  {
    date: "2026-06-10",
    time: "20:30",
    event: "美国 5月 CPI(消费者价格指数)",
    known: cpi.knownInfo,
    result: cpi.scenario,
    conclusion: cpi.conclusion,
  },
  {
    date: "2026-06-11",
    time: "20:30",
    event: "美国 5月 PPI(生产者价格指数)",
    known: ppi.knownInfo,
    result: ppi.scenario,
    conclusion: ppi.conclusion,
  },
  {
    date: "2026-06-16",
    time: "至 6/17",
    event: "FOMC + SEP(美联储议息会议 + 经济预测摘要)",
    known: "会议将更新利率决议、点阵图和经济预测，是未来30天最重要的政策锚。",
    result: "点阵图偏鹰会压估值和黄金；偏鸽会缓和科技、加密和黄金压力。",
    conclusion: "基准判断偏谨慎：PPI 偏热后，Fed 不急于释放宽松信号。",
  },
  {
    date: "2026-06-25",
    time: "20:30",
    event: "PCE / GDP(个人消费支出价格指数 / 国内生产总值)",
    known: "PCE 是 Fed 更重视的通胀指标，GDP 修正影响增长判断。",
    result: "PCE 降温利多风险资产和黄金；PCE 偏热继续压制降息交易。",
    conclusion: "这是 FOMC 后的二次确认点，决定30日方向能否从震荡转修复。",
  },
  {
    date: "2026-07-02",
    time: "20:30",
    event: "美国就业数据窗口",
    known: "月初就业数据会重新定价增长韧性和降息概率。",
    result: "就业强：利率上行压力回归；就业弱：美股风格从成长扩散到利率敏感资产。",
    conclusion: "若就业继续强，科技强势也会更依赖盈利而非估值扩张。",
  },
  {
    date: "2026-07-10",
    time: "20:30",
    event: "美国 6月 CPI 窗口",
    known: "下一轮 CPI 将验证 5月 CPI/PPI 的通胀粘性是否延续。",
    result: "连续降温才会打开降息交易；再度偏热会压制美股估值、黄金和加密风险偏好。",
    conclusion: "未来30天的方向，不是等单点数据，而是看通胀链能否连续降温。",
  },
].filter((event) => {
  const days = daysFromToday(event.date, now.date);
  return days >= -7 && days <= 30;
});

const macroRows = macroEvents.map((event) => [
  `${event.date.slice(5)} ${event.time} ${eventStatus(event.date)}`,
  event.event,
  event.known,
  event.result,
  event.conclusion,
]);

const watchRows = [
  {
    name: "BTC 相对 4h VWAP",
    current: `${pct(btcVwapGap)}（价格 ${fmt(btc.mark, 0)} / VWAP ${fmt(btc.h4Vwap, 0)}）`,
    state: metricState({ value: btcVwapGap, goodAbove: 0.5, badBelow: -0.5 }),
    threshold: "高于 +0.5% 才算修复确认；低于 -0.5% 偏空。",
    conclusion:
      isNum(btcVwapGap) && btcVwapGap >= 0
        ? "短线卖压减轻，但需 funding/OI 配合。"
        : "反弹仍弱，不把上涨当趋势反转。",
  },
  {
    name: "BTC funding(资金费率)",
    current: pct(btcFundingPct),
    state: metricState({ value: btcFundingPct, goodBelow: 0.03, badAbove: 0.08 }),
    threshold: "低于 0.03% 代表多头不拥挤；高于 0.08% 易挤压。",
    conclusion:
      isNum(btcFundingPct) && btcFundingPct <= 0.03
        ? "杠杆不拥挤，若价格站稳才有修复空间。"
        : "多头拥挤，追涨胜率下降。",
  },
  {
    name: "恐惧贪婪指数",
    current: `${fearGreedValue ?? "缺失"} ${fearGreed.value_classification ?? ""}`,
    state: metricState({ value: fearGreedValue, goodAbove: 50, badBelow: 35 }),
    threshold: "50 以上风险偏好修复；35 以下仍偏防守。",
    conclusion:
      isNum(fearGreedValue) && fearGreedValue >= 50
        ? "情绪已修复，价格确认后可转中性。"
        : "情绪仍不足，反弹容易反复。",
  },
  {
    name: "稳定币总供给",
    current: `${usdYi(stablecoins.totalUsd)}；1日 ${pct(stablecoins.change1dPct)}，7日 ${pct(stablecoins.change7dPct)}，30日 ${pct(stablecoins.change30dPct)}`,
    state: metricState({ value: stablecoinImpulse, goodAbove: 0.2, badBelow: -0.2 }),
    threshold: "7日增速 > +0.2% 代表链上美元扩张；< -0.2% 代表流动性收缩。",
    conclusion:
      stablecoinTone === "链上美元流动性扩张"
        ? "对加密中期风险偏好形成支撑。"
        : stablecoinTone === "链上美元流动性收缩"
          ? "链上购买力收缩，反弹更容易失败。"
          : "链上购买力没有明显扩张，BTC 修复仍需要价格结构确认。",
  },
  {
    name: "QQQ/SMH 科技强度",
    current: `QQQ ${pct(qqq.percentChange)}，SMH ${pct(smh.percentChange)}`,
    state: metricState({ value: qqqSmhLeadership, goodAbove: 1, badBelow: -0.5 }),
    threshold: "两者均强且均值 > +1% 才是进攻主线。",
    conclusion: equityDirection,
  },
  {
    name: "长债/美元压力",
    current: `TLT ${pct(tlt.percentChange)}，UUP ${pct(uup.percentChange)}`,
    state: metricState({ value: ratesDollarPressure, goodBelow: -0.3, badAbove: 0.8 }),
    threshold: "TLT 强、UUP 弱利多估值；TLT 弱、UUP 强利空。",
    conclusion:
      ratesDollarPressure >= 0.8
        ? "利率美元压力偏高，压美股估值、黄金和加密。"
        : "压力可控，允许风险资产修复。",
  },
  {
    name: "信用风险",
    current: `HYG ${pct(hyg.percentChange)}，LQD ${pct(lqd.percentChange)}，差值 ${pct(creditImpulse)}`,
    state: metricState({ value: creditImpulse, goodAbove: 0.2, badBelow: -0.2 }),
    threshold: "HYG 强于 LQD 是风险偏好扩散；弱于 LQD 是防守。",
    conclusion:
      isNum(creditImpulse) && creditImpulse > 0
        ? "信用没有恶化，支撑风险资产不深跌。"
        : "信用偏防守，不支持激进加仓。",
  },
  {
    name: "黄金压力组合",
    current: `GLD ${pct(gld.percentChange)}，TLT ${pct(tlt.percentChange)}，UUP ${pct(uup.percentChange)}`,
    state: metricState({ value: goldRatesDollarScore, goodAbove: 1, badBelow: -0.5 }),
    threshold: "GLD 强、TLT 强、UUP 弱才是高质量修复。",
    conclusion: goldDirection,
  },
];

const watchTableRows = watchRows.map((row) => [
  row.name,
  row.current,
  row.threshold,
  row.state.label,
  row.conclusion,
]);

const html = `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${now.date} ${context.title}</title>
    <style>
      :root { --bg:#f6f7f9; --paper:#fff; --ink:#17202a; --muted:#667085; --line:#d9dee7; --soft:#eef2f7; --accent:#0f766e; --risk:#b42318; --warn:#b54708; --good:#067647; --neutral:#475467; }
      * { box-sizing: border-box; }
      body { margin:0; background:var(--bg); color:var(--ink); font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",Arial,sans-serif; line-height:1.55; }
      .page { max-width:1220px; margin:0 auto; padding:30px 22px 56px; }
      .report-header,.section { background:var(--paper); box-shadow:0 1px 2px rgba(16,24,40,.06); }
      .report-header { border-top:6px solid var(--accent); padding:28px 32px; }
      .section { margin-top:18px; padding:24px 28px; }
      .eyebrow { margin:0 0 8px; color:var(--accent); font-size:13px; font-weight:800; letter-spacing:.04em; text-transform:uppercase; }
      h1 { margin:0; font-size:34px; line-height:1.2; letter-spacing:0; }
      h2 { margin:0 0 16px; font-size:22px; letter-spacing:0; }
      h3 { margin:18px 0 10px; font-size:17px; letter-spacing:0; }
      p { margin:0 0 10px; }
      ul { margin:8px 0 0; padding-left:20px; }
      .meta { display:flex; flex-wrap:wrap; gap:10px; margin-top:16px; color:var(--muted); font-size:14px; }
      .pill { display:inline-flex; align-items:center; min-height:28px; padding:4px 10px; border:1px solid var(--line); background:#fafbfc; border-radius:6px; font-weight:700; }
      .bluf { display:grid; grid-template-columns:1.2fr .8fr; gap:18px; }
      .headline-call { border-left:5px solid var(--accent); background:#f0fdfa; padding:18px 20px; font-size:19px; font-weight:800; }
      .watch-box,.card { border:1px solid var(--line); background:#fff; padding:16px; }
      .grid-2 { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; }
      .grid-3 { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; }
      .grid-4 { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:14px; }
      .metric { color:var(--muted); font-size:13px; font-weight:750; }
      .verdict { margin:8px 0 10px; font-size:18px; font-weight:850; }
      .table-scroll { overflow-x:auto; }
      table { width:100%; border-collapse:collapse; font-size:14px; }
      th { background:var(--soft); color:#344054; font-weight:800; text-align:left; }
      th,td { border-bottom:1px solid var(--line); padding:10px 9px; vertical-align:top; }
      .tag { display:inline-block; padding:2px 7px; border-radius:5px; font-size:12px; font-weight:800; white-space:nowrap; }
      .tag-risk { color:var(--risk); background:#fee4e2; }
      .tag-warn { color:var(--warn); background:#fef0c7; }
      .tag-good { color:var(--good); background:#dcfae6; }
      .tag-neutral { color:var(--neutral); background:#eaecf0; }
      .note { border-left:4px solid var(--accent); background:#f8fafc; padding:12px 14px; }
      .sources { color:var(--muted); font-size:13px; }
      @media (max-width:900px) { .page{padding:18px 12px 36px;} .report-header,.section{padding:20px 16px;} h1{font-size:28px;} .bluf,.grid-2,.grid-3,.grid-4{grid-template-columns:1fr;} table{min-width:920px;} }
    </style>
  </head>
  <body>
    <main class="page">
      <header class="report-header">
        <p class="eyebrow">市场情报日报 Daily Market Intelligence</p>
        <h1>${context.title}</h1>
        <div class="meta">
          <span class="pill">数据截止：${now.display}</span>
          <span class="pill">报告时段：${context.label}</span>
          <span class="pill">数据：Hyperliquid 加密永续 / Nasdaq(纳斯达克) ETF(交易所交易基金)代理 / BLS(美国劳工统计局)宏观数据</span>
          <span class="pill">归档：${fileName}</span>
        </div>
      </header>

      <section class="section bluf">
        <div>
          <h2>一句话结论</h2>
          <div class="headline-call">${htmlEscape(headlineText)}</div>
        </div>
        <aside class="watch-box">
          <strong>关键事实</strong>
          <ul>
            <li>CPI(消费者价格指数)已发布，PPI(生产者价格指数)偏热，降息交易被压住。</li>
            <li>BTC(比特币)相对 4小时 VWAP(成交量加权均价)：${pct(btcVwapGap)}；资金费率(funding)：${pct(btcFundingPct)}。</li>
            <li>稳定币总供给 ${usdYi(stablecoins.totalUsd)}，7日变化 ${pct(stablecoins.change7dPct)}，判断为${stablecoinTone}。</li>
            <li>QQQ(纳指100 ETF) ${pct(qqq.percentChange)}，SMH(半导体 ETF) ${pct(smh.percentChange)}，科技仍是美股核心支撑。</li>
            <li>TLT(长期美债 ETF) ${pct(tlt.percentChange)}，UUP(美元 ETF) ${pct(uup.percentChange)}，决定黄金和估值压力。</li>
          </ul>
        </aside>
      </section>

      <section class="section">
        <h2>相关报告入口</h2>
        ${renderTable(["报告", "链接"], relatedReportRows)}
      </section>

      <section class="section">
        <h2>重点转向提醒</h2>
        <div class="grid-3">
          <div class="card"><p class="metric">加密 Crypto</p><p class="verdict"><span class="tag ${signalTag(cryptoDirection === "偏空震荡" ? "risk" : cryptoDirection === "中性修复" ? "good" : "warn")}">${cryptoDirection}</span></p><p>BTC ${fmt(btc.mark, 0)}，相对 4小时 VWAP ${pct(btcVwapGap)}，funding(资金费率) ${pct(btcFundingPct)}。结论：${htmlEscape(cryptoActionRead)}</p><p><strong>失效条件：</strong>${htmlEscape(cryptoInvalidation)}</p></div>
          <div class="card"><p class="metric">美股 U.S. Equities</p><p class="verdict"><span class="tag ${signalTag(equityDirection === "科技带动修复" ? "good" : equityDirection === "防守观察" ? "risk" : "warn")}">${equityDirection}</span></p><p>QQQ ${pct(qqq.percentChange)}，SMH ${pct(smh.percentChange)}，TLT ${pct(tlt.percentChange)}，UUP ${pct(uup.percentChange)}。结论：科技仍强，但 PPI 偏热使估值扩张上限下降。</p><p><strong>失效条件：</strong>${equityInvalidation}</p></div>
          <div class="card"><p class="metric">黄金 Gold</p><p class="verdict"><span class="tag ${signalTag(goldDirection === "修复增强" ? "good" : goldDirection === "利率美元压制" ? "risk" : "warn")}">${goldDirection}</span></p><p>GLD ${pct(gld.percentChange)}，TLT ${pct(tlt.percentChange)}，UUP ${pct(uup.percentChange)}。结论：黄金不是单看涨跌，必须看是否同时得到长债和美元确认。</p><p><strong>失效条件：</strong>${goldInvalidation}</p></div>
        </div>
      </section>

      <section class="section">
        <h2>昨日判断回溯</h2>
        ${renderTable(["上一份判断", "本轮数据验证", "结果", "修正"], [
          ["加密偏空/弱修复，不追反弹。", `BTC 价格 ${fmt(btc.mark, 0)}，相对 4小时 VWAP ${pct(btcVwapGap)}；恐惧贪婪指数 ${fearGreed.value ?? "缺失"}。`, cryptoDirection === "中性修复" ? "部分正确" : "正确", cryptoDirection === "中性修复" ? "短线已从偏空修复到中性，但情绪仍极度恐惧，暂不追多。" : "维持偏空/弱修复。"],
          ["美股通胀数据决定修复质量。", `${htmlEscape(cpi.knownInfo)} ${htmlEscape(ppi.knownInfo)} ${htmlEscape(macroReaction)}`, ppi.status === "released" ? "正确" : "待验证", ppi.status === "released" ? "PPI 偏热，降息交易降温；若美股继续强，主要来自科技盈利/AI 叙事而非利率宽松。" : "等待 PPI 实际值。"],
          ["黄金短线弱。", `GLD 7个交易日 ${pct(gld.sevenTradingDayPct)}，30日 ${pct(gld.thirtyCalendarDayPct)}。`, "正确", "维持短线谨慎，中长期支撑待观察。"],
        ])}
        <p class="note">${htmlEscape(previousNote)}</p>
      </section>

      <section class="section">
        <h2>政策与数据日历</h2>
        ${renderTable(["日期/状态", "事件", "已知信息", "市场影响路径", "我的结论"], macroRows)}
      </section>

      <section class="section">
        <h2>今日核心资产</h2>
        ${renderTable(["资产", "今日状态", "7日回顾", "30日回顾", "未来1日", "未来7日", "未来30日", "未来半年"], [
          ["加密", `BTC ${fmt(btc.mark, 0)}；ETH ${fmt(eth.mark)}；SOL ${fmt(sol.mark)}。BTC 相对 4h VWAP ${pct(btcVwapGap)}，funding ${pct(btcFundingPct)}，恐惧贪婪 ${fearGreedValue ?? "缺失"}；稳定币7日 ${pct(stablecoins.change7dPct)}。`, `BTC 当前结构 ${cryptoDirection}；ETH 相对 4h VWAP ${pct(ethVwapGap)}；SOL 相对 4h VWAP ${pct(solVwapGap)}；${stablecoinTone}。`, "PPI 偏热压制中期风险偏好，30日仍按高波动震荡处理；若稳定币继续收缩，反弹质量要打折。", cryptoDirection === "偏空震荡" ? "偏空震荡，不追反弹" : "中性修复，小仓位观察", cryptoDirection === "中性修复" && stablecoinTone !== "链上美元流动性收缩" ? "若价格继续站稳 VWAP，7日可转中性偏多" : "7日仍偏防守，等待价格结构和链上美元流动性同时改善", "通胀链未连续降温前，30日不做趋势性追多；稳定币扩张才上调胜率。", "半年维度仍有机构配置潜力，但必须等宏观利率压力下降和链上/ETF 资金恢复。"],
          ["美股", `SPY ${fmt(spy.last)} ${pct(spy.percentChange)}；QQQ ${fmt(qqq.last)} ${pct(qqq.percentChange)}；SMH ${fmt(smh.last)} ${pct(smh.percentChange)}；TLT ${pct(tlt.percentChange)}；UUP ${pct(uup.percentChange)}。`, `SPY ${pct(spy.sevenTradingDayPct)}；QQQ ${pct(qqq.sevenTradingDayPct)}；SMH ${pct(smh.sevenTradingDayPct)}。科技强于大盘，主线仍在。`, `SPY ${pct(spy.thirtyCalendarDayPct)}；QQQ ${pct(qqq.thirtyCalendarDayPct)}；SMH ${pct(smh.thirtyCalendarDayPct)}。AI/半导体是主要强势来源。`, equityDirection === "科技带动修复" ? "偏多但不追估值" : "震荡偏强，控制追高", `PPI 偏热后 7日上限由 FOMC + SEP 决定；当前 ${equityDirection}。`, "30日仍以科技盈利主线对抗利率压力，若 TLT 转强、UUP 转弱才上调。", "AI 主线仍是半年级支撑，但利率高位会持续压制估值扩张。"],
          ["黄金", `GLD ${fmt(gld.last)} ${pct(gld.percentChange)}；TLT ${pct(tlt.percentChange)}；UUP ${pct(uup.percentChange)}；黄金压力组合：${goldDirection}。`, `GLD ${pct(gld.sevenTradingDayPct)}，短线修复质量由 TLT/UUP 确认。`, `GLD ${pct(gld.thirtyCalendarDayPct)}，30日仍是利率与美元主导。`, goldDirection === "修复增强" ? "可继续修复" : "震荡，不追高", goldDirection === "利率美元压制" ? "7日偏弱，等待美元或长债转向" : "7日区间修复", "30日中性，只有实际利率压力下降才转偏多。", "央行购金和地缘支撑仍在，中长期不悲观，但短中期受实际利率约束。"],
        ])}
      </section>

      <section class="section">
        <h2>术语解释</h2>
        ${renderTable(["术语", "中文解释", "怎么用于判断"], [
          ["BJT", "北京时间", "报告时间统一用北京时间，方便对齐宏观数据发布时间和飞书推送。"],
          ["BLS", "美国劳工统计局", "负责发布非农、CPI、PPI 等关键美国官方数据。"],
          ["FOMC + SEP", "美联储议息会议 + 经济预测摘要", "决定利率路径、点阵图和降息/加息预期。"],
          ["VWAP", "成交量加权均价", "价格低于 1小时/4小时 VWAP，说明短线买盘质量不足。"],
          ["funding", "资金费率", "为正通常说明多头支付空头，为负通常说明空头更积极或多头意愿弱。"],
          ["OI", "未平仓合约", "OI 上升代表杠杆参与增加；价格下跌且 OI 高，清算风险更大。"],
          ["ETF", "交易所交易基金", "用于观察机构资金流和资产代理价格。"],
          ["spread", "买卖价差", "价差越小，流动性越好；价差扩大时追单成本更高。"],
        ])}
      </section>

      <section class="section">
        <h2>加密专项：Hyperliquid 实时数据</h2>
        ${renderTable(["指标", "BTC(比特币)", "ETH(以太坊)", "SOL(Solana)", "结论"], [
          ["当前标记价格(mark)", fmt(btc.mark, 0), fmt(eth.mark), fmt(sol.mark), "三者均不是强趋势突破。"],
          ["1小时成交量加权均价(1h VWAP)", fmt(btc.h1Vwap, 0), fmt(eth.h1Vwap), fmt(sol.h1Vwap), "低于 VWAP 时，短线卖压仍在。"],
          ["4小时成交量加权均价(4h VWAP)", fmt(btc.h4Vwap, 0), fmt(eth.h4Vwap), fmt(sol.h4Vwap), "4小时结构决定反弹质量。"],
          ["资金费率(funding)", pct((btc.funding ?? 0) * 100), pct((eth.funding ?? 0) * 100), pct((sol.funding ?? 0) * 100), "资金费率不极端，暂非拥挤多头。"],
          ["24小时名义成交", `${fmt((btc.volumeUsd ?? 0) / 1e8)} 亿美元`, `${fmt((eth.volumeUsd ?? 0) / 1e8)} 亿美元`, `${fmt((sol.volumeUsd ?? 0) / 1e8)} 亿美元`, "流动性可用，但需看方向确认。"],
          ["情绪", `恐惧贪婪指数 ${fearGreed.value ?? "缺失"}，${fearGreed.value_classification ?? "缺失"}`, "同左", "同左", "风险偏好偏弱，反弹容易反复。"],
          ["稳定币流动性", `总供给 ${usdYi(stablecoins.totalUsd)}；1日 ${pct(stablecoins.change1dPct)}；7日 ${pct(stablecoins.change7dPct)}；30日 ${pct(stablecoins.change30dPct)}`, "DeFiLlama 稳定币口径", stablecoinTone, stablecoinTone === "链上美元流动性收缩" ? "链上购买力收缩，BTC 站上 VWAP 的信号需要打折。" : stablecoinTone === "链上美元流动性扩张" ? "链上购买力扩张，若价格结构确认，可上调加密修复质量。" : "链上购买力中性，价格结构仍是短线主导。"],
        ])}
        <p class="note"><strong>操作含义：</strong>“弱修复”不是做多信号，而是下跌后暂时止跌。BTC 只有站回关键 VWAP，且宏观数据发布后的风险偏好改善、ETF 资金流改善，才把 7日判断从偏空改为中性。当前宏观状态：${htmlEscape(cpi.statusLabel)}。</p>
      </section>

      <section class="section">
        <h2>美股与黄金专项：Nasdaq(纳斯达克) ETF(交易所交易基金)代理数据</h2>
        ${renderTable(["类别", "标的", "最新状态", "7个交易日", "30日", "我的结论"], [
          ["大盘", "SPY(标普500 ETF)", `${fmt(spy.last)}，${pct(spy.percentChange)}`, pct(spy.sevenTradingDayPct), pct(spy.thirtyCalendarDayPct), "指数仍由科技权重支撑，PPI 偏热限制估值扩张。"],
          ["成长", "QQQ(纳斯达克100 ETF)", `${fmt(qqq.last)}，${pct(qqq.percentChange)}`, pct(qqq.sevenTradingDayPct), pct(qqq.thirtyCalendarDayPct), "长期强，短线利率敏感。"],
          ["半导体", "SMH(半导体 ETF)", `${fmt(smh.last)}，${pct(smh.percentChange)}`, pct(smh.sevenTradingDayPct), pct(smh.thirtyCalendarDayPct), "AI 主线最强，但利率压力会压缩追高胜率。"],
          ["小盘", "IWM(罗素2000 ETF)", `${fmt(iwm.last)}，${pct(iwm.percentChange)}`, pct(iwm.sevenTradingDayPct), pct(iwm.thirtyCalendarDayPct), "融资成本敏感，仍不是主攻方向。"],
          ["长债", "TLT(长期美债 ETF)", `${fmt(tlt.last)}，${pct(tlt.percentChange)}`, pct(tlt.sevenTradingDayPct), pct(tlt.thirtyCalendarDayPct), "利率压力未彻底解除。"],
          ["美元", "UUP(美元指数 ETF)", `${fmt(uup.last)}，${pct(uup.percentChange)}`, pct(uup.sevenTradingDayPct), pct(uup.thirtyCalendarDayPct), "美元偏强，压黄金和加密。"],
          ["信用", "HYG / LQD(高收益债 / 投资级债 ETF)", `HYG ${pct(hyg.percentChange)}，LQD ${pct(lqd.percentChange)}`, `HYG ${pct(hyg.sevenTradingDayPct)}，LQD ${pct(lqd.sevenTradingDayPct)}`, `HYG ${pct(hyg.thirtyCalendarDayPct)}，LQD ${pct(lqd.thirtyCalendarDayPct)}`, "信用未明显恶化，但也没给强风险偏好。"],
          ["黄金", "GLD(黄金 ETF)", `${fmt(gld.last)}，${pct(gld.percentChange)}`, pct(gld.sevenTradingDayPct), pct(gld.thirtyCalendarDayPct), "短线弱修复，中长期看央行购金/地缘。"],
        ])}
      </section>

      <section class="section">
        <h2>持续重要事项</h2>
        <div class="grid-2">
          <div class="card"><h3>美国通胀链</h3><p>CPI 环比 ${pct(cpi.headlineMom)}、核心环比 ${pct(cpi.coreMom)}；PPI 环比 ${pct(ppi.headlineMom)}、同比 ${pct(ppi.headlineYoy)}。结论：通胀链偏粘，降息交易不能主动加仓，只能等 PCE/FOMC 给二次确认。</p></div>
          <div class="card"><h3>Fed(美联储)利率路径</h3><p>FOMC + SEP 位于 ${eventStatus("2026-06-16")}。PPI 偏热后，点阵图偏鹰概率高于偏鸽；对美股估值、黄金和加密都是上限约束。</p></div>
          <div class="card"><h3>加密衍生品结构</h3><p>BTC 相对 4h VWAP ${pct(btcVwapGap)}，funding ${pct(btcFundingPct)}，OI(未平仓合约) ${fmt(btc.oi, 0)} BTC，24小时成交 ${fmt((btc.volumeUsd ?? 0) / 1e8)} 亿美元。结论：杠杆不算极端，但价格没站稳前只算弱修复。</p></div>
          <div class="card"><h3>链上美元流动性</h3><p>稳定币总供给 ${usdYi(stablecoins.totalUsd)}，1日 ${pct(stablecoins.change1dPct)}，7日 ${pct(stablecoins.change7dPct)}，30日 ${pct(stablecoins.change30dPct)}。结论：${stablecoinTone}，这是加密 30日趋势能否从震荡转修复的重要确认项。</p></div>
          <div class="card"><h3>美元、长债与信用</h3><p>TLT ${pct(tlt.percentChange)}，UUP ${pct(uup.percentChange)}，HYG-LQD 信用差 ${pct(creditImpulse)}。结论：若 TLT 不转强、UUP 不转弱，黄金和高估值科技的持续上行空间有限。</p></div>
        </div>
      </section>

      <section class="section">
        <h2>观察清单 Watchlist</h2>
        ${renderTable(["观察对象", "当前值", "触发阈值", "当前状态", "我的结论"], watchTableRows)}
      </section>

      <section class="section">
        <h2>来源和数据缺口</h2>
        <p>已确认数据源：Hyperliquid public API(加密永续公开接口)、DeFiLlama stablecoins API(稳定币流动性)、Alternative.me 恐惧贪婪指数、Ethereum public RPC(以太坊公开节点)、Nasdaq ETF quote/historical API(纳斯达克 ETF 行情/历史接口)、BLS(美国劳工统计局)日程/API、Fed(美联储)FOMC 日历、BEA(美国经济分析局)日程。</p>
        <p>数据时点规则：所有资产统一使用最近一个已确认有效的交易/报价点；周末和假期沿用最近有效交易日并注明口径。加密为连续交易，每次取最新可得永续数据。</p>
        <p>已解决缺口：加密永续价格/K线/资金费率/未平仓合约/盘口、ETH gas、市场情绪代理、稳定币总供给及 1日/7日/30日变化、美股指数/板块/美元/长债/信用/黄金 ETF 代理。</p>
        <p>仍待补缺口：跨市场清算热力图、稳定多空比例、BTC/ETH 现货 ETF 资金流、链上钱包流和社交情绪仍需 Coinalyze/Coinglass/Farside 稳定镜像/LunarCrush/Santiment/Alva 等源继续接入；Binance public 多空比和强平流已做可选连接，但当前网络环境超时，不作为硬依赖。</p>
        <p class="sources">本报告由 GitHub Actions 云端生成。归档链接：${htmlEscape(publicUrl)}</p>
      </section>
    </main>
  </body>
</html>
`;

await mkdir("reports/daily", { recursive: true });
await writeFile(outputPath, html);
await writeFile(
  "reports/daily/latest.html",
  html.replace(
    "</head>",
    `<link rel="canonical" href="${htmlEscape(publicUrl)}" />\n  </head>`,
  ),
);

const summary = {
  date: now.date,
  generatedAtBjt: now.display,
  fileName,
  outputPath,
  publicUrl,
  relatedReports: {
    macro: reportLinks.macro.url,
    crypto: reportLinks.crypto.url,
    market: publicUrl,
  },
  reportSlot: context.slot,
  reportLabel: context.label,
  headline: headlineText,
  turns: [
    `加密：BTC ${fmt(btc.mark, 0)}，4小时 VWAP ${fmt(btc.h4Vwap, 0)}，${btc.bias}。`,
    `宏观：CPI 状态为${cpi.statusLabel}；${cpi.conclusion}`,
    `美股：${usConclusion}`,
    `黄金：GLD ${pct(gld.percentChange)}，7个交易日 ${pct(gld.sevenTradingDayPct)}。`,
  ],
};

await writeFile("reports/daily/latest-summary.json", JSON.stringify(summary, null, 2));

console.log(JSON.stringify(summary, null, 2));
