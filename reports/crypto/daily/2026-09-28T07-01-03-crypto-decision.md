# 每日加密交易决策

生成时间：2026/09/28 15:01:03 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 74 / Greed；ETH gas 0.1224 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Mon, 28 Sep 2026 04:57:00 +0000)
- Cointelegraph: Vitalik Buterin says Hegotá could be Ethereum’s last ‘normal’ fork (Mon, 28 Sep 2026 04:44:15 +0000)
- Cointelegraph: THORChain under fire over Bitget, ETH evolves beyond blockchain: Hodler’s Digest (Sun, 27 Sep 2026 23:43:18 +0000)
- Decrypt: Bitcoin's Quantum Problem: Three Ways Researchers Are Trying to Fix It (Sun, 27 Sep 2026 15:01:03 +0000)
- Cointelegraph: Riot Platforms repays $200M credit facility, releases collateral (Sun, 27 Sep 2026 09:57:19 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：83,139，24h 相对 prevDay：-1.60%
- 成交/持仓：24h notional volume $1.86B，base volume 22.1K BTC，Hyperliquid OI 36.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -4.07%，区间 82,642-87,333，位置 10.4%，VWAP 84,571；30d +6.27%，区间 74,903-87,471，位置 65.5%，VWAP 80,100
- 1h结构：阳线 O:83,126 H:83,148 L:83,126 C:83,132，VWAP下方，VWAP 84,144
- 4h结构：阴线 O:83,296 H:83,492 L:82,642 C:83,132，VWAP下方，VWAP 84,493
- 1d结构：阴线 O:84,438 H:84,978 L:82,642 C:83,132，VWAP上方，VWAP 78,750
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.05B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 74,825 / 91,453；25x 多/空 79,813 / 86,465；50x 多/空 81,476 / 84,802。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 83,132 / ask 83,133，spread 1.0000 (0.0012%)，top20 bid 46.63 / ask 71.25，卖盘更厚，反弹上方抛压更明显
- 支撑：82,642-83,126
- 压力：84,978-85,138
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 84,978-85,138 或跌破 82,642-83,126 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：2,649，24h 相对 prevDay：-2.15%
- 成交/持仓：24h notional volume $734M，base volume 273K ETH，Hyperliquid OI 1.09M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -4.62%，区间 2,627-2,790，位置 13.5%，VWAP 2,698；30d +7.79%，区间 2,356-2,810，位置 64.6%，VWAP 2,535
- 1h结构：阳线 O:2,649 H:2,650 L:2,649 C:2,649，VWAP下方，VWAP 2,685
- 4h结构：阴线 O:2,651 H:2,660 L:2,635 C:2,649，VWAP下方，VWAP 2,697
- 1d结构：阴线 O:2,688 H:2,703 L:2,635 C:2,649，VWAP上方，VWAP 2,487
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.89B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,384 / 2,914；25x 多/空 2,543 / 2,755；50x 多/空 2,596 / 2,702。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,649 / ask 2,649，spread 0.1000 (0.0038%)，top20 bid 3.28K / ask 3.59K，买卖盘接近平衡
- 支撑：2,646-2,649
- 压力：2,703-2,723
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 2,703-2,723 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 2,703-2,723 且 short liquidation 扩大。

## 6. SOL

- 实时价格：118.68，24h 相对 prevDay：-2.18%
- 成交/持仓：24h notional volume $316M，base volume 2.59M SOL，Hyperliquid OI 5.64M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -0.26%，区间 112.46-124.95，位置 49.8%，VWAP 119.18；30d +12.42%，区间 95.75-124.95，位置 78.5%，VWAP 107.79
- 1h结构：阴线 O:118.70 H:118.71 L:118.67 C:118.68，VWAP下方，VWAP 121.71
- 4h结构：阴线 O:119.79 H:120.18 L:117.99 C:118.68，VWAP上方，VWAP 117.50
- 1d结构：阴线 O:121.95 H:122.91 L:117.99 C:118.68，VWAP上方，VWAP 103.53
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $669M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 106.81 / 130.55；25x 多/空 113.93 / 123.43；50x 多/空 116.31 / 121.05。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 118.67 / ask 118.68，spread 0.0100 (0.0084%)，top20 bid 32.1K / ask 30.5K，买卖盘接近平衡
- 支撑：117.99-118.67
- 压力：123.41-124.95
- 判断：震荡。24h 价格偏弱；价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 123.41-124.95 或跌破 117.99-118.67 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |95.9 |+11.98% |$154M |$202M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |94.3 |-8.36% |$31.8M |$197M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.4 |-6.38% |$417M |$818M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |92.2 |-8.80% |$36.7M |$101M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PONS |91.9 |-15.20% |$30.1M |$52.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |91.4 |-9.07% |$16.5M |$33.4M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TAO |90.8 |-7.53% |$38.7M |$89.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |89.1 |-5.75% |$67.2M |$102M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Bitget clarifies $388M in assets affected by security breach (Fri, 25 Sep 2026 17:17:45 +0000)

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
