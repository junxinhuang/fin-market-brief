# 每日加密交易决策

生成时间：2026/08/22 21:16:33 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 71 / Greed；ETH gas 0.1035 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Coldcard Adds New Security Measures After $130 Million Bitcoin Exploit (Fri, 21 Aug 2026 21:31:05 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 21 Aug 2026 20:48:48 +0000)
- Cointelegraph: Bitget CEO sees Bitcoin near current levels at year-end, doubts US will buy BTC (Fri, 21 Aug 2026 20:26:16 +0000)
- Decrypt: Wall Street and Washington Fuel Bitcoin Rally: Here's What's Going On (Fri, 21 Aug 2026 20:07:05 +0000)
- Cointelegraph: Ray Dalio says to buy ‘a bit’ of Bitcoin amid potential debt crisis (Fri, 21 Aug 2026 20:00:47 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：77,279，24h 相对 prevDay：+<0.1%
- 成交/持仓：24h notional volume $4.60B，base volume 59.3K BTC，Hyperliquid OI 35.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +22.55%，区间 62,678-79,584，位置 86.4%，VWAP 72,510；30d +18.76%，区间 62,237-79,584，位置 86.7%，VWAP 67,414
- 1h结构：阴线 O:77,351 H:77,362 L:77,229 C:77,279，VWAP上方，VWAP 77,072
- 4h结构：阳线 O:77,164 H:77,434 L:77,108 C:77,279，VWAP上方，VWAP 71,004
- 1d结构：阴线 O:78,382 H:78,885 L:76,558 C:77,279，VWAP上方，VWAP 66,685
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.74B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 69,551 / 85,007；25x 多/空 74,188 / 80,370；50x 多/空 75,733 / 78,825。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 77,279 / ask 77,280，spread 1.0000 (0.0013%)，top20 bid 50.45 / ask 54.85，买卖盘接近平衡
- 支撑：77,108-77,259
- 压力：78,874-78,885
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 77,108-77,259 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 77,108-77,259 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,428，24h 相对 prevDay：+1.50%
- 成交/持仓：24h notional volume $3.32B，base volume 1.35M ETH，Hyperliquid OI 766K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +28.99%，区间 1,869-2,551，位置 82.0%，VWAP 2,306；30d +29.30%，区间 1,821-2,551，位置 83.2%，VWAP 2,066
- 1h结构：阴线 O:2,429 H:2,430 L:2,425 C:2,428，VWAP下方，VWAP 2,438
- 4h结构：阳线 O:2,425 H:2,439 L:2,420 C:2,428，VWAP上方，VWAP 2,222
- 1d结构：阴线 O:2,518 H:2,534 L:2,383 C:2,428，VWAP上方，VWAP 2,015
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.86B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,185 / 2,671；25x 多/空 2,331 / 2,525；50x 多/空 2,379 / 2,477。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,428 / ask 2,428，spread 0.1000 (0.0041%)，top20 bid 2.86K / ask 1.81K，买盘更厚，短线回踩承接较好
- 支撑：2,420-2,426
- 压力：2,530-2,551
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 2,530-2,551 或跌破 2,420-2,426 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：94.04，24h 相对 prevDay：+3.44%
- 成交/持仓：24h notional volume $823M，base volume 8.66M SOL，Hyperliquid OI 4.80M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +24.88%，区间 74.09-102.90，位置 69.3%，VWAP 89.17；30d +24.01%，区间 70.55-102.90，位置 72.7%，VWAP 80.46
- 1h结构：阳线 O:93.89 H:94.06 L:93.60 C:94.06，VWAP上方，VWAP 93.18
- 4h结构：阳线 O:93.35 H:94.39 L:93.25 C:94.06，VWAP上方，VWAP 87.25
- 1d结构：阳线 O:93.81 H:102.90 L:87.69 C:94.06，VWAP上方，VWAP 79.43
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $451M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 84.63 / 103.44；25x 多/空 90.27 / 97.80；50x 多/空 92.16 / 95.92。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 94.06 / ask 94.06，spread 0.0010 (0.0011%)，top20 bid 2.15K / ask 2.20K，买卖盘接近平衡
- 支撑：93.25-93.75
- 压力：100.09-102.90
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 93.25-93.75 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 93.25-93.75 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| AAVE |96.6 |+14.46% |$75.9M |$101M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| DOGE |95.5 |+9.51% |$176M |$78.6M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| LIT |94.6 |+14.40% |$147M |$144M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |94.5 |+13.08% |$145M |$62.3M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZEC |93.9 |+21.64% |$940M |$426M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |92.1 |+13.32% |$236M |$160M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |91.9 |+8.88% |$732M |$239M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LINK |90.8 |+4.44% |$51.1M |$73.8M |+<0.1% |只观察：衍生品拥挤或溢价异常 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Crypto Biz: Treasury’s ‘Not-QE’ playbook sends Bitcoin higher (Fri, 21 Aug 2026 15:50:08 +0000)
- Decrypt: Morning Minute: CFTC Will Give Crypto Clarity If Congress Won’t (Fri, 21 Aug 2026 14:27:31 +0000)
- Decrypt: XRP Notches Best Week Since 2024 Election Pump on Bitcoin Short Squeeze (Thu, 20 Aug 2026 17:46:08 +0000)

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
