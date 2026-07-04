# 每日加密交易决策

生成时间：2026/07/04 09:15:23 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏多但降仓
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 22 / Extreme Fear；ETH gas 0.0817 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 0%-15%，单笔 2%-5%，优先减风险或等反弹失败。
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
- Cointelegraph: SOL rallies as Solana memecoins, prediction market activity surge: Are bulls back? (Fri, 03 Jul 2026 21:36:02 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 03 Jul 2026 19:51:18 +0000)
- Decrypt: 'Every Time I Buy It, It Tanks': Dave Portnoy Says He's Losing Millions as Bitcoin Falls (Fri, 03 Jul 2026 17:13:43 +0000)
- Cointelegraph: Crypto Biz: Bitcoin maximalism meets the realities of capital markets (Fri, 03 Jul 2026 16:03:41 +0000)
- Decrypt: What Is Q-Day? The Quantum Threat to Bitcoin Explained (Fri, 03 Jul 2026 15:40:16 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：62,497，24h 相对 prevDay：+1.35%
- 成交/持仓：24h notional volume $1.87B，base volume 30.2K BTC，Hyperliquid OI 35.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +4.17%，区间 57,768-62,949，位置 91.3%，VWAP 60,417；30d -2.13%，区间 57,768-67,283，位置 49.7%，VWAP 62,050
- 1h结构：阴线 O:62,757 H:62,758 L:62,461 C:62,497，VWAP上方，VWAP 61,946
- 4h结构：阴线 O:62,575 H:62,939 L:62,461 C:62,497，VWAP上方，VWAP 60,216
- 1d结构：阴线 O:62,575 H:62,939 L:62,461 C:62,497，VWAP下方，VWAP 64,080
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.21B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 56,247 / 68,747；25x 多/空 59,997 / 64,997；50x 多/空 61,247 / 63,747。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 62,497 / ask 62,498，spread 1.0000 (0.0016%)，top20 bid 124.25 / ask 65.24，买盘更厚，短线回踩承接较好
- 支撑：62,190-62,461
- 压力：62,939-62,949
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 62,190-62,461 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 62,190-62,461 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,748，24h 相对 prevDay：+1.92%
- 成交/持仓：24h notional volume $706M，base volume 407K ETH，Hyperliquid OI 770K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +11.14%，区间 1,548-1,776，位置 87.7%，VWAP 1,643；30d -1.24%，区间 1,504-1,850，位置 70.6%，VWAP 1,663
- 1h结构：阴线 O:1,760 H:1,760 L:1,747 C:1,748，VWAP上方，VWAP 1,721
- 4h结构：阴线 O:1,759 H:1,765 L:1,747 C:1,748，VWAP上方，VWAP 1,618
- 1d结构：阴线 O:1,759 H:1,765 L:1,747 C:1,748，VWAP上方，VWAP 1,727
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.35B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,573 / 1,923；25x 多/空 1,678 / 1,818；50x 多/空 1,713 / 1,783。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,748 / ask 1,748，spread 0.1000 (0.0057%)，top20 bid 9.97K / ask 6.46K，买盘更厚，短线回踩承接较好
- 支撑：1,744-1,747
- 压力：1,774-1,776
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,744-1,747 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,744-1,747 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：82.01，24h 相对 prevDay：+0.90%
- 成交/持仓：24h notional volume $202M，base volume 2.48M SOL，Hyperliquid OI 6.10M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +16.40%，区间 69.47-83.29，位置 90.8%，VWAP 76.88；30d +19.15%，区间 60.06-83.29，位置 94.5%，VWAP 70.36
- 1h结构：阴线 O:82.44 H:82.44 L:81.93 C:82.01，VWAP上方，VWAP 81.36
- 4h结构：阴线 O:82.36 H:82.76 L:81.93 C:82.01，VWAP上方，VWAP 74.96
- 1d结构：阴线 O:82.36 H:82.76 L:81.93 C:82.01，VWAP上方，VWAP 71.68
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $500M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 73.81 / 90.21；25x 多/空 78.73 / 85.29；50x 多/空 80.37 / 83.65。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 82.02 / ask 82.02，spread 0.0010 (0.0012%)，top20 bid 5.85K / ask 6.18K，买卖盘接近平衡
- 支撑：81.66-81.93
- 压力：83.08-83.29
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 81.66-81.93 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 81.66-81.93 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |94.6 |+5.41% |$104M |$211M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |94.6 |+10.14% |$26.7M |$36.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |94.3 |+5.66% |$424M |$1.52B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |93.8 |+12.75% |$15.0M |$16.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |93.6 |+4.23% |$24.9M |$44.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |93.5 |+4.31% |$24.0M |$79.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |93.1 |+4.18% |$45.2M |$89.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| SUI |92.5 |+3.63% |$16.0M |$43.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Zcash Ironwood Upgrade Nears as Developers Work to Restore Confidence After ZEC Crash (Fri, 03 Jul 2026 17:56:03 +0000)
- Cointelegraph: Zcash’s Ironwood upgrade faces possible delay over infrastructure readiness (Fri, 03 Jul 2026 11:21:30 +0000)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 0%-15%，单笔 2%-5%，优先减风险或等反弹失败。
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
