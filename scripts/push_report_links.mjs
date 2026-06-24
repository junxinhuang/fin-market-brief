#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { formatReportLinks, reportLinks } from "./report_links.mjs";

const webhook = process.env.FEISHU_WEBHOOK;

if (!webhook) {
  throw new Error("Missing FEISHU_WEBHOOK environment variable.");
}

function argValue(name, fallback = null) {
  const prefix = `--${name}=`;
  const arg = process.argv.slice(2).find((item) => item.startsWith(prefix));
  return arg ? arg.slice(prefix.length) : fallback;
}

async function latestMarketUrl() {
  try {
    const summary = JSON.parse(await readFile("reports/daily/latest-summary.json", "utf8"));
    return summary.publicUrl || reportLinks.marketLatest.url;
  } catch {
    return reportLinks.marketLatest.url;
  }
}

const title = argValue("title", "报告链接");
const marketUrl = argValue("market-url", await latestMarketUrl());
const message = [title, "", ...formatReportLinks({ marketUrl })].join("\n");

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
