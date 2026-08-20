# 每日加密交易决策

生成时间：2026/08/20 09:15:43 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 62 / Greed；ETH gas 0.1187 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: Bitcoin's Sharpest Rally in Five Months Flips Markets From Bearish to Coin Flip (Wed, 19 Aug 2026 22:18:01 +0000)
- Cointelegraph: Bitcoin.com integrates UAE-registered US dollar stablecoin into self-custodial wallet (Wed, 19 Aug 2026 20:33:51 +0000)
- Decrypt: Crypto Stocks Rip Higher as Strategy Jumps 12%, Coinbase Climbs 9% (Wed, 19 Aug 2026 19:51:11 +0000)
- Cointelegraph: Here’s what happened in crypto today (Wed, 19 Aug 2026 19:50:07 +0000)
- Decrypt: Six-Bug Exploit Halts Maya Protocol After $1.4 Million in Bitcoin Stolen (Wed, 19 Aug 2026 18:20:35 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：69,366，24h 相对 prevDay：+7.55%
- 成交/持仓：24h notional volume $5.61B，base volume 83.4K BTC，Hyperliquid OI 34.4K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +9.25%，区间 62,523-70,224，位置 88.7%，VWAP 66,608；30d +4.24%，区间 62,237-70,224，位置 89.1%，VWAP 64,730
- 1h结构：阴线 O:69,399 H:69,502 L:69,262 C:69,349，VWAP上方，VWAP 67,336
- 4h结构：阳线 O:69,323 H:69,773 L:69,262 C:69,349，VWAP上方，VWAP 65,388
- 1d结构：阳线 O:69,323 H:69,773 L:69,262 C:69,350，VWAP上方，VWAP 64,666
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.39B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 62,429 / 76,303；25x 多/空 66,591 / 72,141；50x 多/空 67,979 / 70,753。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 69,349 / ask 69,350，spread 1.0000 (0.0014%)，top20 bid 99.90 / ask 63.61，买盘更厚，短线回踩承接较好
- 支撑：69,262-69,311
- 压力：70,046-70,224
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 69,262-69,311 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 69,262-69,311 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,257，24h 相对 prevDay：+17.82%
- 成交/持仓：24h notional volume $4.04B，base volume 1.94M ETH，Hyperliquid OI 856K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +19.73%，区间 1,863-2,347，位置 81.5%，VWAP 2,125；30d +16.99%，区间 1,821-2,347，位置 83.0%，VWAP 1,955
- 1h结构：阴线 O:2,263 H:2,269 L:2,250 C:2,257，VWAP上方，VWAP 2,094
- 4h结构：阳线 O:2,253 H:2,274 L:2,250 C:2,257，VWAP上方，VWAP 2,014
- 1d结构：阳线 O:2,253 H:2,274 L:2,250 C:2,257，VWAP上方，VWAP 1,928
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.93B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,032 / 2,483；25x 多/空 2,167 / 2,348；50x 多/空 2,212 / 2,303。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,257 / ask 2,258，spread 0.1000 (0.0044%)，top20 bid 5.05K / ask 3.23K，买盘更厚，短线回踩承接较好
- 支撑：2,250-2,252
- 压力：2,292-2,347
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 2,250-2,252 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 2,250-2,252 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：84.82，24h 相对 prevDay：+10.25%
- 成交/持仓：24h notional volume $444M，base volume 5.47M SOL，Hyperliquid OI 4.56M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +11.30%，区间 74.09-87.31，位置 81.3%，VWAP 81.35；30d +8.64%，区间 70.55-87.31，位置 85.3%，VWAP 76.00
- 1h结构：阴线 O:85.01 H:85.15 L:84.66 C:84.85，VWAP上方，VWAP 81.30
- 4h结构：阴线 O:85.38 H:85.80 L:84.66 C:84.85，VWAP上方，VWAP 78.84
- 1d结构：阴线 O:85.38 H:85.80 L:84.66 C:84.85，VWAP上方，VWAP 76.14
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $387M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 76.34 / 93.31；25x 多/空 81.43 / 88.22；50x 多/空 83.13 / 86.52。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 84.85 / ask 84.85，spread 0.0010 (0.0012%)，top20 bid 12.5K / ask 3.93K，买盘更厚，短线回踩承接较好
- 支撑：83.73-84.66
- 压力：86.86-87.31
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 83.73-84.66 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 83.73-84.66 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| HYPE |99.4 |+17.10% |$1.46B |$1.64B |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZEC |96.5 |+10.66% |$211M |$249M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |94.5 |+11.24% |$92.1M |$115M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |93.4 |+9.91% |$16.7M |$50.1M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |92.9 |+12.08% |$17.9M |$17.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |92.7 |+14.02% |$16.7M |$25.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |92.6 |+9.74% |$46.4M |$90.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |92.5 |+26.54% |$14.4M |$11.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Trump Calls on Congress to Pass 'Fair Version' of Clarity Act at White House Crypto Meeting (Wed, 19 Aug 2026 19:56:45 +0000)
- Decrypt: Coinbase Adds 50x Crypto Perps to Base App Through Hyperliquid (Wed, 19 Aug 2026 16:00:06 +0000)
- Decrypt: Winklevoss-Backed Cypherpunk Launches 'World's Largest' Zcash Mining Fleet (Wed, 19 Aug 2026 09:31:03 +0000)

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
