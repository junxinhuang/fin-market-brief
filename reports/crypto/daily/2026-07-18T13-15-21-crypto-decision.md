# 每日加密交易决策

生成时间：2026/07/18 21:15:21 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 25 / Extreme Fear；ETH gas 0.0929 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Sat, 18 Jul 2026 11:42:51 +0000)
- Cointelegraph: Crypto Biz: When dollars disappear, stablecoins step in (Fri, 17 Jul 2026 19:23:53 +0000)
- Decrypt: China’s Kimi K3 Is Out—And Beats Claude Fable and GPT 5.6 Sol on Key Benchmarks (Fri, 17 Jul 2026 17:36:42 +0000)
- Cointelegraph: Bitcoin price sags under $62.5K as Iran strikes add to US stocks pressure (Fri, 17 Jul 2026 14:37:39 +0000)
- Decrypt: Bitcoin Tests $63K as Long-Term Holders Keep Selling at a Loss (Fri, 17 Jul 2026 11:21:16 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,004，24h 相对 prevDay：+1.88%
- 成交/持仓：24h notional volume $1.24B，base volume 19.4K BTC，Hyperliquid OI 39.1K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +0.28%，区间 61,821-65,577，位置 58.1%，VWAP 63,976；30d +1.70%，区间 57,768-65,587，位置 79.8%，VWAP 62,181
- 1h结构：阴线 O:64,197 H:64,197 L:63,969 C:64,004，VWAP上方，VWAP 63,547
- 4h结构：阴线 O:64,048 H:64,250 L:63,969 C:64,004，VWAP上方，VWAP 63,962
- 1d结构：阳线 O:63,927 H:64,250 L:63,873 C:64,004，VWAP上方，VWAP 62,618
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.50B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,604 / 70,404；25x 多/空 61,444 / 66,564；50x 多/空 62,724 / 65,284。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 64,003 / ask 64,004，spread 1.0000 (0.0016%)，top20 bid 172.67 / ask 76.65，买盘更厚，短线回踩承接较好
- 支撑：63,969-63,991
- 压力：64,250-64,398
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 63,969-63,991 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 63,969-63,991 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,840，24h 相对 prevDay：+1.43%
- 成交/持仓：24h notional volume $425M，base volume 232K ETH，Hyperliquid OI 963K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +2.94%，区间 1,751-1,947，位置 45.5%，VWAP 1,843；30d +7.52%，区间 1,511-1,947，位置 75.5%，VWAP 1,720
- 1h结构：阴线 O:1,845 H:1,845 L:1,838 C:1,840，VWAP上方，VWAP 1,837
- 4h结构：阴线 O:1,846 H:1,851 L:1,838 C:1,840，VWAP上方，VWAP 1,834
- 1d结构：阴线 O:1,842 H:1,851 L:1,838 C:1,840，VWAP上方，VWAP 1,713
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.77B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,656 / 2,024；25x 多/空 1,766 / 1,913；50x 多/空 1,803 / 1,876。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,840 / ask 1,840，spread 0.1000 (0.0054%)，top20 bid 6.46K / ask 7.24K，买卖盘接近平衡
- 支撑：1,838-1,839
- 压力：1,851-1,856
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,838-1,839 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,838-1,839 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：74.68，24h 相对 prevDay：+1.32%
- 成交/持仓：24h notional volume $74.4M，base volume 997K SOL，Hyperliquid OI 4.38M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -2.70%，区间 73.33-79.00，位置 23.8%，VWAP 76.07；30d +7.17%，区间 63.96-83.99，位置 53.5%，VWAP 74.92
- 1h结构：阴线 O:74.96 H:74.96 L:74.66 C:74.68，VWAP下方，VWAP 74.80
- 4h结构：阴线 O:74.92 H:75.14 L:74.66 C:74.68，VWAP下方，VWAP 76.51
- 1d结构：阴线 O:75.00 H:75.41 L:74.64 C:74.68，VWAP上方，VWAP 73.42
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $327M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 67.21 / 82.14；25x 多/空 71.69 / 77.66；50x 多/空 73.18 / 76.17。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 74.66 / ask 74.66，spread 0.0010 (0.0013%)，top20 bid 11.7K / ask 7.69K，买盘更厚，短线回踩承接较好
- 支撑：74.64-74.66
- 压力：75.41-75.57
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 75.41-75.57 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 75.41-75.57 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

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
