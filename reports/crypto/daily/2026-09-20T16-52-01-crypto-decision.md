# 每日加密交易决策

生成时间：2026/09/21 00:52:01 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 71 / Greed；ETH gas 0.2945 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Why Holding Anything But Bitcoin Has Been a Losing Bet for Two Years (Sun, 20 Sep 2026 14:01:03 +0000)
- Cointelegraph: REX launches 2x leveraged ETF tied to Bitcoin treasury firm Strive (Sat, 19 Sep 2026 19:18:00 +0000)
- Decrypt: Bitcoin's Sharpest Rally in Two Years Ran Almost Entirely on Short Liquidations (Sat, 19 Sep 2026 16:01:03 +0000)
- Decrypt: Solana's Heartbeat Quickens: Block Times Fall 17% in Latest Speed Upgrade (Sat, 19 Sep 2026 13:01:04 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 18 Sep 2026 21:00:00 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：81,310，24h 相对 prevDay：-0.68%
- 成交/持仓：24h notional volume $1.49B，base volume 18.4K BTC，Hyperliquid OI 41.8K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +5.85%，区间 74,903-81,996，位置 90.3%，VWAP 77,856；30d +3.73%，区间 74,903-82,268，位置 87.0%，VWAP 78,337
- 1h结构：阳线 O:80,930 H:81,505 L:80,801 C:81,308，VWAP上方，VWAP 81,048
- 4h结构：阳线 O:80,930 H:81,505 L:80,801 C:81,308，VWAP上方，VWAP 77,800
- 1d结构：阳线 O:81,292 H:81,505 L:80,148 C:81,308，VWAP上方，VWAP 75,972
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.40B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 73,179 / 89,441；25x 多/空 78,057 / 84,562；50x 多/空 79,683 / 82,936。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 81,299 / ask 81,302，spread 3.0000 (0.0037%)，top20 bid 16.34 / ask 51.69，卖盘更厚，反弹上方抛压更明显
- 支撑：80,801-80,933
- 压力：81,471-81,505
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 80,801-80,933 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 80,801-80,933 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,635，24h 相对 prevDay：-0.60%
- 成交/持仓：24h notional volume $1.20B，base volume 459K ETH，Hyperliquid OI 1.08M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +6.53%，区间 2,357-2,669，位置 89.9%，VWAP 2,504；30d +4.74%，区间 2,356-2,669，位置 89.9%，VWAP 2,477
- 1h结构：阳线 O:2,613 H:2,649 L:2,607 C:2,638，VWAP上方，VWAP 2,616
- 4h结构：阳线 O:2,613 H:2,649 L:2,607 C:2,638，VWAP上方，VWAP 2,500
- 1d结构：阳线 O:2,633 H:2,649 L:2,563 C:2,638，VWAP上方，VWAP 2,396
- funding/premium：funding +<0.1%，premium +0.144%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.86B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,372 / 2,899；25x 多/空 2,530 / 2,741；50x 多/空 2,582 / 2,688。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,637 / ask 2,638，spread 0.1000 (0.0038%)，top20 bid 3.44K / ask 1.56K，买盘更厚，短线回踩承接较好
- 支撑：2,607-2,619
- 压力：2,641-2,649
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 2,607-2,619 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 2,607-2,619 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：110.21，24h 相对 prevDay：-1.63%
- 成交/持仓：24h notional volume $215M，base volume 1.97M SOL，Hyperliquid OI 5.97M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +11.02%，区间 95.75-114.35，位置 77.6%，VWAP 104.83；30d +17.45%，区间 87.69-114.35，位置 84.4%，VWAP 102.18
- 1h结构：阳线 O:108.81 H:110.72 L:108.51 C:110.22，VWAP上方，VWAP 109.99
- 4h结构：阳线 O:108.81 H:110.72 L:108.51 C:110.18，VWAP上方，VWAP 104.07
- 1d结构：阴线 O:111.09 H:111.15 L:107.39 C:110.18，VWAP上方，VWAP 98.93
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $658M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 99.19 / 121.23；25x 多/空 105.80 / 114.62；50x 多/空 108.01 / 112.41。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 110.18 / ask 110.19，spread 0.0100 (0.0091%)，top20 bid 42.4K / ask 25.9K，买盘更厚，短线回踩承接较好
- 支撑：108.51-110.08
- 压力：110.72-111.37
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 108.51-110.08 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 108.51-110.08 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| NEAR |96.6 |+17.15% |$176M |$310M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |95.9 |-7.19% |$38.5M |$206M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |94.6 |+7.67% |$85.1M |$98.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AVAX |94.6 |+15.64% |$77.7M |$33.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.4 |-3.48% |$417M |$793M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| SUI |92.7 |+5.48% |$27.5M |$54.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |92.3 |-4.60% |$32.7M |$74.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CASHCAT |92.1 |-14.87% |$34.5M |$50.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Grayscale’s Zcash ETF files for 3-for-1 forward share split (Sun, 20 Sep 2026 09:14:27 +0000)
- Decrypt: Grayscale Is Making Its Red-Hot Zcash ETF More Affordable (Sat, 19 Sep 2026 15:01:03 +0000)
- Decrypt: Zcash Is Running—Devs Want to Make It Faster (Fri, 18 Sep 2026 19:16:03 +0000)
- Cointelegraph: Dragonfly’s Qureshi calls for end to Zcash dev fund after 2028 (Fri, 18 Sep 2026 11:22:24 +0000)

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
