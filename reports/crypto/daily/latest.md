# 每日加密交易决策

生成时间：2026/11/05 04:28:17 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 34 / Fear；ETH gas 0.1000 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Trump-linked tokens lead crypto losses after Democrats sweep in the US midterms (Wed, 04 Nov 2026 19:15:39 +0000)
- Cointelegraph: Riot shares surge on $28B AI lease as Hut 8 sinks on revenue miss (Wed, 04 Nov 2026 18:47:56 +0000)
- Decrypt: Bitcoin Rebounds After Democratic Midterm Sweep, But Crypto Faces Tougher Fight in Washington (Wed, 04 Nov 2026 16:49:31 +0000)
- Cointelegraph: Bitcoin hits $80.5K as US stocks rally on midterm election results (Wed, 04 Nov 2026 15:29:23 +0000)
- Cointelegraph: Here’s what happened in crypto today (Wed, 04 Nov 2026 13:47:43 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：80,158，24h 相对 prevDay：+3.10%
- 成交/持仓：24h notional volume $5.45B，base volume 69.4K BTC，Hyperliquid OI 39.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d -1.43%，区间 75,687-81,955，位置 71.3%，VWAP 78,164；30d -6.51%，区间 75,687-86,670，位置 40.7%，VWAP 80,912
- 1h结构：阳线 O:79,949 H:80,274 L:79,904 C:80,155，VWAP上方，VWAP 78,420
- 4h结构：阳线 O:79,949 H:80,274 L:79,904 C:80,155，VWAP上方，VWAP 78,557
- 1d结构：阳线 O:77,434 H:81,177 L:75,687 C:80,155，VWAP下方，VWAP 81,694
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.18B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 72,142 / 88,174；25x 多/空 76,952 / 83,364；50x 多/空 78,555 / 81,761。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 80,155 / ask 80,156，spread 1.0000 (0.0012%)，top20 bid 31.96 / ask 78.26，卖盘更厚，反弹上方抛压更明显
- 支撑：79,904-79,905
- 压力：80,691-81,177
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 79,904-79,905 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 79,904-79,905 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,416，24h 相对 prevDay：+5.71%
- 成交/持仓：24h notional volume $1.92B，base volume 820K ETH，Hyperliquid OI 1.02M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.45%，区间 2,173-2,450，位置 87.9%，VWAP 2,288；30d -10.84%，区间 2,173-2,724，位置 44.2%，VWAP 2,401
- 1h结构：阳线 O:2,406 H:2,418 L:2,405 C:2,416，VWAP上方，VWAP 2,340
- 4h结构：阳线 O:2,406 H:2,418 L:2,405 C:2,416，VWAP上方，VWAP 2,293
- 1d结构：阳线 O:2,275 H:2,450 L:2,226 C:2,416，VWAP下方，VWAP 2,465
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.48B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,175 / 2,658；25x 多/空 2,320 / 2,513；50x 多/空 2,368 / 2,465。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,416 / ask 2,416，spread 0.1000 (0.0041%)，top20 bid 5.63K / ask 6.01K，买卖盘接近平衡
- 支撑：2,405-2,405
- 压力：2,446-2,450
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 2,405-2,405 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 2,405-2,405 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：94.82，24h 相对 prevDay：+1.51%
- 成交/持仓：24h notional volume $390M，base volume 4.15M SOL，Hyperliquid OI 5.88M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d -7.39%，区间 89.85-103.17，位置 37.4%，VWAP 94.49；30d -21.48%，区间 89.85-121.97，位置 15.5%，VWAP 102.84
- 1h结构：阳线 O:94.49 H:94.97 L:94.29 C:94.83，VWAP上方，VWAP 93.91
- 4h结构：阳线 O:94.49 H:94.97 L:94.29 C:94.83，VWAP下方，VWAP 95.59
- 1d结构：阳线 O:92.82 H:98.16 L:89.85 C:94.83，VWAP下方，VWAP 107.49
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $557M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 85.34 / 104.30；25x 多/空 91.02 / 98.61；50x 多/空 92.92 / 96.71。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 94.82 / ask 94.82，spread 0.0010 (0.0011%)，top20 bid 2.06K / ask 7.85K，卖盘更厚，反弹上方抛压更明显
- 支撑：94.29-94.46
- 压力：97.29-98.16
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 97.29-98.16 或跌破 94.29-94.46 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |95.3 |+6.71% |$613M |$653M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |94.1 |-17.82% |$26.2M |$11.0M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| NEAR |92.9 |+4.54% |$172M |$180M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |92.1 |+5.27% |$28.4M |$77.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLFI |90.6 |-6.84% |$13.2M |$15.1M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |89.9 |+3.80% |$31.8M |$80.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |89.1 |-3.75% |$19.7M |$62.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |88.5 |+2.86% |$63.2M |$135M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Trump-linked tokens lead crypto losses after Democrats sweep in the US midterms (Wed, 04 Nov 2026 19:15:39 +0000)
- Cointelegraph: Democrats win US House to secure control of Congress in midterms (Wed, 04 Nov 2026 07:50:27 +0000)
- Cointelegraph: Democrats claim control of the US Senate (Wed, 04 Nov 2026 04:40:44 +0000)

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
