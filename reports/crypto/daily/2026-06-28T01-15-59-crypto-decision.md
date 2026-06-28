# 每日加密交易决策

生成时间：2026/06/28 09:15:59 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 18 / Extreme Fear；ETH gas 0.0637 gwei，链上交易很便宜，gas 本身不是风险源。
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

宏观/新闻结论：RSS 未抓到足够明确的宏观催化，今日更多依赖市场结构。
预测市场入口：接口入口：https://gamma-api.polymarket.com/markets?active=true&closed=false&search=<query>；当前环境偶发超时，查询时需重试。。

主要新闻：
- Cointelegraph: Fidelity rebuts claims Bitcoin becomes less secure after halvings (Sat, 27 Jun 2026 20:53:02 +0000)
- Cointelegraph: Here’s what happened in crypto today (Sat, 27 Jun 2026 19:34:45 +0000)
- Cointelegraph: Bitcoin faces fresh capitulation risk as 50K BTC moved at a loss (Sat, 27 Jun 2026 19:27:44 +0000)
- Decrypt: Billionaire Jeremy Grantham Dismisses Bitcoin, Says Crypto Will Fade 'With a Whimper' (Sat, 27 Jun 2026 14:34:32 +0000)
- Cointelegraph: SOL reclaims $72, but onchain data flags weakening momentum (Sat, 27 Jun 2026 02:47:59 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：60,046，24h 相对 prevDay：+0.19%
- 成交/持仓：24h notional volume $991M，base volume 16.4K BTC，Hyperliquid OI 34.0K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -5.09%，区间 58,062-65,587，位置 26.4%，VWAP 61,194；30d -18.23%，区间 58,062-74,250，位置 12.3%，VWAP 63,542
- 1h结构：阴线 O:60,118 H:60,135 L:59,938 C:60,047，VWAP下方，VWAP 60,131
- 4h结构：阳线 O:59,996 H:60,160 L:59,938 C:60,047，VWAP下方，VWAP 61,574
- 1d结构：阳线 O:59,996 H:60,160 L:59,938 C:60,047，VWAP下方，VWAP 65,796
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.04B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 54,041 / 66,051；25x 多/空 57,644 / 62,448；50x 多/空 58,845 / 61,247。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 60,046 / ask 60,047，spread 1.0000 (0.0017%)，top20 bid 83.09 / ask 114.86，卖盘更厚，反弹上方抛压更明显
- 支撑：59,938-59,979
- 压力：60,820-60,935
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 60,820-60,935 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 60,820-60,935 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,571，24h 相对 prevDay：-0.20%
- 成交/持仓：24h notional volume $255M，base volume 161K ETH，Hyperliquid OI 722K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.92%，区间 1,511-1,779，位置 22.5%，VWAP 1,635；30d -21.98%，区间 1,504-2,037，位置 12.5%，VWAP 1,704
- 1h结构：阴线 O:1,574 H:1,574 L:1,569 C:1,571，VWAP下方，VWAP 1,576
- 4h结构：阴线 O:1,573 H:1,577 L:1,569 C:1,571，VWAP下方，VWAP 1,650
- 1d结构：阴线 O:1,573 H:1,577 L:1,569 C:1,571，VWAP下方，VWAP 1,775
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.13B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,414 / 1,728；25x 多/空 1,508 / 1,634；50x 多/空 1,540 / 1,603。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,571 / ask 1,571，spread 0.1000 (0.0064%)，top20 bid 10.6K / ask 11.2K，买卖盘接近平衡
- 支撑：1,569-1,570
- 压力：1,607-1,610
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,607-1,610 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,607-1,610 且 short liquidation 扩大。

## 6. SOL

- 实时价格：70.52，24h 相对 prevDay：-1.54%
- 成交/持仓：24h notional volume $182M，base volume 2.54M SOL，Hyperliquid OI 5.21M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -2.63%，区间 63.96-74.97，位置 59.5%，VWAP 69.88；30d -14.01%，区间 60.06-83.38，位置 44.8%，VWAP 69.45
- 1h结构：阴线 O:70.67 H:70.68 L:70.40 C:70.52，VWAP下方，VWAP 71.73
- 4h结构：阳线 O:70.45 H:70.78 L:70.40 C:70.52，VWAP上方，VWAP 70.30
- 1d结构：阳线 O:70.45 H:70.78 L:70.40 C:70.52，VWAP下方，VWAP 71.91
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $367M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 63.47 / 77.58；25x 多/空 67.70 / 73.34；50x 多/空 69.11 / 71.93。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 70.52 / ask 70.53，spread 0.0010 (0.0014%)，top20 bid 6.43K / ask 14.6K，卖盘更厚，反弹上方抛压更明显
- 支撑：70.40-70.42
- 压力：72.98-73.23
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 72.98-73.23 或跌破 70.40-70.42 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| LIT |92.7 |-2.93% |$7.07M |$75.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |92.6 |-4.88% |$51.0M |$174M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |91.4 |+5.32% |$24.7M |$68.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |90.7 |-2.99% |$254M |$1.28B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |89.5 |-4.32% |$9.18M |$34.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| MON |88.7 |-3.39% |$1.55M |$23.0M |-<0.1% |不碰：流动性/OI 偏低 |
| WLD |88.2 |-6.19% |$15.2M |$43.7M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |88.0 |-2.60% |$3.41M |$11.9M |-<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Hyperliquid added to Singapore's Investor Alert List (Fri, 26 Jun 2026 13:11:29 +0000)

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
