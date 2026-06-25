# 每日加密交易决策

生成时间：2026/06/26 00:30:36 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏空但不追空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 12 / Extreme Fear；ETH gas 1.7375 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 0%-20%，单笔 2%-5%，中间位置不开重仓。
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
- Decrypt: Traders Predict More Pain for Bitcoin and Ethereum After Monthly Drops Above 20% (Thu, 25 Jun 2026 16:24:03 +0000)
- Cointelegraph: Bitcoin drops to $58K on high US PCE inflation as trader sees &apos;manipulation&apos; (Thu, 25 Jun 2026 15:34:45 GMT)
- Decrypt: Bitcoin Plummets Lower as Strategy's STRC Dives Further From $100 Mark (Thu, 25 Jun 2026 14:11:01 +0000)
- Cointelegraph: Here’s what happened in crypto today (Thu, 25 Jun 2026 13:19:46 GMT)
- Cointelegraph: Spark migrates $150M in stablecoin to Uniswap to advance shared liquidity (Thu, 25 Jun 2026 13:00:00 GMT)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：59,712，24h 相对 prevDay：-1.34%
- 成交/持仓：24h notional volume $4.78B，base volume 79.6K BTC，Hyperliquid OI 32.9K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -5.12%，区间 58,062-65,587，位置 21.9%，VWAP 62,156；30d -21.32%，区间 58,062-76,120，位置 9.1%，VWAP 64,528
- 1h结构：阳线 O:59,530 H:60,030 L:59,438 C:59,712，VWAP下方，VWAP 60,279
- 4h结构：阳线 O:59,530 H:60,030 L:59,438 C:59,712，VWAP下方，VWAP 62,516
- 1d结构：阴线 O:61,048 H:61,927 L:58,062 C:59,712，VWAP下方，VWAP 66,586
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.96B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 53,741 / 65,683；25x 多/空 57,324 / 62,100；50x 多/空 58,518 / 60,906。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,711 / ask 59,712，spread 1.0000 (0.0017%)，top20 bid 92.85 / ask 145.33，卖盘更厚，反弹上方抛压更明显
- 支撑：58,819-59,438
- 压力：61,884-61,927
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 61,884-61,927 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 61,884-61,927 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,575，24h 相对 prevDay：-3.42%
- 成交/持仓：24h notional volume $1.31B，base volume 821K ETH，Hyperliquid OI 661K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.94%，区间 1,531-1,779，位置 17.8%，VWAP 1,674；30d -24.00%，区间 1,504-2,096，位置 12.0%，VWAP 1,736
- 1h结构：阳线 O:1,569 H:1,587 L:1,567 C:1,575，VWAP下方，VWAP 1,603
- 4h结构：阳线 O:1,569 H:1,587 L:1,567 C:1,575，VWAP下方，VWAP 1,686
- 1d结构：阴线 O:1,621 H:1,659 L:1,531 C:1,575，VWAP下方，VWAP 1,805
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.04B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,418 / 1,733；25x 多/空 1,512 / 1,638；50x 多/空 1,544 / 1,607。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,575 / ask 1,575，spread 0.1000 (0.0063%)，top20 bid 10.4K / ask 11.4K，买卖盘接近平衡
- 支撑：1,543-1,567
- 压力：1,659-1,659
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,659-1,659 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,659-1,659 且 short liquidation 扩大。

## 6. SOL

- 实时价格：66.64，24h 相对 prevDay：-1.66%
- 成交/持仓：24h notional volume $411M，base volume 6.13M SOL，Hyperliquid OI 5.05M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -4.39%，区间 63.96-74.97，位置 24.1%，VWAP 70.08；30d -20.35%，区间 60.06-84.78，位置 26.5%，VWAP 69.98
- 1h结构：阳线 O:66.29 H:67.01 L:66.24 C:66.62，VWAP下方，VWAP 67.34
- 4h结构：阳线 O:66.29 H:67.01 L:66.24 C:66.62，VWAP下方，VWAP 70.21
- 1d结构：阴线 O:68.07 H:69.61 L:63.96 C:66.62，VWAP下方，VWAP 72.65
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $337M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 59.98 / 73.31；25x 多/空 63.98 / 69.31；50x 多/空 65.31 / 67.97。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 66.62 / ask 66.62，spread 0.0010 (0.0015%)，top20 bid 9.12K / ask 9.15K，买卖盘接近平衡
- 支撑：65.93-66.24
- 压力：69.54-69.61
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 69.54-69.61 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 69.54-69.61 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |92.7 |-8.41% |$19.2M |$21.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |92.4 |+6.52% |$56.5M |$56.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |92.0 |+8.74% |$25.4M |$32.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |91.1 |+3.96% |$778M |$1.26B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |90.8 |+7.53% |$10.3M |$21.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |89.7 |+5.36% |$35.0M |$62.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |89.4 |-6.01% |$32.0M |$47.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |88.4 |-2.62% |$108M |$75.6M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Aave Token Could Climb 50x by End of 2030, Standard Chartered Says—Here's Why (Wed, 24 Jun 2026 22:27:05 +0000)
- Cointelegraph: HYPE down 22% from record highs: Will spot demand revive the uptrend? (Wed, 24 Jun 2026 22:08:25 GMT)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 0%-20%，单笔 2%-5%，中间位置不开重仓。
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
