# 每日加密交易决策

生成时间：2026/11/20 05:32:00 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 10 / Extreme Fear；ETH gas 0.4648 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 15%-30%，单笔 5%-8%，做空只在压力失败或跌破反抽失败后执行。
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
- Decrypt: Meet SHRINCS: Bitcoin's Emerging Frontrunner for a Post-Quantum Signature (Thu, 19 Nov 2026 20:46:02 +0000)
- Decrypt: Bitcoin Enters Death Cross as Anthropic IPO Fails to Lift Wall Street (Thu, 19 Nov 2026 19:08:24 +0000)
- Cointelegraph: Ethereum’s Glamsterdam upgrade could slip to May 2027 over compatibility concerns (Thu, 19 Nov 2026 18:20:49 +0000)
- Cointelegraph: Why higher rates could slow Bitcoin buying at treasury firms (Thu, 19 Nov 2026 18:09:32 +0000)
- Cointelegraph: Bitcoin price ignores Anthropic debut as ANT share price dips below $100 (Thu, 19 Nov 2026 18:06:50 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：61,560，24h 相对 prevDay：-1.37%
- 成交/持仓：24h notional volume $4.68B，base volume 74.4K BTC，Hyperliquid OI 40.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -13.86%，区间 61,456-71,507，位置 0.9%，VWAP 64,659；30d -25.84%，区间 61,456-84,850，位置 0.4%，VWAP 72,701
- 1h结构：阴线 O:62,101 H:62,142 L:61,456 C:61,543，VWAP下方，VWAP 63,018
- 4h结构：阴线 O:62,334 H:62,444 L:61,456 C:61,542，VWAP下方，VWAP 65,751
- 1d结构：阴线 O:63,037 H:64,050 L:61,456 C:61,542，VWAP下方，VWAP 74,513
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.51B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 55,404 / 67,716；25x 多/空 59,098 / 64,022；50x 多/空 60,329 / 62,791。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 61,542 / ask 61,543，spread 1.0000 (0.0016%)，top20 bid 128.88 / ask 85.90，买盘更厚，短线回踩承接较好
- 支撑：61,456-61,456
- 压力：64,045-64,050
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 64,045-64,050 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 64,045-64,050 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,744，24h 相对 prevDay：-0.92%
- 成交/持仓：24h notional volume $803M，base volume 451K ETH，Hyperliquid OI 614K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -13.62%，区间 1,710-2,020，位置 10.9%，VWAP 1,818；30d -28.77%，区间 1,710-2,525，位置 4.1%，VWAP 2,123
- 1h结构：阴线 O:1,760 H:1,761 L:1,741 C:1,744，VWAP下方，VWAP 1,776
- 4h结构：阴线 O:1,770 H:1,770 L:1,741 C:1,744，VWAP下方，VWAP 1,857
- 1d结构：阴线 O:1,777 H:1,816 L:1,741 C:1,744，VWAP下方，VWAP 2,206
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.07B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,570 / 1,919；25x 多/空 1,675 / 1,814；50x 多/空 1,710 / 1,779。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,744 / ask 1,744，spread 0.1000 (0.0057%)，top20 bid 5.57K / ask 7.28K，卖盘更厚，反弹上方抛压更明显
- 支撑：1,741-1,741
- 压力：1,816-1,816
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,816-1,816 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,816-1,816 且 short liquidation 扩大。

## 6. SOL

- 实时价格：72.41，24h 相对 prevDay：-0.83%
- 成交/持仓：24h notional volume $172M，base volume 2.33M SOL，Hyperliquid OI 4.27M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -11.35%，区间 67.38-82.35，位置 33.7%，VWAP 73.26；30d -32.01%，区间 67.38-109.19，位置 12.1%，VWAP 85.84
- 1h结构：阴线 O:73.06 H:73.06 L:72.33 C:72.42，VWAP下方，VWAP 73.77
- 4h结构：阴线 O:73.54 H:73.55 L:72.33 C:72.42，VWAP下方，VWAP 74.21
- 1d结构：阴线 O:73.60 H:75.60 L:72.33 C:72.42，VWAP下方，VWAP 90.29
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $309M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 65.17 / 79.65；25x 多/空 69.52 / 75.31；50x 多/空 70.96 / 73.86。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 72.41 / ask 72.41，spread 0.0010 (0.0014%)，top20 bid 4.10K / ask 8.09K，卖盘更厚，反弹上方抛压更明显
- 支撑：72.33-72.33
- 压力：75.42-75.60
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 75.42-75.60 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 75.42-75.60 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ENA |93.7 |-6.41% |$12.8M |$32.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |92.6 |+3.93% |$14.9M |$52.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| MON |90.9 |-7.30% |$8.25M |$27.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |90.4 |-2.74% |$237M |$303M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |90.1 |+3.29% |$17.4M |$88.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |88.9 |-2.94% |$6.62M |$20.3M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |88.3 |-1.91% |$55.2M |$104M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |87.1 |-4.25% |$10.3M |$28.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

## 8. 仓位与执行

- 今日总仓位上限：总仓位 15%-30%，单笔 5%-8%，做空只在压力失败或跌破反抽失败后执行。
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
