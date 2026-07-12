# 每日加密交易决策

生成时间：2026/07/12 09:15:57 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 26 / Fear；ETH gas 0.0908 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Empery Digital shares rise after selling Bitcoin treasury to fund AI data center project (Sun, 12 Jul 2026 01:00:54 +0000)
- Decrypt: What Is Robinhood Chain? The Ethereum Layer-2 Network for Tokenized Stocks (Sat, 11 Jul 2026 16:21:34 +0000)
- Cointelegraph: Bitcoin nearing late stages of bear market: Jamie Coutts, Real Vision (Sat, 11 Jul 2026 13:30:00 +0000)
- Cointelegraph: Ethereum climbs 3% on tokenization boom: Can bulls push ETH price past $1,800? (Sat, 11 Jul 2026 12:55:18 +0000)
- Cointelegraph: Bitcoin price gains nearly 10% in July, but traders still see BTC copying 2022 bear market (Sat, 11 Jul 2026 11:21:07 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,900，24h 相对 prevDay：-0.36%
- 成交/持仓：24h notional volume $738M，base volume 11.5K BTC，Hyperliquid OI 37.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +0.42%，区间 61,342-64,698，位置 76.3%，VWAP 63,487；30d +0.54%，区间 57,768-67,283，位置 64.5%，VWAP 62,380
- 1h结构：阳线 O:63,830 H:63,972 L:63,816 C:63,904，VWAP下方，VWAP 64,074
- 4h结构：阳线 O:63,823 H:63,972 L:63,713 C:63,904，VWAP上方，VWAP 63,271
- 1d结构：阳线 O:63,823 H:63,972 L:63,713 C:63,904，VWAP上方，VWAP 62,686
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.39B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,510 / 70,290；25x 多/空 61,344 / 66,456；50x 多/空 62,622 / 65,178。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,903 / ask 63,904，spread 1.0000 (0.0016%)，top20 bid 77.90 / ask 59.47，买盘更厚，短线回踩承接较好
- 支撑：63,816-63,818
- 压力：64,482-64,494
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 64,482-64,494 或跌破 63,816-63,818 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,793，24h 相对 prevDay：-<0.1%
- 成交/持仓：24h notional volume $421M，base volume 233K ETH，Hyperliquid OI 780K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +0.35%，区间 1,713-1,834，位置 65.7%，VWAP 1,773；30d +7.62%，区间 1,511-1,850，位置 83.2%，VWAP 1,700
- 1h结构：阳线 O:1,789 H:1,796 L:1,788 C:1,793，VWAP下方，VWAP 1,798
- 4h结构：阳线 O:1,787 H:1,796 L:1,779 C:1,793，VWAP上方，VWAP 1,774
- 1d结构：阳线 O:1,787 H:1,796 L:1,779 C:1,793，VWAP上方，VWAP 1,694
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.40B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,613 / 1,972；25x 多/空 1,721 / 1,864；50x 多/空 1,757 / 1,828。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,792 / ask 1,793，spread 0.1000 (0.0056%)，top20 bid 6.36K / ask 4.45K，买盘更厚，短线回踩承接较好
- 支撑：1,786-1,788
- 压力：1,829-1,829
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,829-1,829 或跌破 1,786-1,788 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：76.12，24h 相对 prevDay：-2.14%
- 成交/持仓：24h notional volume $139M，base volume 1.79M SOL，Hyperliquid OI 5.32M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -6.69%，区间 75.59-83.76，位置 6.5%，VWAP 79.33；30d +14.00%，区间 63.96-83.99，位置 60.7%，VWAP 74.27
- 1h结构：阳线 O:76.08 H:76.33 L:76.02 C:76.12，VWAP下方，VWAP 77.74
- 4h结构：阴线 O:76.75 H:76.84 L:75.59 C:76.12，VWAP下方，VWAP 79.97
- 1d结构：阴线 O:76.75 H:76.84 L:75.59 C:76.12，VWAP上方，VWAP 71.77
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $405M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 68.50 / 83.73；25x 多/空 73.07 / 79.16；50x 多/空 74.59 / 77.64。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 76.12 / ask 76.12，spread 0.0010 (0.0013%)，top20 bid 3.17K / ask 7.15K，卖盘更厚，反弹上方抛压更明显
- 支撑：75.59-76.02
- 压力：78.66-78.98
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 78.66-78.98 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 78.66-78.98 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| CASHCAT |95.7 |+14.05% |$27.0M |$8.68M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| WLD |92.9 |+4.01% |$21.5M |$41.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |90.7 |+3.53% |$25.6M |$85.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |90.0 |-3.28% |$25.3M |$145M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |89.6 |-5.07% |$3.74M |$26.9M |+<0.1% |不碰：流动性/OI 偏低 |
| UNI |89.5 |+4.60% |$12.9M |$19.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ARB |88.2 |+4.16% |$16.4M |$9.41M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |87.0 |-3.13% |$2.41M |$8.69M |-<0.1% |不碰：流动性/OI 偏低 |

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
