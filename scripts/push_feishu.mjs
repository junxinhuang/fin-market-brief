#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { formatReportLinks } from "./report_links.mjs";

const webhook = process.env.FEISHU_WEBHOOK;

if (!webhook) {
  throw new Error("Missing FEISHU_WEBHOOK environment variable.");
}

function textBlock(lines) {
  return lines.filter(Boolean).join("\n");
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForPublishedUrl(url) {
  if (!url) return { ok: false, note: "未提供完整报告 URL" };

  const attempts = 18;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const res = await fetch(url, {
        method: "HEAD",
        headers: { "cache-control": "no-cache" },
        signal: AbortSignal.timeout(10000),
      });
      if (res.ok) return { ok: true, note: `GitHub Pages 已确认发布(${attempt}/${attempts})` };
    } catch {
      // GitHub Pages can briefly return network errors while the new commit is deploying.
    }

    if (attempt < attempts) await sleep(10000);
  }

  return {
    ok: false,
    note: "GitHub Pages 暂未确认 200，链接可能仍在发布中；通常稍等 1-3 分钟会恢复",
  };
}

const summary = JSON.parse(await readFile("reports/daily/latest-summary.json", "utf8"));
const reportLabel = summary.reportLabel || "日报";
const publishCheck = await waitForPublishedUrl(summary.publicUrl);

const message = textBlock([
  `金融市场跟踪${reportLabel}｜${summary.generatedAtBjt}`,
  "",
  `一句话结论：${summary.headline}`,
  "",
  "重点转向提醒：",
  ...(summary.turns || []).map((line) => `- ${line}`),
  "",
  "今日核心操作含义：",
  "- 加密：弱修复不是做多信号，BTC 未重新站稳关键成交量加权均价(VWAP)前不追反弹。",
  "- 美股：宏观数据发布前看预期差，发布后看美元/长债收益率、QQQ/SMH 和信用资产的吸收质量。",
  "- 黄金：每次取最新可得数据，短线看美元和实际利率，中长期支撑仍来自央行购金和地缘风险。",
  "",
  ...formatReportLinks({ marketUrl: summary.publicUrl }),
  `链接状态：${publishCheck.note}`,
]);

const res = await fetch(webhook, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    msg_type: "text",
    content: { text: message },
  }),
});

const body = await res.text();
if (!res.ok) {
  throw new Error(`Feishu webhook failed: ${res.status} ${body}`);
}

console.log(body);
