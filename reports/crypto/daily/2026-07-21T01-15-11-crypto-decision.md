# 每日加密交易决策

生成时间：2026/07/21 09:15:10 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 25 / Extreme Fear；ETH gas 0.1010 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 20%-35%，单笔 5%-10%，只在回踩确认后加仓。
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
- Cointelegraph: Bitcoin defies recent tech stocks sell-off. Are bulls eyeing a $70K rally? (Mon, 20 Jul 2026 21:20:09 +0000)
- Cointelegraph: Here’s what happened in crypto today (Mon, 20 Jul 2026 21:07:27 +0000)
- Decrypt: Bitcoin ETFs Are Green Again—Here’s Why Investors Should Zoom Out (Mon, 20 Jul 2026 17:59:51 +0000)
- Cointelegraph: Hut 8, IREN deals lift AI-focused Bitcoin mining stocks (Mon, 20 Jul 2026 17:27:31 +0000)
- Decrypt: Tom Lee's Bitmine Taps the Brakes on ETH Buys, Pivots $86M Into Stock Buyback (Mon, 20 Jul 2026 16:12:36 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：65,529，24h 相对 prevDay：+1.14%
- 成交/持仓：24h notional volume $2.65B，base volume 40.9K BTC，Hyperliquid OI 37.3K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +0.81%，区间 62,550-65,778，位置 92.2%，VWAP 64,567；30d +3.57%，区间 57,768-65,778，位置 96.9%，VWAP 62,287
- 1h结构：阴线 O:65,544 H:65,635 L:65,445 C:65,527，VWAP上方，VWAP 64,827
- 4h结构：阳线 O:65,227 H:65,635 L:65,124 C:65,527，VWAP上方，VWAP 64,217
- 1d结构：阳线 O:65,227 H:65,635 L:65,124 C:65,527，VWAP上方，VWAP 62,805
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.44B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 58,976 / 72,082；25x 多/空 62,908 / 68,150；50x 多/空 64,218 / 66,840。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 65,527 / ask 65,528，spread 1.0000 (0.0015%)，top20 bid 83.10 / ask 110.62，卖盘更厚，反弹上方抛压更明显
- 支撑：65,315-65,445
- 压力：65,635-65,778
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 65,315-65,445 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 65,315-65,445 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,914，24h 相对 prevDay：+1.79%
- 成交/持仓：24h notional volume $911M，base volume 485K ETH，Hyperliquid OI 1.00M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +1.17%，区间 1,803-1,947，位置 77.2%，VWAP 1,881；30d +12.17%，区间 1,511-1,947，位置 92.5%，VWAP 1,730
- 1h结构：阴线 O:1,914 H:1,918 L:1,912 C:1,914，VWAP上方，VWAP 1,875
- 4h结构：阳线 O:1,904 H:1,918 L:1,900 C:1,914，VWAP上方，VWAP 1,850
- 1d结构：阳线 O:1,904 H:1,918 L:1,900 C:1,914，VWAP上方，VWAP 1,730
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.92B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,722 / 2,105；25x 多/空 1,837 / 1,990；50x 多/空 1,876 / 1,952。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,914 / ask 1,914，spread 0.1000 (0.0052%)，top20 bid 6.22K / ask 5.49K，买卖盘接近平衡
- 支撑：1,900-1,912
- 压力：1,918-1,918
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,900-1,912 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,900-1,912 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：78.10，24h 相对 prevDay：+1.47%
- 成交/持仓：24h notional volume $153M，base volume 1.98M SOL，Hyperliquid OI 4.60M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +0.32%，区间 73.33-79.00，位置 84.1%，VWAP 76.30；30d +7.84%，区间 63.96-83.99，位置 70.6%，VWAP 75.26
- 1h结构：阳线 O:78.08 H:78.18 L:77.97 C:78.10，VWAP上方，VWAP 76.67
- 4h结构：阳线 O:77.81 H:78.24 L:77.72 C:78.10，VWAP上方，VWAP 76.24
- 1d结构：阳线 O:77.81 H:78.24 L:77.72 C:78.10，VWAP上方，VWAP 74.24
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $359M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 70.29 / 85.91；25x 多/空 74.97 / 81.22；50x 多/空 76.53 / 79.66。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 78.10 / ask 78.10，spread 0.0010 (0.0013%)，top20 bid 7.14K / ask 7.84K，买卖盘接近平衡
- 支撑：77.72-77.97
- 压力：78.24-78.35
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 77.72-77.97 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 77.72-77.97 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| MON |93.3 |+10.26% |$3.16M |$30.7M |+<0.1% |不碰：流动性/OI 偏低 |
| HYPE |93.2 |+3.06% |$246M |$1.39B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |91.7 |+3.45% |$10.8M |$22.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |91.2 |+3.43% |$14.6M |$83.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kBONK |90.8 |+15.59% |$19.0M |$10.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |90.2 |+4.11% |$7.18M |$39.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |89.5 |+4.00% |$6.08M |$31.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ACE |89.2 |+17.77% |$9.92M |$1.67M |-<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Hyperliquid sets 500,000 HYPE stake for permissionless prediction market deployers (Mon, 20 Jul 2026 12:20:23 +0000)
- Decrypt: Morning Minute: Hyperliquid Opens Prediction Markets to Anyone in HIP-4 Upgrade (Mon, 20 Jul 2026 12:00:02 +0000)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 20%-35%，单笔 5%-10%，只在回踩确认后加仓。
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
