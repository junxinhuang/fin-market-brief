# 每日加密交易决策

生成时间：2026/07/29 09:18:58 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 29 / Fear；ETH gas 0.0412 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Morgan Stanley expands crypto lineup with Ether, Solana ETPs (Tue, 28 Jul 2026 20:10:46 +0000)
- Decrypt: Michael Saylor: Bitcoin Code Is a Constitution, Changes Are Attacks on 'Economic Rights' (Tue, 28 Jul 2026 19:36:03 +0000)
- Decrypt: Morgan Stanley Expands Crypto Push With Ethereum and Solana ETPs (Tue, 28 Jul 2026 19:14:14 +0000)
- Cointelegraph: AmericanFortress proposes quantum-safe crypto wallet protection without fund migration (Tue, 28 Jul 2026 18:47:26 +0000)
- Cointelegraph: Here’s what happened in crypto today (Tue, 28 Jul 2026 18:15:25 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,779，24h 相对 prevDay：+0.95%
- 成交/持仓：24h notional volume $1.75B，base volume 27.6K BTC，Hyperliquid OI 35.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -3.48%，区间 62,703-66,295，位置 30.2%，VWAP 64,282；30d +5.91%，区间 57,768-66,918，位置 65.8%，VWAP 63,438
- 1h结构：阴线 O:63,934 H:63,981 L:63,746 C:63,782，VWAP下方，VWAP 63,948
- 4h结构：阴线 O:63,907 H:64,164 L:63,746 C:63,787，VWAP下方，VWAP 64,999
- 1d结构：阴线 O:63,907 H:64,164 L:63,746 C:63,787，VWAP上方，VWAP 62,779
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.26B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,401 / 70,156；25x 多/空 61,227 / 66,330；50x 多/空 62,503 / 65,054。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,787 / ask 63,788，spread 1.0000 (0.0016%)，top20 bid 103.24 / ask 40.84，买盘更厚，短线回踩承接较好
- 支撑：63,746-63,755
- 压力：64,100-64,164
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 64,100-64,164 或跌破 63,746-63,755 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,909，24h 相对 prevDay：+1.81%
- 成交/持仓：24h notional volume $1.03B，base volume 544K ETH，Hyperliquid OI 1.01M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -1.25%，区间 1,847-1,981，位置 46.6%，VWAP 1,897；30d +18.42%，区间 1,550-1,981，位置 83.4%，VWAP 1,815
- 1h结构：阴线 O:1,916 H:1,917 L:1,908 C:1,909，VWAP上方，VWAP 1,907
- 4h结构：阴线 O:1,921 H:1,928 L:1,908 C:1,909，VWAP下方，VWAP 1,911
- 1d结构：阴线 O:1,921 H:1,928 L:1,908 C:1,909，VWAP上方，VWAP 1,763
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.94B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,718 / 2,100；25x 多/空 1,833 / 1,985；50x 多/空 1,871 / 1,947。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,909 / ask 1,909，spread 0.1000 (0.0052%)，top20 bid 5.81K / ask 4.68K，买卖盘接近平衡
- 支撑：1,903-1,908
- 压力：1,928-1,928
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,928-1,928 或跌破 1,903-1,908 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：73.49，24h 相对 prevDay：+0.35%
- 成交/持仓：24h notional volume $144M，base volume 1.95M SOL，Hyperliquid OI 4.32M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -5.66%，区间 72.33-78.49，位置 19.5%，VWAP 74.69；30d -2.20%，区间 71.90-83.99，位置 13.5%，VWAP 77.82
- 1h结构：阴线 O:73.72 H:73.75 L:73.45 C:73.53，VWAP下方，VWAP 74.29
- 4h结构：阴线 O:73.77 H:74.12 L:73.45 C:73.53，VWAP下方，VWAP 75.71
- 1d结构：阴线 O:73.77 H:74.12 L:73.45 C:73.53，VWAP下方，VWAP 75.05
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $317M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 66.14 / 80.84；25x 多/空 70.55 / 76.43；50x 多/空 72.02 / 74.96。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 73.53 / ask 73.53，spread 0.0010 (0.0014%)，top20 bid 14.1K / ask 1.76K，买盘更厚，短线回踩承接较好
- 支撑：73.38-73.45
- 压力：74.53-74.54
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 74.53-74.54 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 74.53-74.54 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| LIT |97.2 |+7.65% |$25.6M |$91.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CASHCAT |95.2 |+24.27% |$12.7M |$8.91M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| TAO |94.4 |+6.55% |$7.26M |$26.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| KAITO |94.4 |-6.51% |$14.8M |$10.2M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |92.8 |-2.23% |$76.9M |$219M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |91.8 |+3.45% |$14.7M |$90.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |91.6 |-7.01% |$2.98M |$29.8M |+<0.1% |不碰：流动性/OI 偏低 |
| WLD |91.0 |-5.41% |$6.72M |$28.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Zcash says Ironwood proof rules out undetectable counterfeiting bugs (Wed, 29 Jul 2026 01:05:15 +0000)
- Decrypt: Zcash Activates Ironwood Upgrade After Counterfeiting Scare (Tue, 28 Jul 2026 18:24:19 +0000)
- Decrypt: Zcash Miner Fortitude Powers Up Nebraska Facility as It Eyes Public Listing (Tue, 28 Jul 2026 11:31:03 +0000)

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
