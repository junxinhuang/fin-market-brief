#!/usr/bin/env node

const { execFileSync } = await import("node:child_process");

const keywords = (process.argv.slice(2).length ? process.argv.slice(2) : ["BTC", "ETH", "SOL", "Bitcoin", "Ethereum", "Solana"])
  .map((item) => item.trim())
  .filter(Boolean);

const sources = [
  { name: "Cointelegraph", url: "https://cointelegraph.com/rss", type: "rss" },
  { name: "Decrypt", url: "https://decrypt.co/feed", type: "rss" },
  { name: "Blockworks", url: "https://blockworks.co/feed", type: "atom" },
];

const narrativeRules = [
  { tag: "macro", patterns: [/\bfed\b/i, /\bcpi\b/i, /\bppi\b/i, /\brate(s)?\b/i, /\btreasury\b/i, /\bdollar\b/i, /\binflation\b/i, /\brecession\b/i, /\biran\b/i, /\btariff/i] },
  { tag: "regulation", patterns: [/\bsec\b/i, /\bcftc\b/i, /\blawsuit\b/i, /\bcourt\b/i, /\bregulat/i, /\bban\b/i, /\bjurisdiction\b/i, /\bsenate\b/i] },
  { tag: "etf_flow", patterns: [/\betf(s)?\b/i, /\bblackrock\b/i, /\bfidelity\b/i, /\bibit\b/i, /\beth etf\b/i, /\bspot bitcoin\b/i] },
  { tag: "security", patterns: [/\bhack/i, /\bexploit/i, /\bscam/i, /\blaunder/i, /\bphishing\b/i, /\bbreach\b/i] },
  { tag: "protocol", patterns: [/\bupgrade\b/i, /\bfork\b/i, /\bstaking\b/i, /\bvalidator\b/i, /\bl2\b/i, /\blayer 2\b/i, /\bmainnet\b/i] },
  { tag: "ai", patterns: [/\bai\b/i, /\bartificial intelligence\b/i, /\bagent(s)?\b/i, /\bworldcoin\b/i, /\bwld\b/i] },
  { tag: "defi", patterns: [/\bdefi\b/i, /\bdex\b/i, /\baave\b/i, /\blending\b/i, /\bstablecoin(s)?\b/i, /\btvl\b/i] },
  { tag: "meme", patterns: [/\bmeme\b/i, /\bdoge\b/i, /\bshib\b/i, /\bpepe\b/i, /\bfartcoin\b/i] },
];

const assetAliases = {
  BTC: [/\bbtc\b/i, /\bbitcoin\b/i],
  ETH: [/\beth\b/i, /\bether\b/i, /\bethereum\b/i],
  SOL: [/\bsol\b/i, /\bsolana\b/i],
  NEAR: [/\bnear protocol\b/i, /\$near\b/i],
  WLD: [/\bwld\b/i, /\bworldcoin\b/i],
  HYPE: [/\bhype\b/i, /\bhyperliquid\b/i],
  ZEC: [/\bzec\b/i, /\bzcash\b/i],
};

function fetchText(url, timeoutMs = 12000) {
  return execFileSync("curl", ["-L", "-sS", "--max-time", String(Math.ceil(timeoutMs / 1000)), url], {
    encoding: "utf8",
    maxBuffer: 12 * 1024 * 1024,
  });
}

function decode(value) {
  return String(value || "")
    .replace(/<!\[CDATA\[(.*?)\]\]>/gs, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function tagNarratives(text) {
  return narrativeRules.filter((rule) => rule.patterns.some((pattern) => pattern.test(text))).map((rule) => rule.tag);
}

function matchedKeywords(text) {
  return keywords.filter((keyword) => {
    const aliases = assetAliases[keyword.toUpperCase()] || [new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i")];
    return aliases.some((pattern) => pattern.test(text));
  });
}

function parseRss(xml, source) {
  const itemBlocks = [...xml.matchAll(/<item\b[\s\S]*?<\/item>/gi)].map((match) => match[0]);
  return itemBlocks.map((block) => ({
    source,
    title: decode(block.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]),
    link: decode(block.match(/<link[^>]*>([\s\S]*?)<\/link>/i)?.[1] || block.match(/<guid[^>]*>([\s\S]*?)<\/guid>/i)?.[1]),
    publishedAt: decode(block.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i)?.[1]),
    summary: decode(block.match(/<description[^>]*>([\s\S]*?)<\/description>/i)?.[1]),
  }));
}

function parseAtom(xml, source) {
  const itemBlocks = [...xml.matchAll(/<entry\b[\s\S]*?<\/entry>/gi)].map((match) => match[0]);
  return itemBlocks.map((block) => ({
    source,
    title: decode(block.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]),
    link: decode(block.match(/<link[^>]*href="([^"]+)"/i)?.[1] || block.match(/<id[^>]*>([\s\S]*?)<\/id>/i)?.[1]),
    publishedAt: decode(block.match(/<published[^>]*>([\s\S]*?)<\/published>/i)?.[1] || block.match(/<updated[^>]*>([\s\S]*?)<\/updated>/i)?.[1]),
    summary: decode(block.match(/<summary[^>]*>([\s\S]*?)<\/summary>/i)?.[1] || block.match(/<content[^>]*>([\s\S]*?)<\/content>/i)?.[1]),
  }));
}

const sourceResults = [];
const articles = [];

for (const source of sources) {
  try {
    const xml = fetchText(source.url);
    const parsed = source.type === "atom" ? parseAtom(xml, source.name) : parseRss(xml, source.name);
    sourceResults.push({ source: source.name, status: "ok", count: parsed.length });
    articles.push(...parsed);
  } catch (error) {
    sourceResults.push({ source: source.name, status: "error", error: String(error?.message || error) });
  }
}

const enriched = articles
  .map((article) => {
    const text = `${article.title} ${article.summary}`;
    return {
      ...article,
      matchedKeywords: matchedKeywords(text),
      narrativeTags: tagNarratives(text),
    };
  })
  .filter((article) => article.title && (article.matchedKeywords.length || article.narrativeTags.length))
  .sort((a, b) => {
    const at = Date.parse(a.publishedAt) || 0;
    const bt = Date.parse(b.publishedAt) || 0;
    return bt - at;
  })
  .slice(0, 30);

const byNarrative = {};
for (const article of enriched) {
  for (const tag of article.narrativeTags) {
    byNarrative[tag] = (byNarrative[tag] || 0) + 1;
  }
}

console.log(
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      keywords,
      sources: sourceResults,
      gaps:
        "This RSS layer is a narrative/news catalyst scanner, not full social sentiment. CoinDesk RSS timed out in this environment and is not a hard dependency.",
      narrativeCounts: byNarrative,
      articles: enriched,
    },
    null,
    2
  )
);
