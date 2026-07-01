# 每日加密交易决策

生成时间：2026/07/01 13:59:24 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 11 / Extreme Fear；ETH gas 0.0754 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Has Strategy’s capital overhaul put an end to ‘death spiral’ fears? (Tue, 30 Jun 2026 23:11:09 +0000)
- Decrypt: Trump Discloses Over $1.2 Billion in Crypto Earnings, $50M in Bitcoin Holdings (Tue, 30 Jun 2026 22:16:52 +0000)
- Cointelegraph: Bitcoin just $5K away from ‘best investment opportunity’ of bear market (Tue, 30 Jun 2026 21:49:08 +0000)
- Cointelegraph: Bitmine Ether buys eclipsed by $345M ETH ETF outflows: Is sub $1.5K next? (Tue, 30 Jun 2026 21:16:47 +0000)
- Cointelegraph: Bitcoin price risks drop below $58K as US dollar hits 40-year high against yen (Tue, 30 Jun 2026 18:17:56 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：59,115，24h 相对 prevDay：-0.86%
- 成交/持仓：24h notional volume $2.78B，base volume 47.3K BTC，Hyperliquid OI 36.1K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -3.17%，区间 57,768-61,927，位置 32.4%，VWAP 59,671；30d -17.22%，区间 57,768-71,412，位置 9.9%，VWAP 62,675
- 1h结构：阴线 O:59,302 H:59,353 L:59,095 C:59,115，VWAP上方，VWAP 59,073
- 4h结构：阴线 O:59,172 H:59,433 L:59,039 C:59,115，VWAP下方，VWAP 60,235
- 1d结构：阳线 O:58,604 H:59,433 L:57,768 C:59,115，VWAP下方，VWAP 64,851
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.13B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 53,204 / 65,027；25x 多/空 56,750 / 61,480；50x 多/空 57,933 / 60,297。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,114 / ask 59,115，spread 1.0000 (0.0017%)，top20 bid 187.75 / ask 51.88，买盘更厚，短线回踩承接较好
- 支撑：59,039-59,100
- 压力：59,433-59,528
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 59,433-59,528 或跌破 59,039-59,100 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,591，24h 相对 prevDay：+<0.1%
- 成交/持仓：24h notional volume $835M，base volume 532K ETH，Hyperliquid OI 728K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d -1.84%，区间 1,511-1,659，位置 54.3%，VWAP 1,579；30d -20.71%，区间 1,504-2,007，位置 17.3%，VWAP 1,681
- 1h结构：阴线 O:1,599 H:1,600 L:1,591 C:1,591，VWAP上方，VWAP 1,584
- 4h结构：阴线 O:1,594 H:1,603 L:1,591 C:1,591，VWAP下方，VWAP 1,599
- 1d结构：阳线 O:1,571 H:1,603 L:1,552 C:1,591，VWAP下方，VWAP 1,750
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.16B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,432 / 1,750；25x 多/空 1,528 / 1,655；50x 多/空 1,559 / 1,623。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,591 / ask 1,591，spread 0.1000 (0.0063%)，top20 bid 11.4K / ask 10.0K，买卖盘接近平衡
- 支撑：1,591-1,591
- 压力：1,600-1,603
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,600-1,603 或跌破 1,591-1,591 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：75.24，24h 相对 prevDay：+1.34%
- 成交/持仓：24h notional volume $303M，base volume 4.11M SOL，Hyperliquid OI 5.03M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +10.53%，区间 63.96-76.60，位置 89.2%，VWAP 72.08；30d -7.41%，区间 60.06-81.27，位置 71.5%，VWAP 69.49
- 1h结构：阴线 O:75.56 H:75.77 L:75.13 C:75.24，VWAP上方，VWAP 74.31
- 4h结构：阴线 O:75.47 H:75.84 L:75.13 C:75.24，VWAP上方，VWAP 70.77
- 1d结构：阳线 O:73.64 H:75.84 L:72.24 C:75.24，VWAP上方，VWAP 71.53
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $378M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 67.71 / 82.76；25x 多/空 72.23 / 78.25；50x 多/空 73.73 / 76.74。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 75.24 / ask 75.24，spread 0.0010 (0.0013%)，top20 bid 11.9K / ask 8.98K，买盘更厚，短线回踩承接较好
- 支撑：74.34-75.13
- 压力：75.77-75.84
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 74.34-75.13 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 74.34-75.13 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| XPL |92.4 |-8.36% |$22.4M |$30.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JTO |91.6 |+5.50% |$7.97M |$11.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |91.4 |-4.10% |$15.7M |$77.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PYTH |90.8 |+10.85% |$11.1M |$2.58M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| ENA |90.7 |-4.50% |$15.2M |$23.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |89.7 |-3.50% |$21.4M |$35.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |88.7 |+2.21% |$13.2M |$21.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| DYDX |88.7 |+45.94% |$5.53M |$15.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Nasdaq brings proprietary market data onchain through Pyth (Tue, 30 Jun 2026 18:46:29 +0000)

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
