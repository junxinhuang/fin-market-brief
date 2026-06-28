# 每日加密交易决策

生成时间：2026/06/28 21:15:35 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 18 / Extreme Fear；ETH gas 0.0796 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Sun, 28 Jun 2026 13:04:13 +0000)
- Cointelegraph: Grayscale's Pandl hopes Strategy sells $3B in Bitcoin to restore confidence (Sun, 28 Jun 2026 07:59:28 +0000)
- Cointelegraph: Bitcoin unspent transaction outputs signal capitulation underway: analyst (Sun, 28 Jun 2026 02:51:04 +0000)
- Cointelegraph: Fidelity rebuts claims Bitcoin becomes less secure after halvings (Sat, 27 Jun 2026 20:53:02 +0000)
- Cointelegraph: Bitcoin faces fresh capitulation risk as 50K BTC moved at a loss (Sat, 27 Jun 2026 19:27:44 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：60,093，24h 相对 prevDay：-0.50%
- 成交/持仓：24h notional volume $1.02B，base volume 16.9K BTC，Hyperliquid OI 33.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -5.03%，区间 58,062-65,587，位置 27.0%，VWAP 61,165；30d -18.17%，区间 58,062-74,250，位置 12.5%，VWAP 63,524
- 1h结构：阴线 O:60,269 H:60,269 L:59,946 C:60,090，VWAP下方，VWAP 60,308
- 4h结构：阴线 O:60,311 H:60,418 L:59,946 C:60,090，VWAP下方，VWAP 61,499
- 1d结构：阳线 O:59,996 H:60,500 L:59,732 C:60,090，VWAP下方，VWAP 65,770
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.01B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 54,084 / 66,102；25x 多/空 57,689 / 62,497；50x 多/空 58,891 / 61,295。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 60,089 / ask 60,090，spread 1.0000 (0.0017%)，top20 bid 64.33 / ask 84.43，卖盘更厚，反弹上方抛压更明显
- 支撑：60,058-60,089
- 压力：60,500-60,820
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 60,500-60,820 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 60,500-60,820 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,579，24h 相对 prevDay：-0.40%
- 成交/持仓：24h notional volume $260M，base volume 164K ETH，Hyperliquid OI 722K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.45%，区间 1,511-1,779，位置 25.4%，VWAP 1,634；30d -21.58%，区间 1,504-2,037，位置 14.0%，VWAP 1,704
- 1h结构：阴线 O:1,583 H:1,583 L:1,574 C:1,579，VWAP下方，VWAP 1,583
- 4h结构：阴线 O:1,582 H:1,587 L:1,574 C:1,579，VWAP下方，VWAP 1,648
- 1d结构：阳线 O:1,573 H:1,587 L:1,562 C:1,579，VWAP下方，VWAP 1,774
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.14B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,421 / 1,737；25x 多/空 1,516 / 1,642；50x 多/空 1,548 / 1,611。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,579 / ask 1,579，spread 0.2000 (0.0127%)，top20 bid 12.8K / ask 11.0K，买卖盘接近平衡
- 支撑：1,575-1,577
- 压力：1,587-1,607
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,587-1,607 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,587-1,607 且 short liquidation 扩大。

## 6. SOL

- 实时价格：71.56，24h 相对 prevDay：-0.90%
- 成交/持仓：24h notional volume $187M，base volume 2.61M SOL，Hyperliquid OI 5.28M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -1.19%，区间 63.96-74.97，位置 69.0%，VWAP 69.94；30d -12.74%，区间 60.06-83.38，位置 49.3%，VWAP 69.47
- 1h结构：阴线 O:71.85 H:71.85 L:71.30 C:71.56，VWAP下方，VWAP 71.63
- 4h结构：阴线 O:71.89 H:72.36 L:71.30 C:71.56，VWAP上方，VWAP 70.29
- 1d结构：阳线 O:70.45 H:72.36 L:70.09 C:71.56，VWAP下方，VWAP 71.91
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $378M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 64.40 / 78.71；25x 多/空 68.70 / 74.42；50x 多/空 70.13 / 72.99。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 71.57 / ask 71.57，spread 0.0060 (0.0084%)，top20 bid 7.27K / ask 4.36K，买盘更厚，短线回踩承接较好
- 支撑：71.30-71.45
- 压力：72.36-72.98
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 72.36-72.98 或跌破 71.30-71.45 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |93.1 |+12.09% |$34.6M |$43.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |93.0 |-7.41% |$21.8M |$79.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.0 |-5.88% |$55.8M |$163M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |91.3 |-6.87% |$7.05M |$33.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |91.1 |-3.41% |$4.41M |$13.3M |-<0.1% |不碰：流动性/OI 偏低 |
| AVAX |90.5 |-3.66% |$4.75M |$17.6M |-<0.1% |不碰：流动性/OI 偏低 |
| WLD |89.9 |-3.56% |$14.4M |$45.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ADA |88.4 |-1.96% |$5.01M |$28.0M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: OpenAI Rolls Out GPT-5.6—But Only for Some Users Due to Trump Admin (Fri, 26 Jun 2026 19:06:06 +0000)
- Decrypt: Trump Administration Asks OpenAI to Limit GPT-5.6 Rollout: Reports (Fri, 26 Jun 2026 16:38:33 +0000)

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
