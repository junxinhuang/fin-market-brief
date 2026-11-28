# 每日加密交易决策

生成时间：2026/11/28 16:58:05 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 10 / Extreme Fear；ETH gas 0.0521 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 15%-30%，单笔 5%-8%，做空只在压力失败或跌破反抽失败后执行。
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
- Cointelegraph: Here’s what happened in crypto today (Fri, 27 Nov 2026 22:12:51 +0000)
- Decrypt: Could AI Break Bitcoin? Not Yet, Research Firm K33 Says (Fri, 27 Nov 2026 20:46:02 +0000)
- Decrypt: 4 Scary Bitcoin Charts That Suggest This Bear Market Is Different (Fri, 27 Nov 2026 19:46:02 +0000)
- Cointelegraph: Bitcoin whales pile into BTC despite shrinking profit cushion (Fri, 27 Nov 2026 19:23:00 +0000)
- Decrypt: $7 Billion in Bitcoin Options Just Expired: Here’s What It Means (Fri, 27 Nov 2026 18:16:03 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：59,532，24h 相对 prevDay：-3.53%
- 成交/持仓：24h notional volume $2.99B，base volume 49.5K BTC，Hyperliquid OI 34.6K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.08%，区间 57,257-64,575，位置 31.1%，VWAP 60,560；30d -23.62%，区间 55,170-81,177，位置 16.8%，VWAP 66,833
- 1h结构：阴线 O:59,817 H:59,831 L:59,472 C:59,533，VWAP下方，VWAP 60,405
- 4h结构：阴线 O:59,817 H:59,831 L:59,472 C:59,533，VWAP下方，VWAP 59,975
- 1d结构：阴线 O:59,898 H:60,243 L:59,177 C:59,535，VWAP下方，VWAP 69,317
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.06B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 53,579 / 65,485；25x 多/空 57,151 / 61,913；50x 多/空 58,341 / 60,723。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,534 / ask 59,535，spread 1.0000 (0.0017%)，top20 bid 96.11 / ask 95.35，买卖盘接近平衡
- 支撑：59,472-59,483
- 压力：60,243-61,700
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 60,243-61,700 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 60,243-61,700 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,652，24h 相对 prevDay：-4.56%
- 成交/持仓：24h notional volume $732M，base volume 436K ETH，Hyperliquid OI 599K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.95%，区间 1,607-1,845，位置 18.7%，VWAP 1,691；30d -26.64%，区间 1,537-2,450，位置 12.6%，VWAP 1,922
- 1h结构：阴线 O:1,657 H:1,658 L:1,650 C:1,652，VWAP下方，VWAP 1,692
- 4h结构：阴线 O:1,657 H:1,658 L:1,650 C:1,652，VWAP下方，VWAP 1,676
- 1d结构：阴线 O:1,662 H:1,672 L:1,640 C:1,652，VWAP下方，VWAP 2,015
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $990M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,487 / 1,817；25x 多/空 1,586 / 1,718；50x 多/空 1,619 / 1,685。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,652 / ask 1,652，spread 0.1000 (0.0061%)，top20 bid 5.53K / ask 6.39K，买卖盘接近平衡
- 支撑：1,648-1,650
- 压力：1,672-1,728
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,672-1,728 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,672-1,728 且 short liquidation 扩大。

## 6. SOL

- 实时价格：70.95，24h 相对 prevDay：-3.23%
- 成交/持仓：24h notional volume $167M，base volume 2.32M SOL，Hyperliquid OI 4.03M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d +0.97%，区间 65.81-78.43，位置 40.8%，VWAP 71.00；30d -25.78%，区间 64.88-98.51，位置 18.1%，VWAP 79.05
- 1h结构：阴线 O:71.21 H:71.27 L:70.90 C:70.96，VWAP下方，VWAP 72.01
- 4h结构：阴线 O:71.21 H:71.27 L:70.90 C:70.96，VWAP上方，VWAP 70.47
- 1d结构：阴线 O:71.62 H:72.26 L:70.72 C:70.96，VWAP下方，VWAP 83.02
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $286M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 63.86 / 78.05；25x 多/空 68.12 / 73.79；50x 多/空 69.53 / 72.37。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 70.95 / ask 70.96，spread 0.0010 (0.0014%)，top20 bid 5.40K / ask 5.27K，买卖盘接近平衡
- 支撑：70.72-70.90
- 压力：72.26-73.51
- 判断：震荡。24h 价格偏弱；价格低于1h VWAP；价格站在4h VWAP上方；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 72.26-73.51 或跌破 70.72-70.90 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| XMR |96.2 |-5.44% |$79.4M |$82.9M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| WLFI |90.9 |-50.38% |$51.7M |$7.95M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |89.6 |-11.89% |$10.6M |$7.86M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |89.3 |-4.06% |$16.2M |$77.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| BLUR |89.0 |-27.24% |$7.49M |$1.43M |-0.106% |不碰：流动性/OI 偏低 |
| MON |88.7 |-7.87% |$3.22M |$25.6M |+<0.1% |不碰：流动性/OI 偏低 |
| ADA |87.7 |-4.26% |$4.60M |$20.6M |-<0.1% |不碰：流动性/OI 偏低 |
| AERO |87.1 |-7.38% |$2.58M |$7.49M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Nvidia's Blackwell Chips Turn Up in China as Trump Floats Government Stake (Fri, 27 Nov 2026 17:09:30 +0000)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 15%-30%，单笔 5%-8%，做空只在压力失败或跌破反抽失败后执行。
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
