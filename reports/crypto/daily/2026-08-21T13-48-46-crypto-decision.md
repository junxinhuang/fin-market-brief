# 每日加密交易决策

生成时间：2026/08/21 21:48:46 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 72 / Greed；ETH gas 0.6560 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Standard Chartered wavers on $100K Bitcoin year-end call, says it may be ‘too low’ (Fri, 21 Aug 2026 11:58:10 +0000)
- Cointelegraph: Strategy Bitcoin treasury hits breakeven point as BTC price passes $77K (Fri, 21 Aug 2026 08:48:52 +0000)
- Cointelegraph: Bitcoin ETFs draw $608M as Ether ETFs see largest inflow since October (Fri, 21 Aug 2026 07:50:01 +0000)
- Cointelegraph: Here’s what happened in crypto today (Fri, 21 Aug 2026 05:53:11 +0000)
- Cointelegraph: Bitcoin breaks above 200-day moving average for first time since November (Thu, 20 Aug 2026 21:03:21 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：77,287，24h 相对 prevDay：+7.88%
- 成交/持仓：24h notional volume $7.62B，base volume 101K BTC，Hyperliquid OI 34.0K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +22.53%，区间 62,678-79,584，位置 86.1%，VWAP 71,059；30d +16.86%，区间 62,237-79,584，位置 86.4%，VWAP 66,524
- 1h结构：阳线 O:77,231 H:77,485 L:76,256 C:77,251，VWAP上方，VWAP 74,277
- 4h结构：阳线 O:76,768 H:77,510 L:76,256 C:77,231，VWAP上方，VWAP 69,285
- 1d结构：阳线 O:73,001 H:79,584 L:73,001 C:77,229，VWAP上方，VWAP 66,024
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.63B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 69,558 / 85,016；25x 多/空 74,196 / 80,378；50x 多/空 75,741 / 78,833。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 77,238 / ask 77,239，spread 1.0000 (0.0013%)，top20 bid 86.92 / ask 9.88，买盘更厚，短线回踩承接较好
- 支撑：76,287-76,551
- 压力：79,408-79,584
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 76,287-76,551 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 76,287-76,551 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,395，24h 相对 prevDay：+5.31%
- 成交/持仓：24h notional volume $2.99B，base volume 1.27M ETH，Hyperliquid OI 916K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +27.33%，区间 1,869-2,450，位置 90.6%，VWAP 2,228；30d +23.89%，区间 1,821-2,450，位置 91.3%，VWAP 2,010
- 1h结构：阳线 O:2,389 H:2,402 L:2,370 C:2,395，VWAP上方，VWAP 2,337
- 4h结构：阳线 O:2,372 H:2,402 L:2,367 C:2,395，VWAP上方，VWAP 2,136
- 1d结构：阳线 O:2,328 H:2,450 L:2,326 C:2,395，VWAP上方，VWAP 1,973
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.19B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,156 / 2,635；25x 多/空 2,299 / 2,491；50x 多/空 2,347 / 2,443。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,396 / ask 2,396，spread 0.1000 (0.0042%)，top20 bid 2.77K / ask 1.29K，买盘更厚，短线回踩承接较好
- 支撑：2,372-2,392
- 压力：2,448-2,450
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 2,372-2,392 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 2,372-2,392 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：91.01，24h 相对 prevDay：+4.89%
- 成交/持仓：24h notional volume $528M，base volume 5.88M SOL，Hyperliquid OI 4.68M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +20.86%，区间 74.09-93.45，位置 87.8%，VWAP 85.45；30d +16.87%，区间 70.55-93.45，位置 89.7%，VWAP 77.87
- 1h结构：阳线 O:90.88 H:91.19 L:89.83 C:91.09，VWAP上方，VWAP 89.27
- 4h结构：阳线 O:90.32 H:91.19 L:89.83 C:91.09，VWAP上方，VWAP 83.35
- 1d结构：阳线 O:87.65 H:93.45 L:87.57 C:91.09，VWAP上方，VWAP 77.49
- funding/premium：funding +<0.1%，premium +0.115%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $426M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 81.91 / 100.11；25x 多/空 87.37 / 94.65；50x 多/空 89.19 / 92.83。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 91.09 / ask 91.09，spread 0.0010 (0.0011%)，top20 bid 2.67K / ask 2.14K，买卖盘接近平衡
- 支撑：90.36-90.88
- 压力：93.38-93.45
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 90.36-90.88 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 90.36-90.88 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |96.0 |+19.06% |$167M |$145M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| FARTCOIN |94.1 |+19.02% |$32.3M |$38.6M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| XRP |93.9 |+17.51% |$431M |$179M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |93.6 |+45.99% |$82.8M |$57.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |93.4 |+14.89% |$45.1M |$69.5M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZEC |93.3 |+14.38% |$385M |$348M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| kPEPE |91.6 |+15.78% |$27.1M |$29.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XPL |90.5 |+27.22% |$26.7M |$28.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: XRP Notches Best Week Since 2024 Election Pump on Bitcoin Short Squeeze (Thu, 20 Aug 2026 17:46:08 +0000)

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
