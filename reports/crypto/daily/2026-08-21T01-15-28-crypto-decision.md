# 每日加密交易决策

生成时间：2026/08/21 09:15:28 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏多但降仓
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 72 / Greed；ETH gas 0.0529 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Bitcoin breaks above 200-day moving average for first time since November (Thu, 20 Aug 2026 21:03:21 +0000)
- Decrypt: What's Next for Bitcoin After Historic Rally? Experts Weigh In (Thu, 20 Aug 2026 20:40:56 +0000)
- Cointelegraph: Here’s what happened in crypto today (Thu, 20 Aug 2026 19:50:32 +0000)
- Decrypt: Bitcoin Is Pumping But Prediction Market Traders Aren't Convinced (Thu, 20 Aug 2026 19:16:05 +0000)
- Decrypt: XRP Notches Best Week Since 2024 Election Pump on Bitcoin Short Squeeze (Thu, 20 Aug 2026 17:46:08 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：73,916，24h 相对 prevDay：+6.58%
- 成交/持仓：24h notional volume $5.08B，base volume 70.9K BTC，Hyperliquid OI 35.9K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +17.27%，区间 62,678-73,998，位置 99.3%，VWAP 69,019；30d +11.85%，区间 62,237-73,998，位置 99.3%，VWAP 65,481
- 1h结构：阳线 O:73,699 H:73,964 L:73,651 C:73,916，VWAP上方，VWAP 70,022
- 4h结构：阳线 O:73,001 H:73,998 L:73,001 C:73,916，VWAP上方，VWAP 67,315
- 1d结构：阳线 O:73,001 H:73,998 L:73,001 C:73,916，VWAP上方，VWAP 65,251
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.66B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 66,524 / 81,308；25x 多/空 70,959 / 76,873；50x 多/空 72,438 / 75,394。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 73,918 / ask 73,919，spread 1.0000 (0.0014%)，top20 bid 184.74 / ask 22.67，买盘更厚，短线回踩承接较好
- 支撑：73,001-73,651
- 压力：73,964-73,998
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 73,001-73,651 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 73,001-73,651 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,344，24h 相对 prevDay：+3.86%
- 成交/持仓：24h notional volume $2.33B，base volume 1.01M ETH，Hyperliquid OI 906K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +24.67%，区间 1,869-2,361，位置 96.9%，VWAP 2,196；30d +21.30%，区间 1,821-2,361，位置 97.1%，VWAP 1,987
- 1h结构：阳线 O:2,342 H:2,349 L:2,338 C:2,345，VWAP上方，VWAP 2,207
- 4h结构：阳线 O:2,328 H:2,352 L:2,326 C:2,345，VWAP上方，VWAP 2,090
- 1d结构：阳线 O:2,328 H:2,352 L:2,326 C:2,345，VWAP上方，VWAP 1,954
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.12B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,110 / 2,579；25x 多/空 2,251 / 2,438；50x 多/空 2,298 / 2,391。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,345 / ask 2,345，spread 0.1000 (0.0043%)，top20 bid 4.67K / ask 3.96K，买卖盘接近平衡
- 支撑：2,326-2,338
- 压力：2,352-2,361
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 2,326-2,338 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 2,326-2,338 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：88.37，24h 相对 prevDay：+4.18%
- 成交/持仓：24h notional volume $225M，base volume 2.59M SOL，Hyperliquid OI 4.76M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +17.26%，区间 74.09-88.81，位置 97.1%，VWAP 83.17；30d +13.39%，区间 70.55-88.81，位置 97.6%，VWAP 76.58
- 1h结构：阳线 O:88.25 H:88.46 L:88.14 C:88.38，VWAP上方，VWAP 84.18
- 4h结构：阳线 O:87.65 H:88.81 L:87.57 C:88.38，VWAP上方，VWAP 80.78
- 1d结构：阳线 O:87.65 H:88.81 L:87.57 C:88.38，VWAP上方，VWAP 76.57
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $421M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 79.53 / 97.20；25x 多/空 84.83 / 91.90；50x 多/空 86.60 / 90.14。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 88.37 / ask 88.37，spread 0.0010 (0.0011%)，top20 bid 2.98K / ask 10.2K，卖盘更厚，反弹上方抛压更明显
- 支撑：87.57-88.14
- 压力：88.46-88.81
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 87.57-88.14 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 87.57-88.14 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |97.6 |+23.29% |$131M |$124M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| XRP |94.5 |+14.65% |$284M |$147M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |94.4 |+7.66% |$1.13B |$1.72B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |93.0 |+28.48% |$22.4M |$36.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |92.6 |+10.47% |$20.5M |$26.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| DOGE |92.5 |+9.10% |$46.0M |$48.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |92.5 |+9.49% |$24.1M |$31.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| MON |91.8 |+19.49% |$15.2M |$37.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: XRP Notches Best Week Since 2024 Election Pump on Bitcoin Short Squeeze (Thu, 20 Aug 2026 17:46:08 +0000)
- Decrypt: Morning Minute: Hyperliquid Is Coming to the US (Thu, 20 Aug 2026 14:02:44 +0000)
- Cointelegraph: HYPE jumps 20% as Trump signals legal US path for Hyperliquid (Thu, 20 Aug 2026 05:52:30 +0000)
- Decrypt: Bitcoin's Sharpest Rally in Five Months Flips Markets From Bearish to Coin Flip (Wed, 19 Aug 2026 22:18:01 +0000)

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
