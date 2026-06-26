# 每日加密交易决策

生成时间：2026/06/26 12:08:22 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏空但不追空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 13 / Extreme Fear；ETH gas 0.4201 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Sharplink buys ETH after 8-month pause as token hits 2026 low (Fri, 26 Jun 2026 03:56:08 GMT)
- Cointelegraph: Does Botanix’s failure prove Bitcoiners don’t care about DeFi? (Thu, 25 Jun 2026 23:09:10 GMT)
- Cointelegraph: Bitcoin bounces off new 2026 price lows: Will US stock weakness push BTC lower? (Thu, 25 Jun 2026 21:02:50 GMT)
- Cointelegraph: Bitcoin options traders hedge downside as uncertainty lingers, Anchorage says (Thu, 25 Jun 2026 20:10:41 GMT)
- Cointelegraph: Bitcoin may fall lower but BTC power-law frames crash to $58K as ‘normal’ (Thu, 25 Jun 2026 19:51:35 GMT)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：59,856，24h 相对 prevDay：-1.54%
- 成交/持仓：24h notional volume $4.38B，base volume 73.3K BTC，Hyperliquid OI 32.0K BTC；Coinalyze OI 24h +5.77%。
- 7d/30d背景：短中期仍弱；7d -5.76%，区间 58,062-65,587，位置 23.8%，VWAP 61,809；30d -19.57%，区间 58,062-74,557，位置 10.9%，VWAP 64,225
- 1h结构：阴线 O:60,024 H:60,066 L:59,812 C:59,855，VWAP上方，VWAP 59,777
- 4h结构：阴线 O:60,024 H:60,066 L:59,812 C:59,856，VWAP下方，VWAP 62,128
- 1d结构：阳线 O:59,760 H:60,091 L:58,308 C:59,856，VWAP下方，VWAP 66,345
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：ratio 2.3102，long 69.79%，short 30.21%
- 估算多/空持仓：总 OI $1.91B；估多仓 $1.34B；估空仓 $578M。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 53,870 / 65,842；25x 多/空 57,462 / 62,250；50x 多/空 58,659 / 61,053。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 237.3400，short liq 245.1570。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,871 / ask 59,872，spread 1.0000 (0.0017%)，top20 bid 36.71 / ask 77.49，卖盘更厚，反弹上方抛压更明显
- 支撑：59,699-59,812
- 压力：60,210-61,884
- 判断：偏空。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认；Coinalyze多头占比69.79%，多头较拥挤；Coinalyze OI 24h约+5.77%但价格不强，杠杆堆积风险
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 60,210-61,884 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 60,210-61,884 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,554，24h 相对 prevDay：-3.93%
- 成交/持仓：24h notional volume $1.42B，base volume 905K ETH，Hyperliquid OI 717K ETH；Coinalyze OI 24h +2.21%。
- 7d/30d背景：短中期仍弱；7d -9.22%，区间 1,511-1,779，位置 15.9%，VWAP 1,655；30d -23.24%，区间 1,504-2,047，位置 9.1%，VWAP 1,725
- 1h结构：阴线 O:1,557 H:1,558 L:1,552 C:1,554，VWAP下方，VWAP 1,574
- 4h结构：阴线 O:1,557 H:1,558 L:1,552 C:1,554，VWAP下方，VWAP 1,671
- 1d结构：阴线 O:1,567 H:1,571 L:1,511 C:1,554，VWAP下方，VWAP 1,795
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：ratio 2.5613，long 71.92%，short 28.08%
- 估算多/空持仓：总 OI $1.11B；估多仓 $801M；估空仓 $313M。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,398 / 1,709；25x 多/空 1,492 / 1,616；50x 多/空 1,523 / 1,585。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 21,913.8070，short liq 4,283.7630。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,553 / ask 1,554，spread 0.2000 (0.0129%)，top20 bid 8.94K / ask 10.3K，买卖盘接近平衡
- 支撑：1,531-1,552
- 压力：1,587-1,658
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认；Coinalyze多头占比71.92%，多头较拥挤
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,587-1,658 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,587-1,658 且 short liquidation 扩大。

## 6. SOL

- 实时价格：68.13，24h 相对 prevDay：+0.86%
- 成交/持仓：24h notional volume $439M，base volume 6.54M SOL，Hyperliquid OI 4.89M SOL；Coinalyze OI 24h -0.28%。
- 7d/30d背景：短中期仍弱；7d -2.23%，区间 63.96-74.97，位置 38.0%，VWAP 69.98；30d -17.27%，区间 60.06-83.38，位置 34.7%，VWAP 69.76
- 1h结构：阴线 O:68.18 H:68.22 L:67.98 C:68.13，VWAP上方，VWAP 66.87
- 4h结构：阴线 O:68.18 H:68.22 L:67.98 C:68.15，VWAP下方，VWAP 69.87
- 1d结构：阳线 O:67.69 H:68.48 L:65.89 C:68.15，VWAP下方，VWAP 72.36
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：ratio 3.0048，long 75.03%，short 24.97%
- 估算多/空持仓：总 OI $333M；估多仓 $250M；估空仓 $83.1M。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 61.32 / 74.94；25x 多/空 65.40 / 70.85；50x 多/空 66.77 / 69.49。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 20,336.3100，short liq 15,524.8800。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 68.14 / ask 68.15，spread 0.0010 (0.0015%)，top20 bid 14.4K / ask 3.56K，买盘更厚，短线回踩承接较好
- 支撑：67.96-67.98
- 压力：68.79-69.41
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；Coinalyze多头占比75.03%，多头较拥挤
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 68.79-69.41 或跌破 67.96-67.98 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| XPL |91.5 |+10.49% |$49.5M |$34.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |91.2 |-6.09% |$31.2M |$57.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |90.8 |-7.90% |$34.6M |$44.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |90.0 |-3.61% |$110M |$75.8M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |87.2 |+5.75% |$12.1M |$20.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ADA |86.8 |-3.11% |$11.0M |$27.2M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JTO |86.8 |+8.16% |$4.71M |$11.6M |+<0.1% |不碰：流动性/OI 偏低 |
| PUMP |86.7 |-4.95% |$14.4M |$22.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: XRP risks drop below $1, but onchain data highlights silver lining (Thu, 25 Jun 2026 17:11:33 GMT)

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
