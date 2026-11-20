# 每日加密交易决策

生成时间：2026/11/21 05:06:54 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 12 / Extreme Fear；ETH gas 1.1024 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Cathie Wood Bets $91M on Anthropic IPO While Paring Crypto Exposure (Fri, 20 Nov 2026 18:46:03 +0000)
- Cointelegraph: Bitcoin falls below $60K for first time since July amid broader market selloff (Fri, 20 Nov 2026 16:55:51 +0000)
- Decrypt: Bitcoin Breaks Below $60K as Crypto Fear Index Hits Worst Level Since February (Fri, 20 Nov 2026 16:35:59 +0000)
- Cointelegraph: Bitcoin price drops to $60K as Anthropic drops to $87 in tech sell-off (Fri, 20 Nov 2026 15:52:06 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 20 Nov 2026 13:29:58 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：58,301，24h 相对 prevDay：-5.89%
- 成交/持仓：24h notional volume $6.58B，base volume 109K BTC，Hyperliquid OI 38.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -14.60%，区间 57,735-68,414，位置 5.4%，VWAP 62,957；30d -30.62%，区间 57,735-84,335，位置 2.2%，VWAP 71,412
- 1h结构：阴线 O:58,439 H:58,559 L:58,277 C:58,310，VWAP下方，VWAP 61,052
- 4h结构：阴线 O:58,536 H:58,764 L:58,177 C:58,309，VWAP下方，VWAP 64,249
- 1d结构：阴线 O:61,962 H:62,620 L:57,735 C:58,309，VWAP下方，VWAP 73,476
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.24B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 52,471 / 64,131；25x 多/空 55,969 / 60,633；50x 多/空 57,135 / 59,467。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 58,309 / ask 58,310，spread 1.0000 (0.0017%)，top20 bid 94.44 / ask 74.61，买盘更厚，短线回踩承接较好
- 支撑：58,177-58,277
- 压力：62,320-62,620
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 62,320-62,620 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 62,320-62,620 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,602，24h 相对 prevDay：-8.79%
- 成交/持仓：24h notional volume $1.91B，base volume 1.14M ETH，Hyperliquid OI 585K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -16.98%，区间 1,580-1,936，位置 6.0%，VWAP 1,750；30d -35.25%，区间 1,580-2,482，位置 2.4%，VWAP 2,076
- 1h结构：阳线 O:1,601 H:1,607 L:1,599 C:1,602，VWAP下方，VWAP 1,689
- 4h结构：阴线 O:1,607 H:1,616 L:1,585 C:1,602，VWAP下方，VWAP 1,794
- 1d结构：阴线 O:1,757 H:1,770 L:1,580 C:1,601，VWAP下方，VWAP 2,166
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $937M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,441 / 1,762；25x 多/空 1,538 / 1,666；50x 多/空 1,570 / 1,634。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,601 / ask 1,602，spread 0.1000 (0.0062%)，top20 bid 6.51K / ask 9.23K，卖盘更厚，反弹上方抛压更明显
- 支撑：1,585-1,599
- 压力：1,763-1,770
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,763-1,770 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,763-1,770 且 short liquidation 扩大。

## 6. SOL

- 实时价格：67.27，24h 相对 prevDay：-7.58%
- 成交/持仓：24h notional volume $253M，base volume 3.59M SOL，Hyperliquid OI 4.24M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -13.92%，区间 67.13-78.45，位置 1.4%，VWAP 71.77；30d -37.08%，区间 67.13-107.46，位置 0.4%，VWAP 84.54
- 1h结构：阴线 O:67.48 H:67.65 L:67.22 C:67.29，VWAP下方，VWAP 71.35
- 4h结构：阴线 O:68.16 H:68.54 L:67.13 C:67.29，VWAP下方，VWAP 73.15
- 1d结构：阴线 O:73.12 H:73.50 L:67.13 C:67.29，VWAP下方，VWAP 89.45
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $285M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 60.54 / 74.00；25x 多/空 64.58 / 69.96；50x 多/空 65.93 / 68.62。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 67.29 / ask 67.30，spread 0.0060 (0.0089%)，top20 bid 5.38K / ask 3.98K，买盘更厚，短线回踩承接较好
- 支撑：67.13-67.22
- 压力：72.82-73.50
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 72.82-73.50 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 72.82-73.50 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| HYPE |93.6 |-10.36% |$782M |$1.14B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |92.8 |-14.20% |$60.1M |$85.9M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |92.2 |-11.76% |$9.45M |$18.2M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| LIT |91.2 |-17.40% |$32.6M |$70.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |91.1 |-11.23% |$13.9M |$46.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |89.6 |-12.44% |$13.8M |$23.9M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |89.0 |-17.77% |$399M |$239M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JUP |88.3 |-13.20% |$4.53M |$5.31M |-<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Binance’s $6.5B freeze order, Hong Kong ‘suspicious’ of HYPE: Asia Express (Thu, 19 Nov 2026 22:25:18 +0000)
- Cointelegraph: Hyperliquid Anthropic futures priced within 1% of Nasdaq opening price (Thu, 19 Nov 2026 20:33:24 +0000)

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
