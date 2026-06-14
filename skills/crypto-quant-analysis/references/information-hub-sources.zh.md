# 信息集散地数据路由

## 目标

把加密市场拆成可监控的数据面板。每次输出 BTC/ETH/SOL 多空判断前，优先检查当前数据；不能确认的数据必须标注缺口并降低置信度。

## 当前本地集成状态

- Surf 已移除，不再作为数据源。
- Hyperliquid public API 已作为主实时永续数据源：价格、mark/mid、1h/4h/1d K线、funding history、OI、24h volume、盘口深度。
- Ethereum public RPC 已作为 Ethereum gas 数据源。
- Alternative.me Fear & Greed 已作为全市场情绪代理源。
- Polymarket Gamma API 已作为预测市场搜索入口，但当前网络环境偶发超时，查询时需要重试。
- BingX 官方 `swap-market` / `swap-ws-market` skills 已安装作为参考；当前环境直连 BingX REST 返回 CloudFront 403，不作为主源。
- Alva skill 已作为备用研究/回测/持久化监控能力集成：适合后续做 feed、dashboard、Altra 回测和通知系统。
- 项目级路由规则：见工作区 `AGENTS.md`。
- 快照脚本：`scripts/crypto_realtime_snapshot.mjs ETH`。

## 外部项目借鉴

- Binance Skills Hub：借鉴其按功能拆分 skill 的方式，将 token 搜索、交易、钱包、DeFi、信号和数据查询分成可路由模块。
- BingX API AI Skills：借鉴其按永续/现货/WebSocket 拆分市场数据 skill 的方式，覆盖永续价格、深度、K线、funding、OI 和 ticker。
- Polymarket agents：借鉴其 Gamma/CLOB API 入口，用于预测市场搜索和事件概率。
- Moss Trade Bot Skills：借鉴其自然语言策略生成、回测、paper/live 验证闭环，但不要默认自动实盘下单。
- Vibe-Trading：借鉴其 crypto trading desk、多 agent 投研、链上分析和策略回测工作流。
- Alva Skills：借鉴其 crypto spot/futures OHLCV、funding、OI、long/short、exchange flows、on-chain 指标覆盖。
- hftbacktest：借鉴其对订单簿、延迟、队列位置、滑点和成交模拟的严肃态度；用于评估高频/做市策略质量。

## 数据域

### 强制实时数据块

任何加密市场判断都必须优先输出：

- 当前价格：交易所、spot/perp、时间戳。
- 1h/4h/1d K线：趋势、关键支撑/压力、收盘位置。
- Funding：当前值、正负、是否拥挤。
- OI变化：当前OI、近1h/4h/24h变化，如数据可得。
- 强平热力图：上方/下方最近强平密集区；无法获取时标注未验证。
- 成交量/VWAP：当前量能是否放大，价格相对VWAP位置。
- 盘口深度：买卖价差、主要挂单/深度；无法获取时标注未验证。

缺失任何一项时，不要用其他指标假装替代；明确写 `缺失/未验证`。

### 当前主路由

```bash
node skills/crypto-quant-analysis/scripts/crypto_realtime_snapshot.mjs ETH
```

The snapshot script returns:

- `realtime`: mark/mid/oracle/prevDay, funding, OI, 24h notional volume.
- `klines`: 1h/4h/1d candles and VWAP approximation.
- `fundingHistory`: recent funding history.
- `orderBook`: best bid/ask, spread, top depth.
- `ethereumGas`: current gas price via public RPC.
- `sentiment.fearGreed`: market-wide fear/greed proxy.
- `unavailable`: fields that still need dedicated providers.

### Optional provider gaps

- Liquidation heatmap: requires Coinglass, Coinalyze, exchange force-order stream, or a dedicated liquidation API.
- Long/short ratio: requires Binance/OKX/Coinglass/BingX when reachable.
- Ethereum social sentiment: requires LunarCrush, Santiment, X/Reddit API, Alva, or another dedicated social data source.
- Wallet intelligence and exchange flows: requires Nansen, Arkham, Glassnode, CryptoQuant, Alva, or custom on-chain indexing.
- Prediction market search: Polymarket Gamma endpoint is known, but may timeout in this environment; retry or use a proxy if needed.

### 价格与K线

- BTC/USDT, ETH/USDT, SOL/USDT spot。
- BTC/USDT, ETH/USDT, SOL/USDT perpetual futures。
- 1m/5m/15m/1h/4h/1d K线，按用户周期选择。
- 24h/7d/30d涨跌幅，成交量，真实波动率，ATR。

### 衍生品与杠杆

- Funding rate：多空拥挤和持仓成本。
- Open interest：新增杠杆、趋势确认或挤仓风险。
- Liquidation heatmap/强平数据：潜在流动性目标位。
- Basis：现货和期货价差。
- Options：IV、skew、put/call、关键到期日。

### 链上与钱包

- Exchange netflow/reserves。
- Stablecoin supply、交易所稳定币余额、铸造/销毁。
- Whale transfer：大额转账要区分交易所、托管和内部调拨。
- Active addresses、fees、TVL、DEX volume。
- SOL 需要关注链上活跃、DEX volume、网络稳定性和生态新闻。

### 社交、新闻、预测市场

- 新闻：ETF、监管、交易所、黑客、安全、协议升级、宏观数据。
- 社交：X/Reddit/Telegram/Discord 热度只作为情绪和拥挤度，不单独交易。
- 预测市场：选举、监管、ETF、宏观事件概率，用于事件风险定价。
- Developer/ecosystem：GitHub 活跃、TVL、协议收入、生态融资。

## 输出时的数据优先级

1. 当前价格、K线、成交量和关键位。
2. Funding/OI/强平，判断杠杆方向和挤仓风险。
3. ETF/stablecoin/exchange flow，判断资金流。
4. 新闻/监管/安全事件，判断外生冲击。
5. 社交/预测市场，辅助判断情绪和事件概率。

## 监控频率建议

- 高频交易：1m/5m K线、盘口、OI、funding、强平，分钟级。
- 日内/波段：1h/4h/1d K线、funding、OI、ETF/稳定币/新闻，数小时级。
- 30日视角：日线/周线、流动性、宏观、ETF、链上和监管，日级。
