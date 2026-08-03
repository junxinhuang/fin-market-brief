# 每日加密交易决策

生成时间：2026/08/03 09:15:29 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡
- 今日主策略：主策略是等待确认，围绕支撑/压力做小仓区间，不做方向重注。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 28 / Fear；ETH gas 0.0375 gwei，链上交易很便宜，gas 本身不是风险源。
- 杠杆状态：Coinalyze 多空比和 OI history 已纳入；强平使用已发生强平流，不使用伪 heatmap。
- 仓位建议：总仓位 0%-20%，单笔 2%-5%，中间位置不开重仓。
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
- Cointelegraph: Coldcard exploit sparks Bitcoin flight, ‘bullish’ crypto consolidation: Hodler’s Digest, August 2 (Sun, 02 Aug 2026 23:44:04 +0000)
- Cointelegraph: Here’s what happened in crypto today (Sun, 02 Aug 2026 20:00:35 +0000)
- Decrypt: Coldcard Bitcoin Exploit Balloons to $88 Million as Attackers Keep Draining Wallets (Sun, 02 Aug 2026 17:18:51 +0000)
- Cointelegraph: Trump Media sells another 2,628 BTC, holdings fall to 4,261 BTC (Sun, 02 Aug 2026 09:31:00 +0000)
- Cointelegraph: Coldcard hack sparks biggest sub-1 BTC move since FTX: CryptoQuant (Sun, 02 Aug 2026 08:07:00 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,199，24h 相对 prevDay：+0.34%
- 成交/持仓：24h notional volume $1.14B，base volume 17.9K BTC，Hyperliquid OI 35.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -0.84%，区间 62,237-65,385，位置 30.7%，VWAP 63,675；30d +0.12%，区间 61,342-66,918，位置 33.4%，VWAP 64,136
- 1h结构：阴线 O:63,297 H:63,337 L:63,151 C:63,203，VWAP上方，VWAP 63,129
- 4h结构：阴线 O:63,557 H:63,590 L:63,151 C:63,203，VWAP下方，VWAP 63,878
- 1d结构：阴线 O:63,557 H:63,590 L:63,151 C:63,203，VWAP上方，VWAP 62,775
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.24B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 56,879 / 69,519；25x 多/空 60,671 / 65,727；50x 多/空 61,935 / 64,463。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,202 / ask 63,203，spread 1.0000 (0.0016%)，top20 bid 137.88 / ask 85.48，买盘更厚，短线回踩承接较好
- 支撑：63,129-63,151
- 压力：63,777-63,784
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 63,777-63,784 或跌破 63,129-63,151 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：1,871，24h 相对 prevDay：+0.84%
- 成交/持仓：24h notional volume $544M，base volume 291K ETH，Hyperliquid OI 953K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -1.10%，区间 1,821-1,936，位置 43.1%，VWAP 1,896；30d +5.02%，区间 1,713-1,981，位置 58.8%，VWAP 1,856
- 1h结构：阴线 O:1,873 H:1,875 L:1,868 C:1,871，VWAP上方，VWAP 1,860
- 4h结构：阴线 O:1,885 H:1,885 L:1,868 C:1,871，VWAP下方，VWAP 1,901
- 1d结构：阴线 O:1,885 H:1,885 L:1,868 C:1,871，VWAP上方，VWAP 1,785
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.78B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,684 / 2,058；25x 多/空 1,796 / 1,945；50x 多/空 1,833 / 1,908。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,871 / ask 1,871，spread 0.1000 (0.0053%)，top20 bid 6.45K / ask 7.64K，买卖盘接近平衡
- 支撑：1,868-1,868
- 压力：1,897-1,899
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 1,897-1,899 或跌破 1,868-1,868 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：73.07，24h 相对 prevDay：+0.84%
- 成交/持仓：24h notional volume $83.7M，base volume 1.14M SOL，Hyperliquid OI 4.11M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.48%，区间 70.55-75.27，位置 53.1%，VWAP 73.44；30d -10.67%，区间 70.55-83.76，位置 19.0%，VWAP 76.82
- 1h结构：阴线 O:73.17 H:73.23 L:72.97 C:73.06，VWAP上方，VWAP 72.64
- 4h结构：阴线 O:73.58 H:73.63 L:72.97 C:73.06，VWAP下方，VWAP 73.97
- 1d结构：阴线 O:73.58 H:73.63 L:72.97 C:73.06，VWAP下方，VWAP 75.56
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $301M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 65.76 / 80.38；25x 多/空 70.15 / 75.99；50x 多/空 71.61 / 74.53。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 73.07 / ask 73.07，spread 0.0010 (0.0014%)，top20 bid 7.72K / ask 14.2K，卖盘更厚，反弹上方抛压更明显
- 支撑：72.97-73.06
- 压力：74.18-74.27
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 74.18-74.27 或跌破 72.97-73.06 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| KAITO |97.4 |-19.46% |$20.9M |$23.2M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ADA |93.7 |+7.40% |$10.5M |$31.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |92.8 |-4.32% |$25.1M |$55.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |91.1 |+2.46% |$45.6M |$185M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |90.8 |+3.19% |$4.01M |$20.3M |-<0.1% |不碰：流动性/OI 偏低 |
| LINK |89.8 |+2.78% |$2.94M |$39.0M |+<0.1% |不碰：流动性/OI 偏低 |
| ENA |89.3 |+10.19% |$9.21M |$21.9M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CASHCAT |87.3 |+13.25% |$2.29M |$6.99M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Pump.fun laid off workers before they received millions in PUMP tokens: Report (Fri, 31 Jul 2026 19:16:19 +0000)

## 8. 仓位与执行

- 今日总仓位上限：总仓位 0%-20%，单笔 2%-5%，中间位置不开重仓。
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
