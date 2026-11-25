# 每日加密交易决策

生成时间：2026/11/25 17:52:00 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 13 / Extreme Fear；ETH gas 0.0900 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Wed, 25 Nov 2026 05:50:43 +0000)
- Cointelegraph: Solana DEX Velocity halts trading over bug just months after relaunch (Wed, 25 Nov 2026 05:32:55 +0000)
- Cointelegraph: CleanSpark weighs selling more Bitcoin than it mines to de-risk books (Wed, 25 Nov 2026 01:40:59 +0000)
- Decrypt: Coldcard Bitcoin Exploit, Revisited: How a Hidden Flaw Survived Years of Audits (Tue, 24 Nov 2026 21:16:02 +0000)
- Decrypt: Ethereum Foundation Says AI Is a More Urgent Threat Than Quantum Computing (Tue, 24 Nov 2026 20:36:02 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：58,868，24h 相对 prevDay：-1.82%
- 成交/持仓：24h notional volume $3.15B，base volume 52.7K BTC，Hyperliquid OI 35.6K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -6.62%，区间 55,170-64,575，位置 39.3%，VWAP 60,404；30d -26.52%，区间 55,170-81,955，位置 13.8%，VWAP 68,377
- 1h结构：阴线 O:59,404 H:59,409 L:58,776 C:58,867，VWAP下方，VWAP 59,932
- 4h结构：阳线 O:58,697 H:59,461 L:58,688 C:58,867，VWAP下方，VWAP 61,115
- 1d结构：阴线 O:59,795 H:59,801 L:58,595 C:58,867，VWAP下方，VWAP 70,535
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.10B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 52,981 / 64,755；25x 多/空 56,513 / 61,223；50x 多/空 57,691 / 60,045。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 58,867 / ask 58,868，spread 1.0000 (0.0017%)，top20 bid 59.91 / ask 59.10，买卖盘接近平衡
- 支撑：58,688-58,776
- 压力：60,060-60,646
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 60,060-60,646 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 60,060-60,646 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,638，24h 相对 prevDay：-2.64%
- 成交/持仓：24h notional volume $749M，base volume 447K ETH，Hyperliquid OI 622K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.77%，区间 1,537-1,845，位置 33.1%，VWAP 1,681；30d -29.48%，区间 1,537-2,450，位置 11.1%，VWAP 1,982
- 1h结构：阴线 O:1,653 H:1,653 L:1,634 C:1,639，VWAP下方，VWAP 1,685
- 4h结构：阴线 O:1,640 H:1,656 L:1,634 C:1,639，VWAP下方，VWAP 1,702
- 1d结构：阴线 O:1,679 H:1,679 L:1,632 C:1,639，VWAP下方，VWAP 2,061
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.02B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,474 / 1,802；25x 多/空 1,573 / 1,704；50x 多/空 1,606 / 1,671。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,639 / ask 1,639，spread 0.1000 (0.0061%)，top20 bid 6.12K / ask 6.47K，买卖盘接近平衡
- 支撑：1,634-1,637
- 压力：1,687-1,707
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,687-1,707 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,687-1,707 且 short liquidation 扩大。

## 6. SOL

- 实时价格：67.48，24h 相对 prevDay：-4.58%
- 成交/持仓：24h notional volume $238M，base volume 3.43M SOL，Hyperliquid OI 4.08M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -8.30%，区间 64.88-78.43，位置 19.3%，VWAP 70.53；30d -33.12%，区间 64.88-103.85，位置 6.7%，VWAP 80.94
- 1h结构：阴线 O:68.09 H:68.09 L:67.31 C:67.50，VWAP下方，VWAP 69.84
- 4h结构：阴线 O:67.77 H:68.44 L:67.31 C:67.50，VWAP下方，VWAP 71.37
- 1d结构：阴线 O:69.66 H:69.86 L:67.31 C:67.50，VWAP下方，VWAP 84.86
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $275M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 60.73 / 74.23；25x 多/空 64.78 / 70.18；50x 多/空 66.13 / 68.83。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 67.50 / ask 67.50，spread 0.0010 (0.0015%)，top20 bid 3.50K / ask 7.24K，卖盘更厚，反弹上方抛压更明显
- 支撑：67.31-67.31
- 压力：70.09-70.92
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 70.09-70.92 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 70.09-70.92 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZRO |92.2 |-6.90% |$9.16M |$29.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| MON |92.1 |-17.85% |$21.6M |$25.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JUP |90.4 |-8.81% |$3.01M |$6.96M |-<0.1% |不碰：流动性/OI 偏低 |
| BIGTIME |90.0 |+62.07% |$5.49M |$1.84M |-0.500% |不碰：流动性/OI 偏低 |
| UNI |89.3 |-5.53% |$7.42M |$20.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |89.0 |-7.71% |$471M |$1.07B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TAO |87.7 |-5.74% |$2.24M |$16.6M |-<0.1% |不碰：流动性/OI 偏低 |
| PUMP |87.4 |-3.84% |$15.9M |$36.0M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

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
