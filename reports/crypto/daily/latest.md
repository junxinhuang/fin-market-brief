# 每日加密交易决策

生成时间：2026/10/28 14:55:27 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-on。美股/信用/美元组合偏支持风险资产，crypto 多头信号质量可上调一级，但仍需合约数据确认。
- 情绪代理：Fear & Greed 51 / Neutral；ETH gas 0.0558 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Wed, 28 Oct 2026 06:00:00 +0000)
- Cointelegraph: VanEck launches diversified ETF combining stocks, bonds and Bitcoin exposure (Tue, 27 Oct 2026 21:28:22 +0000)
- Cointelegraph: Quantum fears already limiting Bitcoin’s growth, Stacks founder says (Tue, 27 Oct 2026 20:33:19 +0000)
- Decrypt: Bitcoin Wallet Maker Keystone Pulls Devices as Stolen Key Opens Door to Fakes (Tue, 27 Oct 2026 18:16:02 +0000)
- Decrypt: OpenAI Proves ETH Is False, and Crypto Twitter Has Questions (Tue, 27 Oct 2026 16:53:13 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：80,843，24h 相对 prevDay：+1.50%
- 成交/持仓：24h notional volume $1.74B，base volume 21.6K BTC，Hyperliquid OI 43.1K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d -3.81%，区间 79,184-84,335，位置 32.2%，VWAP 80,840；30d -3.13%，区间 79,184-87,235，位置 20.6%，VWAP 82,626
- 1h结构：阴线 O:80,876 H:80,982 L:80,839 C:80,843，VWAP上方，VWAP 80,335
- 4h结构：阴线 O:81,106 H:81,126 L:80,839 C:80,843，VWAP下方，VWAP 81,446
- 1d结构：阴线 O:80,889 H:81,205 L:80,573 C:80,843，VWAP下方，VWAP 83,074
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.49B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 72,759 / 88,927；25x 多/空 77,609 / 84,077；50x 多/空 79,226 / 82,460。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 80,842 / ask 80,843，spread 1.0000 (0.0012%)，top20 bid 127.46 / ask 23.98，买盘更厚，短线回踩承接较好
- 支撑：80,832-80,839
- 压力：81,205-81,281
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 81,205-81,281 或跌破 80,832-80,839 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：2,352，24h 相对 prevDay：+2.04%
- 成交/持仓：24h notional volume $671M，base volume 288K ETH，Hyperliquid OI 1.12M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -4.91%，区间 2,282-2,482，位置 35.0%，VWAP 2,356；30d -12.56%，区间 2,282-2,779，位置 14.1%，VWAP 2,500
- 1h结构：阳线 O:2,351 H:2,357 L:2,351 C:2,352，VWAP上方，VWAP 2,330
- 4h结构：阴线 O:2,360 H:2,360 L:2,351 C:2,352，VWAP下方，VWAP 2,381
- 1d结构：阳线 O:2,350 H:2,369 L:2,340 C:2,352，VWAP下方，VWAP 2,557
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.63B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,116 / 2,587；25x 多/空 2,257 / 2,446；50x 多/空 2,304 / 2,399。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,352 / ask 2,352，spread 0.1000 (0.0043%)，top20 bid 5.40K / ask 5.02K，买卖盘接近平衡
- 支撑：2,351-2,351
- 压力：2,367-2,369
- 判断：震荡。24h 价格走强；价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 2,367-2,369 或跌破 2,351-2,351 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：101.96，24h 相对 prevDay：+2.43%
- 成交/持仓：24h notional volume $90.2M，base volume 895K SOL，Hyperliquid OI 5.61M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -4.66%，区间 98.64-107.46，位置 37.7%，VWAP 102.21；30d -14.20%，区间 98.64-123.74，位置 13.2%，VWAP 109.27
- 1h结构：阳线 O:101.78 H:102.20 L:101.78 C:101.96，VWAP上方，VWAP 100.72
- 4h结构：阴线 O:101.99 H:102.22 L:101.68 C:101.96，VWAP下方，VWAP 103.62
- 1d结构：阳线 O:101.32 H:102.39 L:101.02 C:101.96，VWAP下方，VWAP 112.18
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $572M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 91.76 / 112.16；25x 多/空 97.88 / 106.04；50x 多/空 99.92 / 104.00。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 101.96 / ask 101.97，spread 0.0100 (0.0098%)，top20 bid 75.0K / ask 62.8K，买卖盘接近平衡
- 支撑：101.68-101.78
- 压力：102.22-102.39
- 判断：震荡。24h 价格走强；价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 102.22-102.39 或跌破 101.68-101.78 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| NEAR |96.1 |+6.35% |$104M |$276M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |95.7 |+7.13% |$263M |$700M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |93.7 |+10.13% |$22.0M |$45.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |93.4 |+4.85% |$320M |$1.69B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |91.3 |+4.22% |$34.8M |$117M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PONS |91.1 |+20.52% |$14.9M |$25.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |90.7 |+6.97% |$6.76M |$69.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |90.4 |+2.93% |$30.9M |$119M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: McDonald's McRib Doesn't Actually Boost Bitcoin's Price, Sorry Everyone (Tue, 27 Oct 2026 14:31:02 +0000)
- Cointelegraph: Zcash co-founder calls to stop funding ‘over $125M’ grants program (Tue, 27 Oct 2026 10:00:31 +0000)

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
