# 每日加密交易决策

生成时间：2026/10/25 00:39:24 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 51 / Neutral；ETH gas 0.1202 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 15%-30%，单笔 5%-8%，做空只在压力失败或跌破反抽失败后执行。
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
- Cointelegraph: Initia halts blockchain after exploit reportedly drains over $2.6M (Fri, 23 Oct 2026 18:39:02 +0000)
- Decrypt: Bitcoin Core Rewrites Its Security Policy for a World Where AI Finds Bugs in One Prompt (Fri, 23 Oct 2026 17:16:03 +0000)
- Decrypt: Bitcoin ETFs Bleed $636 Million as October Turns Red Again (Fri, 23 Oct 2026 15:50:41 +0000)
- Cointelegraph: Bitcoin seeks support above $81K as Brent crude oil hits highest level since March (Fri, 23 Oct 2026 15:39:17 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 23 Oct 2026 13:38:53 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：79,658，24h 相对 prevDay：-2.57%
- 成交/持仓：24h notional volume $2.32B，base volume 28.8K BTC，Hyperliquid OI 43.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -2.20%，区间 79,184-84,850，位置 8.3%，VWAP 81,937；30d -5.60%，区间 79,184-87,235，位置 5.9%，VWAP 82,972
- 1h结构：阴线 O:79,786 H:79,883 L:79,533 C:79,657，VWAP下方，VWAP 80,860
- 4h结构：阴线 O:79,786 H:79,883 L:79,533 C:79,657，VWAP下方，VWAP 81,974
- 1d结构：阴线 O:81,181 H:81,214 L:79,184 C:79,657，VWAP下方，VWAP 82,305
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.46B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 71,692 / 87,624；25x 多/空 76,472 / 82,844；50x 多/空 78,065 / 81,251。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 79,657 / ask 79,658，spread 1.0000 (0.0013%)，top20 bid 41.38 / ask 98.44，卖盘更厚，反弹上方抛压更明显
- 支撑：79,184-79,533
- 压力：81,086-81,502
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 81,086-81,502 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 81,086-81,502 且 short liquidation 扩大。

## 5. ETH

- 实时价格：2,297，24h 相对 prevDay：-4.68%
- 成交/持仓：24h notional volume $915M，base volume 389K ETH，Hyperliquid OI 1.11M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -4.35%，区间 2,282-2,525，位置 6.4%，VWAP 2,405；30d -14.52%，区间 2,282-2,779，位置 3.2%，VWAP 2,532
- 1h结构：阴线 O:2,305 H:2,313 L:2,294 C:2,297，VWAP下方，VWAP 2,358
- 4h结构：阴线 O:2,305 H:2,313 L:2,294 C:2,297，VWAP下方，VWAP 2,406
- 1d结构：阴线 O:2,387 H:2,389 L:2,282 C:2,297，VWAP下方，VWAP 2,551
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.56B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,067 / 2,527；25x 多/空 2,205 / 2,389；50x 多/空 2,251 / 2,343。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,297 / ask 2,297，spread 0.4000 (0.0174%)，top20 bid 4.40K / ask 5.42K，买卖盘接近平衡
- 支撑：2,282-2,294
- 压力：2,385-2,404
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 2,385-2,404 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 2,385-2,404 且 short liquidation 扩大。

## 6. SOL

- 实时价格：99.77，24h 相对 prevDay：-4.84%
- 成交/持仓：24h notional volume $202M，base volume 1.98M SOL，Hyperliquid OI 5.50M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -3.52%，区间 98.64-109.19，位置 10.8%，VWAP 104.43；30d -14.73%，区间 98.64-124.95，位置 4.3%，VWAP 111.83
- 1h结构：阳线 O:99.70 H:100.30 L:99.45 C:99.78，VWAP下方，VWAP 102.12
- 4h结构：阳线 O:99.70 H:100.30 L:99.45 C:99.78，VWAP下方，VWAP 104.41
- 1d结构：阴线 O:102.76 H:103.07 L:98.64 C:99.78，VWAP下方，VWAP 111.31
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $549M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 89.79 / 109.75；25x 多/空 95.78 / 103.76；50x 多/空 97.78 / 101.77。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 99.75 / ask 99.75，spread 0.0010 (0.0010%)，top20 bid 5.35K / ask 3.02K，买盘更厚，短线回踩承接较好
- 支撑：99.45-99.60
- 压力：102.81-104.07
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 102.81-104.07 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 102.81-104.07 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| FARTCOIN |94.7 |-17.96% |$23.3M |$23.8M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |94.0 |-9.37% |$69.8M |$109M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |93.3 |-12.33% |$26.0M |$35.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |92.5 |-11.34% |$47.8M |$85.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |91.6 |-8.84% |$313M |$508M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |90.3 |-8.20% |$17.1M |$107M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| STRK |90.2 |-11.59% |$10.8M |$33.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |88.3 |-9.08% |$9.85M |$51.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

## 8. 仓位与执行

- 今日总仓位上限：总仓位 15%-30%，单笔 5%-8%，做空只在压力失败或跌破反抽失败后执行。
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
