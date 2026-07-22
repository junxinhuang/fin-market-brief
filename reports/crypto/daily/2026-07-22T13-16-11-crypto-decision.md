# 每日加密交易决策

生成时间：2026/07/22 21:16:11 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 33 / Fear；ETH gas 0.1124 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Wed, 22 Jul 2026 12:54:29 +0000)
- Cointelegraph: Bitcoin analysis eyes ‘serious volume’ after Binance sees 9K BTC daily outflow (Wed, 22 Jul 2026 11:55:21 +0000)
- Decrypt: Morning Minute: OpenAI Model Escapes Containment, Hacks Hugging Face (Wed, 22 Jul 2026 11:50:29 +0000)
- Cointelegraph: Foundry asks Bitcoin miners to vote on BIP-110 support (Wed, 22 Jul 2026 10:29:42 +0000)
- Cointelegraph: Galaxy pledges $5M for developers quantum-proofing Bitcoin (Wed, 22 Jul 2026 09:30:05 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：65,604，24h 相对 prevDay：-1.49%
- 成交/持仓：24h notional volume $1.83B，base volume 27.7K BTC，Hyperliquid OI 36.0K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +1.34%，区间 62,550-66,918，位置 69.9%，VWAP 64,974；30d +2.49%，区间 57,768-66,918，位置 85.6%，VWAP 62,387
- 1h结构：阴线 O:65,613 H:65,671 L:65,565 C:65,605，VWAP下方，VWAP 66,183
- 4h结构：阴线 O:65,989 H:65,993 L:65,534 C:65,605，VWAP上方，VWAP 64,882
- 1d结构：阴线 O:66,526 H:66,714 L:65,534 C:65,604，VWAP上方，VWAP 62,890
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.36B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 59,044 / 72,164；25x 多/空 62,980 / 68,228；50x 多/空 64,292 / 66,916。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 65,604 / ask 65,605，spread 1.0000 (0.0015%)，top20 bid 54.61 / ask 120.72，卖盘更厚，反弹上方抛压更明显
- 支撑：65,534-65,565
- 压力：66,553-66,729
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 66,553-66,729 或跌破 65,534-65,565 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,919，24h 相对 prevDay：-1.16%
- 成交/持仓：24h notional volume $680M，base volume 353K ETH，Hyperliquid OI 1.05M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +<0.1%，区间 1,803-1,952，位置 77.9%，VWAP 1,885；30d +11.07%，区间 1,511-1,952，位置 92.6%，VWAP 1,739
- 1h结构：阳线 O:1,917 H:1,921 L:1,917 C:1,919，VWAP下方，VWAP 1,929
- 4h结构：阴线 O:1,927 H:1,927 L:1,913 C:1,919，VWAP上方，VWAP 1,887
- 1d结构：阴线 O:1,930 H:1,944 L:1,910 C:1,919，VWAP上方，VWAP 1,738
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.02B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,727 / 2,111；25x 多/空 1,842 / 1,996；50x 多/空 1,881 / 1,958。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,919 / ask 1,919，spread 0.1000 (0.0052%)，top20 bid 6.67K / ask 6.42K，买卖盘接近平衡
- 支撑：1,917-1,919
- 压力：1,940-1,944
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,940-1,944 或跌破 1,917-1,919 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：77.26，24h 相对 prevDay：-1.59%
- 成交/持仓：24h notional volume $116M，base volume 1.48M SOL，Hyperliquid OI 4.72M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +<0.1%，区间 73.33-78.86，位置 71.0%，VWAP 76.40；30d +7.37%，区间 63.96-83.99，位置 66.4%，VWAP 75.44
- 1h结构：阳线 O:77.20 H:77.30 L:77.10 C:77.26，VWAP下方，VWAP 77.95
- 4h结构：阴线 O:77.53 H:77.53 L:77.01 C:77.26，VWAP上方，VWAP 76.69
- 1d结构：阴线 O:78.10 H:78.55 L:76.97 C:77.26，VWAP上方，VWAP 74.49
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $365M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 69.53 / 84.98；25x 多/空 74.16 / 80.35；50x 多/空 75.71 / 78.80。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 77.25 / ask 77.26，spread 0.0010 (0.0013%)，top20 bid 8.38K / ask 8.50K，买卖盘接近平衡
- 支撑：77.02-77.25
- 压力：78.22-78.55
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 78.22-78.55 或跌破 77.02-77.25 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| ZEC |95.3 |-5.98% |$92.0M |$293M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CASHCAT |94.9 |-19.46% |$9.22M |$9.98M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| HYPE |94.5 |-6.79% |$402M |$1.32B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |94.3 |-5.72% |$15.3M |$78.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| GRAM |89.7 |+4.34% |$10.3M |$20.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |89.6 |-2.64% |$23.4M |$91.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |88.8 |-3.72% |$4.14M |$25.6M |+<0.1% |不碰：流动性/OI 偏低 |
| ONDO |88.7 |+3.35% |$15.5M |$18.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Pavel Durov Wants to Give a Billion Telegram Users a Crypto Wallet (Tue, 21 Jul 2026 20:20:49 +0000)
- Cointelegraph: Pavel Durov says Telegram to roll out native Gram crypto wallet (Tue, 21 Jul 2026 18:20:58 +0000)

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
