# 每日加密交易决策

生成时间：2026/11/06 15:57:50 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 28 / Fear；ETH gas 0.1497 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Fri, 06 Nov 2026 06:04:41 +0000)
- Cointelegraph: Core Scientific to quit Bitcoin mining by year-end as AI business surges (Fri, 06 Nov 2026 00:19:49 +0000)
- Cointelegraph: American Bitcoin’s $126M profit masks mining pressure as rivals turn to AI (Thu, 05 Nov 2026 22:43:18 +0000)
- Decrypt: Bitcoin Fixes This? Paraguay President Resigns After Bank Lockout Hits 60% of Country (Thu, 05 Nov 2026 22:16:03 +0000)
- Decrypt: Mercado Bitcoin Said Its Hack Was Contained, But Blockchain Data Tells a Different Story (Thu, 05 Nov 2026 20:16:03 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：缺失，24h 相对 prevDay：+0.00%
- 成交/持仓：24h notional volume 缺失，base volume 缺失 BTC，Hyperliquid OI 缺失 BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：缺失/未验证；7d -2.17%，区间 75,189-81,177，位置 7.8%，VWAP 77,958；30d -9.18%，区间 75,189-84,850，位置 4.8%，VWAP 80,377
- 1h结构：阴线 O:75,696 H:75,822 L:75,292 C:75,651，VWAP下方，VWAP 77,453
- 4h结构：阴线 O:75,891 H:75,899 L:75,292 C:75,657，VWAP下方，VWAP 77,921
- 1d结构：阴线 O:76,078 H:76,400 L:75,292 C:75,657，VWAP下方，VWAP 81,285
- funding/premium：funding 缺失，premium 缺失
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $0；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 0.00 / 0.00；25x 多/空 0.00 / 0.00；50x 多/空 0.00 / 0.00。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 75,656 / ask 75,657，spread 1.0000 (0.0013%)，top20 bid 93.81 / ask 65.55，买盘更厚，短线回踩承接较好
- 支撑：缺失
- 压力：缺失
- 判断：震荡。信号不足，等待确认。
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 缺失 或跌破 缺失 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：2,230，24h 相对 prevDay：-7.71%
- 成交/持仓：24h notional volume $1.52B，base volume 665K ETH，Hyperliquid OI 969K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -0.60%，区间 2,205-2,450，位置 10.1%，VWAP 2,308；30d -13.34%，区间 2,173-2,587，位置 13.8%，VWAP 2,379
- 1h结构：阳线 O:2,228 H:2,235 L:2,213 C:2,230，VWAP下方，VWAP 2,306
- 4h结构：阴线 O:2,236 H:2,236 L:2,213 C:2,230，VWAP下方，VWAP 2,285
- 1d结构：阴线 O:2,238 H:2,249 L:2,213 C:2,230，VWAP下方，VWAP 2,449
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.16B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,007 / 2,453；25x 多/空 2,141 / 2,319；50x 多/空 2,185 / 2,274。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,230 / ask 2,230，spread 0.1000 (0.0045%)，top20 bid 3.87K / ask 4.06K，买卖盘接近平衡
- 支撑：2,227-2,229
- 压力：2,286-2,427
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 2,286-2,427 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 2,286-2,427 且 short liquidation 扩大。

## 6. SOL

- 实时价格：89.69，24h 相对 prevDay：-6.44%
- 成交/持仓：24h notional volume $366M，base volume 4.01M SOL，Hyperliquid OI 5.38M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -6.84%，区间 88.24-98.16，位置 14.6%，VWAP 92.74；30d -22.84%，区间 88.24-116.77，位置 5.1%，VWAP 101.09
- 1h结构：阳线 O:89.59 H:89.80 L:89.10 C:89.69，VWAP下方，VWAP 91.93
- 4h结构：阴线 O:89.73 H:90.02 L:88.91 C:89.69，VWAP下方，VWAP 94.14
- 1d结构：阳线 O:89.29 H:90.55 L:88.91 C:89.69，VWAP下方，VWAP 105.44
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $483M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 80.72 / 98.65；25x 多/空 86.10 / 93.27；50x 多/空 87.89 / 91.48。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 89.70 / ask 89.70，spread 0.0010 (0.0011%)，top20 bid 3.84K / ask 5.22K，卖盘更厚，反弹上方抛压更明显
- 支撑：89.53-89.64
- 压力：91.55-97.06
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 91.55-97.06 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 91.55-97.06 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| WLD |94.5 |-8.35% |$51.8M |$43.7M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |94.2 |-9.84% |$103M |$204M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |94.1 |-8.53% |$35.7M |$69.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |93.9 |-8.09% |$112M |$160M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |92.5 |-6.95% |$858M |$1.72B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |92.3 |-8.20% |$60.1M |$83.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AERO |91.6 |-8.95% |$6.98M |$23.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |91.3 |-6.97% |$37.0M |$70.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

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
