# 每日加密交易决策

生成时间：2026/07/31 21:16:12 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 25 / Extreme Fear；ETH gas 0.1546 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Morning Minute: Coinbase Posts Surprise Loss as Crypto Trading Dries Up (Fri, 31 Jul 2026 12:11:17 +0000)
- Decrypt: Crypto Kiosk Scams Cost Texans $57M as Lawmakers Weigh a Ban (Fri, 31 Jul 2026 11:13:58 +0000)
- Decrypt: $38M in Bitcoin Drained by Coldcard Key Flaw Its Maker Thinks AI Found (Fri, 31 Jul 2026 09:02:01 +0000)
- Cointelegraph: RWA perpetual futures volume nears Bitcoin on Hyperliquid, Binance (Fri, 31 Jul 2026 08:29:51 +0000)
- Cointelegraph: Bitcoin ETFs post $233M inflows, pushing week back into the green (Fri, 31 Jul 2026 06:46:23 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,741，24h 相对 prevDay：-1.65%
- 成交/持仓：24h notional volume $1.57B，base volume 24.4K BTC，Hyperliquid OI 34.6K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -0.60%，区间 62,703-65,715，位置 34.4%，VWAP 64,118；30d +6.21%，区间 59,561-66,918，位置 56.8%，VWAP 63,976
- 1h结构：阳线 O:63,729 H:63,756 L:63,677 C:63,739，VWAP下方，VWAP 64,390
- 4h结构：阴线 O:63,771 H:63,793 L:63,593 C:63,739，VWAP下方，VWAP 64,311
- 1d结构：阴线 O:64,755 H:65,385 L:63,582 C:63,739，VWAP上方，VWAP 62,820
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.21B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,367 / 70,115；25x 多/空 61,191 / 66,291；50x 多/空 62,466 / 65,016。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,739 / ask 63,740，spread 1.0000 (0.0016%)，top20 bid 73.81 / ask 58.68，买盘更厚，短线回踩承接较好
- 支撑：63,593-63,677
- 压力：64,951-65,385
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 64,951-65,385 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 64,951-65,385 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,886，24h 相对 prevDay：-2.03%
- 成交/持仓：24h notional volume $859M，base volume 450K ETH，Hyperliquid OI 953K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +1.34%，区间 1,850-1,981，位置 27.1%，VWAP 1,910；30d +17.20%，区间 1,597-1,981，位置 75.2%，VWAP 1,844
- 1h结构：阳线 O:1,882 H:1,886 L:1,882 C:1,886，VWAP下方，VWAP 1,909
- 4h结构：阳线 O:1,883 H:1,886 L:1,873 C:1,886，VWAP下方，VWAP 1,903
- 1d结构：阴线 O:1,918 H:1,935 L:1,873 C:1,886，VWAP上方，VWAP 1,774
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.80B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,697 / 2,074；25x 多/空 1,810 / 1,961；50x 多/空 1,848 / 1,923。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,886 / ask 1,886，spread 0.1000 (0.0053%)，top20 bid 8.03K / ask 6.10K，买盘更厚，短线回踩承接较好
- 支撑：1,882-1,884
- 压力：1,929-1,936
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 1,929-1,936 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 1,929-1,936 且 short liquidation 扩大。

## 6. SOL

- 实时价格：73.69，24h 相对 prevDay：-0.90%
- 成交/持仓：24h notional volume $169M，base volume 2.27M SOL，Hyperliquid OI 4.14M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -0.31%，区间 72.30-77.49，位置 26.9%，VWAP 74.31；30d -4.85%，区间 72.30-83.99，位置 12.0%，VWAP 77.72
- 1h结构：阳线 O:73.60 H:73.71 L:73.59 C:73.69，VWAP下方，VWAP 74.17
- 4h结构：阳线 O:73.54 H:73.71 L:73.37 C:73.69，VWAP下方，VWAP 74.42
- 1d结构：阴线 O:74.48 H:75.27 L:73.27 C:73.69，VWAP下方，VWAP 75.12
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $305M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 66.32 / 81.06；25x 多/空 70.74 / 76.64；50x 多/空 72.22 / 75.16。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 73.69 / ask 73.69，spread 0.0010 (0.0014%)，top20 bid 10.6K / ask 4.29K，买盘更厚，短线回踩承接较好
- 支撑：73.49-73.59
- 压力：74.94-75.27
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 74.94-75.27 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 74.94-75.27 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| HYPE |94.5 |+4.21% |$243M |$1.22B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |92.6 |-4.81% |$13.8M |$81.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |91.7 |-3.04% |$9.68M |$36.8M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |91.4 |+4.87% |$13.6M |$48.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |90.2 |-5.31% |$3.91M |$24.3M |+<0.1% |不碰：流动性/OI 偏低 |
| ONDO |89.3 |-4.43% |$7.90M |$16.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |88.8 |+3.26% |$28.7M |$23.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ADA |87.9 |+2.29% |$4.01M |$25.6M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: RWA perpetual futures volume nears Bitcoin on Hyperliquid, Binance (Fri, 31 Jul 2026 08:29:51 +0000)

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
