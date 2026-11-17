# 每日加密交易决策

生成时间：2026/11/18 05:48:26 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 12 / Extreme Fear；ETH gas 0.1169 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Bitcoin Investors Are Capitulating—That’s Historically Been a Bottom Signal (Tue, 17 Nov 2026 20:36:03 +0000)
- Decrypt: Ethereum Devs Weigh a Scaling Upgrade That Could Break 15,000 Apps (Tue, 17 Nov 2026 19:26:02 +0000)
- Decrypt: Binance Hack Wallets Move $137 Million in Ethereum After Two Weeks of Silence (Tue, 17 Nov 2026 17:18:41 +0000)
- Cointelegraph: Bitcoin drops 2.5% as Nvidia stock risks new 5-month lows into Q3 earnings (Tue, 17 Nov 2026 16:39:43 +0000)
- Decrypt: Standard Life Chair Wants Tokenized Gilts to Open UK Government Bonds to Retail Savers (Tue, 17 Nov 2026 15:30:37 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,319，24h 相对 prevDay：-1.48%
- 成交/持仓：24h notional volume $3.74B，base volume 57.9K BTC，Hyperliquid OI 37.6K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -12.81%，区间 61,970-74,778，位置 18.3%，VWAP 66,819；30d -21.64%，区间 61,970-84,850，位置 10.3%，VWAP 74,284
- 1h结构：阳线 O:63,964 H:64,645 L:63,925 C:64,313，VWAP下方，VWAP 64,531
- 4h结构：阳线 O:63,727 H:64,645 L:63,666 C:64,313，VWAP下方，VWAP 67,793
- 1d结构：阴线 O:64,858 H:65,444 L:63,320 C:64,320，VWAP下方，VWAP 75,899
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.42B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,887 / 70,751；25x 多/空 61,746 / 66,892；50x 多/空 63,033 / 65,605。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 64,313 / ask 64,314，spread 1.0000 (0.0016%)，top20 bid 196.28 / ask 74.76，买盘更厚，短线回踩承接较好
- 支撑：64,040-64,255
- 压力：65,175-65,444
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 65,175-65,444 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 65,175-65,444 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,806，24h 相对 prevDay：-1.18%
- 成交/持仓：24h notional volume $856M，base volume 475K ETH，Hyperliquid OI 629K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -12.01%，区间 1,710-2,103，位置 24.3%，VWAP 1,874；30d -25.05%，区间 1,710-2,525，位置 11.7%，VWAP 2,158
- 1h结构：阳线 O:1,800 H:1,817 L:1,796 C:1,806，VWAP下方，VWAP 1,810
- 4h结构：阳线 O:1,790 H:1,817 L:1,788 C:1,806，VWAP下方，VWAP 1,908
- 1d结构：阴线 O:1,820 H:1,843 L:1,750 C:1,806，VWAP下方，VWAP 2,239
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.13B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,625 / 1,986；25x 多/空 1,733 / 1,878；50x 多/空 1,770 / 1,842。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,806 / ask 1,806，spread 0.1000 (0.0055%)，top20 bid 7.19K / ask 7.57K，买卖盘接近平衡
- 支撑：1,788-1,796
- 压力：1,833-1,843
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转；7d趋势仍弱，反弹需要更多确认
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,833-1,843 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,833-1,843 且 short liquidation 扩大。

## 6. SOL

- 实时价格：73.49，24h 相对 prevDay：+2.23%
- 成交/持仓：24h notional volume $309M，base volume 4.25M SOL，Hyperliquid OI 4.41M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -11.77%，区间 67.38-85.79，位置 33.2%，VWAP 74.38；30d -29.38%，区间 67.38-109.19，位置 14.6%，VWAP 87.44
- 1h结构：阳线 O:73.08 H:74.00 L:72.95 C:73.49，VWAP上方，VWAP 72.19
- 4h结构：阳线 O:72.80 H:74.00 L:72.65 C:73.49，VWAP下方，VWAP 75.65
- 1d结构：阳线 O:71.53 H:74.30 L:71.04 C:73.49，VWAP下方，VWAP 92.03
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $324M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 66.14 / 80.83；25x 多/空 70.55 / 76.43；50x 多/空 72.02 / 74.96。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 73.49 / ask 73.50，spread 0.0010 (0.0014%)，top20 bid 3.70K / ask 9.88K，卖盘更厚，反弹上方抛压更明显
- 支撑：73.08-73.36
- 压力：74.10-74.30
- 判断：震荡。24h 价格走强；价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 74.10-74.30 或跌破 73.08-73.36 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |95.1 |-4.34% |$30.0M |$37.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |94.7 |+2.52% |$55.8M |$95.9M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.8 |+3.19% |$329M |$334M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |92.3 |-3.70% |$7.68M |$37.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |92.2 |+2.98% |$52.3M |$116M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |90.7 |-2.87% |$10.9M |$23.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |89.5 |+1.89% |$37.8M |$88.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |89.0 |+2.34% |$12.2M |$41.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

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
