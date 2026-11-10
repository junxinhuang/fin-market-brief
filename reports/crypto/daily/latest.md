# 每日加密交易决策

生成时间：2026/11/11 04:30:47 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 32 / Fear；ETH gas 0.1168 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Mercado Bitcoin to resume cash withdrawals after $49M hack (Tue, 10 Nov 2026 18:12:07 +0000)
- Decrypt: Bitcoin Falls as Hot US Inflation Fuels Fears of Bigger Fed Rate Hike (Tue, 10 Nov 2026 16:27:57 +0000)
- Cointelegraph: Bitcoin nears 11-week low after ‘discouraging’ US CPI inflation beat (Tue, 10 Nov 2026 16:25:03 +0000)
- Decrypt: Solana's Jupiter Expands Beyond Trading With Token Baskets, Yield Vaults and New Portfolio (Tue, 10 Nov 2026 15:01:02 +0000)
- Decrypt: Decrypt Money Account Gets Confidential Transfers With Solana Privacy Firm Helius (Tue, 10 Nov 2026 14:32:48 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：73,648，24h 相对 prevDay：-1.55%
- 成交/持仓：24h notional volume $3.30B，base volume 44.6K BTC，Hyperliquid OI 41.2K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -4.89%，区间 72,668-81,177，位置 11.5%，VWAP 76,624；30d -12.04%，区间 72,668-84,850，位置 8.0%，VWAP 79,419
- 1h结构：阳线 O:73,442 H:73,750 L:73,290 C:73,648，VWAP下方，VWAP 74,157
- 4h结构：阳线 O:73,442 H:73,750 L:73,290 C:73,648，VWAP下方，VWAP 76,398
- 1d结构：阴线 O:75,334 H:75,401 L:72,668 C:73,648，VWAP下方，VWAP 80,368
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.04B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 66,283 / 81,013；25x 多/空 70,702 / 76,594；50x 多/空 72,175 / 75,121。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 73,648 / ask 73,649，spread 1.0000 (0.0014%)，top20 bid 119.42 / ask 21.07，买盘更厚，短线回踩承接较好
- 支撑：73,300-73,568
- 压力：74,865-75,401
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 74,865-75,401 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 74,865-75,401 且 short liquidation 扩大。

## 5. ETH

- 实时价格：2,051，24h 相对 prevDay：-3.68%
- 成交/持仓：24h notional volume $1.34B，base volume 646K ETH，Hyperliquid OI 787K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -9.84%，区间 2,004-2,450，位置 10.6%，VWAP 2,216；30d -19.13%，区间 2,004-2,578，位置 8.2%，VWAP 2,324
- 1h结构：阳线 O:2,043 H:2,055 L:2,038 C:2,051，VWAP下方，VWAP 2,082
- 4h结构：阳线 O:2,043 H:2,055 L:2,038 C:2,051，VWAP下方，VWAP 2,215
- 1d结构：阴线 O:2,134 H:2,136 L:2,004 C:2,051，VWAP下方，VWAP 2,390
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.62B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,846 / 2,256；25x 多/空 1,969 / 2,133；50x 多/空 2,010 / 2,092。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,051 / ask 2,051，spread 0.1000 (0.0049%)，top20 bid 2.65K / ask 4.39K，卖盘更厚，反弹上方抛压更明显
- 支撑：2,037-2,038
- 压力：2,118-2,136
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 2,118-2,136 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 2,118-2,136 且 short liquidation 扩大。

## 6. SOL

- 实时价格：83.32，24h 相对 prevDay：-4.04%
- 成交/持仓：24h notional volume $238M，base volume 2.83M SOL，Hyperliquid OI 4.70M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -10.28%，区间 81.28-98.16，位置 11.8%，VWAP 89.02；30d -25.18%，区间 81.28-113.39，位置 6.2%，VWAP 97.80
- 1h结构：阳线 O:82.90 H:83.52 L:82.65 C:83.28，VWAP下方，VWAP 85.19
- 4h结构：阳线 O:82.90 H:83.52 L:82.65 C:83.28，VWAP下方，VWAP 89.59
- 1d结构：阴线 O:86.67 H:86.78 L:81.28 C:83.28，VWAP下方，VWAP 101.53
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $392M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 74.99 / 91.65；25x 多/空 79.99 / 86.65；50x 多/空 81.65 / 84.98。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 83.28 / ask 83.28，spread 0.0010 (0.0012%)，top20 bid 8.02K / ask 5.39K，买盘更厚，短线回踩承接较好
- 支撑：82.58-82.65
- 压力：86.13-86.78
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 86.13-86.78 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 86.13-86.78 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| XMR |97.0 |-6.83% |$39.8M |$138M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |96.5 |-11.82% |$635M |$443M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |94.5 |-11.04% |$16.0M |$52.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |94.0 |-6.68% |$15.8M |$47.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |93.6 |-4.65% |$33.2M |$54.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |93.2 |-4.68% |$11.8M |$58.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ARB |92.4 |-9.44% |$12.0M |$12.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| INIT |91.7 |+15.80% |$28.1M |$3.34M |-0.500% |只观察：衍生品拥挤或溢价异常 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Grayscale Bets $1 Million on Zcash as Privacy Coin Tumbles (Tue, 10 Nov 2026 19:16:02 +0000)

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
