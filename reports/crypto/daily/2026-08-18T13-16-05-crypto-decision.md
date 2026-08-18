# 每日加密交易决策

生成时间：2026/08/18 21:16:05 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏多但降仓
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 41 / Fear；ETH gas 0.1337 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Tue, 18 Aug 2026 12:53:39 +0000)
- Decrypt: Morning Minute: PUMP Prints First Golden Cross as Revenue Hits Seven-Month High (Tue, 18 Aug 2026 12:37:02 +0000)
- Cointelegraph: Bitcoin price spike to $64.5K was ‘low-volume liquidity trap’: Analysis (Tue, 18 Aug 2026 09:31:15 +0000)
- Cointelegraph: Ethereum Foundation warns some tools may break with Glamsterdam upgrade (Tue, 18 Aug 2026 05:12:18 +0000)
- Decrypt: Solana’s Pump Token Leads Crypto Market Gainers as Chart Paints Golden Cross (Mon, 17 Aug 2026 18:29:56 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,158，24h 相对 prevDay：+0.99%
- 成交/持仓：24h notional volume $1.55B，base volume 24.2K BTC，Hyperliquid OI 41.8K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d +0.93%，区间 62,523-64,580，位置 79.2%，VWAP 63,624；30d -0.88%，区间 62,237-66,918，位置 40.9%，VWAP 64,259
- 1h结构：阴线 O:64,192 H:64,192 L:64,120 C:64,152，VWAP上方，VWAP 63,928
- 4h结构：阴线 O:64,324 H:64,324 L:64,120 C:64,152，VWAP上方，VWAP 63,610
- 1d结构：阴线 O:64,494 H:64,523 L:64,000 C:64,152，VWAP下方，VWAP 64,182
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.68B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,742 / 70,574；25x 多/空 61,592 / 66,724；50x 多/空 62,875 / 65,441。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 64,151 / ask 64,152，spread 1.0000 (0.0016%)，top20 bid 97.26 / ask 146.81，卖盘更厚，反弹上方抛压更明显
- 支撑：64,120-64,124
- 压力：64,523-64,580
- 判断：震荡。价格站在1h VWAP上方；价格站在4h VWAP上方；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 64,523-64,580 或跌破 64,120-64,124 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,897，24h 相对 prevDay：-<0.1%
- 成交/持仓：24h notional volume $567M，base volume 298K ETH，Hyperliquid OI 868K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +0.78%，区间 1,862-1,924，位置 55.6%，VWAP 1,888；30d +1.31%，区间 1,821-1,981，位置 47.5%，VWAP 1,895
- 1h结构：阴线 O:1,899 H:1,899 L:1,896 C:1,897，VWAP下方，VWAP 1,900
- 4h结构：阴线 O:1,902 H:1,903 L:1,896 C:1,897，VWAP上方，VWAP 1,886
- 1d结构：阴线 O:1,913 H:1,914 L:1,885 C:1,897，VWAP上方，VWAP 1,876
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.65B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,707 / 2,087；25x 多/空 1,821 / 1,973；50x 多/空 1,859 / 1,935。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,897 / ask 1,897，spread 0.1000 (0.0053%)，top20 bid 8.42K / ask 8.16K，买卖盘接近平衡
- 支撑：1,896-1,897
- 压力：1,914-1,918
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,914-1,918 或跌破 1,896-1,897 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：76.12，24h 相对 prevDay：+0.98%
- 成交/持仓：24h notional volume $90.8M，base volume 1.20M SOL，Hyperliquid OI 5.13M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -0.20%，区间 74.09-77.28，位置 63.5%，VWAP 75.70；30d -0.30%，区间 70.55-78.86，位置 67.0%，VWAP 74.94
- 1h结构：阴线 O:76.22 H:76.22 L:76.11 C:76.12，VWAP上方，VWAP 75.77
- 4h结构：阴线 O:76.29 H:76.48 L:76.11 C:76.12，VWAP上方，VWAP 75.79
- 1d结构：阳线 O:76.00 H:76.48 L:75.17 C:76.12，VWAP上方，VWAP 75.46
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $391M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 68.50 / 83.73；25x 多/空 73.07 / 79.16；50x 多/空 74.59 / 77.64。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 76.12 / ask 76.12，spread 0.0010 (0.0013%)，top20 bid 6.89K / ask 9.95K，卖盘更厚，反弹上方抛压更明显
- 支撑：75.91-76.11
- 压力：76.44-76.48
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 75.91-76.11 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 75.91-76.11 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| WLD |94.6 |-8.24% |$11.9M |$23.1M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |92.0 |+19.65% |$13.3M |$22.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ACE |90.0 |+24.43% |$4.84M |$2.24M |-<0.1% |不碰：流动性/OI 偏低 |
| CASHCAT |90.0 |-2.20% |$8.93M |$16.1M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| MON |90.0 |+5.76% |$5.54M |$27.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |89.4 |-2.36% |$31.7M |$89.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| KAITO |89.3 |-3.82% |$4.10M |$6.04M |-<0.1% |不碰：流动性/OI 偏低 |
| NEAR |88.0 |-1.93% |$6.85M |$45.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Morning Minute: PUMP Prints First Golden Cross as Revenue Hits Seven-Month High (Tue, 18 Aug 2026 12:37:02 +0000)
- Decrypt: Solana’s Pump Token Leads Crypto Market Gainers as Chart Paints Golden Cross (Mon, 17 Aug 2026 18:29:56 +0000)

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
