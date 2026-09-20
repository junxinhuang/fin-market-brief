# 每日加密交易决策

生成时间：2026/09/20 14:17:48 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 71 / Greed；ETH gas 0.0543 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: REX launches 2x leveraged ETF tied to Bitcoin treasury firm Strive (Sat, 19 Sep 2026 19:14:38 +0000)
- Decrypt: Bitcoin's Sharpest Rally in Two Years Ran Almost Entirely on Short Liquidations (Sat, 19 Sep 2026 16:01:03 +0000)
- Decrypt: Solana's Heartbeat Quickens: Block Times Fall 17% in Latest Speed Upgrade (Sat, 19 Sep 2026 13:01:04 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 18 Sep 2026 21:00:00 +0000)
- Decrypt: Bitcoin Will Hit $1 Million, Says Kevin O’Leary—But There’s a Quantum Catch (Fri, 18 Sep 2026 18:35:54 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：80,605，24h 相对 prevDay：-0.54%
- 成交/持仓：24h notional volume $1.44B，base volume 17.8K BTC，Hyperliquid OI 41.1K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +4.95%，区间 74,903-81,996，位置 80.5%，VWAP 77,719；30d +2.85%，区间 74,903-82,268，位置 77.5%，VWAP 78,309
- 1h结构：阳线 O:80,500 H:80,614 L:80,437 C:80,614，VWAP下方，VWAP 81,195
- 4h结构：阳线 O:80,512 H:80,650 L:80,330 C:80,614，VWAP上方，VWAP 77,696
- 1d结构：阴线 O:81,292 H:81,364 L:80,148 C:80,614，VWAP上方，VWAP 75,938
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.32B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 72,545 / 88,666；25x 多/空 77,381 / 83,829；50x 多/空 78,993 / 82,217。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 80,613 / ask 80,614，spread 1.0000 (0.0012%)，top20 bid 125.12 / ask 64.49，买盘更厚，短线回踩承接较好
- 支撑：80,330-80,437
- 压力：81,574-81,996
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 81,574-81,996 或跌破 80,330-80,437 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：2,584，24h 相对 prevDay：-1.63%
- 成交/持仓：24h notional volume $1.05B，base volume 398K ETH，Hyperliquid OI 1.04M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +4.37%，区间 2,357-2,669，位置 72.8%，VWAP 2,495；30d +2.61%，区间 2,356-2,669，位置 72.8%，VWAP 2,475
- 1h结构：阳线 O:2,577 H:2,584 L:2,574 C:2,584，VWAP下方，VWAP 2,623
- 4h结构：阴线 O:2,587 H:2,588 L:2,573 C:2,584，VWAP上方，VWAP 2,495
- 1d结构：阴线 O:2,633 H:2,633 L:2,563 C:2,584，VWAP上方，VWAP 2,393
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.68B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,326 / 2,842；25x 多/空 2,481 / 2,687；50x 多/空 2,532 / 2,636。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,584 / ask 2,584，spread 0.1000 (0.0039%)，top20 bid 3.31K / ask 3.96K，买卖盘接近平衡
- 支撑：2,573-2,576
- 压力：2,652-2,669
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 2,652-2,669 或跌破 2,573-2,576 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：108.88，24h 相对 prevDay：-2.59%
- 成交/持仓：24h notional volume $179M，base volume 1.62M SOL，Hyperliquid OI 5.81M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +9.73%，区间 95.75-114.35，位置 70.7%，VWAP 104.47；30d +16.08%，区间 87.69-114.35，位置 79.6%，VWAP 102.10
- 1h结构：阳线 O:108.78 H:108.90 L:108.55 C:108.90，VWAP下方，VWAP 111.58
- 4h结构：阴线 O:108.92 H:109.26 L:108.55 C:108.90，VWAP上方，VWAP 103.76
- 1d结构：阴线 O:111.09 H:111.15 L:107.39 C:108.90，VWAP上方，VWAP 98.84
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $633M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 97.99 / 119.77；25x 多/空 104.52 / 113.24；50x 多/空 106.70 / 111.06。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 108.90 / ask 108.91，spread 0.0100 (0.0092%)，top20 bid 48.0K / ask 47.8K，买卖盘接近平衡
- 支撑：108.55-108.70
- 压力：112.23-112.52
- 判断：震荡。24h 价格偏弱；价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 112.23-112.52 或跌破 108.55-108.70 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |94.2 |-6.48% |$434M |$767M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |93.8 |+11.21% |$85.8M |$83.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |93.8 |-9.22% |$30.3M |$69.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PONS |93.6 |-11.49% |$31.9M |$55.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |93.1 |+6.92% |$32.1M |$47.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |92.4 |-5.07% |$104M |$242M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| STRK |91.5 |+12.01% |$10.6M |$15.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AVAX |91.2 |+14.65% |$43.4M |$23.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Grayscale Is Making Its Red-Hot Zcash ETF More Affordable (Sat, 19 Sep 2026 15:01:03 +0000)
- Decrypt: Zcash Is Running—Devs Want to Make It Faster (Fri, 18 Sep 2026 19:16:03 +0000)
- Cointelegraph: Dragonfly’s Qureshi calls for end to Zcash dev fund after 2028 (Fri, 18 Sep 2026 11:22:24 +0000)
- Cointelegraph: Zcash targets November for NU7 mainnet upgrade with 25-second blocks (Fri, 18 Sep 2026 04:51:29 +0000)

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
