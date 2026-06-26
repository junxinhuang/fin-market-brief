# 每日加密交易决策

生成时间：2026/06/27 01:01:10 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 13 / Extreme Fear；ETH gas 0.3621 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Crypto Biz: The cost of stacking sats (Fri, 26 Jun 2026 16:23:34 +0000)
- Cointelegraph: Bitcoin makes first sub-$60K close since Q3 2024 as tech stocks enter ‘deep bear market’ (Fri, 26 Jun 2026 15:55:56 +0000)
- Decrypt: Strategy's Saylor Acknowledges 'Volatility Test' as STRC Hits New Low on Bitcoin Weakness (Fri, 26 Jun 2026 15:33:49 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 26 Jun 2026 14:06:06 +0000)
- Decrypt: Bitcoin Tests $59K as ETFs Shed $692M, Options Expiry Looms (Fri, 26 Jun 2026 13:43:02 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：60,002，24h 相对 prevDay：+1.22%
- 成交/持仓：24h notional volume $3.41B，base volume 57.2K BTC，Hyperliquid OI 34.1K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -5.53%，区间 58,062-65,587，位置 25.7%，VWAP 61,599；30d -19.38%，区间 58,062-74,557，位置 11.7%，VWAP 64,122
- 1h结构：阴线 O:60,003 H:60,003 L:59,990 C:59,998，VWAP上方，VWAP 59,675
- 4h结构：阴线 O:60,300 H:60,543 L:59,931 C:59,998，VWAP下方，VWAP 61,836
- 1d结构：阳线 O:59,760 H:60,726 L:58,308 C:59,998，VWAP下方，VWAP 66,216
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.04B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 54,002 / 66,002；25x 多/空 57,602 / 62,402；50x 多/空 58,802 / 61,202。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 59,996 / ask 59,997，spread 1.0000 (0.0017%)，top20 bid 18.49 / ask 284.38，卖盘更厚，反弹上方抛压更明显
- 支撑：59,931-59,990
- 压力：60,543-60,726
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 60,543-60,726 或跌破 59,931-59,990 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,576，24h 相对 prevDay：+0.97%
- 成交/持仓：24h notional volume $1.25B，base volume 808K ETH，Hyperliquid OI 705K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.91%，区间 1,511-1,779，位置 24.3%，VWAP 1,649；30d -22.13%，区间 1,504-2,047，位置 13.2%，VWAP 1,722
- 1h结构：阴线 O:1,577 H:1,577 L:1,576 C:1,576，VWAP上方，VWAP 1,564
- 4h结构：阴线 O:1,579 H:1,593 L:1,572 C:1,576，VWAP下方，VWAP 1,661
- 1d结构：阳线 O:1,567 H:1,593 L:1,511 C:1,576，VWAP下方，VWAP 1,792
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.11B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,418 / 1,734；25x 多/空 1,513 / 1,639；50x 多/空 1,545 / 1,608。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,576 / ask 1,576，spread 0.1000 (0.0063%)，top20 bid 10.3K / ask 9.08K，买卖盘接近平衡
- 支撑：1,572-1,576
- 压力：1,587-1,593
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,587-1,593 或跌破 1,572-1,576 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：72.39，24h 相对 prevDay：+9.77%
- 成交/持仓：24h notional volume $508M，base volume 7.39M SOL，Hyperliquid OI 5.16M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +3.85%，区间 63.96-74.97，位置 76.5%，VWAP 70.48；30d -12.13%，区间 60.06-83.38，位置 52.9%，VWAP 69.92
- 1h结构：阴线 O:72.47 H:72.47 L:72.39 C:72.39，VWAP上方，VWAP 68.31
- 4h结构：阳线 O:72.05 H:73.55 L:72.00 C:72.39，VWAP上方，VWAP 70.03
- 1d结构：阳线 O:67.69 H:73.55 L:65.89 C:72.39，VWAP下方，VWAP 72.41
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $374M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 65.15 / 79.63；25x 多/空 69.49 / 75.28；50x 多/空 70.94 / 73.84。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 72.39 / ask 72.39，spread 0.0010 (0.0014%)，top20 bid 15.8K / ask 6.26K，买盘更厚，短线回踩承接较好
- 支撑：70.29-72.00
- 压力：72.47-73.55
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 70.29-72.00 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 70.29-72.00 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| LIT |96.9 |+15.21% |$19.5M |$76.7M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| AAVE |94.8 |+18.17% |$76.6M |$80.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |92.6 |+16.75% |$43.2M |$37.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |92.3 |+6.01% |$838M |$1.32B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |91.6 |+4.53% |$114M |$180M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |89.9 |+11.28% |$10.7M |$24.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |89.4 |+6.36% |$3.79M |$11.2M |-<0.1% |不碰：流动性/OI 偏低 |
| JTO |88.7 |+25.22% |$10.5M |$9.40M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Hyperliquid added to Singapore's Investor Alert List (Fri, 26 Jun 2026 13:11:29 +0000)
- Decrypt: Morning Minute: Kraken Eyes 15% Stake in Aave at $385M Valuation (Fri, 26 Jun 2026 12:20:32 +0000)

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
