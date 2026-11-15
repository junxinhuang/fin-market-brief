# 每日加密交易决策

生成时间：2026/11/15 15:52:55 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 10 / Extreme Fear；ETH gas 0.2593 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Sat, 14 Nov 2026 11:28:12 +0000)
- Cointelegraph: Bitcoin ETFs shed $2.35B in 2 weeks, BlackRock’s losing streak hits 11 (Sat, 14 Nov 2026 06:33:13 +0000)
- Cointelegraph: Adam Back makes case for simpler security as Blockstream launches Bitcoin custody system (Fri, 13 Nov 2026 21:49:27 +0000)
- Decrypt: JPMorgan’s Bitcoin and Crypto-Linked Holdings Approach $1 Billion (Fri, 13 Nov 2026 20:16:03 +0000)
- Decrypt: Dormant Bitcoin Wallets Wake Up After 16 Years, Moving $6.9 Million (Fri, 13 Nov 2026 19:36:03 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,773，24h 相对 prevDay：-5.02%
- 成交/持仓：24h notional volume $7.52B，base volume 116K BTC，Hyperliquid OI 36.9K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -14.76%，区间 61,970-75,585，位置 13.2%，VWAP 69,106；30d -21.84%，区间 61,970-84,850，位置 7.9%，VWAP 75,710
- 1h结构：阴线 O:64,434 H:64,514 L:63,750 C:63,773，VWAP下方，VWAP 65,268
- 4h结构：阴线 O:64,806 H:65,138 L:63,750 C:63,773，VWAP下方，VWAP 70,032
- 1d结构：阴线 O:64,122 H:65,574 L:61,970 C:63,773，VWAP下方，VWAP 77,296
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.35B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,396 / 70,150；25x 多/空 61,222 / 66,324；50x 多/空 62,498 / 65,048。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,772 / ask 63,773，spread 1.0000 (0.0016%)，top20 bid 28.07 / ask 149.13，卖盘更厚，反弹上方抛压更明显
- 支撑：63,363-63,750
- 压力：66,231-67,486
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 66,231-67,486 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 66,231-67,486 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,773，24h 相对 prevDay：-6.55%
- 成交/持仓：24h notional volume $2.21B，base volume 1.23M ETH，Hyperliquid OI 606K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -16.60%，区间 1,710-2,159，位置 14.0%，VWAP 1,946；30d -26.81%，区间 1,710-2,525，位置 7.7%，VWAP 2,199
- 1h结构：阴线 O:1,792 H:1,796 L:1,772 C:1,773，VWAP下方，VWAP 1,822
- 4h结构：阴线 O:1,818 H:1,823 L:1,772 C:1,773，VWAP下方，VWAP 1,985
- 1d结构：阳线 O:1,768 H:1,833 L:1,710 C:1,773，VWAP下方，VWAP 2,281
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.07B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,596 / 1,950；25x 多/空 1,702 / 1,844；50x 多/空 1,738 / 1,808。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,773 / ask 1,773，spread 0.1000 (0.0056%)，top20 bid 5.94K / ask 6.40K，买卖盘接近平衡
- 支撑：1,769-1,772
- 压力：1,857-1,918
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,857-1,918 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,857-1,918 且 short liquidation 扩大。

## 6. SOL

- 实时价格：69.49，24h 相对 prevDay：-7.63%
- 成交/持仓：24h notional volume $649M，base volume 9.11M SOL，Hyperliquid OI 4.52M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -19.67%，区间 67.38-88.42，位置 10.0%，VWAP 77.26；30d -33.44%，区间 67.38-109.19，位置 5.1%，VWAP 89.80
- 1h结构：阴线 O:70.43 H:70.50 L:69.48 C:69.49，VWAP下方，VWAP 72.54
- 4h结构：阴线 O:71.32 H:71.58 L:69.48 C:69.49，VWAP下方，VWAP 79.38
- 1d结构：阴线 O:70.24 H:71.98 L:67.38 C:69.49，VWAP下方，VWAP 94.74
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $314M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 62.54 / 76.44；25x 多/空 66.71 / 72.27；50x 多/空 68.10 / 70.88。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 69.51 / ask 69.51，spread 0.0010 (0.0014%)，top20 bid 3.37K / ask 6.71K，卖盘更厚，反弹上方抛压更明显
- 支撑：69.31-69.48
- 压力：73.92-76.17
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 73.92-76.17 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 73.92-76.17 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| kPEPE |89.5 |-8.89% |$42.7M |$21.4M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |88.5 |-8.20% |$61.1M |$90.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |88.2 |-10.08% |$35.2M |$33.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |88.2 |-15.24% |$62.0M |$40.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |88.1 |-11.37% |$7.67M |$6.55M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| WLD |87.8 |-8.19% |$17.8M |$26.5M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| AVAX |87.6 |-11.07% |$32.6M |$18.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| INJ |85.3 |-13.38% |$11.5M |$6.65M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Trump’s First Democratic Picks for SEC and CFTC Could Reshape Crypto’s Regulators (Fri, 13 Nov 2026 17:56:03 +0000)
- Cointelegraph: Trump nominates Hester Peirce successor among SEC, CFTC picks (Fri, 13 Nov 2026 02:29:27 +0000)

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
