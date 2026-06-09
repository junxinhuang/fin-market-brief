---
name: market-data-deep-diver
description: Use when financial market analysis requires drilling into live or recent data instead of merely saying to watch a variable. Fetch or search for prices, ETF flows, macro expectations, K-line structure, rates, FX, funding, open interest, sector performance, and policy calendars; then produce a conclusion, operation meaning, invalidation condition, and confidence.
---

# Market Data Deep Diver

## Role

Turn vague dependencies into completed analysis. If a market conclusion depends on a variable, actively fetch or search that variable and summarize its current implication.

## Workflow

1. Identify all variables behind the conclusion.
2. Fetch current or latest available data.
3. Compare with market expectation, previous value, or recent trend.
4. Decide whether each variable is bullish, bearish, or neutral.
5. Combine variables into a clear conclusion.
6. Explain operation meaning and invalidation condition.
7. If a source is unavailable, use a backup and lower confidence.

## Required Output

```text
变量：
最新信息：
对资产影响：利多 / 利空 / 中性
原因：
操作含义：
失效条件：
置信度：
```

## Domain Checks

### Crypto

Check BTC/ETH price, ETF flows, funding, open interest, liquidations, stablecoin supply, BTC dominance, dollar, Treasury yields, and regulatory news.

### A Shares

Check index levels, sector performance, turnover, northbound flows if available, margin balance if available, RMB, PBOC operations, policy news, and macro data.

### U.S. Equities

Check S&P 500, Nasdaq, Dow, Russell 2000, Treasury yields, dollar, VIX, sector performance, Fed expectations, CPI/PPI/PCE/payrolls, and key earnings.

### Gold

Check gold price, dollar, Treasury yields, real yields if available, ETF flows, CFTC COT, central bank buying, and geopolitical risk.

