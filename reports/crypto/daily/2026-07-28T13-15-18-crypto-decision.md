# 每日加密交易决策

生成时间：2026/07/28 21:15:18 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 29 / Fear；ETH gas 0.1286 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Ethereum, Solana led crypto hack losses in H1 2026: Blockaid (Tue, 28 Jul 2026 13:00:00 +0000)
- Decrypt: Morning Minute: Strategy Chooses Cash, STRC Over BTC (Tue, 28 Jul 2026 11:57:58 +0000)
- Cointelegraph: Lido upgrade aims to slash Ethereum’s validator count by one-third (Tue, 28 Jul 2026 09:14:45 +0000)
- Cointelegraph: Apple faces lawsuit over alleged $1.8M Bitcoin wallet app losses (Tue, 28 Jul 2026 07:40:40 +0000)
- Cointelegraph: Bitmine keeps buying Ether as ETH outperforms Bitcoin (Mon, 27 Jul 2026 19:22:59 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,476，24h 相对 prevDay：-2.26%
- 成交/持仓：24h notional volume $2.17B，base volume 33.7K BTC，Hyperliquid OI 36.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -4.58%，区间 63,026-66,714，位置 12.3%，VWAP 64,647；30d +6.60%，区间 57,768-66,918，位置 62.4%，VWAP 63,273
- 1h结构：阴线 O:63,543 H:63,565 L:63,460 C:63,478，VWAP下方，VWAP 64,305
- 4h结构：阳线 O:63,440 H:63,567 L:63,363 C:63,478，VWAP下方，VWAP 65,135
- 1d结构：阴线 O:63,737 H:63,804 L:63,026 C:63,478，VWAP上方，VWAP 62,764
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.33B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,128 / 69,824；25x 多/空 60,937 / 66,015；50x 多/空 62,206 / 64,746。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,478 / ask 63,479，spread 1.0000 (0.0016%)，top20 bid 158.70 / ask 35.06，买盘更厚，短线回踩承接较好
- 支撑：63,377-63,460
- 压力：63,804-65,059
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 63,804-65,059 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 63,804-65,059 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,890，24h 相对 prevDay：-3.23%
- 成交/持仓：24h notional volume $978M，base volume 511K ETH，Hyperliquid OI 1.04M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -2.04%，区间 1,847-1,981，位置 32.3%，VWAP 1,897；30d +20.32%，区间 1,549-1,981，位置 79.0%，VWAP 1,804
- 1h结构：阴线 O:1,892 H:1,895 L:1,889 C:1,890，VWAP下方，VWAP 1,921
- 4h结构：阳线 O:1,876 H:1,895 L:1,874 C:1,890，VWAP下方，VWAP 1,909
- 1d结构：阴线 O:1,892 H:1,895 L:1,865 C:1,890，VWAP上方，VWAP 1,757
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.97B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,701 / 2,079；25x 多/空 1,815 / 1,966；50x 多/空 1,852 / 1,928。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,890 / ask 1,890，spread 0.1000 (0.0053%)，top20 bid 5.84K / ask 5.96K，买卖盘接近平衡
- 支撑：1,879-1,889
- 压力：1,895-1,955
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,895-1,955 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,895-1,955 且 short liquidation 扩大。

## 6. SOL

- 实时价格：73.22，24h 相对 prevDay：-4.41%
- 成交/持仓：24h notional volume $164M，base volume 2.19M SOL，Hyperliquid OI 4.38M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -6.24%，区间 72.78-78.84，位置 7.3%，VWAP 75.35；30d +2.60%，区间 70.32-83.99，位置 21.2%，VWAP 77.64
- 1h结构：阴线 O:73.34 H:73.40 L:73.18 C:73.22，VWAP下方，VWAP 75.03
- 4h结构：阳线 O:73.15 H:73.41 L:73.09 C:73.22，VWAP下方，VWAP 76.02
- 1d结构：阴线 O:74.15 H:74.25 L:72.78 C:73.22，VWAP下方，VWAP 74.92
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $321M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 65.90 / 80.55；25x 多/空 70.30 / 76.15；50x 多/空 71.76 / 74.69。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 73.22 / ask 73.22，spread 0.0010 (0.0014%)，top20 bid 6.07K / ask 11.6K，卖盘更厚，反弹上方抛压更明显
- 支撑：73.15-73.18
- 压力：74.25-76.19
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 74.25-76.19 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 74.25-76.19 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| HYPE |94.6 |-8.79% |$392M |$1.24B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.6 |-7.65% |$64.7M |$231M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |91.2 |-9.05% |$15.8M |$66.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |89.4 |-6.90% |$44.7M |$53.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |88.7 |-9.58% |$5.06M |$31.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |88.5 |-8.45% |$9.75M |$23.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |88.3 |-4.44% |$42.3M |$80.5M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |85.6 |-6.99% |$10.3M |$31.1M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Zcash Miner Fortitude Powers Up Nebraska Facility as It Eyes Public Listing (Tue, 28 Jul 2026 11:31:03 +0000)

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
