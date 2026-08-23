# 每日加密交易决策

生成时间：2026/08/23 09:15:17 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 66 / Greed；ETH gas 0.0619 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 0%-20%，单笔 2%-5%，中间位置不开重仓。
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
- Decrypt: AI Has Made Bitcoin Software a Target—This Group Is Fighting Back (Sat, 22 Aug 2026 15:31:04 +0000)
- Decrypt: Coldcard Adds New Security Measures After $130 Million Bitcoin Exploit (Fri, 21 Aug 2026 21:31:05 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 21 Aug 2026 20:48:48 +0000)
- Cointelegraph: Bitget CEO sees Bitcoin near current levels at year-end, doubts US will buy BTC (Fri, 21 Aug 2026 20:26:16 +0000)
- Decrypt: Wall Street and Washington Fuel Bitcoin Rally: Here's What's Going On (Fri, 21 Aug 2026 20:07:05 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：77,351，24h 相对 prevDay：-0.99%
- 成交/持仓：24h notional volume $2.85B，base volume 36.8K BTC，Hyperliquid OI 36.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +23.03%，区间 62,730-79,584，位置 86.8%，VWAP 72,912；30d +20.63%，区间 62,237-79,584，位置 87.1%，VWAP 67,662
- 1h结构：阴线 O:77,361 H:77,361 L:77,229 C:77,351，VWAP下方，VWAP 77,560
- 4h结构：阳线 O:77,132 H:77,416 L:77,106 C:77,351，VWAP上方，VWAP 71,463
- 1d结构：阳线 O:77,132 H:77,416 L:77,106 C:77,351，VWAP上方，VWAP 66,907
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.82B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 69,616 / 85,086；25x 多/空 74,257 / 80,445；50x 多/空 75,804 / 78,898。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 77,351 / ask 77,352，spread 1.0000 (0.0013%)，top20 bid 60.07 / ask 15.47，买盘更厚，短线回踩承接较好
- 支撑：77,229-77,320
- 压力：77,608-78,874
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 77,608-78,874 或跌破 77,229-77,320 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：2,430，24h 相对 prevDay：-3.71%
- 成交/持仓：24h notional volume $1.73B，base volume 702K ETH，Hyperliquid OI 789K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +29.53%，区间 1,872-2,551，位置 82.2%，VWAP 2,321；30d +30.57%，区间 1,821-2,551，位置 83.4%，VWAP 2,077
- 1h结构：阴线 O:2,432 H:2,432 L:2,425 C:2,430，VWAP下方，VWAP 2,458
- 4h结构：阳线 O:2,424 H:2,436 L:2,420 C:2,430，VWAP上方，VWAP 2,237
- 1d结构：阳线 O:2,424 H:2,436 L:2,420 C:2,430，VWAP上方，VWAP 2,032
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.92B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,187 / 2,672；25x 多/空 2,332 / 2,527；50x 多/空 2,381 / 2,478。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,430 / ask 2,430，spread 0.1000 (0.0041%)，top20 bid 2.72K / ask 2.10K，买盘更厚，短线回踩承接较好
- 支撑：2,423-2,425
- 压力：2,445-2,530
- 判断：震荡。24h 价格偏弱；价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 2,445-2,530 或跌破 2,423-2,425 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：96.17，24h 相对 prevDay：+2.23%
- 成交/持仓：24h notional volume $705M，base volume 7.34M SOL，Hyperliquid OI 5.01M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +28.96%，区间 74.40-102.90，位置 76.4%，VWAP 89.79；30d +30.10%，区间 70.55-102.90，位置 79.2%，VWAP 81.04
- 1h结构：阴线 O:96.43 H:96.46 L:95.87 C:96.17，VWAP上方，VWAP 94.55
- 4h结构：阳线 O:93.90 H:98.26 L:93.65 C:96.17，VWAP上方，VWAP 87.88
- 1d结构：阳线 O:93.90 H:98.26 L:93.65 C:96.17，VWAP上方，VWAP 79.92
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $482M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 86.55 / 105.79；25x 多/空 92.32 / 100.02；50x 多/空 94.25 / 98.09。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 96.17 / ask 96.17，spread 0.0010 (0.0010%)，top20 bid 4.72K / ask 1.20K，买盘更厚，短线回踩承接较好
- 支撑：94.35-95.87
- 压力：98.26-102.90
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 94.35-95.87 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 94.35-95.87 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |95.6 |+20.43% |$272M |$183M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |93.8 |+11.74% |$90.1M |$60.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |93.0 |+7.09% |$50.4M |$76.8M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZEC |92.6 |+9.03% |$843M |$469M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |91.7 |+17.92% |$14.9M |$43.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |91.5 |+24.88% |$264M |$30.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |91.3 |+6.24% |$1.20B |$2.02B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |90.3 |+8.30% |$19.6M |$26.1M |+<0.1% |只观察：衍生品拥挤或溢价异常 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Washington Goes All-In on Crypto: Trump Pushes Clarity, SEC Rules, and CFTC Warnings (Fri, 21 Aug 2026 18:06:56 +0000)
- Cointelegraph: Crypto Biz: Treasury’s ‘Not-QE’ playbook sends Bitcoin higher (Fri, 21 Aug 2026 15:50:08 +0000)
- Decrypt: Morning Minute: CFTC Will Give Crypto Clarity If Congress Won’t (Fri, 21 Aug 2026 14:27:31 +0000)
- Decrypt: Most Americans Say Trump's Crypto Profits Cross the Line: Poll (Fri, 21 Aug 2026 11:31:04 +0000)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 0%-20%，单笔 2%-5%，中间位置不开重仓。
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
