# 每日加密交易决策

生成时间：2026/09/11 01:04:13 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 69 / Greed；ETH gas 0.1311 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 0%-15%，单笔 2%-5%，优先减风险或等反弹失败。
- 置信度：中等偏低到中等。原因是核心合约数据已接入，但 true liquidation heatmap、ETF flow、社交情绪仍缺。

我的猜测：当前更像“风险事件缓和后的修复行情”，不是无脑牛市启动。若 BTC 能稳在 1h/4h VWAP 上方，短线回踩多比追空更顺；但多头占比偏高的币不能追高。

## 2. 数据缺口

- 强平热力图：缺失/未验证；当前只使用 Coinalyze 已发生强平流。
- ETF flows：缺失/未验证；还未接稳定 BTC/ETH ETF flow API。
- ETH 社交情绪：缺失/未验证；当前只有 RSS 新闻叙事和 Fear & Greed。
- 宏观代理：已用 ETF 代理行情判断，但不是官方 DXY/收益率/VIX。

## 3. 宏观与消息面

宏观/新闻结论：新闻层显示宏观/地缘事件仍是 BTC 反弹的重要催化，尤其是伊朗/霍尔木兹相关风险缓和叙事。
预测市场入口：接口入口：https://gamma-api.polymarket.com/markets?active=true&closed=false&search=<query>；当前环境偶发超时，查询时需重试。。

主要新闻：
- Cointelegraph: Bitcoin falls on US PPI overshoot as 30-year bond yield hits new 19-year high (Thu, 10 Sep 2026 14:52:15 +0000)
- Cointelegraph: Here’s what happened in crypto today (Thu, 10 Sep 2026 13:20:26 +0000)
- Decrypt: Bitcoin at $400K by 2030 Still 'Reasonable Target': Coinbase CEO (Thu, 10 Sep 2026 13:04:27 +0000)
- Cointelegraph: Solana sees record 263K tokens issued in a single day (Thu, 10 Sep 2026 13:00:00 +0000)
- Decrypt: Vitalik Buterin Pushes Ethereum Plan to Slash Quantum-Safe Privacy Costs (Thu, 10 Sep 2026 10:11:52 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：77,159，24h 相对 prevDay：-2.07%
- 成交/持仓：24h notional volume $2.78B，base volume 35.7K BTC，Hyperliquid OI 37.6K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -5.03%，区间 76,666-81,400，位置 10.4%，VWAP 78,757；30d +21.40%，区间 62,523-82,268，位置 74.1%，VWAP 75,699
- 1h结构：阴线 O:77,176 H:77,195 L:77,124 C:77,159，VWAP下方，VWAP 78,248
- 4h结构：阴线 O:77,226 H:77,286 L:76,772 C:77,159，VWAP下方，VWAP 79,265
- 1d结构：阴线 O:78,269 H:78,527 L:76,666 C:77,159，VWAP上方，VWAP 73,847
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.90B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 69,443 / 84,875；25x 多/空 74,073 / 80,245；50x 多/空 75,616 / 78,702。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 77,158 / ask 77,159，spread 1.0000 (0.0013%)，top20 bid 60.79 / ask 66.79，买卖盘接近平衡
- 支撑：76,929-77,124
- 压力：78,494-78,527
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 78,494-78,527 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 78,494-78,527 且 short liquidation 扩大。

## 5. ETH

- 实时价格：2,448，24h 相对 prevDay：-1.88%
- 成交/持仓：24h notional volume $1.42B，base volume 577K ETH，Hyperliquid OI 958K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -2.38%，区间 2,404-2,546，位置 31.3%，VWAP 2,473；30d +30.08%，区间 1,862-2,566，位置 83.2%，VWAP 2,368
- 1h结构：阳线 O:2,448 H:2,449 L:2,446 C:2,448，VWAP下方，VWAP 2,467
- 4h结构：阳线 O:2,440 H:2,450 L:2,431 C:2,448，VWAP下方，VWAP 2,477
- 1d结构：阴线 O:2,467 H:2,484 L:2,404 C:2,448，VWAP上方，VWAP 2,279
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.35B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,203 / 2,693；25x 多/空 2,350 / 2,546；50x 多/空 2,399 / 2,497。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,447 / ask 2,447，spread 0.1000 (0.0041%)，top20 bid 3.70K / ask 4.65K，卖盘更厚，反弹上方抛压更明显
- 支撑：2,431-2,446
- 压力：2,479-2,484
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 2,479-2,484 或跌破 2,431-2,446 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：99.62，24h 相对 prevDay：-3.61%
- 成交/持仓：24h notional volume $239M，base volume 2.37M SOL，Hyperliquid OI 5.38M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -4.12%，区间 98.39-107.34，位置 13.7%，VWAP 102.80；30d +30.63%，区间 74.09-110.93，位置 69.3%，VWAP 98.17
- 1h结构：阳线 O:99.62 H:99.69 L:99.52 C:99.62，VWAP下方，VWAP 101.51
- 4h结构：阴线 O:99.68 H:99.86 L:98.80 C:99.62，VWAP下方，VWAP 103.07
- 1d结构：阴线 O:101.49 H:102.13 L:98.39 C:99.62，VWAP上方，VWAP 94.97
- funding/premium：funding -<0.1%，premium -0.100%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $536M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 89.66 / 109.59；25x 多/空 95.64 / 103.61；50x 多/空 97.63 / 101.62。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 99.57 / ask 99.58，spread 0.0010 (0.0010%)，top20 bid 4.41K / ask 3.44K，买盘更厚，短线回踩承接较好
- 支撑：99.23-99.52
- 压力：102.08-102.60
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 102.08-102.60 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 102.08-102.60 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PONS |94.2 |-17.45% |$125M |$96.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |92.7 |-14.57% |$23.9M |$27.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |92.1 |-9.33% |$31.8M |$46.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |91.1 |-20.03% |$200M |$164M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |90.6 |-12.22% |$13.7M |$45.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |89.2 |-9.65% |$8.57M |$18.0M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |89.0 |-6.71% |$691M |$1.74B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ETHFI |88.6 |+13.95% |$14.8M |$27.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Solana sees record 263K tokens issued in a single day (Thu, 10 Sep 2026 13:00:00 +0000)
- Cointelegraph: Unicoin sues Uniswap Labs, seeks to cancel UNI registration (Thu, 10 Sep 2026 08:55:11 +0000)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 0%-15%，单笔 2%-5%，优先减风险或等反弹失败。
- 主交易：优先 BTC/ETH/SOL，不优先小币追涨。
- 首仓：A 级机会 5%-10%，B 级 2%-5%；没有回踩/反抽确认不进。
- 加仓：只在盈利方向加仓；突破回踩确认或跌破反抽失败才加。
- 止损：放在结构失效位外，不用“感觉”扛单。
- 止盈：第一目标在近端支撑/压力，第二目标看 VWAP 延伸和已发生强平流释放方向。
- 暂停交易条件：宏观代理不可用且新闻出现重大突发、盘口 spread 异常、funding/OI 极端但价格横盘。

## 9. 触发清单

- 做多触发：BTC 稳在 1h/4h VWAP 上方，ETH/SOL 回踩不破，Coinalyze OI 不出现“价格横盘但杠杆猛增”的坏组合。
- 做空触发：主流币冲压力失败，1h 收不回 VWAP，且 long ratio 偏高或 OI 堆积。
- 降仓触发：BTC 跌回关键支撑下方，RSS 出现监管/安全/宏观冲击，或强平流显示多头连续释放但价格不反弹。
- 重新评估触发：true heatmap 接入、ETF flow 接入、或 BTC 突破/跌破日报关键位。
