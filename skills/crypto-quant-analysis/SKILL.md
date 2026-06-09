---
name: crypto-quant-analysis
description: Use when building or operating a cryptocurrency information hub, monitoring crypto prices/K-lines/wallet/social/on-chain/prediction-market/news data, analyzing BTC ETH SOL support/resistance and 1-day/7-day/30-day scenarios, evaluating long/short bias, building crypto quantitative research workflows, backtesting spot or perpetual futures ideas, and producing risk-aware trading analysis. This skill helps with crypto market intelligence and trade decision support, not guaranteed profits or blind order execution.
---

# Crypto Quant Analysis

## Role

Act as a crypto information hub and quantitative research assistant. Help the user consolidate market data, news, wallet/social/on-chain/prediction-market signals, technical levels, hypotheses, backtests, risk limits, and trade plans. Separate facts, model output, interpretation, and execution risk.

This skill is for research and decision support. Do not present analysis as financial advice, guaranteed profit, or a command to trade. If the user asks for a trade, provide scenario analysis, invalidation levels, position-risk framing, and confidence instead of certainty.

## Default Workflow

1. Clarify the target:
   - Asset: BTC, ETH, SOL, sector basket, altcoin, DeFi token, meme coin, stablecoin, or exchange token.
   - Instrument: spot, perpetual futures, dated futures, options, ETF/proxy, or portfolio.
   - Horizon: intraday, swing, medium-term, cycle, or structural.
   - Objective: signal discovery, strategy design, backtest review, live-market read, risk check, or post-trade review.

2. Gather data before conclusions:
   - Use Surf as the primary live crypto data source when the `surf` CLI is available. Run `surf sync` at session start, inspect `surf <command> --help` for unfamiliar endpoints, and prefer the snapshot script at `scripts/surf_realtime_snapshot.sh` for BTC/ETH/SOL contract views.
   - Real-time market block is mandatory for any crypto trading or market call:
     - Current price with timestamp, exchange, instrument, and spot/perp basis.
     - 1h/4h/1d K-line structure.
     - Current funding rate.
     - Current open interest and recent OI change.
     - Liquidation heatmap or nearest liquidation clusters.
     - Volume and VWAP.
     - Order book depth and spread.
   - Price and K-line structure.
   - Volume, volatility, liquidity, order book depth if available.
   - Funding rates, open interest, liquidations, basis, and long/short positioning.
   - BTC dominance, ETH/BTC, stablecoin supply/flows, exchange reserves, ETF flows when relevant.
   - Macro cross-checks: DXY, U.S. yields, equity risk appetite, liquidity conditions.
   - News/regulation/security events for idiosyncratic tokens.

3. Build or assess the hypothesis:
   - What inefficiency, behavioral pattern, liquidity effect, or structural flow is being tested?
   - Why should it persist after fees, slippage, latency, and crowding?
   - What market regime does it require?
   - What would invalidate it?

4. Quantify signal quality:
   - Define entry, exit, stop, holding period, rebalance cadence, and universe.
   - Test with realistic fees, funding, slippage, borrow constraints, and exchange outages.
   - Check sample size, out-of-sample performance, regime dependency, turnover, drawdown, and tail risk.
   - Compare against simple baselines: buy-and-hold, BTC beta, equal-weight basket, or volatility targeting.

5. Produce a trade/risk conclusion:
   - Directional bias: bullish, bearish, range, volatility, or no edge.
   - Evidence strength: high, medium, low.
   - Key levels or trigger conditions.
   - Position sizing idea based on risk budget, not conviction alone.
   - Invalidation and follow-up checks.

## Crypto Command Center Workflow

Use this workflow when the user asks for a crypto information hub, market monitor, daily crypto desk, or trading view for BTC/ETH/SOL.

1. Pull the market dashboard:
   - BTC, ETH, SOL spot/perp prices and 1h/4h/1d K-lines.
   - Verify the data timestamp, exchange, instrument type, and quote currency. Treat stale prices as unusable for trading calls.
   - For every crypto market/trading answer, include the mandatory real-time block: 1h/4h/1d K-lines, funding, OI change, liquidation heatmap, volume/VWAP, and order book depth. If unavailable, explicitly mark each missing field and do not imply it was checked.
   - 24h/7d/30d performance, realized volatility, volume, liquidity, and major exchange spread.
   - Funding, open interest, liquidations, basis, and options skew if available.
   - BTC dominance, ETH/BTC, SOL/ETH, stablecoin supply/flows, ETF flows, and exchange reserves.
   - Wallet/on-chain flows, whale transfers, social/news sentiment, regulatory/security events, and prediction-market odds where relevant.

2. Classify the market regime:
   - Trend: uptrend, downtrend, range, breakout, breakdown, or squeeze.
   - Risk appetite: risk-on, risk-off, mixed, or low-conviction.
   - Leverage state: underlevered, balanced, crowded long, crowded short, or deleveraging.
   - Liquidity state: supportive, neutral, deteriorating, or shock.

3. Produce BTC/ETH/SOL levels:
   - Current price.
   - Nearest support/resistance from recent swing highs/lows, volume clusters, moving averages, liquidation zones, and psychological levels.
   - 1-day, 7-day, and 30-day likely paths with bullish/base/bearish scenarios.
   - Triggers that flip bias and invalidation levels.

4. Translate news into trade meaning:
   - Tag each item as macro, regulation, ETF/flow, exchange, protocol, security, adoption, tokenomics, or market structure.
   - Explain first-order and second-order impact.
   - Decide whether the news supports long, short, hedge, reduce risk, or no trade.

5. End with an operation plan:
   - Bias: long, short, range trade, wait, hedge, or reduce exposure.
   - Trigger: the observable condition required before action.
   - Invalidated if: concrete price/data/news condition.
   - Risk: max loss logic, leverage warning, and data uncertainty.

## Output Templates

### Live Market Read

```markdown
## 加密市场信息中枢

日期/时段：
覆盖标的：BTC / ETH / SOL
总判断：
风险状态：
置信度：

### 数据事实
- K线/价格：
- 成交/波动/流动性：
- 衍生品/funding/OI/强平：
- 链上/钱包/稳定币/ETF：
- 社交/新闻/监管/预测市场：

### BTC
- 当前价格：
- 支撑位：
- 压力位：
- 1日路径：
- 7日路径：
- 30日路径：
- 多空建议：
- 失效条件：

### ETH
- 当前价格：
- 支撑位：
- 压力位：
- 1日路径：
- 7日路径：
- 30日路径：
- 多空建议：
- 失效条件：

### SOL
- 当前价格：
- 支撑位：
- 压力位：
- 1日路径：
- 7日路径：
- 30日路径：
- 多空建议：
- 失效条件：

### 新闻到交易映射
- 利多：
- 利空：
- 中性/待确认：

### 操作计划
- 主策略：
- 触发条件：
- 仓位/杠杆约束：
- 风险控制：
- 下一步监控：
```

### Strategy Review

```markdown
## 策略研究评审

策略假设：
交易标的：
数据频率：
样本区间：

### 规则定义
- 入场：
- 出场：
- 仓位：
- 风控：
- 成本假设：

### 回测质量
- 样本量：
- 年化/收益：
- 最大回撤：
- Sharpe/Sortino：
- 胜率/盈亏比：
- 换手/费用敏感性：
- 分 regime 表现：

### 结论
- 是否存在初步 edge：
- 最大风险：
- 需要补测：
- 是否适合实盘小仓验证：
```

## When To Load References

- Data source and metric checklist: `references/data-and-metrics.zh.md`
- Information hub data routing and external project inspiration: `references/information-hub-sources.zh.md`
- BTC/ETH/SOL support, scenario, and long/short template: `references/btc-eth-sol-desk.zh.md`
- Strategy research patterns and backtest traps: `references/strategy-research.zh.md`
- Risk management and execution checklist: `references/risk-controls.zh.md`

## Bundled Scripts

- `scripts/surf_realtime_snapshot.sh ETH`: fetches Surf exchange price, 1h/4h/1d K-lines, funding history, order book depth, liquidation chart, and futures snapshot for a symbol. Use it before giving contract strategies when Surf is available.

Use existing `financial-market-intelligence` for broad cross-asset news synthesis. Use existing `market-data-deep-diver` when the immediate task is to fetch or search current market variables.

## Guardrails

- Always state assumptions and uncertainty.
- Never recommend all-in, high leverage, martingale, or revenge trading.
- Treat altcoin liquidity, token unlocks, market-maker behavior, smart contract exploits, exchange risk, and listing/delisting risk as first-class risks.
- If live or recent data matters, browse or fetch current data before making time-sensitive claims.
- For live trading questions, show the price timestamp or explicitly say the user-provided price is being used because external data could not be verified.
- Never answer a crypto trading view without a real-time data section covering 1h/4h/1d K-lines, funding, OI change, liquidation heatmap, volume/VWAP, and order book depth. If any field cannot be sourced, label it `缺失/未验证`.
- If data cannot be verified, lower confidence and say what must be checked next.
