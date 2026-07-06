# 每日加密交易决策

生成时间：2026/07/06 21:15:59 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 24 / Extreme Fear；ETH gas 0.1514 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Strategy sells 3,588 Bitcoin for $216M to fund dividends, keeps $2.55B reserve intact (Mon, 06 Jul 2026 12:59:04 +0000)
- Decrypt: Ethereum 'Reinventing Itself' With Biggest Overhaul Since the Merge: Vitalik Buterin (Mon, 06 Jul 2026 12:51:53 +0000)
- Decrypt: Strategy Sells $216M in Bitcoin for Dividends Under 'BTC Monetization Program' (Mon, 06 Jul 2026 12:28:00 +0000)
- Cointelegraph: $60.4K Becomes 'most important area': Five things to know in Bitcoin this week (Mon, 06 Jul 2026 10:25:20 +0000)
- Cointelegraph: Dormant $1.9M Bitcoin tied to New York lawsuit moves after nearly 15 years (Mon, 06 Jul 2026 09:20:14 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：61,659，24h 相对 prevDay：-1.72%
- 成交/持仓：24h notional volume $1.84B，base volume 29.2K BTC，Hyperliquid OI 37.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d +2.41%，区间 57,768-63,997，位置 62.8%，VWAP 61,123；30d +1.34%，区间 57,768-67,283，位置 41.1%，VWAP 62,270
- 1h结构：阴线 O:61,766 H:61,817 L:61,587 C:61,678，VWAP下方，VWAP 62,827
- 4h结构：阴线 O:62,501 H:62,501 L:61,587 C:61,678，VWAP上方，VWAP 60,750
- 1d结构：阴线 O:63,635 H:63,919 L:61,587 C:61,677，VWAP下方，VWAP 63,700
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.32B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 55,493 / 67,825；25x 多/空 59,193 / 64,125；50x 多/空 60,426 / 62,892。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 61,677 / ask 61,678，spread 1.0000 (0.0016%)，top20 bid 16.23 / ask 106.35，卖盘更厚，反弹上方抛压更明显
- 支撑：61,587-61,587
- 压力：63,663-63,997
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 63,663-63,997 或跌破 61,587-61,587 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,737，24h 相对 prevDay：-1.65%
- 成交/持仓：24h notional volume $540M，base volume 305K ETH，Hyperliquid OI 731K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +7.71%，区间 1,550-1,809，位置 72.1%，VWAP 1,683；30d +10.69%，区间 1,511-1,850，位置 66.6%，VWAP 1,678
- 1h结构：阴线 O:1,742 H:1,742 L:1,732 C:1,736，VWAP下方，VWAP 1,767
- 4h结构：阴线 O:1,760 H:1,761 L:1,732 C:1,737，VWAP上方，VWAP 1,662
- 1d结构：阴线 O:1,786 H:1,799 L:1,732 C:1,737，VWAP上方，VWAP 1,718
- funding/premium：funding +<0.1%，premium +0.000%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.27B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,563 / 1,910；25x 多/空 1,667 / 1,806；50x 多/空 1,702 / 1,772。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,737 / ask 1,737，spread 0.1000 (0.0058%)，top20 bid 6.13K / ask 5.64K，买卖盘接近平衡
- 支撑：1,732-1,736
- 压力：1,791-1,809
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,791-1,809 或跌破 1,732-1,736 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：79.47，24h 相对 prevDay：-1.74%
- 成交/持仓：24h notional volume $264M，base volume 3.27M SOL，Hyperliquid OI 5.91M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +5.71%，区间 71.90-83.99，位置 62.6%，VWAP 79.19；30d +27.84%，区间 61.92-83.99，位置 79.5%，VWAP 71.98
- 1h结构：阳线 O:79.40 H:79.66 L:79.19 C:79.47，VWAP下方，VWAP 80.65
- 4h结构：阴线 O:80.37 H:80.64 L:79.19 C:79.47，VWAP上方，VWAP 77.52
- 1d结构：阴线 O:81.58 H:82.32 L:79.19 C:79.47，VWAP上方，VWAP 71.79
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $470M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 71.52 / 87.41；25x 多/空 76.29 / 82.64；50x 多/空 77.88 / 81.05。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 79.47 / ask 79.47，spread 0.0010 (0.0013%)，top20 bid 3.47K / ask 8.39K，卖盘更厚，反弹上方抛压更明显
- 支撑：79.19-79.32
- 压力：81.70-82.50
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 81.70-82.50 或跌破 79.19-79.32 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |94.9 |-4.23% |$86.8M |$207M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ADA |91.2 |-5.29% |$7.55M |$27.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| GRASS |91.1 |-11.40% |$2.18M |$11.3M |+<0.1% |不碰：流动性/OI 偏低 |
| ENA |90.8 |-3.71% |$5.97M |$24.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| MON |90.3 |+9.71% |$3.03M |$28.7M |+<0.1% |不碰：流动性/OI 偏低 |
| XPL |90.0 |-3.08% |$15.0M |$41.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| SUI |89.0 |-3.45% |$13.5M |$24.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |88.9 |+3.50% |$2.31M |$29.3M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Zcash Ironwood Upgrade Nears as Developers Work to Restore Confidence After ZEC Crash (Fri, 03 Jul 2026 17:56:03 +0000)

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
