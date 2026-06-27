# 每日加密交易决策

生成时间：2026/06/27 09:16:36 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 15 / Extreme Fear；ETH gas 0.0572 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Strategy's Saylor Acknowledges 'Volatility Test' as STRC Hits New Low on Bitcoin Weakness (Fri, 26 Jun 2026 15:33:49 +0000)
- Decrypt: Bitcoin Tests $59K as ETFs Shed $692M, Options Expiry Looms (Fri, 26 Jun 2026 13:43:02 +0000)
- Decrypt: Morning Minute: Kraken Eyes 15% Stake in Aave at $385M Valuation (Fri, 26 Jun 2026 12:20:32 +0000)
- Decrypt: Coinbase-Backed Ethereum Network Base Recovers After Block Production Issue (Thu, 25 Jun 2026 19:19:05 +0000)
- Decrypt: Traders Predict More Pain for Bitcoin and Ethereum After Monthly Drops Above 20% (Thu, 25 Jun 2026 16:24:03 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：59,938，24h 相对 prevDay：+0.63%
- 成交/持仓：24h notional volume $3.05B，base volume 51.2K BTC，Hyperliquid OI 33.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -6.74%，区间 58,062-65,587，位置 25.0%，VWAP 61,409；30d -18.55%，区间 58,062-74,300，位置 11.6%，VWAP 63,821
- 1h结构：阴线 O:60,025 H:60,033 L:59,929 C:59,940，VWAP上方，VWAP 59,482
- 4h结构：阴线 O:60,074 H:60,159 L:59,837 C:59,941，VWAP下方，VWAP 61,739
- 1d结构：阴线 O:60,074 H:60,159 L:59,837 C:59,941，VWAP下方，VWAP 66,059
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.01B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 53,944 / 65,932；25x 多/空 57,540 / 62,336；50x 多/空 58,739 / 61,137。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,940 / ask 59,941，spread 1.0000 (0.0017%)，top20 bid 212.57 / ask 34.87，买盘更厚，短线回踩承接较好
- 支撑：59,920-59,931
- 压力：60,543-60,726
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 60,543-60,726 或跌破 59,920-59,931 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,574，24h 相对 prevDay：+0.67%
- 成交/持仓：24h notional volume $1.07B，base volume 690K ETH，Hyperliquid OI 702K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -9.56%，区间 1,511-1,779，位置 23.6%，VWAP 1,643；30d -21.66%，区间 1,504-2,047，位置 12.9%，VWAP 1,714
- 1h结构：阴线 O:1,576 H:1,576 L:1,573 C:1,574，VWAP上方，VWAP 1,558
- 4h结构：阴线 O:1,578 H:1,581 L:1,571 C:1,574，VWAP下方，VWAP 1,657
- 1d结构：阴线 O:1,578 H:1,581 L:1,571 C:1,574，VWAP下方，VWAP 1,786
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.10B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,417 / 1,732；25x 多/空 1,511 / 1,637；50x 多/空 1,543 / 1,606。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,574 / ask 1,574，spread 0.1000 (0.0064%)，top20 bid 9.93K / ask 11.8K，买卖盘接近平衡
- 支撑：1,572-1,573
- 压力：1,588-1,593
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,588-1,593 或跌破 1,572-1,573 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：71.64，24h 相对 prevDay：+6.00%
- 成交/持仓：24h notional volume $496M，base volume 7.08M SOL，Hyperliquid OI 5.08M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -2.19%，区间 63.96-74.97，位置 69.7%，VWAP 70.16；30d -12.73%，区间 60.06-83.38，位置 49.6%，VWAP 69.62
- 1h结构：阴线 O:71.78 H:71.78 L:71.55 C:71.64，VWAP上方，VWAP 68.82
- 4h结构：阴线 O:71.87 H:72.43 L:71.55 C:71.64，VWAP上方，VWAP 70.15
- 1d结构：阴线 O:71.87 H:72.43 L:71.55 C:71.64，VWAP下方，VWAP 72.22
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $364M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 64.47 / 78.80；25x 多/空 68.77 / 74.50；50x 多/空 70.20 / 73.07。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 71.64 / ask 71.64，spread 0.0010 (0.0014%)，top20 bid 5.89K / ask 9.84K，卖盘更厚，反弹上方抛压更明显
- 支撑：71.55-71.56
- 压力：73.65-73.90
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 71.55-71.56 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 71.55-71.56 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| LIT |96.4 |+11.67% |$19.6M |$77.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |94.3 |+14.02% |$69.2M |$82.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |91.2 |+12.11% |$15.8M |$28.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |89.8 |-3.87% |$29.6M |$47.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |88.6 |+3.44% |$43.4M |$36.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| INJ |88.5 |+14.02% |$3.19M |$3.35M |-<0.1% |不碰：流动性/OI 偏低 |
| IP |88.4 |-23.35% |$5.28M |$3.88M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |88.4 |+8.16% |$10.8M |$15.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Morning Minute: Kraken Eyes 15% Stake in Aave at $385M Valuation (Fri, 26 Jun 2026 12:20:32 +0000)
- Decrypt: Aave Token Could Climb 50x by End of 2030, Standard Chartered Says—Here's Why (Wed, 24 Jun 2026 22:27:05 +0000)

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
