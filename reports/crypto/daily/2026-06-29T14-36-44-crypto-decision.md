# 每日加密交易决策

生成时间：2026/06/29 22:36:44 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏空但不追空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 12 / Extreme Fear；ETH gas 0.5989 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Mon, 29 Jun 2026 14:29:09 +0000)
- Cointelegraph: From Bitcoin critics to blockchain believers: The 5 biggest crypto backflips (Mon, 29 Jun 2026 13:30:00 +0000)
- Cointelegraph: Strategy unveils capital framework to preserve Bitcoin exposure, pay dividends (Mon, 29 Jun 2026 13:12:23 +0000)
- Cointelegraph: Breez launches Bitcoin-to-stablecoin payments across more than 30 blockchains (Mon, 29 Jun 2026 13:00:00 +0000)
- Decrypt: Strategy Could Sell Up to $1.25B of Bitcoin Under 'Digital Credit Capital Framework' (Mon, 29 Jun 2026 12:48:39 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：59,632，24h 相对 prevDay：-0.82%
- 成交/持仓：24h notional volume $2.36B，base volume 39.6K BTC，Hyperliquid OI 34.3K BTC；Coinalyze OI 24h +0.54%。
- 7d/30d背景：短中期仍弱；7d -6.84%，区间 58,062-64,254，位置 25.3%，VWAP 60,497；30d -19.26%，区间 58,062-74,250，位置 9.7%，VWAP 63,313
- 1h结构：阳线 O:59,556 H:59,655 L:58,990 C:59,654，VWAP下方，VWAP 59,761
- 4h结构：阴线 O:59,935 H:60,767 L:58,990 C:59,636，VWAP下方，VWAP 61,132
- 1d结构：阳线 O:59,549 H:60,767 L:58,871 C:59,631，VWAP下方，VWAP 65,492
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：ratio 2.2637，long 69.36%，short 30.64%
- 估算多/空持仓：总 OI $2.05B；估多仓 $1.42B；估空仓 $627M。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 53,669 / 65,595；25x 多/空 57,247 / 62,017；50x 多/空 58,439 / 60,825。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 81.5880，short liq 91.4390。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,677 / ask 59,678，spread 1.0000 (0.0017%)，top20 bid 70.29 / ask 26.18，买盘更厚，短线回踩承接较好
- 支撑：59,353-59,564
- 压力：60,313-60,767
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认；Coinalyze多头占比69.36%，多头较拥挤
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 60,313-60,767 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 60,313-60,767 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,577，24h 相对 prevDay：-0.29%
- 成交/持仓：24h notional volume $497M，base volume 316K ETH，Hyperliquid OI 732K ETH；Coinalyze OI 24h -0.15%。
- 7d/30d背景：短中期仍弱；7d -8.75%，区间 1,511-1,736，位置 29.2%，VWAP 1,601；30d -22.01%，区间 1,504-2,037，位置 13.6%，VWAP 1,698
- 1h结构：阳线 O:1,572 H:1,578 L:1,557 C:1,578，VWAP上方，VWAP 1,573
- 4h结构：阳线 O:1,574 H:1,596 L:1,557 C:1,577，VWAP下方，VWAP 1,638
- 1d结构：阳线 O:1,571 H:1,596 L:1,549 C:1,577，VWAP下方，VWAP 1,767
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：ratio 2.4223，long 70.78%，short 29.22%
- 估算多/空持仓：总 OI $1.15B；估多仓 $817M；估空仓 $337M。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,419 / 1,734；25x 多/空 1,514 / 1,640；50x 多/空 1,545 / 1,608。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 3,864.4320，short liq 3,075.1480。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,577 / ask 1,577，spread 0.1000 (0.0063%)，top20 bid 13.4K / ask 6.80K，买盘更厚，短线回踩承接较好
- 支撑：1,574-1,576
- 压力：1,588-1,596
- 判断：偏空。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认；Coinalyze多头占比70.78%，多头较拥挤
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,588-1,596 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,588-1,596 且 short liquidation 扩大。

## 6. SOL

- 实时价格：73.45，24h 相对 prevDay：+2.25%
- 成交/持仓：24h notional volume $401M，base volume 5.57M SOL，Hyperliquid OI 5.41M SOL；Coinalyze OI 24h -0.58%。
- 7d/30d背景：短中期共振修复；7d +1.89%，区间 63.96-74.52，位置 88.6%，VWAP 70.16；30d -11.35%，区间 60.06-83.38，位置 56.8%，VWAP 69.51
- 1h结构：阴线 O:73.68 H:73.82 L:72.30 C:73.34，VWAP上方，VWAP 72.10
- 4h结构：阳线 O:72.50 H:74.52 L:72.11 C:73.33，VWAP上方，VWAP 70.37
- 1d结构：阳线 O:71.36 H:74.52 L:70.32 C:73.31，VWAP上方，VWAP 71.81
- funding/premium：funding +<0.1%，premium -0.140%
- Coinalyze long/short：ratio 2.3613，long 70.25%，short 29.75%
- 估算多/空持仓：总 OI $397M；估多仓 $279M；估空仓 $118M。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 66.11 / 80.80；25x 多/空 70.52 / 76.39；50x 多/空 71.98 / 74.92。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 5,437.2900，short liq 17,756.8800。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 73.30 / ask 73.31，spread 0.0100 (0.0136%)，top20 bid 7.05K / ask 5.39K，买盘更厚，短线回踩承接较好
- 支撑：72.57-72.90
- 压力：74.31-74.52
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；Coinalyze多头占比70.25%，多头较拥挤；近6小时空头强平较多，短线追多可能已释放一部分
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 72.57-72.90 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 72.57-72.90 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| FARTCOIN |96.4 |+9.93% |$20.0M |$21.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |91.9 |+6.61% |$26.0M |$30.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |91.1 |-3.42% |$15.5M |$43.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |90.1 |-3.27% |$38.8M |$37.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |89.4 |+1.58% |$419M |$1.33B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |88.9 |-2.79% |$9.91M |$74.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JTO |88.1 |-6.57% |$10.3M |$9.61M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |87.9 |-6.55% |$3.90M |$20.5M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

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
