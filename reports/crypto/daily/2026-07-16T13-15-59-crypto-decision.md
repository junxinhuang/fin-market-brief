# 每日加密交易决策

生成时间：2026/07/16 21:15:59 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 25 / Extreme Fear；ETH gas 0.0931 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Bitcoin $107K buyers providing ‘early signals’ of 2026 bear-market bottom: Glassnode (Thu, 16 Jul 2026 08:11:25 +0000)
- Cointelegraph: Here’s what happened in crypto today (Thu, 16 Jul 2026 05:55:48 +0000)
- Decrypt: Why Analysts Aren’t Worried About Coinbase’s 30% Drop (Wed, 15 Jul 2026 21:38:43 +0000)
- Cointelegraph: Stanford study says 5-minute Bitcoin prediction markets enable settlement manipulation (Wed, 15 Jul 2026 20:05:08 +0000)
- Decrypt: What Is BIP-110 and Why Is It Dividing the Bitcoin Community? (Wed, 15 Jul 2026 19:43:10 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,076，24h 相对 prevDay：-1.98%
- 成交/持仓：24h notional volume $1.70B，base volume 26.3K BTC，Hyperliquid OI 36.9K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +1.35%，区间 61,821-65,577，位置 60.0%，VWAP 64,036；30d -2.38%，区间 57,768-66,429，位置 72.8%，VWAP 62,237
- 1h结构：阳线 O:63,946 H:64,101 L:63,939 C:64,076，VWAP下方，VWAP 64,775
- 4h结构：阴线 O:64,235 H:64,235 L:63,845 C:64,076，VWAP上方，VWAP 63,712
- 1d结构：阴线 O:64,738 H:64,999 L:63,845 C:64,076，VWAP上方，VWAP 62,538
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.36B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,668 / 70,484；25x 多/空 61,513 / 66,639；50x 多/空 62,794 / 65,358。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 64,076 / ask 64,077，spread 1.0000 (0.0016%)，top20 bid 52.28 / ask 100.06，卖盘更厚，反弹上方抛压更明显
- 支撑：64,052-64,064
- 压力：64,999-65,453
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 64,999-65,453 或跌破 64,052-64,064 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,876，24h 相对 prevDay：-3.25%
- 成交/持仓：24h notional volume $952M，base volume 498K ETH，Hyperliquid OI 918K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +7.50%，区间 1,738-1,947，位置 66.2%，VWAP 1,831；30d +4.64%，区间 1,511-1,947，位置 83.8%，VWAP 1,714
- 1h结构：阳线 O:1,873 H:1,876 L:1,871 C:1,876，VWAP下方，VWAP 1,906
- 4h结构：阴线 O:1,885 H:1,885 L:1,867 C:1,876，VWAP上方，VWAP 1,812
- 1d结构：阴线 O:1,918 H:1,929 L:1,867 C:1,876，VWAP上方，VWAP 1,705
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.72B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,688 / 2,063；25x 多/空 1,801 / 1,951；50x 多/空 1,838 / 1,913。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,876 / ask 1,876，spread 0.1000 (0.0053%)，top20 bid 6.38K / ask 5.94K，买卖盘接近平衡
- 支撑：1,871-1,876
- 压力：1,929-1,937
- 判断：震荡。24h 价格偏弱；价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,929-1,937 或跌破 1,871-1,876 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：76.09，24h 相对 prevDay：-3.50%
- 成交/持仓：24h notional volume $176M，base volume 2.28M SOL，Hyperliquid OI 4.55M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -2.47%，区间 74.06-79.66，位置 36.3%，VWAP 76.75；30d +3.54%，区间 63.96-83.99，位置 60.6%，VWAP 74.67
- 1h结构：阳线 O:75.88 H:76.12 L:75.86 C:76.10，VWAP下方，VWAP 77.32
- 4h结构：阴线 O:76.23 H:76.24 L:75.65 C:76.10，VWAP下方，VWAP 77.07
- 1d结构：阴线 O:77.24 H:77.54 L:75.59 C:76.10，VWAP上方，VWAP 72.69
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $346M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 68.48 / 83.69；25x 多/空 73.04 / 79.13；50x 多/空 74.56 / 77.61。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 76.10 / ask 76.10，spread 0.0010 (0.0013%)，top20 bid 1.95K / ask 17.2K，卖盘更厚，反弹上方抛压更明显
- 支撑：75.97-76.01
- 压力：77.54-78.08
- 判断：偏空。24h 价格偏弱；价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 77.54-78.08 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 77.54-78.08 且 short liquidation 扩大。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| CASHCAT |96.5 |-25.87% |$44.2M |$13.6M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZEC |93.4 |-4.32% |$114M |$276M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |92.2 |-4.54% |$331M |$1.45B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ONDO |91.0 |+14.21% |$21.7M |$16.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |90.8 |-7.22% |$13.1M |$21.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kBONK |90.6 |-7.49% |$2.86M |$9.34M |-<0.1% |不碰：流动性/OI 偏低 |
| AAVE |90.3 |-5.30% |$7.28M |$82.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |89.3 |-4.66% |$5.45M |$41.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Hyperion DeFi to deploy 500K HYPE for Hyperliquid HIP-3 markets (Thu, 16 Jul 2026 06:41:14 +0000)

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
