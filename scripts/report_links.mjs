export const pagesBase = "https://junxinhuang.github.io/fin-market-brief";

export const reportLinks = {
  macro: {
    label: "宏观分析",
    url: `${pagesBase}/reports/macro/dashboard.html`,
  },
  crypto: {
    label: "虚拟货币交易",
    url: `${pagesBase}/reports/crypto/daily/latest.html`,
  },
  marketLatest: {
    label: "市场早晚班",
    url: `${pagesBase}/reports/daily/latest.html`,
  },
};

export function formatReportLinks({ marketUrl = reportLinks.marketLatest.url } = {}) {
  return [
    `${reportLinks.macro.label}: ${reportLinks.macro.url}`,
    `${reportLinks.crypto.label}: ${reportLinks.crypto.url}`,
    `${reportLinks.marketLatest.label}: ${marketUrl}`,
  ];
}
