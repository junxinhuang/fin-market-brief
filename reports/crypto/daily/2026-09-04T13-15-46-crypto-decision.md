# 每日加密交易决策

生成时间：2026/09/04 21:15:46 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 74 / Greed；ETH gas 0.8154 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Morning Minute: Crypto Stages Major Rally on Rate Hopes (Fri, 04 Sep 2026 12:31:31 +0000)
- Decrypt: IMF Now Says Donations Funded El Salvador's Bitcoin Growth (Fri, 04 Sep 2026 12:26:01 +0000)
- Cointelegraph: Bitcoin ETF inflows hit $731M, highest since January as BTC reclaims $80K (Fri, 04 Sep 2026 07:37:13 +0000)
- Cointelegraph: El Salvador’s post-review Bitcoin accumulation used no public funds: IMF (Fri, 04 Sep 2026 06:16:35 +0000)
- Decrypt: Bitcoin Miner Ditches Site for AI Deal That Could Top $1.2 Billion (Thu, 03 Sep 2026 21:31:05 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：79,184，24h 相对 prevDay：+0.85%
- 成交/持仓：24h notional volume $4.62B，base volume 57.3K BTC，Hyperliquid OI 36.1K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +1.77%，区间 76,234-82,268，位置 49.3%，VWAP 78,825；30d +22.57%，区间 62,523-82,268，位置 84.5%，VWAP 74,203
- 1h结构：阴线 O:79,434 H:79,566 L:79,167 C:79,209，VWAP下方，VWAP 80,003
- 4h结构：阴线 O:81,181 H:81,318 L:79,156 C:79,209，VWAP上方，VWAP 78,827
- 1d结构：阴线 O:81,244 H:81,400 L:79,156 C:79,210，VWAP上方，VWAP 72,082
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.86B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 71,266 / 87,102；25x 多/空 76,017 / 82,351；50x 多/空 77,600 / 80,768。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 79,209 / ask 79,210，spread 1.0000 (0.0013%)，top20 bid 40.68 / ask 38.96，买卖盘接近平衡
- 支撑：79,156-79,167
- 压力：81,400-82,268
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 81,400-82,268 或跌破 79,156-79,167 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：2,446，24h 相对 prevDay：+1.10%
- 成交/持仓：24h notional volume $1.73B，base volume 692K ETH，Hyperliquid OI 908K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +0.15%，区间 2,356-2,546，位置 47.3%，VWAP 2,444；30d +28.19%，区间 1,853-2,566，位置 83.1%，VWAP 2,296
- 1h结构：阴线 O:2,451 H:2,454 L:2,444 C:2,446，VWAP下方，VWAP 2,475
- 4h结构：阴线 O:2,523 H:2,531 L:2,433 C:2,446，VWAP下方，VWAP 2,458
- 1d结构：阴线 O:2,508 H:2,546 L:2,433 C:2,446，VWAP上方，VWAP 2,206
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.22B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,201 / 2,690；25x 多/空 2,348 / 2,543；50x 多/空 2,397 / 2,495。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,446 / ask 2,446，spread 0.1000 (0.0041%)，top20 bid 2.93K / ask 2.58K，买卖盘接近平衡
- 支撑：2,433-2,444
- 压力：2,534-2,546
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 2,534-2,546 或跌破 2,433-2,444 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：101.06，24h 相对 prevDay：-0.47%
- 成交/持仓：24h notional volume $319M，base volume 3.07M SOL，Hyperliquid OI 5.80M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -2.90%，区间 97.35-107.42，位置 37.4%，VWAP 102.11；30d +36.62%，区间 72.30-110.93，位置 74.6%，VWAP 95.74
- 1h结构：阴线 O:101.58 H:101.75 L:101.03 C:101.11，VWAP下方，VWAP 103.17
- 4h结构：阴线 O:104.07 H:104.40 L:100.18 C:101.11，VWAP下方，VWAP 104.31
- 1d结构：阴线 O:103.90 H:104.77 L:100.18 C:101.11，VWAP上方，VWAP 92.09
- funding/premium：funding +<0.1%，premium +0.000%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $586M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 90.95 / 111.17；25x 多/空 97.02 / 105.10；50x 多/空 99.04 / 103.08。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 101.10 / ask 101.11，spread 0.0100 (0.0099%)，top20 bid 44.5K / ask 59.5K，卖盘更厚，反弹上方抛压更明显
- 支撑：100.18-101.03
- 压力：104.77-105.81
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 104.77-105.81 或跌破 100.18-101.03 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |98.1 |+14.30% |$571M |$571M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |96.6 |-6.42% |$88.5M |$169M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |95.6 |+15.15% |$103M |$192M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |95.2 |+4.28% |$54.4M |$100M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| HYPE |94.1 |+2.82% |$843M |$2.04B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CASHCAT |92.8 |-6.85% |$61.6M |$53.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |91.5 |+4.16% |$65.2M |$64.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PONS |90.6 |+23.01% |$103M |$58.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Morning Minute: Crypto Stages Major Rally on Rate Hopes (Fri, 04 Sep 2026 12:31:31 +0000)
- Decrypt: What Is Pons? The Robinhood Chain Meme Coin Factory Token Up 18,000% Since July (Thu, 03 Sep 2026 20:46:04 +0000)

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
