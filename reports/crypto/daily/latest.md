# 每日加密交易决策

生成时间：2026/11/24 18:58:03 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 11 / Extreme Fear；ETH gas 0.2205 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Bitcoin dips back under $60K as gold seals worst 60-day loss since 1980s (Tue, 24 Nov 2026 09:25:45 +0000)
- Cointelegraph: Bitcoin ETFs keep bleeding as BlackRock’s IBIT shares gain nearly 5% (Tue, 24 Nov 2026 07:41:50 +0000)
- Cointelegraph: Here’s what happened in crypto today (Tue, 24 Nov 2026 06:00:00 +0000)
- Cointelegraph: Why 42 Macro says it’s waiting to buy the Bitcoin dip (Tue, 24 Nov 2026 05:07:30 +0000)
- Cointelegraph: Ethereum Foundation doubles protocol security team ahead of overhaul (Tue, 24 Nov 2026 00:36:26 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：59,649，24h 相对 prevDay：-2.85%
- 成交/持仓：24h notional volume $4.72B，base volume 76.2K BTC，Hyperliquid OI 37.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -8.13%，区间 55,170-64,970，位置 45.7%，VWAP 60,827；30d -25.55%，区间 55,170-81,955，位置 16.7%，VWAP 68,921
- 1h结构：阴线 O:59,958 H:60,048 L:59,332 C:59,645，VWAP下方，VWAP 61,679
- 4h结构：阴线 O:60,409 H:60,547 L:59,332 C:59,645，VWAP下方，VWAP 61,593
- 1d结构：阴线 O:61,245 H:61,650 L:59,332 C:59,644，VWAP下方，VWAP 71,181
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.23B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 53,684 / 65,614；25x 多/空 57,263 / 62,035；50x 多/空 58,456 / 60,842。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,644 / ask 59,645，spread 1.0000 (0.0017%)，top20 bid 70.39 / ask 183.56，卖盘更厚，反弹上方抛压更明显
- 支撑：59,332-59,413
- 压力：61,650-64,575
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 61,650-64,575 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 61,650-64,575 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,681，24h 相对 prevDay：-2.49%
- 成交/持仓：24h notional volume $1.63B，base volume 931K ETH，Hyperliquid OI 615K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.86%，区间 1,537-1,845，位置 46.8%，VWAP 1,691；30d -27.83%，区间 1,537-2,450，位置 15.8%，VWAP 1,998
- 1h结构：阴线 O:1,683 H:1,688 L:1,672 C:1,681，VWAP下方，VWAP 1,742
- 4h结构：阴线 O:1,697 H:1,703 L:1,672 C:1,681，VWAP下方，VWAP 1,714
- 1d结构：阴线 O:1,710 H:1,721 L:1,668 C:1,681，VWAP下方，VWAP 2,085
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.03B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,513 / 1,849；25x 多/空 1,614 / 1,748；50x 多/空 1,647 / 1,715。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,681 / ask 1,681，spread 0.1000 (0.0059%)，top20 bid 6.43K / ask 8.58K，卖盘更厚，反弹上方抛压更明显
- 支撑：1,672-1,675
- 压力：1,735-1,845
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,735-1,845 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,735-1,845 且 short liquidation 扩大。

## 6. SOL

- 实时价格：70.21，24h 相对 prevDay：-2.86%
- 成交/持仓：24h notional volume $353M，base volume 4.75M SOL，Hyperliquid OI 4.22M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -6.59%，区间 64.88-78.43，位置 39.3%，VWAP 71.20；30d -30.72%，区间 64.88-103.85，位置 13.7%，VWAP 81.73
- 1h结构：阴线 O:70.72 H:70.89 L:70.00 C:70.20，VWAP下方，VWAP 73.88
- 4h结构：阴线 O:71.47 H:71.66 L:70.00 C:70.20，VWAP下方，VWAP 71.69
- 1d结构：阴线 O:71.98 H:72.67 L:70.00 C:70.20，VWAP下方，VWAP 85.98
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $296M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 63.19 / 77.23；25x 多/空 67.40 / 73.02；50x 多/空 68.80 / 71.61。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 70.20 / ask 70.20，spread 0.0010 (0.0014%)，top20 bid 8.02K / ask 14.5K，卖盘更厚，反弹上方抛压更明显
- 支撑：70.00-70.11
- 压力：73.41-78.43
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 73.41-78.43 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 73.41-78.43 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |96.3 |-6.61% |$411M |$209M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |91.7 |-5.62% |$10.4M |$8.89M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |91.3 |-4.73% |$36.7M |$39.1M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |91.2 |-2.63% |$89.5M |$100M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |89.9 |-2.21% |$774M |$1.14B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JUP |89.4 |-4.73% |$8.82M |$6.69M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |89.1 |-13.65% |$6.83M |$29.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |89.0 |-3.82% |$28.7M |$69.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Trump-linked American Bitcoin secures $150M credit line from FalconX (Mon, 23 Nov 2026 13:44:16 +0000)

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
