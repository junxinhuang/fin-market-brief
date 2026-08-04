# 每日加密交易决策

生成时间：2026/08/04 09:15:54 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏空但不追空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 25 / Extreme Fear；ETH gas 0.0721 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Marmot Researchers Turn to OnlyFans for Funding—And There Are Meme Coins Too (Mon, 03 Aug 2026 22:29:02 +0000)
- Decrypt: What Is an Air-Gapped Bitcoin Wallet? Why the Coldcard Exploit Changes the Conversation About Offline Security (Mon, 03 Aug 2026 20:39:33 +0000)
- Cointelegraph: Here’s what happened in crypto today (Mon, 03 Aug 2026 19:52:11 +0000)
- Decrypt: BlackRock Launches Tokenized Money Market Funds on Solana, Ethereum (Mon, 03 Aug 2026 19:17:37 +0000)
- Decrypt: XRP Holders Can Now Borrow Ripple's RLUSD on Ethereum Without Selling Their Crypto (Mon, 03 Aug 2026 17:51:03 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,453，24h 相对 prevDay：+0.40%
- 成交/持仓：24h notional volume $1.75B，base volume 27.7K BTC，Hyperliquid OI 35.3K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -0.71%，区间 62,237-65,385，位置 38.7%，VWAP 63,595；30d -0.28%，区间 61,342-66,918，位置 37.9%，VWAP 64,125
- 1h结构：阳线 O:63,338 H:63,473 L:63,333 C:63,454，VWAP上方，VWAP 63,393
- 4h结构：阴线 O:63,492 H:63,562 L:63,287 C:63,454，VWAP下方，VWAP 63,752
- 1d结构：阴线 O:63,492 H:63,562 L:63,287 C:63,454，VWAP上方，VWAP 62,878
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.24B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,108 / 69,798；25x 多/空 60,915 / 65,991；50x 多/空 62,184 / 64,722。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,453 / ask 63,454，spread 1.0000 (0.0016%)，top20 bid 55.12 / ask 91.12，卖盘更厚，反弹上方抛压更明显
- 支撑：63,367-63,429
- 压力：64,017-64,050
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 64,017-64,050 或跌破 63,367-63,429 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,852，24h 相对 prevDay：-1.02%
- 成交/持仓：24h notional volume $646M，base volume 348K ETH，Hyperliquid OI 957K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -3.63%，区间 1,821-1,936，位置 26.6%，VWAP 1,884；30d +3.66%，区间 1,713-1,981，位置 51.7%，VWAP 1,858
- 1h结构：阳线 O:1,850 H:1,853 L:1,848 C:1,852，VWAP下方，VWAP 1,863
- 4h结构：阴线 O:1,860 H:1,862 L:1,847 C:1,852，VWAP下方，VWAP 1,894
- 1d结构：阴线 O:1,860 H:1,862 L:1,847 C:1,852，VWAP上方，VWAP 1,794
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.77B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,666 / 2,037；25x 多/空 1,778 / 1,926；50x 多/空 1,815 / 1,889。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,852 / ask 1,852，spread 0.1000 (0.0054%)，top20 bid 7.22K / ask 5.72K，买盘更厚，短线回踩承接较好
- 支撑：1,851-1,851
- 压力：1,875-1,875
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,875-1,875 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,875-1,875 且 short liquidation 扩大。

## 6. SOL

- 实时价格：73.09，24h 相对 prevDay：+<0.1%
- 成交/持仓：24h notional volume $148M，base volume 2.02M SOL，Hyperliquid OI 4.01M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -0.91%，区间 70.55-75.27，位置 53.9%，VWAP 73.39；30d -10.40%，区间 70.55-83.76，位置 19.3%，VWAP 76.47
- 1h结构：阳线 O:73.05 H:73.18 L:73.02 C:73.10，VWAP下方，VWAP 73.41
- 4h结构：阴线 O:73.54 H:73.61 L:73.02 C:73.10，VWAP下方，VWAP 73.73
- 1d结构：阴线 O:73.54 H:73.61 L:73.02 C:73.10，VWAP下方，VWAP 75.92
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $293M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 65.78 / 80.40；25x 多/空 70.17 / 76.02；50x 多/空 71.63 / 74.56。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 73.09 / ask 73.10，spread 0.0010 (0.0014%)，top20 bid 6.89K / ask 8.96K，卖盘更厚，反弹上方抛压更明显
- 支撑：73.02-73.02
- 压力：74.15-74.28
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 74.15-74.28 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 74.15-74.28 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| KAITO |94.1 |-6.15% |$15.1M |$23.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| GRAM |92.2 |-5.37% |$4.97M |$12.8M |-<0.1% |不碰：流动性/OI 偏低 |
| WLD |91.6 |+2.79% |$6.87M |$25.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |90.9 |+2.61% |$218M |$1.21B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |89.9 |-5.46% |$11.1M |$18.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |89.8 |+3.62% |$13.0M |$22.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CASHCAT |89.4 |+44.71% |$12.2M |$9.72M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |88.8 |+2.52% |$5.89M |$21.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

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
