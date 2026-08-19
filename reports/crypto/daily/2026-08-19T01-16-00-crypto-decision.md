# 每日加密交易决策

生成时间：2026/08/19 09:16:00 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏多但降仓
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 46 / Fear；ETH gas 0.0496 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: FalconX, Interstice Connect Canton to Ethereum, Solana and Robinhood Chain (Tue, 18 Aug 2026 20:45:48 +0000)
- Cointelegraph: Here’s what happened in crypto today (Tue, 18 Aug 2026 20:21:26 +0000)
- Decrypt: Bitcoin Wallet Maker BitBox Says AI Found Severe Flaws in Firmware (Tue, 18 Aug 2026 18:06:42 +0000)
- Cointelegraph: Metaplanet expands Bitcoin treasury strategy to US with 2,100-BTC Nasdaq play (Tue, 18 Aug 2026 16:21:58 +0000)
- Cointelegraph: Neuberger teams with Securitize on multi-chain tokenized fixed-income fund launch (Tue, 18 Aug 2026 15:59:54 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,490，24h 相对 prevDay：+0.28%
- 成交/持仓：24h notional volume $1.43B，base volume 22.2K BTC，Hyperliquid OI 41.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +1.61%，区间 62,523-65,018，位置 78.8%，VWAP 63,835；30d -1.13%，区间 62,237-66,918，位置 48.1%，VWAP 64,212
- 1h结构：阳线 O:64,454 H:64,500 L:64,399 C:64,490，VWAP上方，VWAP 64,376
- 4h结构：阴线 O:64,696 H:64,710 L:64,399 C:64,490，VWAP上方，VWAP 63,660
- 1d结构：阴线 O:64,696 H:64,710 L:64,399 C:64,490，VWAP上方，VWAP 64,223
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.67B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 58,041 / 70,939；25x 多/空 61,910 / 67,070；50x 多/空 63,200 / 65,780。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 64,490 / ask 64,491，spread 1.0000 (0.0016%)，top20 bid 37.55 / ask 297.14，卖盘更厚，反弹上方抛压更明显
- 支撑：64,399-64,442
- 压力：64,861-65,018
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 64,399-64,442 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 64,399-64,442 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,916，24h 相对 prevDay：+0.44%
- 成交/持仓：24h notional volume $706M，base volume 371K ETH，Hyperliquid OI 901K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +1.92%，区间 1,862-1,922，位置 89.3%，VWAP 1,896；30d +0.60%，区间 1,821-1,981，位置 59.3%，VWAP 1,896
- 1h结构：阳线 O:1,913 H:1,918 L:1,912 C:1,916，VWAP上方，VWAP 1,906
- 4h结构：阴线 O:1,917 H:1,919 L:1,911 C:1,916，VWAP上方，VWAP 1,890
- 1d结构：阴线 O:1,917 H:1,919 L:1,911 C:1,916，VWAP上方，VWAP 1,880
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.73B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,724 / 2,107；25x 多/空 1,839 / 1,992；50x 多/空 1,877 / 1,954。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,916 / ask 1,916，spread 0.1000 (0.0052%)，top20 bid 8.60K / ask 6.59K，买盘更厚，短线回踩承接较好
- 支撑：1,912-1,912
- 压力：1,921-1,922
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,912-1,912 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,912-1,912 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：76.94，24h 相对 prevDay：+1.32%
- 成交/持仓：24h notional volume $99.3M，base volume 1.30M SOL，Hyperliquid OI 5.24M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +1.77%，区间 74.09-77.38，位置 86.7%，VWAP 76.03；30d -1.11%，区间 70.55-78.86，位置 76.9%，VWAP 74.85
- 1h结构：阳线 O:76.88 H:77.02 L:76.81 C:76.92，VWAP上方，VWAP 76.29
- 4h结构：阴线 O:77.05 H:77.08 L:76.80 C:76.94，VWAP上方，VWAP 75.90
- 1d结构：阴线 O:77.05 H:77.08 L:76.80 C:76.94，VWAP上方，VWAP 75.41
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $403M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 69.24 / 84.63；25x 多/空 73.86 / 80.01；50x 多/空 75.40 / 78.47。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 76.94 / ask 76.94，spread 0.0010 (0.0013%)，top20 bid 10.2K / ask 7.42K，买盘更厚，短线回踩承接较好
- 支撑：76.85-76.92
- 压力：77.29-77.38
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 76.85-76.92 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 76.85-76.92 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| CASHCAT |94.9 |-11.81% |$8.26M |$12.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |94.0 |+11.27% |$47.4M |$112M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |92.2 |+2.42% |$9.92M |$85.2M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |92.2 |+6.10% |$15.6M |$18.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ACE |89.1 |+52.38% |$3.31M |$1.97M |-<0.1% |不碰：流动性/OI 偏低 |
| FARTCOIN |88.9 |-2.81% |$3.21M |$29.7M |+<0.1% |不碰：流动性/OI 偏低 |
| KAITO |88.7 |+4.71% |$2.63M |$5.77M |-<0.1% |不碰：流动性/OI 偏低 |
| HYPE |88.7 |-1.24% |$245M |$1.32B |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Morning Minute: PUMP Prints First Golden Cross as Revenue Hits Seven-Month High (Tue, 18 Aug 2026 12:37:02 +0000)

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
