# 每日加密交易决策

生成时间：2026/11/05 15:57:30 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 50 / Neutral；ETH gas 0.0362 gwei，链上交易很便宜，gas 本身不是风险源。
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

宏观/新闻结论：RSS 未抓到足够明确的宏观催化，今日更多依赖市场结构。
预测市场入口：接口入口：https://gamma-api.polymarket.com/markets?active=true&closed=false&search=<query>；当前环境偶发超时，查询时需重试。。

主要新闻：
- Cointelegraph: Here’s what happened in crypto today (Thu, 05 Nov 2026 06:21:12 +0000)
- Cointelegraph: Mercado Bitcoin says phased reopening to begin Monday, will cover losses (Wed, 04 Nov 2026 23:20:17 +0000)
- Decrypt: Why Bitcoin's Next Soft Fork Could Feel Like a Practice Run (Wed, 04 Nov 2026 22:46:03 +0000)
- Cointelegraph: BitMart founder says security team ‘severely understaffed’ after new hack (Wed, 04 Nov 2026 22:31:58 +0000)
- Cointelegraph: Trump-linked tokens lead crypto losses after Democrats sweep in the US midterms (Wed, 04 Nov 2026 19:15:39 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：80,296，24h 相对 prevDay：+2.78%
- 成交/持仓：24h notional volume $4.26B，base volume 53.4K BTC，Hyperliquid OI 38.6K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d +3.01%，区间 75,687-81,177，位置 84.0%，VWAP 78,449；30d -6.14%，区间 75,687-85,599，位置 46.5%，VWAP 80,823
- 1h结构：阴线 O:80,622 H:80,775 L:80,286 C:80,298，VWAP上方，VWAP 78,906
- 4h结构：阴线 O:80,509 H:80,775 L:80,286 C:80,298，VWAP上方，VWAP 78,576
- 1d结构：阴线 O:80,478 H:80,888 L:80,217 C:80,298，VWAP下方，VWAP 81,627
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.10B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 72,266 / 88,326；25x 多/空 77,084 / 83,508；50x 多/空 78,690 / 81,902。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 80,297 / ask 80,298，spread 1.0000 (0.0012%)，top20 bid 99.21 / ask 32.32，买盘更厚，短线回踩承接较好
- 支撑：80,217-80,286
- 压力：80,923-81,177
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 80,217-80,286 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 80,217-80,286 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,412，24h 相对 prevDay：+4.72%
- 成交/持仓：24h notional volume $1.57B，base volume 659K ETH，Hyperliquid OI 1.03M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +7.16%，区间 2,173-2,450，位置 86.6%，VWAP 2,311；30d -10.55%，区间 2,173-2,699，位置 45.6%，VWAP 2,396
- 1h结构：阴线 O:2,430 H:2,434 L:2,412 C:2,413，VWAP上方，VWAP 2,361
- 4h结构：阴线 O:2,424 H:2,434 L:2,412 C:2,413，VWAP上方，VWAP 2,296
- 1d结构：阴线 O:2,424 H:2,436 L:2,407 C:2,413，VWAP下方，VWAP 2,460
- funding/premium：funding +<0.1%，premium +0.000%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.49B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,171 / 2,654；25x 多/空 2,316 / 2,509；50x 多/空 2,364 / 2,461。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,413 / ask 2,413，spread 0.1000 (0.0041%)，top20 bid 4.88K / ask 4.43K，买卖盘接近平衡
- 支撑：2,407-2,412
- 压力：2,444-2,450
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 2,407-2,412 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 2,407-2,412 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：95.75，24h 相对 prevDay：+2.93%
- 成交/持仓：24h notional volume $312M，base volume 3.27M SOL，Hyperliquid OI 5.86M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d +0.17%，区间 89.85-98.51，位置 68.3%，VWAP 94.47；30d -20.64%，区间 89.85-120.67，位置 19.2%，VWAP 102.43
- 1h结构：阴线 O:96.22 H:96.45 L:95.71 C:95.76，VWAP上方，VWAP 94.36
- 4h结构：阴线 O:96.24 H:96.53 L:95.62 C:95.76，VWAP上方，VWAP 95.54
- 1d结构：阳线 O:95.57 H:97.13 L:95.12 C:95.76，VWAP下方，VWAP 106.61
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $561M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 86.18 / 105.33；25x 多/空 91.92 / 99.58；50x 多/空 93.84 / 97.67。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 95.77 / ask 95.77，spread 0.0010 (0.0010%)，top20 bid 5.52K / ask 1.95K，买盘更厚，短线回踩承接较好
- 支撑：95.62-95.71
- 压力：97.13-98.16
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 95.62-95.71 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 95.62-95.71 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| TRUMP |94.2 |-16.45% |$47.8M |$11.8M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZEC |92.8 |+2.82% |$490M |$709M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |92.7 |+3.04% |$86.1M |$222M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |92.3 |+4.80% |$42.7M |$139M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |92.3 |-4.74% |$40.4M |$59.1M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |92.0 |-9.92% |$16.1M |$61.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |91.4 |-4.86% |$12.7M |$62.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LINK |91.4 |+3.61% |$15.8M |$69.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: ‘Lawyer up’: Democrats target Trump, Big Tech after midterm sweep (Thu, 05 Nov 2026 04:52:49 +0000)
- Cointelegraph: Trump-linked tokens lead crypto losses after Democrats sweep in the US midterms (Wed, 04 Nov 2026 19:15:39 +0000)
- Cointelegraph: Democrats win US House to secure control of Congress in midterms (Wed, 04 Nov 2026 07:50:27 +0000)

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
