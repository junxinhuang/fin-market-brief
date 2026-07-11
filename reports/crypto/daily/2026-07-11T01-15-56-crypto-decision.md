# 每日加密交易决策

生成时间：2026/07/11 09:15:56 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 26 / Fear；ETH gas 0.1491 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 20%-35%，单笔 5%-10%，只在回踩确认后加仓。
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
- Cointelegraph: Here’s what happened in crypto today (Fri, 10 Jul 2026 20:14:39 +0000)
- Decrypt: Bitcoin Treasury Firm Empery Digital Dumps Nearly Half of BTC Holdings for $87 Million (Fri, 10 Jul 2026 18:54:46 +0000)
- Cointelegraph: New Hampshire council votes down $100M Bitcoin bonds (Fri, 10 Jul 2026 17:23:10 +0000)
- Cointelegraph: Crypto Biz: How stablecoins found their niche (Fri, 10 Jul 2026 15:37:37 +0000)
- Cointelegraph: Bitcoin whales sent BTC price to $64K as Coinbase Premium broke key level: CryptoQuant (Fri, 10 Jul 2026 14:59:30 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,130，24h 相对 prevDay：+1.59%
- 成交/持仓：24h notional volume $1.81B，base volume 28.3K BTC，Hyperliquid OI 35.3K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +1.59%，区间 61,342-64,698，位置 83.1%，VWAP 63,482；30d +0.80%，区间 57,768-67,283，位置 66.9%，VWAP 62,407
- 1h结构：阳线 O:64,113 H:64,161 L:64,089 C:64,130，VWAP上方，VWAP 63,754
- 4h结构：阴线 O:64,156 H:64,161 L:64,020 C:64,130，VWAP上方，VWAP 63,094
- 1d结构：阴线 O:64,156 H:64,161 L:64,020 C:64,130，VWAP上方，VWAP 62,937
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.26B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,717 / 70,543；25x 多/空 61,565 / 66,695；50x 多/空 62,847 / 65,413。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 64,130 / ask 64,131，spread 1.0000 (0.0016%)，top20 bid 46.48 / ask 90.55，卖盘更厚，反弹上方抛压更明显
- 支撑：64,020-64,089
- 压力：64,496-64,690
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 64,020-64,089 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 64,020-64,089 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,793，24h 相对 prevDay：+2.93%
- 成交/持仓：24h notional volume $753M，base volume 422K ETH，Hyperliquid OI 794K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +0.67%，区间 1,713-1,834，位置 66.2%，VWAP 1,773；30d +7.20%，区间 1,511-1,850，位置 83.3%，VWAP 1,697
- 1h结构：阳线 O:1,793 H:1,794 L:1,791 C:1,793，VWAP上方，VWAP 1,775
- 4h结构：阴线 O:1,796 H:1,797 L:1,789 C:1,793，VWAP上方，VWAP 1,766
- 1d结构：阴线 O:1,796 H:1,797 L:1,789 C:1,793，VWAP上方，VWAP 1,699
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.42B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,614 / 1,972；25x 多/空 1,721 / 1,865；50x 多/空 1,757 / 1,829。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,793 / ask 1,793，spread 0.1000 (0.0056%)，top20 bid 3.93K / ask 6.07K，卖盘更厚，反弹上方抛压更明显
- 支撑：1,791-1,793
- 压力：1,803-1,812
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,791-1,793 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,791-1,793 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：77.78，24h 相对 prevDay：-0.53%
- 成交/持仓：24h notional volume $171M，base volume 2.18M SOL，Hyperliquid OI 5.34M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -4.89%，区间 76.28-83.76，位置 20.1%，VWAP 79.95；30d +16.30%，区间 63.96-83.99，位置 69.0%，VWAP 74.09
- 1h结构：阴线 O:77.83 H:77.87 L:77.75 C:77.78，VWAP下方，VWAP 78.38
- 4h结构：阴线 O:78.11 H:78.11 L:77.75 C:77.78，VWAP下方，VWAP 80.34
- 1d结构：阴线 O:78.11 H:78.11 L:77.75 C:77.78，VWAP上方，VWAP 71.90
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $415M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 70.00 / 85.56；25x 多/空 74.67 / 80.89；50x 多/空 76.22 / 79.33。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 77.78 / ask 77.78，spread 0.0010 (0.0013%)，top20 bid 4.60K / ask 5.31K，买卖盘接近平衡
- 支撑：77.75-77.77
- 压力：79.35-79.66
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 79.35-79.66 或跌破 77.75-77.77 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| LIT |97.1 |+12.55% |$46.2M |$151M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.2 |+3.55% |$81.7M |$256M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |92.9 |+5.37% |$2.99M |$28.0M |+<0.1% |不碰：流动性/OI 偏低 |
| AAVE |91.9 |+3.68% |$13.5M |$87.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |91.7 |+6.35% |$23.6M |$15.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XMR |91.4 |+2.89% |$5.98M |$52.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |91.1 |-3.71% |$6.16M |$35.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |90.9 |+6.21% |$6.94M |$23.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Zcash targets July 28 launch for Ironwood network upgrade (Fri, 10 Jul 2026 04:25:27 +0000)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 20%-35%，单笔 5%-10%，只在回踩确认后加仓。
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
