# 每日加密交易决策

生成时间：2026/08/14 11:34:35 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 29 / Fear；ETH gas 0.0599 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 0%-20%，单笔 2%-5%，中间位置不开重仓。
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
- Cointelegraph: Ethereum Foundation pivots away from Poseidon in post-quantum plan (Thu, 13 Aug 2026 23:34:56 +0000)
- Decrypt: 'Bitcoin Is Burning': Red Team Turns to Chinese AI to Find Flaws (Thu, 13 Aug 2026 22:36:07 +0000)
- Decrypt: Solana Can Be the 'Everything Chain' as Crypto Apps Go Mainstream: 6th Man Ventures Co-Founder (Thu, 13 Aug 2026 21:16:05 +0000)
- Decrypt: Google and OpenAI Debut Super Fast AI Models—Gemini 3.7 Flash Is Out, But GPT-5.6 Sol Ultrafast Is Invite-Only (Thu, 13 Aug 2026 19:11:03 +0000)
- Decrypt: Bitcoin Companies Want Help From AI Labs to Guard Against Hackers (Thu, 13 Aug 2026 17:11:04 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,431，24h 相对 prevDay：-0.18%
- 成交/持仓：24h notional volume $1.67B，base volume 26.3K BTC，Hyperliquid OI 40.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -2.24%，区间 62,816-65,475，位置 23.1%，VWAP 63,785；30d -2.02%，区间 62,237-66,918，位置 25.5%，VWAP 64,301
- 1h结构：阴线 O:63,470 H:63,582 L:63,417 C:63,431，VWAP下方，VWAP 63,463
- 4h结构：阴线 O:63,479 H:63,615 L:63,411 C:63,431，VWAP下方，VWAP 64,132
- 1d结构：阴线 O:63,479 H:63,615 L:63,411 C:63,431，VWAP下方，VWAP 64,108
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.57B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,088 / 69,774；25x 多/空 60,894 / 65,968；50x 多/空 62,162 / 64,700。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,431 / ask 63,432，spread 1.0000 (0.0016%)，top20 bid 229.70 / ask 43.70，买盘更厚，短线回踩承接较好
- 支撑：63,411-63,417
- 压力：63,889-63,978
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 63,889-63,978 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 63,889-63,978 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,886，24h 相对 prevDay：+0.16%
- 成交/持仓：24h notional volume $706M，base volume 374K ETH，Hyperliquid OI 873K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d -1.44%，区间 1,853-1,938，位置 38.7%，VWAP 1,884；30d -1.70%，区间 1,803-1,981，位置 46.3%，VWAP 1,891
- 1h结构：阴线 O:1,886 H:1,888 L:1,883 C:1,886，VWAP上方，VWAP 1,884
- 4h结构：阳线 O:1,885 H:1,891 L:1,883 C:1,886，VWAP下方，VWAP 1,897
- 1d结构：阳线 O:1,885 H:1,891 L:1,883 C:1,886，VWAP上方，VWAP 1,865
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.65B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,697 / 2,074；25x 多/空 1,810 / 1,961；50x 多/空 1,848 / 1,923。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,885 / ask 1,886，spread 0.1000 (0.0053%)，top20 bid 9.43K / ask 8.43K，买卖盘接近平衡
- 支撑：1,885-1,885
- 压力：1,897-1,900
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,897-1,900 或跌破 1,885-1,885 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：75.88，24h 相对 prevDay：-0.42%
- 成交/持仓：24h notional volume $79.5M，base volume 1.05M SOL，Hyperliquid OI 5.02M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +3.04%，区间 73.56-77.82，位置 54.4%，VWAP 76.05；30d -1.77%，区间 70.55-78.86，位置 64.1%，VWAP 74.97
- 1h结构：阴线 O:76.02 H:76.04 L:75.78 C:75.88，VWAP下方，VWAP 75.97
- 4h结构：阴线 O:76.23 H:76.29 L:75.78 C:75.88，VWAP上方，VWAP 75.48
- 1d结构：阴线 O:76.23 H:76.29 L:75.78 C:75.88，VWAP下方，VWAP 76.40
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $381M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 68.29 / 83.46；25x 多/空 72.84 / 78.91；50x 多/空 74.36 / 77.39。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 75.88 / ask 75.88，spread 0.0010 (0.0013%)，top20 bid 9.78K / ask 4.66K，买盘更厚，短线回踩承接较好
- 支撑：75.65-75.78
- 压力：76.43-76.60
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 76.43-76.60 或跌破 75.65-75.78 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |96.6 |+6.21% |$37.1M |$103M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| KAITO |93.7 |-5.49% |$8.24M |$10.4M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| LIT |93.4 |-6.92% |$15.8M |$81.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |92.4 |+6.46% |$7.59M |$26.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ETHFI |89.5 |+13.38% |$8.83M |$9.74M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CASHCAT |88.8 |-7.30% |$4.85M |$20.7M |+<0.1% |不碰：流动性/OI 偏低 |
| ENA |88.1 |-2.31% |$4.76M |$19.9M |-<0.1% |不碰：流动性/OI 偏低 |
| NEAR |87.8 |-2.34% |$4.99M |$43.8M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

## 8. 仓位与执行

- 今日总仓位上限：总仓位 0%-20%，单笔 2%-5%，中间位置不开重仓。
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
