#!/usr/bin/env node

import { execFile } from "node:child_process";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { promisify } from "node:util";

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
      focus:
        "早报重点承接昨夜美股收盘、黄金/美元/美债和加密夜盘，并给出 A 股开盘后的主线确认。",
      aShareFrame: "A 股：以昨日收盘和今日开盘初期代表股为主，晚报会补当天收盘验证。",
      usFrame: "美股：以刚收盘的上一交易日 ETF 数据为主，是早报最重要的海外定价锚。",
    };
  }
  if (hm >= 2100 && hm <= 2230) {
    return {
      slot: "evening",
      label: "晚报",
      title: "金融市场跟踪晚报",
      focus:
        "晚报重点复盘当天 A 股收盘和白天政策/板块反应，并给出美股盘前/开盘初期的风险校准。",
      aShareFrame: "A 股：以当天收盘后代表股表现为主，并与早盘判断做偏差检查。",
      usFrame: "美股：以盘前/开盘初期 ETF 报价和上一交易日收盘数据为主，次日早报验证完整收盘。",
    };
  }
  return {
    slot: "manual",
    label: "手动补发",
    title: "金融市场跟踪日报",
    focus:
      "本次为手动补发/测试运行，数据按触发时点刷新；若在重大数据发布后运行，必须按已发布状态处理。",
    aShareFrame: "A 股：若已收盘，按当天收盘代表股；若盘中，按当前可得盘口快照。",
    usFrame: "美股：若已开盘，按当前 ETF 快照；若未开盘，以上一交易日和盘前代理为主。",
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
        "数据已发布，判断重点从“预期差”切换到市场吸收情况：美元/长债收益率、QQQ/SMH、GLD 和 BTC 的即时反应更重要。",
      conclusion:
        headlineMom <= 0.2 && coreMom <= 0.3
          ? "CPI 未显著偏热，风险资产修复可观察，但仍需 PPI 和 FOMC + SEP 确认。"
          : "CPI 压力仍不低，降息交易难以单靠一次数据完全打开，风险资产反弹需要二次确认。",
      source: "BLS public API",
    };
  } catch (error) {
    return {
      status: "released_unverified",
      statusLabel: "已发布 / 官方值暂未抓到",
      knownInfo:
        "当前时间已过 6/10 20:30 北京时间(BJT)，CPI 应按已发布事件处理；本次 BLS(美国劳工统计局)API 抓取超时或未返回 5 月值。",
      scenario:
        "官方数值缺口下，先用市场反应代理判断：若美元/收益率回落且 QQQ/SMH、GLD、BTC 同步修复，市场按偏冷或不热定价；反之按偏热定价。",
      conclusion:
        "不能再写“CPI 前”。本次结论以已发布后的跨资产反应为准，并在来源缺口中标记 CPI 官方实际值待补抓。",
      source: `BLS public API unavailable: ${error.message}`,
    };
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

function topSectorLine(rows, names) {
  return names
    .map((name) => rows.find((row) => row.name === name))
    .filter(Boolean)
    .map((row) => `${row.name} ${pct(row.pct)}`)
    .join("，");
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
const fileName = `${now.date}-${now.hm}-market-brief.html`;
const outputPath = `reports/daily/${fileName}`;

const [btcRaw, ethRaw, solRaw, us, aShare] = await Promise.all([
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
  runJson("node", ["skills/financial-market-intelligence/scripts/a_share_sector_snapshot.mjs"]),
]);

const btc = cryptoSummary(btcRaw);
const eth = cryptoSummary(ethRaw);
const sol = cryptoSummary(solRaw);
const fearGreed =
  btcRaw?.sentiment?.fearGreed?.data?.[0] ??
  ethRaw?.sentiment?.fearGreed?.data?.[0] ??
  solRaw?.sentiment?.fearGreed?.data?.[0] ??
  {};

const spy = findUs(us, "SPY");
const qqq = findUs(us, "QQQ");
const smh = findUs(us, "SMH");
const tlt = findUs(us, "TLT");
const uup = findUs(us, "UUP");
const gld = findUs(us, "GLD");
const iwm = findUs(us, "IWM");
const hyg = findUs(us, "HYG");
const lqd = findUs(us, "LQD");

const aiRows = aShare?.baskets?.["科技/半导体/AI"] ?? [];
const dividendRows = aShare?.baskets?.["红利/高股息"] ?? [];
const financeRows = aShare?.baskets?.["金融/券商"] ?? [];
const propertyRows = aShare?.baskets?.["地产链/消费"] ?? [];
const newEnergyRows = aShare?.baskets?.["新能源/顺周期"] ?? [];

const aiLine = topSectorLine(aiRows, ["工业富联", "北方华创", "立讯精密", "中芯国际", "海光信息"]);
const propertyLine = topSectorLine(propertyRows, ["中国中免", "贵州茅台", "美的集团", "万科A", "五粮液", "保利发展"]);
const newEnergyLine = topSectorLine(newEnergyRows, ["隆基绿能", "宁德时代", "紫金矿业", "比亚迪"]);

const previousNote = await previousReportNote(fileName);
const publicUrl = `${pagesBase}/${outputPath}`;

const macroReaction =
  cpi.status === "pending"
    ? "CPI 尚未发布，跨资产反应等待 20:30 北京时间(BJT)后的美元、长债、QQQ/SMH、GLD 和 BTC 确认。"
    : `CPI 已进入已发布状态；当前代理反应：QQQ ${pct(qqq.percentChange)}，SMH ${pct(smh.percentChange)}，TLT(长期美债 ETF) ${pct(tlt.percentChange)}，UUP(美元 ETF) ${pct(uup.percentChange)}，GLD(黄金 ETF) ${pct(gld.percentChange)}，BTC ${fmt(btc.mark, 0)}。若科技/黄金/加密修复且美元走弱，说明市场按“不热/偏冷”吸收；反之说明通胀压力仍压制风险资产。`;

const cpiActionText =
  cpi.status === "pending"
    ? "CPI 前不追高 beta，等实际值和第一轮市场反应。"
    : "CPI 已发布，判断从“等数据”切换为“看市场吸收”：科技、黄金、加密能否延续修复，以及美元/收益率是否回落。";

const usConclusion =
  context.slot === "morning"
    ? `早报以美股刚收盘数据为核心：SPY ${pct(spy.percentChange)}，QQQ ${pct(qqq.percentChange)}，SMH ${pct(smh.percentChange)}。${cpiActionText}`
    : `晚报以美股盘前/开盘初期和上一交易日数据为代理：SPY ${pct(spy.percentChange)}，QQQ ${pct(qqq.percentChange)}，SMH ${pct(smh.percentChange)}。${cpiActionText}`;

const aShareConclusion =
  context.slot === "morning"
    ? `早报看昨日收盘和今日开盘初期：AI/半导体 ${aiLine || "缺失"}；地产消费 ${propertyLine || "缺失"}。`
    : `晚报看当天 A 股收盘后代表股：AI/半导体 ${aiLine || "缺失"}；地产消费 ${propertyLine || "缺失"}；新能源/顺周期 ${newEnergyLine || "缺失"}。`;

const headlineText =
  cpi.status === "pending"
    ? `加密仍需先按弱修复处理，美股科技修复质量取决于 CPI(消费者价格指数)和利率，A 股呈现 AI(人工智能)/半导体强于地产消费的结构分化；${context.label}主策略仍是防守中观察。`
    : `CPI(消费者价格指数)已发布后，报告重点从“等数据”切换到“看市场吸收”。${usConclusion} ${aShareConclusion} 加密仍用 BTC 与 4小时 VWAP、资金费率和 OI 验证反弹质量。`;

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
      @media (max-width:900px) { .page{padding:18px 12px 36px;} .report-header,.section{padding:20px 16px;} h1{font-size:28px;} .bluf,.grid-2,.grid-4{grid-template-columns:1fr;} table{min-width:920px;} }
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
          <span class="pill">数据：Hyperliquid 加密永续 / Nasdaq(纳斯达克) ETF(交易所交易基金)代理 / 腾讯 A 股个股行情</span>
          <span class="pill">归档：${fileName}</span>
        </div>
      </header>

      <section class="section bluf">
        <div>
          <h2>一句话结论</h2>
          <div class="headline-call">${htmlEscape(headlineText)}</div>
        </div>
        <aside class="watch-box">
          <strong>本轮已实际下钻的数据</strong>
          <ul>
            <li>${htmlEscape(context.focus)}</li>
            <li>加密：BTC(比特币)、ETH(以太坊)、SOL(Solana)永续价格、K 线、资金费率(funding)、未平仓合约(OI)、盘口、24小时成交。</li>
            <li>美股/黄金：SPY、QQQ、SMH、TLT、UUP、HYG、LQD、GLD 等 ETF 代理。${htmlEscape(context.usFrame)}</li>
            <li>A 股：代表个股行情，覆盖科技/半导体/AI、红利/高股息、金融/券商、地产链/消费、新能源/顺周期。${htmlEscape(context.aShareFrame)}</li>
            <li>宏观事件：${htmlEscape(cpi.statusLabel)}，${htmlEscape(cpi.source)}。</li>
          </ul>
        </aside>
      </section>

      <section class="section">
        <h2>重点转向提醒</h2>
        <div class="grid-4">
          <div class="card"><p class="metric">加密 Crypto</p><p class="verdict"><span class="tag tag-risk">${btc.bias}</span></p><p>BTC 标记价格 ${fmt(btc.mark, 0)}，4小时成交量加权均价(VWAP) ${fmt(btc.h4Vwap, 0)}。低于 VWAP 时，反弹质量仍不足。</p></div>
          <div class="card"><p class="metric">A 股 A Shares</p><p class="verdict"><span class="tag tag-warn">结构分化</span></p><p>${htmlEscape(aShareConclusion)}</p></div>
          <div class="card"><p class="metric">美股 U.S. Equities</p><p class="verdict"><span class="tag tag-warn">${cpi.status === "pending" ? "等待 CPI" : "看吸收质量"}</span></p><p>${htmlEscape(usConclusion)}</p></div>
          <div class="card"><p class="metric">黄金 Gold</p><p class="verdict"><span class="tag tag-neutral">弱修复</span></p><p>GLD ${pct(gld.percentChange)}，7个交易日 ${pct(gld.sevenTradingDayPct)}；美元和利率仍是短线约束。</p></div>
        </div>
      </section>

      <section class="section">
        <h2>昨日判断回溯</h2>
        ${renderTable(["上一份判断", "本轮数据验证", "结果", "修正"], [
          ["加密偏空/弱修复，不追反弹。", `BTC 价格 ${fmt(btc.mark, 0)}，低于 4小时 VWAP ${fmt(btc.h4Vwap, 0)}；恐惧贪婪指数 ${fearGreed.value ?? "缺失"}。`, "正确", "维持偏空/弱修复。"],
          ["美股通胀数据决定修复质量。", `${htmlEscape(cpi.knownInfo)} ${htmlEscape(macroReaction)}`, cpi.status === "pending" ? "待验证" : "已切换为发布后验证", cpi.status === "pending" ? "继续等待 CPI 实际值。" : "不再使用“CPI 前”逻辑，改看发布后市场吸收。"],
          ["A 股防守观察。", `${htmlEscape(aShareConclusion)}`, "部分正确", "修正为结构修复，不是全面进攻；晚报以收盘验证早报。"],
          ["黄金短线弱。", `GLD 7个交易日 ${pct(gld.sevenTradingDayPct)}，30日 ${pct(gld.thirtyCalendarDayPct)}。`, "正确", "维持短线谨慎，中长期支撑待观察。"],
        ])}
        <p class="note">${htmlEscape(previousNote)}</p>
      </section>

      <section class="section">
        <h2>政策与数据日历</h2>
        ${renderTable(["日期", "事件", "已知信息", "可能结果", "我的结论"], [
          ["6/10 20:30 北京时间(BJT)", "美国 5 月 CPI(消费者价格指数)", cpi.knownInfo, cpi.scenario, cpi.conclusion],
          ["6/11 20:30 北京时间(BJT)", "美国 5 月 PPI(生产者价格指数)", "BLS 日历显示 PPI 次日发布。", "高 PPI 强化通胀粘性；低 PPI 缓和 CPI 后的二次压力。", "PPI 是 CPI 后的确认项，不单独提前押方向。"],
          ["6/16-17", "FOMC + SEP(美联储议息会议 + 经济预测摘要)", "Fed(美联储)会议带经济预测和点阵图。", "偏鹰：估值继续承压；偏鸽：美股成长和加密延续修复。", "当前资金更怕高利率更久，SEP 是半月级方向锚。"],
          ["6/25", "PCE / GDP(个人消费支出价格指数 / 国内生产总值)", "BEA(美国经济分析局)日程显示 PCE 和 GDP 三读发布。", "PCE 高：降息交易退潮；PCE 低：风险偏好改善。", "若 CPI/PPI/PCE 连续降温，30日趋势才有机会转中性偏多。"],
        ])}
      </section>

      <section class="section">
        <h2>今日核心资产</h2>
        ${renderTable(["资产", "今日状态", "7日回顾", "30日回顾", "未来1日", "未来7日", "未来30日", "未来半年"], [
          ["加密", `BTC ${fmt(btc.mark, 0)}；ETH ${fmt(eth.mark)}；SOL ${fmt(sol.mark)}。BTC ${btc.h4Vwap && btc.mark < btc.h4Vwap ? "低于" : "接近/高于"} 4小时 VWAP。`, "按 24小时和夜盘实时数据刷新，早晚报都用最新永续数据。", "BTC 30日结构偏弱，风险偏好仍差。", cpi.status === "pending" ? "偏空/不追反弹" : "看 CPI 后风险偏好吸收", "BTC 站回 4小时 VWAP 且资金费率/OI 健康才转中性", "需要宏观不再压制且 ETF/机构资金改善", "中性偏多潜力仍在，但取决于流动性和 ETF/机构资金回流"],
          ["A 股", aShareConclusion, context.slot === "evening" ? "晚报已覆盖当天收盘代表股。" : "早报覆盖昨日收盘和今日开盘初期，晚报补收盘验证。", "政策预期支撑，但基本面仍需信用和盈利确认。", "防守观察", "看政策、成交额、代表股扩散", "若信用改善，可从防守切轮动", "中性偏多，但不是无条件进攻"],
          ["美股", `SPY ${fmt(spy.last)} ${pct(spy.percentChange)}；QQQ ${fmt(qqq.last)} ${pct(qqq.percentChange)}；SMH ${fmt(smh.last)} ${pct(smh.percentChange)}。${context.usFrame}`, `SPY ${pct(spy.sevenTradingDayPct)}；QQQ ${pct(qqq.sevenTradingDayPct)}；SMH ${pct(smh.sevenTradingDayPct)}。`, `SPY ${pct(spy.thirtyCalendarDayPct)}；QQQ ${pct(qqq.thirtyCalendarDayPct)}；SMH ${pct(smh.thirtyCalendarDayPct)}。`, cpi.status === "pending" ? "等待 CPI" : "看 CPI 后吸收", cpi.status === "pending" ? "CPI 决定反弹质量" : "PPI/FOMC 确认 CPI 后方向", "高波动，科技估值看 TLT/UUP", "AI 主线仍强，但利率高位会压估值扩张"],
          ["黄金", `GLD ${fmt(gld.last)} ${pct(gld.percentChange)}。早晚报均取最新 ETF 代理快照。`, `GLD ${pct(gld.sevenTradingDayPct)}。`, `GLD ${pct(gld.thirtyCalendarDayPct)}。`, cpi.status === "pending" ? "看 CPI 后美元和实际利率" : "看 CPI 后美元/实际利率吸收", "若美元回落可修复，否则继续震荡", "中性，等待实际利率方向", "央行购金和地缘支撑仍在，中长期不悲观"],
        ])}
      </section>

      <section class="section">
        <h2>术语解释</h2>
        ${renderTable(["术语", "中文解释", "怎么用于判断"], [
          ["BJT", "北京时间", "报告时间统一用北京时间，方便对齐 A 股和飞书推送。"],
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
        ])}
        <p class="note"><strong>操作含义：</strong>“弱修复”不是做多信号，而是下跌后暂时止跌。BTC 只有站回关键 VWAP，且宏观数据发布后的风险偏好改善、ETF 资金流改善，才把 7日判断从偏空改为中性。当前宏观状态：${htmlEscape(cpi.statusLabel)}。</p>
      </section>

      <section class="section">
        <h2>美股与黄金专项：Nasdaq(纳斯达克) ETF(交易所交易基金)代理数据</h2>
        ${renderTable(["类别", "标的", "最新状态", "7个交易日", "30日", "我的结论"], [
          ["大盘", "SPY(标普500 ETF)", `${fmt(spy.last)}，${pct(spy.percentChange)}`, pct(spy.sevenTradingDayPct), pct(spy.thirtyCalendarDayPct), cpi.status === "pending" ? "发布前等待 CPI 确认。" : "CPI 后看指数能否维持修复。"],
          ["成长", "QQQ(纳斯达克100 ETF)", `${fmt(qqq.last)}，${pct(qqq.percentChange)}`, pct(qqq.sevenTradingDayPct), pct(qqq.thirtyCalendarDayPct), "长期强，短线利率敏感。"],
          ["半导体", "SMH(半导体 ETF)", `${fmt(smh.last)}，${pct(smh.percentChange)}`, pct(smh.sevenTradingDayPct), pct(smh.thirtyCalendarDayPct), cpi.status === "pending" ? "AI 主线最强，但数据前不追急拉。" : "AI 主线最强，CPI 后看利率是否继续压估值。"],
          ["小盘", "IWM(罗素2000 ETF)", `${fmt(iwm.last)}，${pct(iwm.percentChange)}`, pct(iwm.sevenTradingDayPct), pct(iwm.thirtyCalendarDayPct), "融资成本敏感，仍不是主攻方向。"],
          ["长债", "TLT(长期美债 ETF)", `${fmt(tlt.last)}，${pct(tlt.percentChange)}`, pct(tlt.sevenTradingDayPct), pct(tlt.thirtyCalendarDayPct), "利率压力未彻底解除。"],
          ["美元", "UUP(美元指数 ETF)", `${fmt(uup.last)}，${pct(uup.percentChange)}`, pct(uup.sevenTradingDayPct), pct(uup.thirtyCalendarDayPct), "美元偏强，压黄金和加密。"],
          ["信用", "HYG / LQD(高收益债 / 投资级债 ETF)", `HYG ${pct(hyg.percentChange)}，LQD ${pct(lqd.percentChange)}`, `HYG ${pct(hyg.sevenTradingDayPct)}，LQD ${pct(lqd.sevenTradingDayPct)}`, `HYG ${pct(hyg.thirtyCalendarDayPct)}，LQD ${pct(lqd.thirtyCalendarDayPct)}`, "信用未明显恶化，但也没给强风险偏好。"],
          ["黄金", "GLD(黄金 ETF)", `${fmt(gld.last)}，${pct(gld.percentChange)}`, pct(gld.sevenTradingDayPct), pct(gld.thirtyCalendarDayPct), "短线弱修复，中长期看央行购金/地缘。"],
        ])}
      </section>

      <section class="section">
        <h2>A 股专项</h2>
        ${renderTable(["板块", "代表个股", "当前判断", "背景原因", "操作含义", "失效条件"], [
          ["科技/半导体/AI", aiLine || "缺失", "强修复", "受美股半导体修复和国内 AI/算力预期影响。", "可以作为风险偏好修复观察项，但不追高。", "板块放量失败，或美股半导体回落。"],
          ["红利/高股息", topSectorLine(dividendRows, ["江苏银行", "工商银行", "农业银行", "长江电力", "中国神华", "中国石化"]) || "缺失", "分化防御", "银行和公用事业较稳，能源红利有回撤。", "降低波动，不等于所有红利股都会涨。", "成长板块持续强，资金从防御撤出。"],
          ["金融/券商", topSectorLine(financeRows, ["中国平安", "国泰君安", "中信证券", "华泰证券", "招商银行"]) || "缺失", "温和修复", "券商弹性需要成交额和政策催化。", "观察不抢，成交额放大后才提高权重。", "成交额回落或政策预期降温。"],
          ["地产链/消费", propertyLine || "缺失", "偏弱", "地产链和消费仍受需求、信用和收入预期约束。", "不作为进攻主线，等信用数据和销售改善。", "社融、地产销售、消费数据同步改善。"],
          ["新能源/顺周期", newEnergyLine || "缺失", "局部修复", "新能源有跌后修复，顺周期看商品价格和 PPI。", "先看龙头修复质量，不把全板块一起看多。", "PPI 继续走弱或行业价格/库存压力扩大。"],
        ])}
      </section>

      <section class="section">
        <h2>持续重要事项</h2>
        <div class="grid-2">
          <div class="card"><h3>美国通胀链</h3><p>CPI、PPI、PCE 是未来两周全市场定价核心。当前 CPI 状态：${htmlEscape(cpi.statusLabel)}。${htmlEscape(cpi.conclusion)}</p></div>
          <div class="card"><h3>Fed(美联储)利率路径</h3><p>强非农使 Fed 更难转鸽。FOMC + SEP 将决定半年维度风险资产估值空间。</p></div>
          <div class="card"><h3>加密衍生品结构</h3><p>资金费率、未平仓合约、成交量加权均价和盘口已能每日刷新；下一步补清算热力图、多空比例和 ETF 资金流。</p></div>
          <div class="card"><h3>A 股政策与信用</h3><p>A 股要从结构修复转全面进攻，需要政策、信用、成交额和盈利共同确认。</p></div>
        </div>
      </section>

      <section class="section">
        <h2>观察清单 Watchlist</h2>
        ${renderTable(["观察对象", "触发条件", "影响资产", "触发后结论如何变化"], [
          ["美国 CPI", "低于预期 / 高于预期", "加密、美股、黄金、A 股情绪", "低于预期：风险资产修复；高于预期：防守继续。"],
          ["BTC ETF 资金流", "连续 2-3 日净流入", "BTC、ETH、山寨", "加密从偏空转中性。"],
          ["A 股成交额", "持续放大且科技/金融共振", "A 股板块", "从防守中观察修复转向进攻。"],
          ["10年期美国国债收益率", "明显回落", "美股科技、黄金、加密", "估值压力缓和，修复质量提升。"],
          ["美元指数", "转弱", "黄金、加密、新兴市场", "黄金和风险资产修复概率上升。"],
        ])}
      </section>

      <section class="section">
        <h2>来源和数据缺口</h2>
        <p>已确认数据源：Hyperliquid public API(加密永续公开接口)、Alternative.me 恐惧贪婪指数、Ethereum public RPC(以太坊公开节点)、Nasdaq ETF quote/historical API(纳斯达克 ETF 行情/历史接口)、腾讯 A 股公开行情、BLS(美国劳工统计局)日程/API、Fed(美联储)FOMC 日历、BEA(美国经济分析局)日程。</p>
        <p>早晚报数据时点规则：早报以美股刚收盘和 A 股开盘初期为主；晚报以当天 A 股收盘、加密实时数据、黄金/美元/长债 ETF 代理和美股盘前/开盘初期为主。加密和黄金每次均取最新可得数据。</p>
        <p>已解决缺口：加密永续价格/K线/资金费率/未平仓合约/盘口、ETH gas、市场情绪代理、美股指数/板块/美元/长债/信用/黄金 ETF 代理、A 股代表个股报价。</p>
        <p>仍待补缺口：A 股北向资金、融资余额、行业完整涨跌榜仍需增强；加密清算热力图、多空比例、ETF 资金流、链上/社交情绪仍需 Coinalyze、Farside、DeFiLlama、LunarCrush、Alva 等源继续接入。宏观数据若 BLS API 超时，会明确标注并使用跨资产反应作为临时代理。</p>
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
  reportSlot: context.slot,
  reportLabel: context.label,
  headline: headlineText,
  turns: [
    `加密：BTC ${fmt(btc.mark, 0)}，4小时 VWAP ${fmt(btc.h4Vwap, 0)}，${btc.bias}。`,
    `宏观：CPI 状态为${cpi.statusLabel}；${cpi.conclusion}`,
    `美股：${usConclusion}`,
    `A 股：${aShareConclusion}`,
    `黄金：GLD ${pct(gld.percentChange)}，7个交易日 ${pct(gld.sevenTradingDayPct)}。`,
  ],
};

await writeFile("reports/daily/latest-summary.json", JSON.stringify(summary, null, 2));

console.log(JSON.stringify(summary, null, 2));
