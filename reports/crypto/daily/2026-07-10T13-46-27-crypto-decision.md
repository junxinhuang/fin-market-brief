# 每日加密交易决策

生成时间：2026/07/10 21:46:27 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 23 / Extreme Fear；ETH gas 0.2438 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Japanese lender launches Bitcoin-backed loans of up to $6.2M (Fri, 10 Jul 2026 11:24:06 +0000)
- Cointelegraph: TeraWulf eyes $3.5B debt raise for Anthropic-linked data center: Report (Fri, 10 Jul 2026 10:14:51 +0000)
- Cointelegraph: Metaplanet explores Bitcoin-backed digital credit with JPYC in Japan (Fri, 10 Jul 2026 09:58:10 +0000)
- Cointelegraph: Bitcoin returns to $64.3K with new 3-week BTC price highs imminent (Fri, 10 Jul 2026 09:32:23 +0000)
- Cointelegraph: Robinhood Chain sees over $70M in ETH bridged during first week (Fri, 10 Jul 2026 05:44:20 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：64,425，24h 相对 prevDay：+2.33%
- 成交/持仓：24h notional volume $1.66B，base volume 26.1K BTC，Hyperliquid OI 36.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.96%，区间 61,342-64,698，位置 92.0%，VWAP 63,420；30d +4.79%，区间 57,768-67,283，位置 70.0%，VWAP 62,441
- 1h结构：阳线 O:64,285 H:64,458 L:64,153 C:64,430，VWAP上方，VWAP 63,216
- 4h结构：阳线 O:64,423 H:64,609 L:64,153 C:64,430，VWAP上方，VWAP 62,875
- 1d结构：阳线 O:63,224 H:64,609 L:62,922 C:64,430，VWAP上方，VWAP 63,036
- funding/premium：funding +<0.1%，premium +0.000%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.36B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,983 / 70,868；25x 多/空 61,848 / 67,002；50x 多/空 63,137 / 65,714。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 64,430 / ask 64,431，spread 1.0000 (0.0016%)，top20 bid 112.37 / ask 43.87，买盘更厚，短线回踩承接较好
- 支撑：64,263-64,335
- 压力：64,496-64,609
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 64,263-64,335 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 64,263-64,335 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,803，24h 相对 prevDay：+3.28%
- 成交/持仓：24h notional volume $690M，base volume 391K ETH，Hyperliquid OI 797K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.50%，区间 1,713-1,834，位置 74.6%，VWAP 1,773；30d +11.25%，区间 1,511-1,850，位置 86.4%，VWAP 1,695
- 1h结构：阳线 O:1,794 H:1,804 L:1,793 C:1,803，VWAP上方，VWAP 1,760
- 4h结构：阳线 O:1,801 H:1,807 L:1,793 C:1,803，VWAP上方，VWAP 1,756
- 1d结构：阳线 O:1,745 H:1,807 L:1,738 C:1,803，VWAP上方，VWAP 1,702
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.44B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,623 / 1,983；25x 多/空 1,731 / 1,875；50x 多/空 1,767 / 1,839。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,803 / ask 1,803，spread 0.1000 (0.0055%)，top20 bid 3.95K / ask 4.74K，买卖盘接近平衡
- 支撑：1,793-1,794
- 压力：1,804-1,807
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,793-1,794 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,793-1,794 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：79.03，24h 相对 prevDay：+1.25%
- 成交/持仓：24h notional volume $143M，base volume 1.82M SOL，Hyperliquid OI 5.47M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d -4.04%，区间 76.28-83.99，位置 35.6%，VWAP 80.33；30d +25.10%，区间 63.17-83.99，位置 76.2%，VWAP 73.85
- 1h结构：阳线 O:78.90 H:79.09 L:78.79 C:79.03，VWAP上方，VWAP 78.29
- 4h结构：阴线 O:79.37 H:79.53 L:78.79 C:79.03，VWAP下方，VWAP 80.50
- 1d结构：阳线 O:78.02 H:79.66 L:77.79 C:79.03，VWAP上方，VWAP 71.93
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $432M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 71.12 / 86.93；25x 多/空 75.86 / 82.19；50x 多/空 77.45 / 80.61。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 79.01 / ask 79.01，spread 0.0010 (0.0013%)，top20 bid 6.18K / ask 4.63K，买盘更厚，短线回踩承接较好
- 支撑：78.85-78.94
- 压力：79.54-79.66
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 79.54-79.66 或跌破 78.85-78.94 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| LIT |96.4 |+3.90% |$37.3M |$143M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| UNI |95.0 |+10.16% |$20.5M |$20.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |94.7 |+8.47% |$109M |$265M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |92.7 |+5.78% |$15.4M |$91.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |91.3 |+4.27% |$10.4M |$14.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ARB |91.2 |+7.49% |$28.2M |$9.68M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| SUI |91.0 |+3.53% |$25.1M |$24.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| DOGE |89.5 |+2.48% |$5.63M |$27.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

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
