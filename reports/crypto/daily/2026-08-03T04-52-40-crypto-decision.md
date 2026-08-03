# 每日加密交易决策

生成时间：2026/08/03 12:52:40 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 28 / Fear；ETH gas 0.1848 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Suspected 4th Coldcard attack wave sweeps 448 Bitcoin: Galaxy’s Thorn (Mon, 03 Aug 2026 01:57:40 +0000)
- Cointelegraph: Coldcard exploit sparks Bitcoin flight, ‘bullish’ crypto consolidation: Hodler’s Digest, August 2 (Sun, 02 Aug 2026 23:44:04 +0000)
- Cointelegraph: Here’s what happened in crypto today (Sun, 02 Aug 2026 20:00:35 +0000)
- Decrypt: Coldcard Bitcoin Exploit Balloons to $88 Million as Attackers Keep Draining Wallets (Sun, 02 Aug 2026 17:18:51 +0000)
- Cointelegraph: Trump Media sells another 2,628 BTC, holdings fall to 4,261 BTC (Sun, 02 Aug 2026 09:31:00 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：62,887，24h 相对 prevDay：-1.07%
- 成交/持仓：24h notional volume $943M，base volume 14.9K BTC，Hyperliquid OI 35.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.33%，区间 62,237-65,385，位置 20.7%，VWAP 63,663；30d -0.38%，区间 61,342-66,918，位置 27.8%，VWAP 64,132
- 1h结构：阳线 O:62,847 H:62,983 L:62,787 C:62,891，VWAP下方，VWAP 63,120
- 4h结构：阳线 O:62,847 H:62,983 L:62,787 C:62,890，VWAP下方，VWAP 63,863
- 1d结构：阴线 O:63,557 H:63,590 L:62,764 C:62,890，VWAP上方，VWAP 62,775
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.25B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 56,598 / 69,175；25x 多/空 60,371 / 65,402；50x 多/空 61,629 / 64,144。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 62,890 / ask 62,891，spread 1.0000 (0.0016%)，top20 bid 62.21 / ask 163.42，卖盘更厚，反弹上方抛压更明显
- 支撑：62,764-62,787
- 压力：63,777-63,784
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 63,777-63,784 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 63,777-63,784 且 short liquidation 扩大。

## 5. ETH

- 实时价格：1,859，24h 相对 prevDay：-1.15%
- 成交/持仓：24h notional volume $478M，base volume 256K ETH，Hyperliquid OI 954K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -1.74%，区间 1,821-1,936，位置 32.7%，VWAP 1,895；30d +4.34%，区间 1,713-1,981，位置 54.3%，VWAP 1,856
- 1h结构：阳线 O:1,856 H:1,862 L:1,855 C:1,859，VWAP下方，VWAP 1,860
- 4h结构：阳线 O:1,856 H:1,862 L:1,855 C:1,859，VWAP下方，VWAP 1,900
- 1d结构：阴线 O:1,885 H:1,885 L:1,851 C:1,859，VWAP上方，VWAP 1,785
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.77B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,673 / 2,044；25x 多/空 1,784 / 1,933；50x 多/空 1,821 / 1,896。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,858 / ask 1,859，spread 0.1000 (0.0054%)，top20 bid 5.60K / ask 6.87K，买卖盘接近平衡
- 支撑：1,855-1,855
- 压力：1,897-1,899
- 判断：震荡。价格低于1h VWAP；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,897-1,899 或跌破 1,855-1,855 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：72.92，24h 相对 prevDay：-0.81%
- 成交/持仓：24h notional volume $67.9M，base volume 925K SOL，Hyperliquid OI 4.10M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.66%，区间 70.55-75.27，位置 50.2%，VWAP 73.44；30d -10.83%，区间 70.55-83.76，位置 17.9%，VWAP 76.81
- 1h结构：阳线 O:72.87 H:73.04 L:72.81 C:72.92，VWAP上方，VWAP 72.64
- 4h结构：阳线 O:72.87 H:73.04 L:72.81 C:72.92，VWAP下方，VWAP 73.94
- 1d结构：阴线 O:73.58 H:73.63 L:72.68 C:72.92，VWAP下方，VWAP 75.56
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $299M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 65.62 / 80.21；25x 多/空 70.00 / 75.83；50x 多/空 71.46 / 74.37。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 72.92 / ask 72.92，spread 0.0010 (0.0014%)，top20 bid 2.94K / ask 21.3K，卖盘更厚，反弹上方抛压更明显
- 支撑：72.88-72.91
- 压力：74.18-74.27
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 74.18-74.27 或跌破 72.88-72.91 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| KAITO |98.1 |-18.25% |$26.3M |$24.8M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| PUMP |95.0 |-8.88% |$19.2M |$54.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |94.1 |-5.44% |$9.56M |$73.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ONDO |88.6 |-5.89% |$4.20M |$12.1M |+<0.1% |不碰：流动性/OI 偏低 |
| PENDLE |87.9 |-5.00% |$1.37M |$5.82M |-<0.1% |不碰：流动性/OI 偏低 |
| FARTCOIN |87.6 |-3.50% |$5.13M |$19.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |86.3 |-3.04% |$2.22M |$21.4M |+<0.1% |不碰：流动性/OI 偏低 |
| CASHCAT |86.3 |+14.86% |$1.97M |$6.86M |+<0.1% |不碰：流动性/OI 偏低 |

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
