# 每日加密交易决策

生成时间：2026/08/01 21:46:06 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 27 / Fear；ETH gas 0.0492 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Coldcard Bitcoin loss estimate rises to $70M after Galaxy analysis (Sat, 01 Aug 2026 09:23:56 +0000)
- Cointelegraph: Bitcoin ETFs end July in the green despite late-month selling (Sat, 01 Aug 2026 07:23:07 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 31 Jul 2026 18:09:51 +0000)
- Cointelegraph: US Treasury yields rise as TIPS challenge the inflation narrative (Fri, 31 Jul 2026 16:14:19 +0000)
- Cointelegraph: Bitcoin price sinks to 2-week lows as US stocks fail to copy Asia rebound (Fri, 31 Jul 2026 15:57:03 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,046，24h 相对 prevDay：-0.64%
- 成交/持仓：24h notional volume $1.19B，base volume 19.0K BTC，Hyperliquid OI 34.1K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -2.04%，区间 62,440-65,715，位置 18.5%，VWAP 63,868；30d +2.37%，区间 61,264-66,918，位置 31.5%，VWAP 64,080
- 1h结构：阴线 O:63,069 H:63,082 L:63,045 C:63,046，VWAP下方，VWAP 63,406
- 4h结构：阳线 O:63,046 H:63,093 L:63,045 C:63,046，VWAP下方，VWAP 64,016
- 1d结构：阳线 O:62,857 H:63,115 L:62,856 C:63,046，VWAP上方，VWAP 62,804
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.15B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 56,741 / 69,351；25x 多/空 60,524 / 65,568；50x 多/空 61,785 / 64,307。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,045 / ask 63,046，spread 1.0000 (0.0016%)，top20 bid 114.70 / ask 169.66，卖盘更厚，反弹上方抛压更明显
- 支撑：63,045-63,045
- 压力：63,115-63,279
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 63,115-63,279 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 63,115-63,279 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,868，24h 相对 prevDay：-0.39%
- 成交/持仓：24h notional volume $475M，base volume 255K ETH，Hyperliquid OI 962K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -0.34%，区间 1,848-1,981，位置 15.1%，VWAP 1,905；30d +9.80%，区间 1,695-1,981，位置 60.5%，VWAP 1,851
- 1h结构：阴线 O:1,868 H:1,869 L:1,868 C:1,868，VWAP下方，VWAP 1,879
- 4h结构：阳线 O:1,866 H:1,869 L:1,866 C:1,868，VWAP下方，VWAP 1,902
- 1d结构：阳线 O:1,862 H:1,871 L:1,862 C:1,868，VWAP上方，VWAP 1,776
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.80B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,681 / 2,055；25x 多/空 1,793 / 1,943；50x 多/空 1,831 / 1,905。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,868 / ask 1,868，spread 0.1000 (0.0054%)，top20 bid 6.50K / ask 6.27K，买卖盘接近平衡
- 支撑：1,867-1,868
- 压力：1,871-1,877
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,871-1,877 或跌破 1,867-1,868 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：72.95，24h 相对 prevDay：-0.58%
- 成交/持仓：24h notional volume $75.9M，base volume 1.04M SOL，Hyperliquid OI 4.18M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -2.08%，区间 72.30-77.49，位置 12.7%，VWAP 74.08；30d -9.65%，区间 72.30-83.99，位置 5.6%，VWAP 77.35
- 1h结构：阳线 O:72.91 H:72.97 L:72.89 C:72.95，VWAP下方，VWAP 73.59
- 4h结构：阳线 O:72.86 H:72.97 L:72.84 C:72.95，VWAP下方，VWAP 74.15
- 1d结构：阳线 O:72.83 H:73.18 L:72.63 C:72.95，VWAP下方，VWAP 75.18
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $305M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 65.66 / 80.25；25x 多/空 70.03 / 75.87；50x 多/空 71.49 / 74.41。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 72.95 / ask 72.95，spread 0.0010 (0.0014%)，top20 bid 11.0K / ask 9.16K，买卖盘接近平衡
- 支撑：72.90-72.93
- 压力：73.18-73.44
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 73.18-73.44 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 73.18-73.44 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| AAVE |95.0 |-5.77% |$19.4M |$65.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |95.0 |+8.46% |$7.51M |$21.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |94.5 |-5.69% |$10.1M |$75.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |94.3 |+4.78% |$32.7M |$55.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |93.8 |-4.83% |$313M |$1.17B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |91.6 |+3.47% |$8.27M |$31.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |90.0 |-4.89% |$11.8M |$19.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LDO |87.0 |-5.82% |$1.43M |$12.7M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Pump.fun laid off workers before they received millions in PUMP tokens: Report (Fri, 31 Jul 2026 19:16:19 +0000)
- Cointelegraph: Aave weighs closing 6 V3 blockchain markets, offboarding 50 low-use reserves (Fri, 31 Jul 2026 08:57:53 +0000)
- Cointelegraph: RWA perpetual futures volume nears Bitcoin on Hyperliquid, Binance (Fri, 31 Jul 2026 08:29:51 +0000)

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
