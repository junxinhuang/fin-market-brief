# 信息集散地数据路由

## 目标

把加密市场拆成可监控的数据面板。每次输出 BTC/ETH/SOL 多空判断前，优先检查当前数据；不能确认的数据必须标注缺口并降低置信度。

## 当前本地集成状态

- Surf skill 已作为主 crypto 数据源集成：价格、K线、funding、OI/long-short、清算、盘口、钱包、社交、链上、预测市场、新闻。
- Alva skill 已作为备用研究/回测/持久化监控能力集成：适合后续做 feed、dashboard、Altra 回测和通知系统。
- 本地可用 Surf CLI 路径：`/Users/junxinhuang/.local/bin/surf`。
- 项目级路由规则：见工作区 `AGENTS.md`。
- 快照脚本：`scripts/surf_realtime_snapshot.sh ETH`。

## 外部项目借鉴

- Binance Skills Hub：借鉴其按功能拆分 skill 的方式，将 token 搜索、交易、钱包、DeFi、信号和数据查询分成可路由模块。
- Surf Skills：借鉴其多 endpoint 信息入口，覆盖价格、钱包、社交、链上和预测市场数据。
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

### Surf 命令映射

```bash
surf sync
surf exchange-price --pair ETH/USDT --type swap --exchange binance --json
surf exchange-klines --pair ETH/USDT --type swap --exchange binance --interval 1h --limit 24 --json
surf exchange-klines --pair ETH/USDT --type swap --exchange binance --interval 4h --limit 18 --json
surf exchange-klines --pair ETH/USDT --type swap --exchange binance --interval 1d --limit 30 --json
surf exchange-funding-history --pair ETH/USDT --exchange binance --limit 12 --json
surf exchange-depth --pair ETH/USDT --type swap --exchange binance --limit 50 --json
surf market-liquidation-chart --symbol ETH --interval 1h --exchange Binance --limit 24 --json
surf market-futures --json
```

Use `market-futures` locally filtered to the requested symbol for current open interest, current funding, long/short ratio, and 24h volume. Use `exchange-funding-history` for exchange-specific funding history.

For wallet/social/on-chain/prediction-market:

```bash
surf wallet-detail --address <address> --chain ethereum --json
surf wallet-transfers --address <address> --chain ethereum --limit 50 --json
surf social-sentiment --q ethereum --json
surf social-mindshare --q ethereum --interval 1h --json
surf search-social-posts --q "Ethereum ETH" --limit 20 --json
surf onchain-gas-price --chain ethereum --json
surf catalog search "ethereum dex trades"
surf search-prediction-market --q "ethereum" --limit 20 --json
```

Always run `surf <command> --help` before first use in a session because flags and enum values vary by endpoint.

Prediction-market search can return semantically unrelated markets when a broad ticker/project keyword is used. For trading decisions, use specific event keywords such as `"Ethereum ETF"`, `"ETH staking"`, `"SEC crypto"`, or filter by `--category`/`--platform` when available. Do not treat unrelated returned markets as sentiment.

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
