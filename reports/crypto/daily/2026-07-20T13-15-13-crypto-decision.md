# 每日加密交易决策

生成时间：2026/07/20 21:15:13 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 29 / Fear；ETH gas 0.1517 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Mon, 20 Jul 2026 13:07:28 +0000)
- Cointelegraph: Strategy raises $263.5M through MSTR sales, holds 843,775 Bitcoin (Mon, 20 Jul 2026 12:39:49 +0000)
- Decrypt: Strategy's Michael Saylor Makes 110-Point Case Against Bitcoin's BIP-110 (Mon, 20 Jul 2026 11:12:57 +0000)
- Cointelegraph: Capital B approves 10-for-1 reverse stock split to broaden investor base (Mon, 20 Jul 2026 10:54:00 +0000)
- Cointelegraph: Grayscale plans regular cash payouts from ETH, SOL staking rewards (Mon, 20 Jul 2026 10:36:30 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,688，24h 相对 prevDay：+0.53%
- 成交/持仓：24h notional volume $1.74B，base volume 26.9K BTC，Hyperliquid OI 38.3K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +3.78%，区间 62,264-65,577，位置 73.2%，VWAP 64,519；30d +0.64%，区间 57,768-65,587，位置 88.5%，VWAP 62,223
- 1h结构：阳线 O:64,629 H:64,736 L:64,613 C:64,688，VWAP上方，VWAP 64,512
- 4h结构：阴线 O:64,989 H:64,989 L:64,582 C:64,688，VWAP上方，VWAP 64,081
- 1d结构：阴线 O:64,719 H:65,082 L:63,730 C:64,688，VWAP上方，VWAP 62,705
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.48B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 58,219 / 71,157；25x 多/空 62,100 / 67,276；50x 多/空 63,394 / 65,982。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 64,688 / ask 64,689，spread 1.0000 (0.0015%)，top20 bid 81.45 / ask 69.11，买卖盘接近平衡
- 支撑：64,582-64,616
- 压力：65,057-65,082
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 64,582-64,616 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 64,582-64,616 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,873，24h 相对 prevDay：+0.30%
- 成交/持仓：24h notional volume $732M，base volume 392K ETH，Hyperliquid OI 996K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +5.43%，区间 1,774-1,947，位置 57.6%，VWAP 1,877；30d +7.64%，区间 1,511-1,947，位置 83.2%，VWAP 1,726
- 1h结构：阴线 O:1,874 H:1,875 L:1,872 C:1,873，VWAP上方，VWAP 1,867
- 4h结构：阴线 O:1,893 H:1,894 L:1,872 C:1,873，VWAP上方，VWAP 1,845
- 1d结构：阳线 O:1,872 H:1,897 L:1,843 C:1,873，VWAP上方，VWAP 1,722
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.87B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,686 / 2,061；25x 多/空 1,798 / 1,948；50x 多/空 1,836 / 1,911。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,873 / ask 1,873，spread 0.1000 (0.0053%)，top20 bid 5.62K / ask 6.33K，买卖盘接近平衡
- 支撑：1,872-1,872
- 压力：1,894-1,897
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,872-1,872 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,872-1,872 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：76.70，24h 相对 prevDay：+1.05%
- 成交/持仓：24h notional volume $149M，base volume 1.95M SOL，Hyperliquid OI 4.55M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.32%，区间 73.33-79.00，位置 59.4%，VWAP 76.36；30d +4.72%，区间 63.96-83.99，位置 63.6%，VWAP 75.11
- 1h结构：阴线 O:76.71 H:76.78 L:76.70 C:76.70，VWAP上方，VWAP 76.24
- 4h结构：阴线 O:77.09 H:77.11 L:76.64 C:76.70，VWAP上方，VWAP 76.21
- 1d结构：阳线 O:76.35 H:77.36 L:75.50 C:76.70，VWAP上方，VWAP 73.89
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $349M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 69.03 / 84.37；25x 多/空 73.63 / 79.76；50x 多/空 75.16 / 78.23。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 76.69 / ask 76.69，spread 0.0010 (0.0013%)，top20 bid 3.54K / ask 10.5K，卖盘更厚，反弹上方抛压更明显
- 支撑：76.51-76.64
- 压力：77.19-77.36
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 76.51-76.64 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 76.51-76.64 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| CASHCAT |95.7 |+11.83% |$26.6M |$11.4M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZEC |94.8 |-3.30% |$80.2M |$315M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |93.7 |+18.31% |$59.3M |$62.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |90.1 |+2.83% |$9.43M |$81.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ACE |89.6 |+108.90% |$6.96M |$1.96M |-0.130% |不碰：流动性/OI 偏低 |
| kBONK |89.4 |+7.73% |$12.4M |$9.26M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |88.0 |-3.68% |$3.87M |$8.78M |+<0.1% |不碰：流动性/OI 偏低 |
| AVAX |87.2 |+2.35% |$7.28M |$14.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
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
