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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForPublishedUrl(url) {
  if (!url) return;

  const attempts = 18;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const res = await fetch(url, {
        method: "HEAD",
        headers: { "cache-control": "no-cache" },
        signal: AbortSignal.timeout(10000),
      });
      if (res.ok) return;
    } catch {
      // GitHub Pages can briefly return network errors while the new commit is deploying.
    }
    if (attempt < attempts) await sleep(10000);
  }
}

async function latestMarketUrl() {
  try {
    const summary = JSON.parse(await readFile("reports/daily/latest-summary.json", "utf8"));
    return summary.publicUrl || reportLinks.marketLatest.url;
  } catch {
    return reportLinks.marketLatest.url;
  }
}

const title = argValue("title", "");
const marketUrl = argValue("market-url", await latestMarketUrl());
await waitForPublishedUrl(reportLinks.macro.url);
await waitForPublishedUrl(reportLinks.crypto.url);
await waitForPublishedUrl(marketUrl);
const message = [title, title ? "" : null, ...formatReportLinks({ marketUrl })].filter(Boolean).join("\n");

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
