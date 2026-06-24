#!/usr/bin/env node

import { readFile } from "node:fs/promises";
import { formatReportLinks, reportLinks } from "./report_links.mjs";

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
await waitForPublishedUrl(summary.publicUrl);
await waitForPublishedUrl(reportLinks.macro.url);
await waitForPublishedUrl(reportLinks.crypto.url);

const message = textBlock(formatReportLinks({ marketUrl: summary.publicUrl }));

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
