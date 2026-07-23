# 每日加密交易决策

生成时间：2026/07/23 21:15:39 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 31 / Fear；ETH gas 0.1629 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Strategy-led group pledges $15M to quantum-proof Bitcoin network (Thu, 23 Jul 2026 13:03:18 +0000)
- Cointelegraph: BitMEX token crashes 90% as exchange announces shutdown (Thu, 23 Jul 2026 12:47:27 +0000)
- Cointelegraph: Bernstein says Bitcoin mining deals necessary for AI power crunch (Thu, 23 Jul 2026 11:49:00 +0000)
- Cointelegraph: Bitcoin will get ‘lift’ from Hyperliquid, Robinhood in next crypto bull market: Bitwise exec (Thu, 23 Jul 2026 10:49:00 +0000)
- Decrypt: Arbitrum Perp DEX AFX Trade Drained of $24M, Offers Hacker 30% to Return It (Thu, 23 Jul 2026 10:24:09 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：65,004，24h 相对 prevDay：-0.96%
- 成交/持仓：24h notional volume $2.07B，base volume 31.4K BTC，Hyperliquid OI 36.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +1.87%，区间 62,550-66,918，位置 56.3%，VWAP 65,293；30d +3.67%，区间 57,768-66,918，位置 79.1%，VWAP 62,483
- 1h结构：阴线 O:65,153 H:65,206 L:64,984 C:65,010，VWAP下方，VWAP 65,855
- 4h结构：阴线 O:65,523 H:65,566 L:64,967 C:65,010，VWAP下方，VWAP 65,042
- 1d结构：阴线 O:66,086 H:66,295 L:64,967 C:65,010，VWAP上方，VWAP 62,940
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.37B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 58,504 / 71,504；25x 多/空 62,404 / 67,604；50x 多/空 63,704 / 66,304。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 65,009 / ask 65,010，spread 1.0000 (0.0015%)，top20 bid 48.80 / ask 98.73，卖盘更厚，反弹上方抛压更明显
- 支撑：64,967-64,984
- 压力：66,125-66,358
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 66,125-66,358 或跌破 64,967-64,984 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,897，24h 相对 prevDay：-1.18%
- 成交/持仓：24h notional volume $996M，base volume 516K ETH，Hyperliquid OI 1.02M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +1.72%，区间 1,803-1,956，位置 61.5%，VWAP 1,897；30d +13.85%，区间 1,511-1,956，位置 86.8%，VWAP 1,750
- 1h结构：阴线 O:1,903 H:1,907 L:1,897 C:1,897，VWAP下方，VWAP 1,929
- 4h结构：阴线 O:1,925 H:1,927 L:1,893 C:1,897，VWAP上方，VWAP 1,895
- 1d结构：阴线 O:1,934 H:1,941 L:1,893 C:1,897，VWAP上方，VWAP 1,745
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.93B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,707 / 2,087；25x 多/空 1,821 / 1,973；50x 多/空 1,859 / 1,935。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,897 / ask 1,897，spread 0.1000 (0.0053%)，top20 bid 5.62K / ask 6.23K，买卖盘接近平衡
- 支撑：1,893-1,897
- 压力：1,939-1,956
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,939-1,956 或跌破 1,893-1,897 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：76.69，24h 相对 prevDay：-0.77%
- 成交/持仓：24h notional volume $127M，base volume 1.63M SOL，Hyperliquid OI 4.65M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +1.87%，区间 73.33-78.86，位置 60.8%，VWAP 76.89；30d +10.10%，区间 63.96-83.99，位置 63.5%，VWAP 75.87
- 1h结构：阴线 O:76.87 H:76.98 L:76.68 C:76.69，VWAP下方，VWAP 77.78
- 4h结构：阴线 O:77.63 H:77.69 L:76.46 C:76.69，VWAP下方，VWAP 76.70
- 1d结构：阴线 O:77.94 H:78.49 L:76.46 C:76.69，VWAP上方，VWAP 74.65
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $357M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 69.02 / 84.36；25x 多/空 73.62 / 79.76；50x 多/空 75.16 / 78.22。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 76.69 / ask 76.69，spread 0.0010 (0.0013%)，top20 bid 5.85K / ask 9.69K，卖盘更厚，反弹上方抛压更明显
- 支撑：76.46-76.68
- 压力：78.10-78.78
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 78.10-78.78 或跌破 76.46-76.68 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| CASHCAT |95.2 |-24.77% |$15.0M |$8.64M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |94.4 |-4.00% |$12.9M |$87.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLFI |93.5 |+6.70% |$11.5M |$12.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ONDO |89.0 |-3.64% |$10.3M |$17.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |88.8 |+1.61% |$331M |$1.35B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| MORPHO |88.1 |-3.01% |$7.51M |$4.20M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VIRTUAL |87.7 |-6.43% |$2.27M |$7.09M |-<0.1% |不碰：流动性/OI 偏低 |
| KAITO |87.6 |+8.93% |$4.36M |$7.72M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: HYPE falls as crypto funds queue nearly $150M in locked tokens for withdrawal (Thu, 23 Jul 2026 11:24:09 +0000)
- Cointelegraph: Bitcoin will get ‘lift’ from Hyperliquid, Robinhood in next crypto bull market: Bitwise exec (Thu, 23 Jul 2026 10:49:00 +0000)

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
