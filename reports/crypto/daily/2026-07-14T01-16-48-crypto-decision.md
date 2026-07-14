# 每日加密交易决策

生成时间：2026/07/14 09:16:48 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 22 / Extreme Fear；ETH gas 0.1146 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: New Hampshire Follows Bitcoin Reserve With 'Blockchain Basic Laws' Signing (Mon, 13 Jul 2026 20:57:09 +0000)
- Cointelegraph: Here’s what happened in crypto today (Mon, 13 Jul 2026 18:37:34 +0000)
- Decrypt: BitMine Buys $49 Million in Ethereum as Tom Lee Hails Early Robinhood Chain Demand (Mon, 13 Jul 2026 15:22:10 +0000)
- Cointelegraph: Bitcoin threatens $62K in risk-asset rout as Donald Trump says US will 'run' closed Hormuz Strait (Mon, 13 Jul 2026 15:05:45 +0000)
- Decrypt: Strategy Pads Cash Reserves to $3 Billion, Skipping Bitcoin Buy for Third Week (Mon, 13 Jul 2026 14:09:38 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：62,510，24h 相对 prevDay：-2.09%
- 成交/持仓：24h notional volume $1.98B，base volume 31.6K BTC，Hyperliquid OI 35.8K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -1.36%，区间 61,550-64,690，位置 30.0%，VWAP 63,081；30d -4.91%，区间 57,768-67,283，位置 49.6%，VWAP 62,252
- 1h结构：阴线 O:62,539 H:62,558 L:62,450 C:62,492，VWAP下方，VWAP 62,927
- 4h结构：阳线 O:62,331 H:62,641 L:62,264 C:62,492，VWAP下方，VWAP 63,258
- 1d结构：阳线 O:62,331 H:62,641 L:62,264 C:62,492，VWAP上方，VWAP 62,383
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.24B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 56,259 / 68,761；25x 多/空 60,010 / 65,010；50x 多/空 61,260 / 63,760。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 62,502 / ask 62,503，spread 1.0000 (0.0016%)，top20 bid 87.28 / ask 50.37，买盘更厚，短线回踩承接较好
- 支撑：62,264-62,499
- 压力：63,000-63,320
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 63,000-63,320 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 63,000-63,320 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,786，24h 相对 prevDay：-2.01%
- 成交/持仓：24h notional volume $1.35B，base volume 760K ETH，Hyperliquid OI 880K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +0.79%，区间 1,713-1,846，位置 54.5%，VWAP 1,773；30d +3.49%，区间 1,511-1,850，位置 81.1%，VWAP 1,706
- 1h结构：阴线 O:1,786 H:1,786 L:1,784 C:1,785，VWAP下方，VWAP 1,786
- 4h结构：阳线 O:1,777 H:1,788 L:1,774 C:1,785，VWAP上方，VWAP 1,776
- 1d结构：阳线 O:1,777 H:1,788 L:1,774 C:1,785，VWAP上方，VWAP 1,688
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.57B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,607 / 1,964；25x 多/空 1,714 / 1,857；50x 多/空 1,750 / 1,822。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,785 / ask 1,785，spread 0.1000 (0.0056%)，top20 bid 6.05K / ask 5.43K，买卖盘接近平衡
- 支撑：1,776-1,784
- 压力：1,788-1,793
- 判断：震荡。24h 价格偏弱；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,788-1,793 或跌破 1,776-1,784 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：75.33，24h 相对 prevDay：-2.54%
- 成交/持仓：24h notional volume $242M，base volume 3.20M SOL，Hyperliquid OI 4.72M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -6.45%，区间 74.06-80.73，位置 19.0%，VWAP 76.97；30d +5.64%，区间 63.96-83.99，位置 56.8%，VWAP 74.48
- 1h结构：阴线 O:75.40 H:75.42 L:75.30 C:75.33，VWAP下方，VWAP 75.91
- 4h结构：阳线 O:74.96 H:75.44 L:74.79 C:75.33，VWAP下方，VWAP 78.72
- 1d结构：阳线 O:74.96 H:75.44 L:74.79 C:75.33，VWAP上方，VWAP 71.83
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $356M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 67.79 / 82.86；25x 多/空 72.31 / 78.34；50x 多/空 73.82 / 76.83。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 75.33 / ask 75.33，spread 0.0010 (0.0013%)，top20 bid 6.52K / ask 3.97K，买盘更厚，短线回踩承接较好
- 支撑：75.10-75.30
- 压力：76.38-76.86
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 76.38-76.86 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 76.38-76.86 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |95.4 |-6.16% |$135M |$259M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |94.1 |-5.60% |$454M |$1.37B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |90.5 |-5.96% |$16.9M |$20.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |90.0 |-8.45% |$56.2M |$113M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kBONK |89.5 |-7.44% |$1.86M |$8.30M |-<0.1% |不碰：流动性/OI 偏低 |
| WLD |88.0 |-7.27% |$18.0M |$39.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CRV |87.6 |+3.56% |$5.47M |$6.53M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JTO |87.3 |+4.89% |$10.5M |$11.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

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
