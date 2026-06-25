# 每日加密交易决策

生成时间：2026/06/25 21:14:19 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 12 / Extreme Fear；ETH gas 0.3651 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Spark migrates $150M in stablecoin to Uniswap to advance shared liquidity (Thu, 25 Jun 2026 13:00:00 GMT)
- Decrypt: Morning Minute: Strategy’s MSTR and STRC Crash to 52-Week Lows (Thu, 25 Jun 2026 12:01:38 +0000)
- Cointelegraph: Here’s what happened in crypto today (Thu, 25 Jun 2026 05:16:56 GMT)
- Decrypt: Aave Token Could Climb 50x by End of 2030, Standard Chartered Says—Here's Why (Wed, 24 Jun 2026 22:27:05 +0000)
- Cointelegraph: Bitcoin nearly loses $59K as DXY surges: Are traders bracing for more pain? (Wed, 24 Jun 2026 20:58:28 GMT)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：61,284，24h 相对 prevDay：-1.16%
- 成交/持仓：24h notional volume $3.65B，base volume 60.2K BTC，Hyperliquid OI 33.1K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -2.62%，区间 59,060-65,587，位置 34.1%，VWAP 62,670；30d -19.25%，区间 59,060-76,120，位置 13.1%，VWAP 64,675
- 1h结构：阳线 O:61,212 H:61,319 L:61,139 C:61,286，VWAP上方，VWAP 60,990
- 4h结构：阳线 O:61,249 H:61,700 L:61,037 C:61,288，VWAP下方，VWAP 62,948
- 1d结构：阳线 O:61,048 H:61,927 L:60,661 C:61,288，VWAP下方，VWAP 66,753
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.03B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 55,156 / 67,412；25x 多/空 58,833 / 63,735；50x 多/空 60,058 / 62,510。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 61,287 / ask 61,288，spread 1.0000 (0.0016%)，top20 bid 257.16 / ask 46.01，买盘更厚，短线回踩承接较好
- 支撑：61,139-61,255
- 压力：61,884-61,927
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 61,884-61,927 或跌破 61,139-61,255 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,638，24h 相对 prevDay：-1.02%
- 成交/持仓：24h notional volume $1.08B，base volume 670K ETH，Hyperliquid OI 672K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -4.27%，区间 1,551-1,779，位置 38.2%，VWAP 1,687；30d -20.97%，区间 1,504-2,096，位置 22.6%，VWAP 1,739
- 1h结构：阳线 O:1,635 H:1,639 L:1,634 C:1,638，VWAP上方，VWAP 1,623
- 4h结构：阳线 O:1,632 H:1,648 L:1,624 C:1,638，VWAP下方，VWAP 1,697
- 1d结构：阳线 O:1,621 H:1,659 L:1,614 C:1,638，VWAP下方，VWAP 1,809
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.10B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,474 / 1,802；25x 多/空 1,572 / 1,703；50x 多/空 1,605 / 1,671。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,638 / ask 1,638，spread 0.1000 (0.0061%)，top20 bid 9.50K / ask 9.61K，买卖盘接近平衡
- 支撑：1,633-1,634
- 压力：1,659-1,659
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,659-1,659 或跌破 1,633-1,634 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：68.34，24h 相对 prevDay：-0.53%
- 成交/持仓：24h notional volume $388M，base volume 5.74M SOL，Hyperliquid OI 5.04M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.89%，区间 64.65-74.97，位置 36.0%，VWAP 70.44；30d -18.27%，区间 60.06-84.78，位置 33.6%，VWAP 70.07
- 1h结构：阳线 O:68.26 H:68.37 L:68.07 C:68.36，VWAP上方，VWAP 67.99
- 4h结构：阳线 O:68.13 H:68.85 L:67.76 C:68.36，VWAP下方，VWAP 70.52
- 1d结构：阳线 O:68.07 H:69.61 L:67.36 C:68.36，VWAP下方，VWAP 72.76
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $345M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 61.51 / 75.18；25x 多/空 65.61 / 71.08；50x 多/空 66.98 / 69.71。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 68.36 / ask 68.36，spread 0.0010 (0.0015%)，top20 bid 7.94K / ask 11.6K，卖盘更厚，反弹上方抛压更明显
- 支撑：68.07-68.30
- 压力：69.54-69.61
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 69.54-69.61 或跌破 68.07-68.30 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| XPL |91.7 |+12.38% |$18.5M |$35.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |91.6 |-5.95% |$28.6M |$48.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |91.3 |+7.74% |$22.3M |$64.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |90.9 |+11.75% |$51.8M |$58.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |90.0 |-7.74% |$18.8M |$24.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |89.4 |+3.55% |$621M |$1.28B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |86.7 |-5.94% |$5.95M |$24.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JUP |86.6 |+6.05% |$11.8M |$9.86M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Aave Token Could Climb 50x by End of 2030, Standard Chartered Says—Here's Why (Wed, 24 Jun 2026 22:27:05 +0000)
- Cointelegraph: HYPE down 22% from record highs: Will spot demand revive the uptrend? (Wed, 24 Jun 2026 22:08:25 GMT)

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
