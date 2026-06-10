#!/usr/bin/env node

import { readFile } from "node:fs/promises";

const webhook = process.env.FEISHU_WEBHOOK;

if (!webhook) {
  throw new Error("Missing FEISHU_WEBHOOK environment variable.");
}

function textBlock(lines) {
  return lines.filter(Boolean).join("\n");
}

const summary = JSON.parse(await readFile("reports/daily/latest-summary.json", "utf8"));
const reportLabel = summary.reportLabel || "日报";

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
  "- A 股：AI/半导体强于地产消费，属于结构修复；成交额和信用未确认前仍以轮动看待。",
  "- 黄金：每次取最新可得数据，短线看美元和实际利率，中长期支撑仍来自央行购金和地缘风险。",
  "",
  `完整 HTML 报告：${summary.publicUrl}`,
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
