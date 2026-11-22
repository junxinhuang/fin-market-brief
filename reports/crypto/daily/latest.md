# 每日加密交易决策

生成时间：2026/11/23 04:22:25 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 11 / Extreme Fear；ETH gas 0.1251 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Sun, 22 Nov 2026 11:25:27 +0000)
- Cointelegraph: Bitcoin briefly drops to $17K on Kraken, exchange upholds trades (Sun, 22 Nov 2026 09:33:06 +0000)
- Cointelegraph: South Korean exchanges halt CYBER transfers amid suspected bridge exploit (Sun, 22 Nov 2026 07:24:05 +0000)
- Decrypt: Is the AI Bubble Finally Popping? Nvidia Crashes 48% as Wall Street Experts Sound the Alarm (Sat, 21 Nov 2026 14:01:06 +0000)
- Decrypt: Cathie Wood Bets $91M on Anthropic IPO While Paring Crypto Exposure (Fri, 20 Nov 2026 18:46:03 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：60,607，24h 相对 prevDay：+0.28%
- 成交/持仓：24h notional volume $3.16B，base volume 52.4K BTC，Hyperliquid OI 40.9K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -7.22%，区间 55,170-65,679，位置 51.8%，VWAP 61,702；30d -25.34%，区间 55,170-81,955，位置 20.3%，VWAP 69,877
- 1h结构：阴线 O:60,699 H:60,727 L:60,589 C:60,611，VWAP上方，VWAP 60,041
- 4h结构：阴线 O:60,699 H:60,727 L:60,589 C:60,611，VWAP下方，VWAP 62,234
- 1d结构：阳线 O:60,183 H:61,646 L:58,739 C:60,611，VWAP下方，VWAP 72,239
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.48B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 54,546 / 66,668；25x 多/空 58,183 / 63,031；50x 多/空 59,395 / 61,819。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 60,610 / ask 60,611，spread 1.0000 (0.0016%)，top20 bid 59.30 / ask 115.91，卖盘更厚，反弹上方抛压更明显
- 支撑：60,586-60,589
- 压力：61,394-61,646
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 61,394-61,646 或跌破 60,586-60,589 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,713，24h 相对 prevDay：+1.57%
- 成交/持仓：24h notional volume $518M，base volume 306K ETH，Hyperliquid OI 617K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -6.62%，区间 1,537-1,866，位置 53.4%，VWAP 1,716；30d -28.23%，区间 1,537-2,450，位置 19.3%，VWAP 2,033
- 1h结构：阴线 O:1,715 H:1,715 L:1,712 C:1,713，VWAP上方，VWAP 1,686
- 4h结构：阴线 O:1,715 H:1,715 L:1,712 C:1,713，VWAP下方，VWAP 1,730
- 1d结构：阳线 O:1,685 H:1,731 L:1,648 C:1,713，VWAP下方，VWAP 2,125
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.06B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,542 / 1,884；25x 多/空 1,644 / 1,781；50x 多/空 1,679 / 1,747。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,713 / ask 1,713，spread 0.1000 (0.0058%)，top20 bid 7.50K / ask 6.64K，买卖盘接近平衡
- 支撑：1,712-1,713
- 压力：1,724-1,731
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,724-1,731 或跌破 1,712-1,713 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：70.02，24h 相对 prevDay：-0.85%
- 成交/持仓：24h notional volume $82.0M，base volume 1.17M SOL，Hyperliquid OI 4.08M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -3.72%，区间 64.88-75.76，位置 47.3%，VWAP 71.87；30d -31.86%，区间 64.88-103.85，位置 13.2%，VWAP 83.02
- 1h结构：阴线 O:70.27 H:70.28 L:69.97 C:70.03，VWAP上方，VWAP 69.61
- 4h结构：阴线 O:70.27 H:70.28 L:69.97 C:70.03，VWAP下方，VWAP 71.15
- 1d结构：阴线 O:70.27 H:71.38 L:68.68 C:70.03，VWAP下方，VWAP 87.97
- funding/premium：funding -<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $285M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 63.02 / 77.03；25x 多/空 67.22 / 72.82；50x 多/空 68.62 / 71.42。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 70.03 / ask 70.03，spread 0.0010 (0.0014%)，top20 bid 8.49K / ask 5.49K，买盘更厚，短线回踩承接较好
- 支撑：69.97-70.00
- 压力：70.91-71.38
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 70.91-71.38 或跌破 69.97-70.00 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |94.5 |+6.77% |$21.3M |$41.7M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |91.6 |+8.57% |$18.4M |$64.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |90.1 |+3.97% |$3.43M |$19.1M |-<0.1% |不碰：流动性/OI 偏低 |
| ENA |87.4 |+2.99% |$4.56M |$30.9M |+<0.1% |不碰：流动性/OI 偏低 |
| XMR |87.2 |+1.43% |$13.7M |$67.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |86.8 |-2.24% |$7.91M |$69.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CRV |86.2 |+1.95% |$2.91M |$7.70M |-<0.1% |不碰：流动性/OI 偏低 |
| MON |86.0 |-4.95% |$1.82M |$26.1M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: GTA 6 Leaker Dangles a PC Port Behind a $15 Million Crypto Pump (Sat, 21 Nov 2026 18:01:02 +0000)

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
