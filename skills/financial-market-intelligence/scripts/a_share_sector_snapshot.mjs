#!/usr/bin/env node

const { execFileSync } = await import("node:child_process");

const baskets = {
  "科技/半导体/AI": [
    ["688981", "中芯国际"],
    ["688256", "寒武纪"],
    ["688041", "海光信息"],
    ["603019", "中科曙光"],
    ["601138", "工业富联"],
    ["002371", "北方华创"],
    ["002475", "立讯精密"],
  ],
  "红利/高股息": [
    ["601088", "中国神华"],
    ["600900", "长江电力"],
    ["601398", "工商银行"],
    ["601288", "农业银行"],
    ["600919", "江苏银行"],
    ["600028", "中国石化"],
    ["600887", "伊利股份"],
  ],
  "金融/券商": [
    ["600030", "中信证券"],
    ["601211", "国泰君安"],
    ["600837", "海通证券"],
    ["601688", "华泰证券"],
    ["601318", "中国平安"],
    ["600036", "招商银行"],
  ],
  "地产链/消费": [
    ["000002", "万科A"],
    ["600048", "保利发展"],
    ["000333", "美的集团"],
    ["600519", "贵州茅台"],
    ["000858", "五粮液"],
    ["601888", "中国中免"],
  ],
  "新能源/顺周期": [
    ["300750", "宁德时代"],
    ["601012", "隆基绿能"],
    ["002594", "比亚迪"],
    ["600309", "万华化学"],
    ["600019", "宝钢股份"],
    ["601899", "紫金矿业"],
  ],
};

function marketPrefix(code) {
  if (code.startsWith("6")) return "1";
  return "0";
}

function eastmoneyScale(field, value) {
  if (value === "-" || value === null || value === undefined) return null;
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  if (["f2", "f3", "f8", "f9", "f10", "f62"].includes(field)) return num / 100;
  return num;
}

function amountYi(value) {
  if (!Number.isFinite(value)) return null;
  return value / 100000000;
}

async function fetchQuote(code, name) {
  const secid = `${marketPrefix(code)}.${code}`;
  const fields = [
    "f12",
    "f14",
    "f2",
    "f3",
    "f5",
    "f6",
    "f8",
    "f9",
    "f10",
    "f62",
    "f115",
  ].join(",");
  const url = `https://push2.eastmoney.com/api/qt/stock/get?secid=${secid}&fields=${fields}`;
  const res = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0",
      referer: "https://quote.eastmoney.com/",
      accept: "application/json,text/plain,*/*",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  const json = await res.json();
  const data = json?.data;
  if (!data) throw new Error("empty Eastmoney response");
  return {
    code,
    name: data.f14 || name,
    price: eastmoneyScale("f2", data.f2),
    pct: eastmoneyScale("f3", data.f3),
    volumeHands: data.f5 ?? null,
    amountYi: amountYi(Number(data.f6)),
    turnoverPct: eastmoneyScale("f8", data.f8),
    peTtm: eastmoneyScale("f9", data.f9),
    pb: eastmoneyScale("f10", data.f10),
    mainNetInflowYi: amountYi(eastmoneyScale("f62", data.f62) * 100000000),
    raw: data,
  };
}

function tencentSymbol(code) {
  return `${code.startsWith("6") ? "sh" : "sz"}${code}`;
}

function fetchTencentQuotes(codes) {
  const symbols = codes.map(([code]) => tencentSymbol(code)).join(",");
  const text = execFileSync(
    "curl",
    ["-sS", "--max-time", "12", `https://qt.gtimg.cn/q=${symbols}`],
    { encoding: "binary", maxBuffer: 10 * 1024 * 1024 },
  );
  const rows = {};
  for (const line of text.split("\n")) {
    const match = line.match(/v_(sh|sz)(\d+)="([^"]*)"/);
    if (!match) continue;
    const code = match[2];
    const parts = match[3].split("~");
    const price = Number(parts[3]);
    const prevClose = Number(parts[4]);
    const pct = Number(parts[32]);
    rows[code] = {
      code,
      price: Number.isFinite(price) ? price : null,
      pct: Number.isFinite(pct)
        ? pct
        : Number.isFinite(price) && Number.isFinite(prevClose) && prevClose
          ? ((price / prevClose - 1) * 100)
          : null,
      open: Number(parts[5]) || null,
      high: Number(parts[33]) || null,
      low: Number(parts[34]) || null,
      amountYi: Number.isFinite(Number(parts[37])) ? Number(parts[37]) / 10000 : null,
      turnoverPct: Number(parts[38]) || null,
      peTtm: Number(parts[39]) || null,
      timestamp: parts[30] || null,
    };
  }
  return rows;
}

const output = {
  source: "Eastmoney quote API primary, Tencent quote API fallback",
  generatedAt: new Date().toISOString(),
  baskets: {},
};

for (const [sector, stocks] of Object.entries(baskets)) {
  const rows = [];
  let tencentRows = null;
  for (const [code, name] of stocks) {
    try {
      rows.push({ ...(await fetchQuote(code, name)), dataSource: "Eastmoney" });
    } catch (error) {
      try {
        if (!tencentRows) tencentRows = fetchTencentQuotes(stocks);
        if (!tencentRows[code]) throw new Error("empty Tencent response");
        rows.push({ code, name, ...tencentRows[code], dataSource: "Tencent quote API" });
      } catch (fallbackError) {
        rows.push({
          code,
          name,
          error: `Eastmoney: ${String(error?.message || error)}; Tencent: ${String(
            fallbackError?.message || fallbackError,
          )}`,
        });
      }
    }
  }
  output.baskets[sector] = rows;
}

console.log(JSON.stringify(output, null, 2));
