# 每日加密交易决策

生成时间：2026/10/23 14:06:19 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 50 / Neutral；ETH gas 0.0714 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Fri, 23 Oct 2026 05:15:14 +0000)
- Cointelegraph: Ethereum delays Glamsterdam Hoodi testnet launch over security risks (Fri, 23 Oct 2026 05:09:41 +0000)
- Cointelegraph: Bitcoin Core changes security policy as AI makes bugs easier to find (Fri, 23 Oct 2026 04:34:14 +0000)
- Cointelegraph: Switzerland approves first spot Bitcoin ETF for retail investors (Fri, 23 Oct 2026 00:59:35 +0000)
- Cointelegraph: New DeepSeek ban in US, Swiss-Asia crypto ties deepen: Asia Express (Thu, 22 Oct 2026 22:50:22 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：81,818，24h 相对 prevDay：-1.16%
- 成交/持仓：24h notional volume $3.07B，base volume 37.6K BTC，Hyperliquid OI 43.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d +0.28%，区间 80,644-84,850，位置 27.9%，VWAP 82,318；30d -3.02%，区间 79,732-87,235，位置 27.8%，VWAP 83,192
- 1h结构：阴线 O:81,850 H:81,858 L:81,750 C:81,816，VWAP下方，VWAP 82,282
- 4h结构：阴线 O:81,900 H:81,900 L:81,532 C:81,817，VWAP下方，VWAP 82,190
- 1d结构：阳线 O:81,410 H:82,051 L:81,113 C:81,817，VWAP下方，VWAP 82,298
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.57B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 73,636 / 90,000；25x 多/空 78,545 / 85,091；50x 多/空 80,182 / 83,454。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 81,816 / ask 81,817，spread 1.0000 (0.0012%)，top20 bid 68.50 / ask 56.76，买卖盘接近平衡
- 支撑：81,619-81,750
- 压力：82,051-82,264
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 82,051-82,264 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 82,051-82,264 且 short liquidation 扩大。

## 5. ETH

- 实时价格：2,402，24h 相对 prevDay：-1.50%
- 成交/持仓：24h notional volume $911M，base volume 380K ETH，Hyperliquid OI 1.09M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -0.83%，区间 2,327-2,525，位置 38.1%，VWAP 2,421；30d -10.52%，区间 2,314-2,779，位置 18.9%，VWAP 2,546
- 1h结构：阴线 O:2,404 H:2,404 L:2,399 C:2,402，VWAP下方，VWAP 2,418
- 4h结构：阴线 O:2,410 H:2,410 L:2,391 C:2,402，VWAP下方，VWAP 2,422
- 1d结构：阳线 O:2,388 H:2,417 L:2,380 C:2,402，VWAP下方，VWAP 2,556
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.62B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,162 / 2,642；25x 多/空 2,306 / 2,498；50x 多/空 2,354 / 2,450。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,402 / ask 2,402，spread 0.1000 (0.0042%)，top20 bid 4.33K / ask 4.79K，买卖盘接近平衡
- 支撑：2,393-2,399
- 压力：2,417-2,430
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 2,417-2,430 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 2,417-2,430 且 short liquidation 扩大。

## 6. SOL

- 实时价格：104.38，24h 相对 prevDay：-0.54%
- 成交/持仓：24h notional volume $155M，base volume 1.49M SOL，Hyperliquid OI 5.47M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -<0.1%，区间 100.34-109.19，位置 45.4%，VWAP 105.18；30d -9.27%，区间 100.34-124.95，位置 16.3%，VWAP 112.47
- 1h结构：阴线 O:104.43 H:104.47 L:104.24 C:104.36，VWAP下方，VWAP 105.16
- 4h结构：阳线 O:104.21 H:104.57 L:103.80 C:104.36，VWAP下方，VWAP 104.96
- 1d结构：阳线 O:103.65 H:104.80 L:103.43 C:104.36，VWAP下方，VWAP 111.43
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $571M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 93.94 / 114.81；25x 多/空 100.20 / 108.55；50x 多/空 102.29 / 106.46。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 104.38 / ask 104.39，spread 0.0100 (0.0096%)，top20 bid 52.0K / ask 50.7K，买卖盘接近平衡
- 支撑：103.96-104.24
- 压力：104.80-105.23
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 104.80-105.23 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 104.80-105.23 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZRO |95.7 |-5.11% |$16.7M |$70.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |94.8 |-4.81% |$97.2M |$140M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |94.5 |-5.70% |$81.8M |$99.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |94.2 |-5.73% |$30.2M |$77.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |90.5 |-6.25% |$36.8M |$126M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |89.8 |+2.13% |$22.2M |$37.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |89.2 |-3.33% |$457M |$549M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |88.4 |-1.51% |$61.1M |$227M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

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
