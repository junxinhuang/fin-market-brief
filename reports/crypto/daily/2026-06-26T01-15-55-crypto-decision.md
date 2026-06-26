# 每日加密交易决策

生成时间：2026/06/26 09:15:55 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏空但不追空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 13 / Extreme Fear；ETH gas 0.1256 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Does Botanix’s failure prove Bitcoiners don’t care about DeFi? (Thu, 25 Jun 2026 23:09:10 GMT)
- Cointelegraph: Bitcoin bounces off new 2026 price lows: Will US stock weakness push BTC lower? (Thu, 25 Jun 2026 21:02:50 GMT)
- Cointelegraph: Bitcoin options traders hedge downside as uncertainty lingers, Anchorage says (Thu, 25 Jun 2026 20:10:41 GMT)
- Cointelegraph: Bitcoin may fall lower but BTC power-law frames crash to $58K as ‘normal’ (Thu, 25 Jun 2026 19:51:35 GMT)
- Cointelegraph: Here’s what happened in crypto today (Thu, 25 Jun 2026 19:32:21 GMT)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：59,559，24h 相对 prevDay：-1.93%
- 成交/持仓：24h notional volume $3.97B，base volume 66.2K BTC，Hyperliquid OI 33.1K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -6.24%，区间 58,062-65,587，位置 19.7%，VWAP 61,881；30d -19.98%，区间 58,062-74,557，位置 9.0%，VWAP 64,254
- 1h结构：阴线 O:59,633 H:59,747 L:59,405 C:59,548，VWAP下方，VWAP 59,978
- 4h结构：阴线 O:59,760 H:59,871 L:59,405 C:59,548，VWAP下方，VWAP 62,214
- 1d结构：阴线 O:59,760 H:59,871 L:59,405 C:59,548，VWAP下方，VWAP 66,381
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.97B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 53,603 / 65,515；25x 多/空 57,177 / 61,941；50x 多/空 58,368 / 60,750。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,547 / ask 59,548，spread 1.0000 (0.0017%)，top20 bid 60.28 / ask 109.99，卖盘更厚，反弹上方抛压更明显
- 支撑：59,405-59,418
- 压力：61,700-61,927
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 61,700-61,927 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 61,700-61,927 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,564，24h 相对 prevDay：-3.22%
- 成交/持仓：24h notional volume $1.09B，base volume 684K ETH，Hyperliquid OI 675K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -8.63%，区间 1,531-1,779，位置 13.1%，VWAP 1,663；30d -22.74%，区间 1,504-2,047，位置 10.9%，VWAP 1,727
- 1h结构：阴线 O:1,564 H:1,567 L:1,558 C:1,564，VWAP下方，VWAP 1,588
- 4h结构：阴线 O:1,567 H:1,571 L:1,558 C:1,564，VWAP下方，VWAP 1,678
- 1d结构：阴线 O:1,567 H:1,571 L:1,558 C:1,564，VWAP下方，VWAP 1,798
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.06B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,407 / 1,720；25x 多/空 1,501 / 1,626；50x 多/空 1,532 / 1,595。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,564 / ask 1,564，spread 0.1000 (0.0064%)，top20 bid 9.92K / ask 9.69K，买卖盘接近平衡
- 支撑：1,560-1,563
- 压力：1,648-1,659
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,648-1,659 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,648-1,659 且 short liquidation 扩大。

## 6. SOL

- 实时价格：67.56，24h 相对 prevDay：+0.12%
- 成交/持仓：24h notional volume $367M，base volume 5.47M SOL，Hyperliquid OI 4.87M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -3.08%，区间 63.96-74.97，位置 32.7%，VWAP 70.06；30d -17.99%，区间 60.06-83.38，位置 32.1%，VWAP 69.78
- 1h结构：阴线 O:67.73 H:67.87 L:67.46 C:67.56，VWAP上方，VWAP 67.02
- 4h结构：阴线 O:67.69 H:68.08 L:67.46 C:67.56，VWAP下方，VWAP 69.94
- 1d结构：阴线 O:67.69 H:68.08 L:67.46 C:67.56，VWAP下方，VWAP 72.40
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $329M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 60.80 / 74.31；25x 多/空 64.85 / 70.26；50x 多/空 66.21 / 68.91。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 67.56 / ask 67.56，spread 0.0010 (0.0015%)，top20 bid 8.28K / ask 4.25K，买盘更厚，短线回踩承接较好
- 支撑：67.45-67.46
- 压力：68.85-69.61
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 68.85-69.61 或跌破 67.45-67.46 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| IP |92.4 |+27.14% |$7.57M |$6.22M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| XPL |92.0 |+9.46% |$42.0M |$38.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |91.3 |-7.32% |$28.9M |$57.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |90.9 |-6.46% |$32.2M |$47.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |90.4 |-3.57% |$102M |$79.9M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |89.7 |+4.70% |$58.1M |$61.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |89.5 |-7.04% |$14.0M |$21.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |87.7 |-2.09% |$30.1M |$65.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Story Protocol Rebrands as Data Network in AI Training Pivot After IP Token Falls 98% (Thu, 25 Jun 2026 19:11:36 +0000)
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
