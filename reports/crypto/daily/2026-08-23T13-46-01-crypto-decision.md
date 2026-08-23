# 每日加密交易决策

生成时间：2026/08/23 21:46:01 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 66 / Greed；ETH gas 0.3460 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 20%-35%，单笔 5%-10%，只在回踩确认后加仓。
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
- Decrypt: AI Has Made Bitcoin Software a Target—This Group Is Fighting Back (Sat, 22 Aug 2026 15:31:04 +0000)
- Decrypt: Coldcard Adds New Security Measures After $130 Million Bitcoin Exploit (Fri, 21 Aug 2026 21:31:05 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 21 Aug 2026 20:48:48 +0000)
- Cointelegraph: Bitget CEO sees Bitcoin near current levels at year-end, doubts US will buy BTC (Fri, 21 Aug 2026 20:26:16 +0000)
- Decrypt: Wall Street and Washington Fuel Bitcoin Rally: Here's What's Going On (Fri, 21 Aug 2026 20:07:05 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：77,540，24h 相对 prevDay：+0.43%
- 成交/持仓：24h notional volume $2.19B，base volume 28.5K BTC，Hyperliquid OI 36.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +23.33%，区间 62,730-79,584，位置 87.9%，VWAP 73,151；30d +20.93%，区间 62,237-79,584，位置 88.2%，VWAP 67,882
- 1h结构：阳线 O:77,259 H:77,848 L:77,253 C:77,543，VWAP上方，VWAP 77,162
- 4h结构：阳线 O:77,354 H:77,848 L:77,049 C:77,543，VWAP上方，VWAP 71,775
- 1d结构：阳线 O:77,132 H:77,848 L:75,608 C:77,543，VWAP上方，VWAP 67,079
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.82B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 69,786 / 85,294；25x 多/空 74,438 / 80,642；50x 多/空 75,989 / 79,091。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 77,544 / ask 77,545，spread 1.0000 (0.0013%)，top20 bid 60.09 / ask 13.36，买盘更厚，短线回踩承接较好
- 支撑：77,049-77,253
- 压力：77,608-77,848
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 77,049-77,253 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 77,049-77,253 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,457，24h 相对 prevDay：+1.27%
- 成交/持仓：24h notional volume $1.21B，base volume 500K ETH，Hyperliquid OI 788K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +30.98%，区间 1,872-2,551，位置 86.2%，VWAP 2,328；30d +32.03%，区间 1,821-2,551，位置 87.1%，VWAP 2,086
- 1h结构：阳线 O:2,428 H:2,487 L:2,428 C:2,457，VWAP上方，VWAP 2,440
- 4h结构：阳线 O:2,435 H:2,487 L:2,420 C:2,457，VWAP上方，VWAP 2,247
- 1d结构：阳线 O:2,424 H:2,487 L:2,357 C:2,457，VWAP上方，VWAP 2,039
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.94B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,211 / 2,702；25x 多/空 2,358 / 2,555；50x 多/空 2,407 / 2,506。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,456 / ask 2,457，spread 0.1000 (0.0041%)，top20 bid 1.77K / ask 2.00K，买卖盘接近平衡
- 支撑：2,420-2,428
- 压力：2,487-2,487
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 2,420-2,428 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 2,420-2,428 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：95.31，24h 相对 prevDay：+1.57%
- 成交/持仓：24h notional volume $320M，base volume 3.40M SOL，Hyperliquid OI 4.99M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +27.78%，区间 74.40-102.90，位置 73.3%，VWAP 90.16；30d +28.92%，区间 70.55-102.90，位置 76.5%，VWAP 81.48
- 1h结构：阳线 O:94.67 H:95.93 L:94.65 C:95.30，VWAP上方，VWAP 95.00
- 4h结构：阳线 O:94.69 H:95.93 L:94.17 C:95.30，VWAP上方，VWAP 88.31
- 1d结构：阳线 O:93.90 H:98.26 L:91.51 C:95.30，VWAP上方，VWAP 80.28
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $476M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 85.78 / 104.84；25x 多/空 91.50 / 99.12；50x 多/空 93.40 / 97.21。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 95.28 / ask 95.28，spread 0.0010 (0.0010%)，top20 bid 2.31K / ask 2.42K，买卖盘接近平衡
- 支撑：94.17-94.65
- 压力：95.93-98.26
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 94.17-94.65 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 94.17-94.65 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |95.4 |+11.79% |$246M |$205M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZEC |94.7 |+7.93% |$424M |$520M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ENA |94.0 |+10.17% |$78.5M |$60.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |93.5 |+4.71% |$50.7M |$88.3M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZRO |92.7 |+22.95% |$13.0M |$46.3M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| AAVE |92.7 |+11.72% |$27.2M |$112M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| UNI |92.5 |+9.17% |$22.1M |$29.1M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| TRUMP |92.1 |+7.39% |$106M |$34.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Crypto Biz: Treasury’s ‘Not-QE’ playbook sends Bitcoin higher (Fri, 21 Aug 2026 15:50:08 +0000)
- Decrypt: Morning Minute: CFTC Will Give Crypto Clarity If Congress Won’t (Fri, 21 Aug 2026 14:27:31 +0000)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 20%-35%，单笔 5%-10%，只在回踩确认后加仓。
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
