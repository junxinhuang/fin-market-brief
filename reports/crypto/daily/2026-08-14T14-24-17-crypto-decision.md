# 每日加密交易决策

生成时间：2026/08/14 22:24:17 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 29 / Fear；ETH gas 0.2047 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: JPMorgan boosts Bitcoin, Ether ETF positions in Q2 filing (Fri, 14 Aug 2026 14:14:06 +0000)
- Cointelegraph: Solana’s fee overhaul increases burn and makes resource hogs pay (Fri, 14 Aug 2026 13:30:00 +0000)
- Cointelegraph: Bitcoin eyes new August lows as Binance longs face ‘cleanout’ (Fri, 14 Aug 2026 10:43:57 +0000)
- Cointelegraph: Ethereum Foundation pivots away from Poseidon in post-quantum plan (Thu, 13 Aug 2026 23:34:56 +0000)
- Decrypt: 'Bitcoin Is Burning': Red Team Turns to Chinese AI to Find Flaws (Thu, 13 Aug 2026 22:36:07 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：62,614，24h 相对 prevDay：-1.85%
- 成交/持仓：24h notional volume $1.67B，base volume 26.5K BTC，Hyperliquid OI 43.0K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -3.49%，区间 62,555-65,475，位置 2.3%，VWAP 63,684；30d -3.27%，区间 62,237-66,918，位置 8.2%，VWAP 64,275
- 1h结构：阴线 O:62,641 H:62,710 L:62,555 C:62,623，VWAP下方，VWAP 63,298
- 4h结构：阴线 O:62,851 H:62,895 L:62,555 C:62,623，VWAP下方，VWAP 64,025
- 1d结构：阴线 O:63,479 H:63,615 L:62,555 C:62,623，VWAP下方，VWAP 64,092
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.69B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 56,353 / 68,875；25x 多/空 60,109 / 65,119；50x 多/空 61,362 / 63,866。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 62,624 / ask 62,625，spread 1.0000 (0.0016%)，top20 bid 182.55 / ask 34.87，买盘更厚，短线回踩承接较好
- 支撑：62,555-62,581
- 压力：63,582-63,650
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 63,582-63,650 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 63,582-63,650 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,866，24h 相对 prevDay：-1.29%
- 成交/持仓：24h notional volume $596M，base volume 317K ETH，Hyperliquid OI 888K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -2.45%，区间 1,853-1,938，位置 15.8%，VWAP 1,882；30d -2.71%，区间 1,803-1,981，位置 35.4%，VWAP 1,891
- 1h结构：阴线 O:1,869 H:1,871 L:1,863 C:1,866，VWAP下方，VWAP 1,882
- 4h结构：阴线 O:1,877 H:1,879 L:1,863 C:1,866，VWAP下方，VWAP 1,895
- 1d结构：阴线 O:1,885 H:1,891 L:1,863 C:1,866，VWAP上方，VWAP 1,865
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.66B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,679 / 2,053；25x 多/空 1,791 / 1,941；50x 多/空 1,829 / 1,903。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,866 / ask 1,866，spread 0.1000 (0.0054%)，top20 bid 9.30K / ask 7.77K，买卖盘接近平衡
- 支撑：1,862-1,863
- 压力：1,891-1,893
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,891-1,893 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,891-1,893 且 short liquidation 扩大。

## 6. SOL

- 实时价格：75.14，24h 相对 prevDay：-1.48%
- 成交/持仓：24h notional volume $65.0M，base volume 858K SOL，Hyperliquid OI 5.03M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +2.05%，区间 73.56-77.82，位置 37.2%，VWAP 76.01；30d -2.71%，区间 70.55-78.86，位置 55.3%，VWAP 74.97
- 1h结构：阴线 O:75.33 H:75.39 L:75.02 C:75.15，VWAP下方，VWAP 75.95
- 4h结构：阴线 O:75.50 H:75.56 L:75.02 C:75.15，VWAP下方，VWAP 75.58
- 1d结构：阴线 O:76.23 H:76.29 L:75.02 C:75.15，VWAP下方，VWAP 76.39
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $378M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 67.63 / 82.65；25x 多/空 72.13 / 78.14；50x 多/空 73.64 / 76.64。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 75.15 / ask 75.15，spread 0.0010 (0.0013%)，top20 bid 17.0K / ask 4.71K，买盘更厚，短线回踩承接较好
- 支撑：75.02-75.05
- 压力：76.24-76.41
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 76.24-76.41 或跌破 75.02-75.05 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| KAITO |94.5 |-9.97% |$7.91M |$9.26M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| LIT |94.0 |-5.68% |$16.6M |$79.8M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |92.3 |-4.18% |$172M |$1.22B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ACE |91.0 |+150.77% |$4.74M |$2.81M |-<0.1% |不碰：流动性/OI 偏低 |
| CASHCAT |90.9 |-14.30% |$11.1M |$17.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |90.1 |-6.97% |$9.13M |$19.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ETHFI |89.6 |+11.05% |$10.1M |$10.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |89.2 |-4.75% |$4.60M |$43.2M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Robinhood Chain nears $1B TVL as Uniswap drives liquidity: Standard Chartered (Thu, 13 Aug 2026 17:28:54 +0000)

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
