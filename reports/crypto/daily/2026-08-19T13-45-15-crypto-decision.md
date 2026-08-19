# 每日加密交易决策

生成时间：2026/08/19 21:45:15 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 46 / Fear；ETH gas 0.1147 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Chinese InsurTech Firm Zhibao Adds 2,380 Bitcoin in $154.7M Treasury Pivot (Wed, 19 Aug 2026 13:31:04 +0000)
- Cointelegraph: Here’s what happened in crypto today (Wed, 19 Aug 2026 13:10:52 +0000)
- Cointelegraph: Sweden’s H100 reports $26M H1 loss driven by falling Bitcoin value (Wed, 19 Aug 2026 11:59:30 +0000)
- Cointelegraph: Bitcoin has ‘largely purged’ froth that preceded 50% drop from $126K: BlackRock (Wed, 19 Aug 2026 11:06:13 +0000)
- Cointelegraph: Bitcoin ETFs add $189M as August net inflows approach $1B (Wed, 19 Aug 2026 07:59:16 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,998，24h 相对 prevDay：+1.30%
- 成交/持仓：24h notional volume $1.76B，base volume 27.2K BTC，Hyperliquid OI 39.2K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.45%，区间 62,523-65,200，位置 93.3%，VWAP 63,952；30d -0.32%，区间 62,237-66,918，位置 59.5%，VWAP 64,228
- 1h结构：阳线 O:64,840 H:65,200 L:64,745 C:65,015，VWAP上方，VWAP 64,568
- 4h结构：阳线 O:64,479 H:65,200 L:64,437 C:65,021，VWAP上方，VWAP 63,715
- 1d结构：阳线 O:64,696 H:65,200 L:64,122 C:65,021，VWAP上方，VWAP 64,235
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.55B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 58,498 / 71,498；25x 多/空 62,398 / 67,598；50x 多/空 63,698 / 66,298。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 65,021 / ask 65,022，spread 1.0000 (0.0015%)，top20 bid 79.99 / ask 60.05，买盘更厚，短线回踩承接较好
- 支撑：64,529-64,745
- 压力：65,200-65,200
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 64,529-64,745 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 64,529-64,745 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,932，24h 相对 prevDay：+1.86%
- 成交/持仓：24h notional volume $1.10B，base volume 571K ETH，Hyperliquid OI 932K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.78%，区间 1,862-1,942，位置 87.2%，VWAP 1,903；30d +1.45%，区间 1,821-1,981，位置 69.4%，VWAP 1,897
- 1h结构：阴线 O:1,936 H:1,939 L:1,928 C:1,932，VWAP上方，VWAP 1,914
- 4h结构：阳线 O:1,922 H:1,942 L:1,921 C:1,932，VWAP上方，VWAP 1,896
- 1d结构：阳线 O:1,917 H:1,942 L:1,905 C:1,932，VWAP上方，VWAP 1,881
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.80B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,739 / 2,125；25x 多/空 1,855 / 2,009；50x 多/空 1,893 / 1,970。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,932 / ask 1,932，spread 0.1000 (0.0052%)，top20 bid 9.08K / ask 7.13K，买盘更厚，短线回踩承接较好
- 支撑：1,921-1,928
- 压力：1,939-1,942
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,921-1,928 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,921-1,928 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：78.47，24h 相对 prevDay：+3.10%
- 成交/持仓：24h notional volume $143M，base volume 1.85M SOL，Hyperliquid OI 4.78M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +3.81%，区间 74.09-78.74，位置 94.4%，VWAP 76.47；30d +0.86%，区间 70.55-78.86，位置 95.4%，VWAP 74.94
- 1h结构：阳线 O:78.34 H:78.64 L:78.13 C:78.48，VWAP上方，VWAP 77.18
- 4h结构：阳线 O:77.51 H:78.74 L:77.40 C:78.48，VWAP上方，VWAP 76.17
- 1d结构：阳线 O:77.05 H:78.74 L:76.60 C:78.48，VWAP上方，VWAP 75.47
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $375M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 70.62 / 86.32；25x 多/空 75.33 / 81.61；50x 多/空 76.90 / 80.04。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 78.48 / ask 78.48，spread 0.0010 (0.0013%)，top20 bid 8.58K / ask 18.2K，卖盘更厚，反弹上方抛压更明显
- 支撑：77.40-78.13
- 压力：78.64-78.74
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 77.40-78.13 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 77.40-78.13 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |96.7 |+7.90% |$67.5M |$108M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |92.8 |+3.51% |$3.79M |$31.4M |+<0.1% |不碰：流动性/OI 偏低 |
| XRP |91.1 |+2.01% |$15.0M |$106M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |90.4 |+10.18% |$3.37M |$29.2M |+<0.1% |不碰：流动性/OI 偏低 |
| CASHCAT |90.1 |-11.33% |$9.14M |$12.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |88.9 |-2.67% |$11.6M |$19.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |88.8 |-1.61% |$4.68M |$22.8M |-<0.1% |不碰：流动性/OI 偏低 |
| UNI |88.3 |+3.21% |$4.37M |$20.4M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Morning Minute: PUMP Prints First Golden Cross as Revenue Hits Seven-Month High (Tue, 18 Aug 2026 12:37:02 +0000)

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
