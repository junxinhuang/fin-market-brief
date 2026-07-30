# 每日加密交易决策

生成时间：2026/07/30 21:15:57 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 28 / Fear；ETH gas 1.3470 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Morning Minute: Robinhood Posts Its Best Quarter Ever (Thu, 30 Jul 2026 12:01:11 +0000)
- Cointelegraph: Hedge fund with $1.1B in Bitcoin miner stocks seeks capital after AI sell-off: FT (Thu, 30 Jul 2026 11:29:03 +0000)
- Cointelegraph: Chinese newspaper warns of Bitcoin extortion scam using its name (Thu, 30 Jul 2026 07:28:57 +0000)
- Cointelegraph: Bitcoin ETF inflows return as Ether funds slip into outflows (Thu, 30 Jul 2026 07:05:23 +0000)
- Cointelegraph: US sanctions Iranian maritime firm, says it accepted Bitcoin to evade restrictions (Thu, 30 Jul 2026 05:23:59 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,810，24h 相对 prevDay：+0.79%
- 成交/持仓：24h notional volume $2.31B，base volume 36.1K BTC，Hyperliquid OI 34.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -0.40%，区间 62,703-65,795，位置 68.1%，VWAP 64,117；30d +10.59%，区间 57,768-66,918，位置 77.0%，VWAP 63,709
- 1h结构：阴线 O:64,892 H:64,915 L:64,799 C:64,810，VWAP上方，VWAP 64,122
- 4h结构：阳线 O:64,748 H:64,997 L:64,748 C:64,809，VWAP上方，VWAP 64,528
- 1d结构：阳线 O:63,961 H:64,997 L:63,588 C:64,809，VWAP上方，VWAP 62,814
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.24B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 58,329 / 71,291；25x 多/空 62,218 / 67,402；50x 多/空 63,514 / 66,106。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 64,809 / ask 64,810，spread 1.0000 (0.0015%)，top20 bid 175.96 / ask 24.28，买盘更厚，短线回踩承接较好
- 支撑：64,748-64,799
- 压力：64,915-64,997
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 64,748-64,799 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 64,748-64,799 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,925，24h 相对 prevDay：+1.03%
- 成交/持仓：24h notional volume $1.09B，base volume 573K ETH，Hyperliquid OI 978K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.50%，区间 1,847-1,981，位置 58.1%，VWAP 1,905；30d +22.48%，区间 1,552-1,981，位置 86.9%，VWAP 1,832
- 1h结构：阳线 O:1,925 H:1,927 L:1,923 C:1,925，VWAP上方，VWAP 1,907
- 4h结构：阳线 O:1,922 H:1,927 L:1,919 C:1,925，VWAP上方，VWAP 1,907
- 1d结构：阳线 O:1,910 H:1,927 L:1,893 C:1,925，VWAP上方，VWAP 1,770
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.88B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,732 / 2,117；25x 多/空 1,848 / 2,002；50x 多/空 1,886 / 1,963。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,925 / ask 1,925，spread 0.1000 (0.0052%)，top20 bid 6.86K / ask 7.57K，买卖盘接近平衡
- 支撑：1,919-1,923
- 压力：1,927-1,936
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,919-1,923 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,919-1,923 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：74.36，24h 相对 prevDay：+1.13%
- 成交/持仓：24h notional volume $190M，base volume 2.58M SOL，Hyperliquid OI 4.41M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d -1.97%，区间 72.30-77.49，位置 39.7%，VWAP 74.31；30d +0.97%，区间 72.24-83.99，位置 18.0%，VWAP 77.82
- 1h结构：阴线 O:74.38 H:74.42 L:74.27 C:74.36，VWAP上方，VWAP 73.61
- 4h结构：阳线 O:74.19 H:74.48 L:74.06 C:74.36，VWAP下方，VWAP 74.84
- 1d结构：阳线 O:73.64 H:74.48 L:73.11 C:74.36，VWAP下方，VWAP 75.09
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $328M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 66.92 / 81.79；25x 多/空 71.38 / 77.33；50x 多/空 72.87 / 75.85。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 74.36 / ask 74.36，spread 0.0010 (0.0013%)，top20 bid 14.7K / ask 4.23K，买盘更厚，短线回踩承接较好
- 支撑：74.06-74.27
- 压力：74.48-74.51
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 74.48-74.51 或跌破 74.06-74.27 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| KAITO |92.2 |-12.97% |$15.3M |$10.2M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |91.8 |+4.22% |$11.7M |$46.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CASHCAT |91.2 |+18.72% |$19.5M |$7.01M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |91.0 |+3.28% |$58.7M |$189M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |90.7 |+4.11% |$17.7M |$46.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| JTO |90.3 |-7.00% |$2.58M |$9.32M |-<0.1% |不碰：流动性/OI 偏低 |
| ONDO |89.7 |+5.59% |$16.8M |$17.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |89.6 |+4.50% |$16.3M |$22.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: What is Zcash (ZEC)? The Privacy Coin Using Zero-Knowledge Proofs (Wed, 29 Jul 2026 16:43:52 +0000)
- Decrypt: Morning Minute: Claude Mythos Breaks Post-Quantum Cryptography (Wed, 29 Jul 2026 12:15:00 +0000)

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
