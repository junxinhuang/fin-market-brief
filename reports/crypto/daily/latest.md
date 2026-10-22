# 每日加密交易决策

生成时间：2026/10/23 02:02:40 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 68 / Greed；ETH gas 0.2271 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Bitcoin hashrate hits seven-month high as AI shift fails to ease mining competition (Thu, 22 Oct 2026 16:50:51 +0000)
- Decrypt: Bitcoin ETFs Erase October Losses With $1 Billion in Three Days (Thu, 22 Oct 2026 16:31:07 +0000)
- Cointelegraph: Bitcoin circles $81.5K ETF cost basis as Trump Iran comments send stocks lower (Thu, 22 Oct 2026 16:20:35 +0000)
- Cointelegraph: CryptoQuant CEO calls rising Bitcoin hashrate ‘indirect bullish signal’ from institutions (Thu, 22 Oct 2026 13:42:34 +0000)
- Cointelegraph: Here’s what happened in crypto today (Thu, 22 Oct 2026 13:22:57 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：81,140，24h 相对 prevDay：-4.14%
- 成交/持仓：24h notional volume $3.59B，base volume 43.5K BTC，Hyperliquid OI 43.3K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.30%，区间 80,644-84,850，位置 11.8%，VWAP 82,173；30d -5.91%，区间 79,732-87,333，位置 18.5%，VWAP 83,270
- 1h结构：阴线 O:81,202 H:81,224 L:81,140 C:81,141，VWAP下方，VWAP 82,922
- 4h结构：阴线 O:81,690 H:81,773 L:80,911 C:81,141，VWAP下方，VWAP 82,128
- 1d结构：阴线 O:84,047 H:84,335 L:80,911 C:81,141，VWAP下方，VWAP 82,263
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.51B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 73,026 / 89,254；25x 多/空 77,894 / 84,386；50x 多/空 79,517 / 82,763。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 81,140 / ask 81,141，spread 1.0000 (0.0012%)，top20 bid 120.81 / ask 45.82，买盘更厚，短线回踩承接较好
- 支撑：80,911-81,136
- 压力：82,987-84,799
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 82,987-84,799 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 82,987-84,799 且 short liquidation 扩大。

## 5. ETH

- 实时价格：2,377，24h 相对 prevDay：-5.45%
- 成交/持仓：24h notional volume $1.00B，base volume 412K ETH，Hyperliquid OI 1.10M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -2.62%，区间 2,327-2,525，位置 25.5%，VWAP 2,421；30d -13.72%，区间 2,314-2,790，位置 13.2%，VWAP 2,554
- 1h结构：阴线 O:2,379 H:2,380 L:2,377 C:2,377，VWAP下方，VWAP 2,448
- 4h结构：阴线 O:2,398 H:2,402 L:2,359 C:2,377，VWAP下方，VWAP 2,418
- 1d结构：阴线 O:2,473 H:2,482 L:2,359 C:2,377，VWAP下方，VWAP 2,556
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.62B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,140 / 2,615；25x 多/空 2,282 / 2,472；50x 多/空 2,330 / 2,425。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,377 / ask 2,378，spread 0.1000 (0.0042%)，top20 bid 5.45K / ask 5.27K，买卖盘接近平衡
- 支撑：2,359-2,374
- 压力：2,448-2,502
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 2,448-2,502 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 2,448-2,502 且 short liquidation 扩大。

## 6. SOL

- 实时价格：103.51，24h 相对 prevDay：-4.66%
- 成交/持仓：24h notional volume $206M，base volume 1.95M SOL，Hyperliquid OI 5.56M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.79%，区间 100.34-109.19，位置 35.8%，VWAP 105.02；30d -12.77%，区间 100.34-124.95，位置 12.9%，VWAP 112.68
- 1h结构：阴线 O:103.58 H:103.65 L:103.50 C:103.51，VWAP下方，VWAP 106.35
- 4h结构：阴线 O:104.61 H:104.86 L:102.98 C:103.51，VWAP下方，VWAP 104.81
- 1d结构：阴线 O:106.94 H:107.46 L:102.98 C:103.51，VWAP下方，VWAP 111.40
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $575M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 93.16 / 113.86；25x 多/空 99.37 / 107.65；50x 多/空 101.44 / 105.58。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 103.50 / ask 103.51，spread 0.0100 (0.0097%)，top20 bid 54.6K / ask 50.6K，买卖盘接近平衡
- 支撑：103.48-103.50
- 压力：105.66-108.50
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 105.66-108.50 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 105.66-108.50 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |94.2 |-9.01% |$124M |$139M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |93.8 |-16.09% |$17.2M |$67.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |92.9 |-8.83% |$181M |$334M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |92.7 |-11.36% |$44.4M |$92.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |91.7 |-8.39% |$18.8M |$66.2M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| STRK |91.2 |-14.96% |$15.0M |$41.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |90.5 |-12.61% |$573M |$547M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ONDO |89.4 |-9.12% |$6.82M |$25.2M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

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
