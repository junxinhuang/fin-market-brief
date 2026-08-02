# 每日加密交易决策

生成时间：2026/08/02 09:45:13 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 27 / Fear；ETH gas 0.0383 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: CZ Warns Bitcoin Holders After $70 Million Wallet Exploit: 'Nothing Is 100%' (Sat, 01 Aug 2026 16:01:17 +0000)
- Cointelegraph: Coldcard Bitcoin loss estimate rises to $70M after Galaxy analysis (Sat, 01 Aug 2026 09:23:56 +0000)
- Cointelegraph: Bitcoin ETFs end July in the green despite late-month selling (Sat, 01 Aug 2026 07:23:07 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 31 Jul 2026 18:09:51 +0000)
- Cointelegraph: US Treasury yields rise as TIPS challenge the inflation narrative (Fri, 31 Jul 2026 16:14:19 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：62,999，24h 相对 prevDay：+<0.1%
- 成交/持仓：24h notional volume $717M，base volume 11.4K BTC，Hyperliquid OI 34.8K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -3.63%，区间 62,237-65,715，位置 21.9%，VWAP 63,697；30d +0.68%，区间 61,342-66,918，位置 29.7%，VWAP 64,119
- 1h结构：阳线 O:62,810 H:63,064 L:62,810 C:63,000，VWAP上方，VWAP 62,862
- 4h结构：阳线 O:62,789 H:63,064 L:62,786 C:63,000，VWAP下方，VWAP 63,938
- 1d结构：阳线 O:62,789 H:63,064 L:62,786 C:63,000，VWAP上方，VWAP 62,762
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.20B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 56,699 / 69,299；25x 多/空 60,479 / 65,519；50x 多/空 61,739 / 64,259。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,000 / ask 63,001，spread 1.0000 (0.0016%)，top20 bid 87.17 / ask 81.11，买卖盘接近平衡
- 支撑：62,965-62,982
- 压力：63,099-63,115
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 63,099-63,115 或跌破 62,965-62,982 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,856，24h 相对 prevDay：-0.52%
- 成交/持仓：24h notional volume $414M，base volume 224K ETH，Hyperliquid OI 950K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -5.01%，区间 1,821-1,981，位置 22.3%，VWAP 1,896；30d +5.52%，区间 1,713-1,981，位置 53.5%，VWAP 1,854
- 1h结构：阳线 O:1,846 H:1,858 L:1,846 C:1,856，VWAP下方，VWAP 1,857
- 4h结构：阳线 O:1,844 H:1,858 L:1,843 C:1,856，VWAP下方，VWAP 1,902
- 1d结构：阳线 O:1,844 H:1,858 L:1,843 C:1,856，VWAP上方，VWAP 1,779
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.76B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,671 / 2,042；25x 多/空 1,782 / 1,931；50x 多/空 1,819 / 1,894。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,856 / ask 1,856，spread 0.1000 (0.0054%)，top20 bid 6.77K / ask 6.44K，买卖盘接近平衡
- 支撑：1,843-1,846
- 压力：1,874-1,874
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好；7d趋势仍弱，反弹需要更多确认
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,874-1,874 或跌破 1,843-1,846 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：72.63，24h 相对 prevDay：-0.55%
- 成交/持仓：24h notional volume $80.4M，base volume 1.12M SOL，Hyperliquid OI 4.13M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -5.35%，区间 70.55-77.49，位置 30.0%，VWAP 73.54；30d -11.81%，区间 70.55-83.99，位置 15.5%，VWAP 77.07
- 1h结构：阳线 O:72.08 H:72.73 L:72.08 C:72.63，VWAP上方，VWAP 72.41
- 4h结构：阳线 O:71.92 H:72.73 L:71.90 C:72.63，VWAP下方，VWAP 74.02
- 1d结构：阳线 O:71.92 H:72.73 L:71.90 C:72.63，VWAP下方，VWAP 75.26
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $300M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 65.37 / 79.90；25x 多/空 69.73 / 75.54；50x 多/空 71.18 / 74.09。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 72.63 / ask 72.64，spread 0.0010 (0.0014%)，top20 bid 5.91K / ask 13.8K，卖盘更厚，反弹上方抛压更明显
- 支撑：72.08-72.63
- 压力：73.01-73.18
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 73.01-73.18 或跌破 72.08-72.63 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |95.7 |+5.55% |$22.6M |$55.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |91.2 |-2.94% |$2.36M |$22.2M |-<0.1% |不碰：流动性/OI 偏低 |
| KAITO |90.9 |+12.25% |$6.60M |$12.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |89.6 |-3.80% |$6.06M |$20.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AVAX |89.5 |-2.94% |$2.67M |$13.2M |-<0.1% |不碰：流动性/OI 偏低 |
| BNB |89.3 |-2.00% |$4.06M |$29.1M |+<0.1% |不碰：流动性/OI 偏低 |
| LIT |88.6 |-1.99% |$7.72M |$74.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |87.7 |+1.79% |$10.2M |$21.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Pump.fun laid off workers before they received millions in PUMP tokens: Report (Fri, 31 Jul 2026 19:16:19 +0000)

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
