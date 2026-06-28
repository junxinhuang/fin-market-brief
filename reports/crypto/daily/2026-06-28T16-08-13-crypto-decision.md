# 每日加密交易决策

生成时间：2026/06/29 00:08:13 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 18 / Extreme Fear；ETH gas 0.0852 gwei，链上交易很便宜，gas 本身不是风险源。
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

- 实时价格：59,886，24h 相对 prevDay：-1.39%
- 成交/持仓：24h notional volume $925M，base volume 15.4K BTC，Hyperliquid OI 33.8K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -5.36%，区间 58,062-65,587，位置 24.1%，VWAP 61,153；30d -18.46%，区间 58,062-74,250，位置 11.2%，VWAP 63,519
- 1h结构：阳线 O:59,855 H:59,912 L:59,846 C:59,878，VWAP下方，VWAP 60,291
- 4h结构：阳线 O:59,855 H:59,912 L:59,846 C:59,878，VWAP下方，VWAP 61,433
- 1d结构：阴线 O:59,996 H:60,500 L:59,732 C:59,878，VWAP下方，VWAP 65,764
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.03B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 53,897 / 65,875；25x 多/空 57,491 / 62,281；50x 多/空 58,688 / 61,084。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,872 / ask 59,873，spread 1.0000 (0.0017%)，top20 bid 52.35 / ask 204.15，卖盘更厚，反弹上方抛压更明显
- 支撑：59,825-59,846
- 压力：60,455-60,500
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 60,455-60,500 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 60,455-60,500 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,579，24h 相对 prevDay：-1.49%
- 成交/持仓：24h notional volume $212M，base volume 134K ETH，Hyperliquid OI 723K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.44%，区间 1,511-1,779，位置 25.5%，VWAP 1,634；30d -21.58%，区间 1,504-2,037，位置 14.0%，VWAP 1,704
- 1h结构：阴线 O:1,580 H:1,581 L:1,579 C:1,579，VWAP下方，VWAP 1,583
- 4h结构：阴线 O:1,580 H:1,581 L:1,579 C:1,579，VWAP下方，VWAP 1,646
- 1d结构：阳线 O:1,573 H:1,587 L:1,562 C:1,579，VWAP下方，VWAP 1,774
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.14B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,421 / 1,737；25x 多/空 1,516 / 1,642；50x 多/空 1,548 / 1,611。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,579 / ask 1,579，spread 0.1000 (0.0063%)，top20 bid 11.8K / ask 12.4K，买卖盘接近平衡
- 支撑：1,577-1,579
- 压力：1,585-1,587
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,585-1,587 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,585-1,587 且 short liquidation 扩大。

## 6. SOL

- 实时价格：72.01，24h 相对 prevDay：-0.97%
- 成交/持仓：24h notional volume $171M，base volume 2.40M SOL，Hyperliquid OI 5.37M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -0.57%，区间 63.96-74.97，位置 73.1%，VWAP 69.97；30d -12.19%，区间 60.06-83.38，位置 51.2%，VWAP 69.48
- 1h结构：阴线 O:72.05 H:72.08 L:71.93 C:72.01，VWAP上方，VWAP 71.62
- 4h结构：阴线 O:72.05 H:72.08 L:71.93 C:72.01，VWAP上方，VWAP 70.27
- 1d结构：阳线 O:70.45 H:72.36 L:70.09 C:72.01，VWAP上方，VWAP 71.91
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $387M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 64.81 / 79.21；25x 多/空 69.13 / 74.89；50x 多/空 70.57 / 73.45。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 72.01 / ask 72.01，spread 0.0010 (0.0014%)，top20 bid 4.99K / ask 6.87K，卖盘更厚，反弹上方抛压更明显
- 支撑：71.61-71.93
- 压力：72.17-72.36
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 71.61-71.93 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 71.61-71.93 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |95.7 |+6.35% |$37.5M |$42.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |93.7 |-4.21% |$16.4M |$75.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |92.7 |-6.77% |$17.2M |$79.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |92.6 |-5.34% |$55.8M |$164M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |91.9 |-3.83% |$4.87M |$13.1M |-<0.1% |不碰：流动性/OI 偏低 |
| XPL |91.3 |-5.77% |$7.46M |$32.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |90.6 |-4.89% |$13.9M |$45.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| MANTA |90.0 |+77.22% |$4.76M |$2.29M |-<0.1% |不碰：流动性/OI 偏低 |

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
