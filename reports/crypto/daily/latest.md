# 每日加密交易决策

生成时间：2026/11/21 16:19:08 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 12 / Extreme Fear；ETH gas 0.1458 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Cathie Wood Bets $91M on Anthropic IPO While Paring Crypto Exposure (Fri, 20 Nov 2026 18:46:03 +0000)
- Cointelegraph: Bitcoin falls below $60K for first time since July amid broader market selloff (Fri, 20 Nov 2026 16:55:51 +0000)
- Decrypt: Bitcoin Breaks Below $60K as Crypto Fear Index Hits Worst Level Since February (Fri, 20 Nov 2026 16:35:59 +0000)
- Cointelegraph: Bitcoin price drops to $60K as Anthropic drops to $87 in tech sell-off (Fri, 20 Nov 2026 15:52:06 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 20 Nov 2026 13:29:58 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：57,891，24h 相对 prevDay：-6.37%
- 成交/持仓：24h notional volume $7.33B，base volume 125K BTC，Hyperliquid OI 36.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -9.72%，区间 55,170-66,134，位置 24.8%，VWAP 62,317；30d -28.89%，区间 55,170-82,088，位置 10.1%，VWAP 70,615
- 1h结构：阴线 O:57,963 H:57,994 L:57,669 C:57,894，VWAP下方，VWAP 59,567
- 4h结构：阴线 O:57,963 H:57,994 L:57,669 C:57,894，VWAP下方，VWAP 63,324
- 1d结构：阴线 O:58,923 H:59,209 L:55,170 C:57,891，VWAP下方，VWAP 72,936
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.10B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 52,102 / 63,681；25x 多/空 55,576 / 60,207；50x 多/空 56,734 / 59,049。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 57,891 / ask 57,892，spread 1.0000 (0.0017%)，top20 bid 38.64 / ask 162.01，卖盘更厚，反弹上方抛压更明显
- 支撑：57,669-57,735
- 压力：59,399-62,150
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 59,399-62,150 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 59,399-62,150 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,629，24h 相对 prevDay：-7.13%
- 成交/持仓：24h notional volume $2.50B，base volume 1.53M ETH，Hyperliquid OI 586K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.90%，区间 1,537-1,866，位置 27.8%，VWAP 1,733；30d -31.81%，区间 1,537-2,450，位置 10.0%，VWAP 2,051
- 1h结构：阴线 O:1,630 H:1,631 L:1,622 C:1,628，VWAP下方，VWAP 1,644
- 4h结构：阴线 O:1,630 H:1,631 L:1,622 C:1,628，VWAP下方，VWAP 1,761
- 1d结构：阳线 O:1,622 H:1,657 L:1,537 C:1,628，VWAP下方，VWAP 2,144
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $954M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,466 / 1,792；25x 多/空 1,564 / 1,694；50x 多/空 1,596 / 1,661。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,628 / ask 1,628，spread 0.1000 (0.0061%)，top20 bid 5.19K / ask 4.48K，买卖盘接近平衡
- 支撑：1,622-1,626
- 压力：1,657-1,759
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,657-1,759 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,657-1,759 且 short liquidation 扩大。

## 6. SOL

- 实时价格：67.34，24h 相对 prevDay：-7.18%
- 成交/持仓：24h notional volume $369M，base volume 5.41M SOL，Hyperliquid OI 4.23M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -4.12%，区间 64.88-75.76，位置 22.7%，VWAP 71.93；30d -35.03%，区间 64.88-105.20，位置 6.1%，VWAP 83.62
- 1h结构：阴线 O:67.35 H:67.54 L:66.98 C:67.34，VWAP下方，VWAP 68.99
- 4h结构：阴线 O:67.35 H:67.54 L:66.98 C:67.34，VWAP下方，VWAP 72.28
- 1d结构：阴线 O:68.83 H:69.14 L:64.88 C:67.34，VWAP下方，VWAP 88.72
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $285M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 60.61 / 74.08；25x 多/空 64.65 / 70.04；50x 多/空 66.00 / 68.69。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 67.34 / ask 67.34，spread 0.0010 (0.0015%)，top20 bid 3.35K / ask 6.63K，卖盘更厚，反弹上方抛压更明显
- 支撑：67.12-67.34
- 压力：69.59-71.79
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 69.59-71.79 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 69.59-71.79 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| HYPE |93.5 |-12.01% |$926M |$1.06B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.4 |-14.78% |$620M |$213M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |92.8 |-11.26% |$18.5M |$27.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| SUI |92.3 |-11.52% |$12.8M |$12.5M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |91.7 |-12.74% |$7.99M |$16.9M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |91.2 |-10.74% |$15.8M |$23.3M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |90.9 |-11.23% |$32.0M |$33.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |90.0 |-12.66% |$40.0M |$66.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Binance’s $6.5B freeze order, Hong Kong ‘suspicious’ of HYPE: Asia Express (Thu, 19 Nov 2026 22:25:18 +0000)
- Cointelegraph: Hyperliquid Anthropic futures priced within 1% of Nasdaq opening price (Thu, 19 Nov 2026 20:33:24 +0000)

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
