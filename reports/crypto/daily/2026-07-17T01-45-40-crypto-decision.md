# 每日加密交易决策

生成时间：2026/07/17 09:45:40 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 27 / Fear；ETH gas 0.1239 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Bitcoin liquidity clusters determine BTC’s price direction as futures flow fuels price (Fri, 17 Jul 2026 00:12:40 +0000)
- Cointelegraph: Bitcoin outlook improves amid 6% weekly gain: Can BTC bulls push higher? (Thu, 16 Jul 2026 20:29:20 +0000)
- Decrypt: Morgan Stanley Launches Bitcoin, Ethereum, and Solana Trading on E*Trade (Thu, 16 Jul 2026 20:01:03 +0000)
- Cointelegraph: Here’s what happened in crypto today (Thu, 16 Jul 2026 19:04:20 +0000)
- Decrypt: Bitcoin Q-Day Recovery Proposal Aims to Let Users Prove Ownership After Quantum Attack (Thu, 16 Jul 2026 19:00:32 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,731，24h 相对 prevDay：-1.35%
- 成交/持仓：24h notional volume $1.68B，base volume 26.1K BTC，Hyperliquid OI 37.6K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -0.66%，区间 61,821-65,577，位置 50.9%，VWAP 63,971；30d -1.15%，区间 57,768-65,587，位置 76.3%，VWAP 62,158
- 1h结构：阴线 O:63,867 H:64,048 L:63,730 C:63,731，VWAP下方，VWAP 64,593
- 4h结构：阴线 O:63,815 H:64,048 L:63,594 C:63,731，VWAP下方，VWAP 63,866
- 1d结构：阴线 O:63,815 H:64,048 L:63,594 C:63,731，VWAP上方，VWAP 62,610
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.40B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,358 / 70,104；25x 多/空 61,182 / 66,280；50x 多/空 62,456 / 65,006。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,730 / ask 63,731，spread 1.0000 (0.0016%)，top20 bid 75.71 / ask 122.15，卖盘更厚，反弹上方抛压更明显
- 支撑：63,723-63,730
- 压力：64,885-64,999
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 64,885-64,999 或跌破 63,723-63,730 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,856，24h 相对 prevDay：-3.19%
- 成交/持仓：24h notional volume $920M，base volume 488K ETH，Hyperliquid OI 948K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +3.32%，区间 1,751-1,947，位置 53.8%，VWAP 1,839；30d +6.06%，区间 1,511-1,947，位置 79.2%，VWAP 1,715
- 1h结构：阴线 O:1,866 H:1,871 L:1,856 C:1,856，VWAP下方，VWAP 1,898
- 4h结构：阴线 O:1,865 H:1,871 L:1,849 C:1,856，VWAP上方，VWAP 1,822
- 1d结构：阴线 O:1,865 H:1,871 L:1,849 C:1,856，VWAP上方，VWAP 1,710
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.76B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,670 / 2,042；25x 多/空 1,782 / 1,930；50x 多/空 1,819 / 1,893。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,856 / ask 1,856，spread 0.1000 (0.0054%)，top20 bid 4.35K / ask 5.30K，买卖盘接近平衡
- 支撑：1,849-1,856
- 压力：1,895-1,929
- 判断：震荡。24h 价格偏弱；价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,895-1,929 或跌破 1,849-1,856 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：75.25，24h 相对 prevDay：-1.98%
- 成交/持仓：24h notional volume $170M，base volume 2.24M SOL，Hyperliquid OI 4.37M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -3.65%，区间 74.06-79.00，位置 24.2%，VWAP 76.32；30d +4.51%，区间 63.96-83.99，位置 56.4%，VWAP 74.75
- 1h结构：阴线 O:75.52 H:75.70 L:75.23 C:75.26，VWAP下方，VWAP 76.69
- 4h结构：阴线 O:75.28 H:75.70 L:75.00 C:75.26，VWAP下方，VWAP 76.98
- 1d结构：阴线 O:75.28 H:75.70 L:75.00 C:75.26，VWAP上方，VWAP 73.12
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $329M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 67.73 / 82.78；25x 多/空 72.24 / 78.26；50x 多/空 73.75 / 76.76。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 75.25 / ask 75.25，spread 0.0010 (0.0013%)，top20 bid 6.53K / ask 11.7K，卖盘更厚，反弹上方抛压更明显
- 支撑：75.00-75.23
- 压力：76.84-77.54
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 76.84-77.54 或跌破 75.00-75.23 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| CASHCAT |96.4 |-42.71% |$76.7M |$12.9M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| HYPE |94.2 |-9.13% |$516M |$1.36B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |93.5 |-10.86% |$29.2M |$93.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |92.4 |-5.98% |$98.2M |$263M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |91.6 |-6.28% |$10.5M |$30.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |91.6 |-4.09% |$26.5M |$83.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |91.3 |-9.74% |$12.9M |$19.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |89.7 |-5.29% |$7.64M |$79.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

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
