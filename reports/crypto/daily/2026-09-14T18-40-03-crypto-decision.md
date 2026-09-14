# 每日加密交易决策

生成时间：2026/09/15 02:40:03 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 57 / Greed；ETH gas 0.1587 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 20%-35%，单笔 5%-10%，只在回踩确认后加仓。
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
- Cointelegraph: Strive adds 469 Bitcoin to reach 25,000 BTC treasury (Mon, 14 Sep 2026 17:50:12 +0000)
- Decrypt: Bitcoin Climbs as AI Slowdown Calls Sink Nvidia, Intel and Other Chip Stocks (Mon, 14 Sep 2026 17:40:04 +0000)
- Decrypt: Bitmine Adds $68 Million in Ethereum as Holdings Near 6 Million ETH (Mon, 14 Sep 2026 16:02:25 +0000)
- Cointelegraph: Bitmine projects $334M in annual staking revenue from $15.8B crypto treasury (Mon, 14 Sep 2026 15:55:59 +0000)
- Decrypt: Strategy Buys Back $139 Million of STRC, Bitcoin Stack Frozen for Second Week (Mon, 14 Sep 2026 15:41:46 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：79,082，24h 相对 prevDay：+2.24%
- 成交/持仓：24h notional volume $2.45B，base volume 31.5K BTC，Hyperliquid OI 36.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +<0.1%，区间 76,021-79,867，位置 79.6%，VWAP 77,699；30d +25.41%，区间 62,678-82,268，位置 83.7%，VWAP 76,732
- 1h结构：阳线 O:78,931 H:79,240 L:78,825 C:79,082，VWAP上方，VWAP 77,660
- 4h结构：阳线 O:78,550 H:79,240 L:78,403 C:79,082，VWAP上方，VWAP 78,087
- 1d结构：阳线 O:76,811 H:79,240 L:76,346 C:79,082，VWAP上方，VWAP 74,759
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.90B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 71,174 / 86,990；25x 多/空 75,919 / 82,245；50x 多/空 77,500 / 80,664。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 79,082 / ask 79,083，spread 1.0000 (0.0013%)，top20 bid 82.55 / ask 77.96，买卖盘接近平衡
- 支撑：78,403-78,825
- 压力：79,240-79,240
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 78,403-78,825 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 78,403-78,825 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,540，24h 相对 prevDay：+1.27%
- 成交/持仓：24h notional volume $1.55B，base volume 617K ETH，Hyperliquid OI 1.07M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.03%，区间 2,404-2,666，位置 51.8%，VWAP 2,494；30d +34.93%，区间 1,869-2,666，位置 84.2%，VWAP 2,416
- 1h结构：阳线 O:2,533 H:2,543 L:2,530 C:2,540，VWAP上方，VWAP 2,502
- 4h结构：阳线 O:2,509 H:2,543 L:2,504 C:2,540，VWAP上方，VWAP 2,502
- 1d结构：阳线 O:2,476 H:2,543 L:2,465 C:2,540，VWAP上方，VWAP 2,329
- funding/premium：funding +<0.1%，premium +0.000%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.72B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,286 / 2,794；25x 多/空 2,438 / 2,641；50x 多/空 2,489 / 2,591。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,540 / ask 2,540，spread 0.1000 (0.0039%)，top20 bid 4.69K / ask 3.93K，买卖盘接近平衡
- 支撑：2,515-2,530
- 压力：2,543-2,543
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 2,515-2,530 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 2,515-2,530 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：103.63，24h 相对 prevDay：+2.44%
- 成交/持仓：24h notional volume $157M，base volume 1.55M SOL，Hyperliquid OI 5.24M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -0.12%，区间 98.00-105.83，位置 71.8%，VWAP 101.46；30d +37.58%，区间 74.09-110.93，位置 80.2%，VWAP 99.21
- 1h结构：阳线 O:103.01 H:103.85 L:102.89 C:103.62，VWAP上方，VWAP 100.90
- 4h结构：阳线 O:101.94 H:103.85 L:101.82 C:103.62，VWAP上方，VWAP 101.99
- 1d结构：阳线 O:99.25 H:103.85 L:98.96 C:103.62，VWAP上方，VWAP 96.42
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $543M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 93.27 / 113.99；25x 多/空 99.48 / 107.78；50x 多/空 101.56 / 105.70。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 103.62 / ask 103.63，spread 0.0100 (0.0097%)，top20 bid 47.0K / ask 43.8K，买卖盘接近平衡
- 支撑：101.82-102.89
- 压力：103.85-103.85
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 101.82-102.89 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 101.82-102.89 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |96.8 |+6.97% |$417M |$594M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |96.0 |+4.80% |$60.1M |$193M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |95.7 |+4.54% |$402M |$1.72B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |95.5 |+8.01% |$131M |$233M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PONS |95.2 |+8.16% |$55.5M |$78.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |94.8 |+8.59% |$32.2M |$166M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |94.6 |-3.68% |$18.4M |$72.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |93.4 |+3.35% |$17.7M |$59.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: HYPE price could suffer as Binance takes its revenue: Alice Liu (Mon, 14 Sep 2026 13:30:00 +0000)
- Cointelegraph: Hyperliquid’s biggest risk is regulation, says Ran Neuner (Fri, 11 Sep 2026 18:45:15 +0000)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 20%-35%，单笔 5%-10%，只在回踩确认后加仓。
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
