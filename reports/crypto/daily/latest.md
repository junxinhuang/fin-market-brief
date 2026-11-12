# 每日加密交易决策

生成时间：2026/11/13 04:50:39 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 28 / Fear；ETH gas 0.0858 gwei，链上交易很便宜，gas 本身不是风险源。
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

宏观/新闻结论：RSS 未抓到足够明确的宏观催化，今日更多依赖市场结构。
预测市场入口：接口入口：https://gamma-api.polymarket.com/markets?active=true&closed=false&search=<query>；当前环境偶发超时，查询时需重试。。

主要新闻：
- Decrypt: Why the Path to Quantum Resistance Runs Uphill for Bitcoin Wallet Makers (Thu, 12 Nov 2026 20:36:03 +0000)
- Cointelegraph: DTCC Plans Solana Expansion as Wallet Rules Limit Access (Thu, 12 Nov 2026 20:07:41 +0000)
- Cointelegraph: Bitcoin slides toward $71K as Nvidia stock tumbles after Huang steps down (Thu, 12 Nov 2026 15:46:06 +0000)
- Decrypt: SoFi Brings Its Bank-Issued Stablecoin to Polygon’s Payments Stack (Thu, 12 Nov 2026 14:01:02 +0000)
- Cointelegraph: Are Alt-L1s over? Security, costs drive smaller chains to Ethereum (Thu, 12 Nov 2026 13:30:00 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：71,560，24h 相对 prevDay：-3.90%
- 成交/持仓：24h notional volume $3.46B，base volume 47.6K BTC，Hyperliquid OI 38.6K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -5.93%，区间 71,227-76,400，位置 6.5%，VWAP 74,137；30d -13.92%，区间 71,227-84,850，位置 2.5%，VWAP 78,668
- 1h结构：阴线 O:71,667 H:71,675 L:71,381 C:71,562，VWAP下方，VWAP 72,983
- 4h结构：阴线 O:71,667 H:71,675 L:71,381 C:71,563，VWAP下方，VWAP 74,832
- 1d结构：阴线 O:73,980 H:74,180 L:71,227 C:71,563，VWAP下方，VWAP 79,638
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.77B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 64,404 / 78,716；25x 多/空 68,698 / 74,422；50x 多/空 70,129 / 72,991。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 71,562 / ask 71,563，spread 1.0000 (0.0014%)，top20 bid 60.07 / ask 103.08，卖盘更厚，反弹上方抛压更明显
- 支撑：71,401-71,555
- 压力：73,661-74,180
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 73,661-74,180 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 73,661-74,180 且 short liquidation 扩大。

## 5. ETH

- 实时价格：2,020，24h 相对 prevDay：-2.80%
- 成交/持仓：24h notional volume $1.29B，base volume 636K ETH，Hyperliquid OI 731K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -9.71%，区间 1,983-2,253，位置 13.9%，VWAP 2,096；30d -19.09%，区间 1,983-2,530，位置 6.9%，VWAP 2,292
- 1h结构：阳线 O:2,016 H:2,022 L:2,013 C:2,020，VWAP下方，VWAP 2,034
- 4h结构：阳线 O:2,016 H:2,022 L:2,013 C:2,020，VWAP下方，VWAP 2,134
- 1d结构：阴线 O:2,055 H:2,066 L:1,983 C:2,020，VWAP下方，VWAP 2,354
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.48B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,818 / 2,222；25x 多/空 1,939 / 2,101；50x 多/空 1,980 / 2,061。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,020 / ask 2,020，spread 0.1000 (0.0049%)，top20 bid 7.04K / ask 6.22K，买卖盘接近平衡
- 支撑：2,013-2,018
- 压力：2,052-2,066
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 2,052-2,066 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 2,052-2,066 且 short liquidation 扩大。

## 6. SOL

- 实时价格：81.53，24h 相对 prevDay：-3.95%
- 成交/持仓：24h notional volume $207M，base volume 2.52M SOL，Hyperliquid OI 4.14M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -8.69%，区间 80.40-91.57，位置 10.1%，VWAP 85.55；30d -23.65%，区间 80.40-109.19，位置 3.9%，VWAP 96.07
- 1h结构：阴线 O:81.59 H:81.68 L:81.34 C:81.53，VWAP下方，VWAP 82.83
- 4h结构：阴线 O:81.59 H:81.68 L:81.34 C:81.53，VWAP下方，VWAP 87.01
- 1d结构：阴线 O:83.23 H:83.86 L:80.40 C:81.53，VWAP下方，VWAP 99.67
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $338M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 73.38 / 89.68；25x 多/空 78.27 / 84.79；50x 多/空 79.90 / 83.16。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 81.52 / ask 81.52，spread 0.0010 (0.0012%)，top20 bid 4.72K / ask 6.28K，卖盘更厚，反弹上方抛压更明显
- 支撑：81.24-81.34
- 压力：83.48-83.86
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 83.48-83.86 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 83.48-83.86 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| XMR |98.7 |-7.87% |$59.3M |$135M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| UNI |96.4 |-7.53% |$25.7M |$50.4M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |95.4 |-7.11% |$60.8M |$136M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |93.8 |-5.15% |$32.1M |$43.7M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.7 |-3.68% |$356M |$381M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| GRAM |92.7 |-5.26% |$16.2M |$18.5M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |91.9 |-3.75% |$21.2M |$108M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |91.3 |-5.44% |$6.66M |$35.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

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
