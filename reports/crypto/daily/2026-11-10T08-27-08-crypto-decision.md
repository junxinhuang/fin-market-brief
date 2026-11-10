# 每日加密交易决策

生成时间：2026/11/10 16:27:08 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏空但不追空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 32 / Fear；ETH gas 0.0513 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: BlackRock Bitcoin ETF outflows hit $1.66B over seven trading sessions (Tue, 10 Nov 2026 08:02:05 +0000)
- Cointelegraph: Here’s what happened in crypto today (Tue, 10 Nov 2026 06:00:00 +0000)
- Cointelegraph: HIVE, MARA mine more Bitcoin but earn less as crypto prices fall (Tue, 10 Nov 2026 00:42:39 +0000)
- Cointelegraph: Formation Securities plans Solana stock trading venue under SEC exemption (Mon, 09 Nov 2026 19:52:34 +0000)
- Decrypt: Bitcoin in Limbo as Stocks Rebound Ahead of US Inflation Report (Mon, 09 Nov 2026 19:06:03 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：74,728，24h 相对 prevDay：+0.78%
- 成交/持仓：24h notional volume $2.26B，base volume 30.2K BTC，Hyperliquid OI 42.0K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -3.49%，区间 73,457-81,177，位置 16.5%，VWAP 77,092；30d -10.75%，区间 73,457-84,850，位置 11.2%，VWAP 79,648
- 1h结构：阴线 O:74,816 H:74,865 L:74,681 C:74,727，VWAP上方，VWAP 74,688
- 4h结构：阴线 O:74,816 H:74,865 L:74,681 C:74,727，VWAP下方，VWAP 76,831
- 1d结构：阴线 O:75,334 H:75,401 L:74,347 C:74,728，VWAP下方，VWAP 80,576
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.14B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 67,255 / 82,201；25x 多/空 71,739 / 77,717；50x 多/空 73,233 / 76,223。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 74,727 / ask 74,728，spread 1.0000 (0.0013%)，top20 bid 85.72 / ask 59.19，买盘更厚，短线回踩承接较好
- 支撑：74,681-74,716
- 压力：75,401-75,573
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 75,401-75,573 或跌破 74,681-74,716 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：2,113，24h 相对 prevDay：+0.24%
- 成交/持仓：24h notional volume $829M，base volume 391K ETH，Hyperliquid OI 800K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.10%，区间 2,059-2,450，位置 13.9%，VWAP 2,247；30d -16.68%，区间 2,059-2,578，位置 10.5%，VWAP 2,336
- 1h结构：阴线 O:2,115 H:2,117 L:2,111 C:2,113，VWAP下方，VWAP 2,126
- 4h结构：阴线 O:2,115 H:2,117 L:2,111 C:2,113，VWAP下方，VWAP 2,246
- 1d结构：阴线 O:2,134 H:2,136 L:2,107 C:2,113，VWAP下方，VWAP 2,401
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.69B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,902 / 2,324；25x 多/空 2,028 / 2,197；50x 多/空 2,071 / 2,155。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,113 / ask 2,113，spread 0.1000 (0.0047%)，top20 bid 3.85K / ask 5.07K，卖盘更厚，反弹上方抛压更明显
- 支撑：2,112-2,113
- 压力：2,136-2,151
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 2,136-2,151 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 2,136-2,151 且 short liquidation 扩大。

## 6. SOL

- 实时价格：85.69，24h 相对 prevDay：-0.76%
- 成交/持仓：24h notional volume $228M，base volume 2.63M SOL，Hyperliquid OI 4.78M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.70%，区间 85.09-98.16，位置 4.5%，VWAP 89.81；30d -23.03%，区间 85.09-113.39，位置 2.1%，VWAP 98.30
- 1h结构：阴线 O:86.05 H:86.13 L:85.59 C:85.68，VWAP下方，VWAP 86.57
- 4h结构：阴线 O:86.05 H:86.13 L:85.59 C:85.68，VWAP下方，VWAP 90.55
- 1d结构：阴线 O:86.67 H:86.78 L:85.44 C:85.68，VWAP下方，VWAP 102.02
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $410M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 77.12 / 94.25；25x 多/空 82.26 / 89.11；50x 多/空 83.97 / 87.40。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 85.66 / ask 85.66，spread 0.0010 (0.0012%)，top20 bid 4.54K / ask 8.49K，卖盘更厚，反弹上方抛压更明显
- 支撑：85.44-85.59
- 压力：87.02-87.99
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 87.02-87.99 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 87.02-87.99 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |96.9 |-5.66% |$353M |$484M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |96.4 |-5.93% |$26.8M |$142M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| kPEPE |91.8 |+5.15% |$56.7M |$61.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |91.2 |+8.27% |$5.50M |$60.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| INIT |91.0 |+53.65% |$13.6M |$3.08M |-0.319% |只观察：衍生品拥挤或溢价异常 |
| UNI |90.4 |+4.97% |$11.4M |$69.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ONDO |89.7 |+5.44% |$9.03M |$18.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JUP |89.0 |+8.97% |$4.42M |$7.64M |-<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Zcash devs propose another block time cut days after NU7 upgrade (Mon, 09 Nov 2026 05:36:08 +0000)

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
