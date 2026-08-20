# 每日加密交易决策

生成时间：2026/08/20 21:45:44 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏多
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 62 / Greed；ETH gas 0.2875 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Thu, 20 Aug 2026 13:12:56 +0000)
- Cointelegraph: Bitcoin ETFs draw $517M in largest one-day inflow since early May (Thu, 20 Aug 2026 11:16:41 +0000)
- Cointelegraph: Crypto short liquidations pass $3B mark as Bitcoin price nears $72K (Thu, 20 Aug 2026 10:03:04 +0000)
- Cointelegraph: GnosisDAO approves Gnosis Chain for Ethereum Economic Zone (Thu, 20 Aug 2026 08:59:40 +0000)
- Decrypt: Bitcoin's Sharpest Rally in Five Months Flips Markets From Bearish to Coin Flip (Wed, 19 Aug 2026 22:18:01 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：71,635，24h 相对 prevDay：+10.18%
- 成交/持仓：24h notional volume $7.70B，base volume 112K BTC，Hyperliquid OI 35.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +12.84%，区间 62,523-72,501，位置 91.3%，VWAP 67,579；30d +7.68%，区间 62,237-72,501，位置 91.5%，VWAP 65,110
- 1h结构：阴线 O:71,931 H:72,068 L:71,134 C:71,636，VWAP上方，VWAP 68,962
- 4h结构：阴线 O:71,902 H:72,068 L:71,134 C:71,636，VWAP上方，VWAP 66,367
- 1d结构：阳线 O:69,323 H:72,501 L:68,898 C:71,632，VWAP上方，VWAP 64,943
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.56B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 64,472 / 78,799；25x 多/空 68,770 / 74,500；50x 多/空 70,202 / 73,068。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 71,631 / ask 71,632，spread 1.0000 (0.0014%)，top20 bid 37.47 / ask 223.50，卖盘更厚，反弹上方抛压更明显
- 支撑：71,134-71,485
- 压力：72,319-72,501
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 71,134-71,485 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 71,134-71,485 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：2,274，24h 相对 prevDay：+17.73%
- 成交/持仓：24h notional volume $4.40B，base volume 2.05M ETH，Hyperliquid OI 891K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +20.62%，区间 1,863-2,347，位置 85.0%，VWAP 2,145；30d +17.86%，区间 1,821-2,347，位置 86.2%，VWAP 1,967
- 1h结构：阴线 O:2,290 H:2,298 L:2,256 C:2,274，VWAP上方，VWAP 2,145
- 4h结构：阴线 O:2,297 H:2,301 L:2,256 C:2,274，VWAP上方，VWAP 2,048
- 1d结构：阳线 O:2,253 H:2,320 L:2,224 C:2,274，VWAP上方，VWAP 1,938
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.03B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,047 / 2,502；25x 多/空 2,183 / 2,365；50x 多/空 2,229 / 2,320。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,274 / ask 2,274，spread 0.1000 (0.0044%)，top20 bid 4.94K / ask 2.64K，买盘更厚，短线回踩承接较好
- 支撑：2,256-2,268
- 压力：2,320-2,347
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 2,256-2,268 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 2,256-2,268 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：86.76，24h 相对 prevDay：+10.57%
- 成交/持仓：24h notional volume $465M，base volume 5.59M SOL，Hyperliquid OI 4.56M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +13.82%，区间 74.09-88.16，位置 90.1%，VWAP 81.99；30d +11.10%，区间 70.55-88.16，位置 92.1%，VWAP 76.29
- 1h结构：阴线 O:87.07 H:87.48 L:86.24 C:86.77，VWAP上方，VWAP 82.81
- 4h结构：阴线 O:87.21 H:87.48 L:86.24 C:86.77，VWAP上方，VWAP 79.70
- 1d结构：阳线 O:85.38 H:88.16 L:84.02 C:86.77，VWAP上方，VWAP 76.34
- funding/premium：funding +<0.1%，premium +0.000%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $395M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 78.09 / 95.44；25x 多/空 83.29 / 90.24；50x 多/空 85.03 / 88.50。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 86.77 / ask 86.77，spread 0.0010 (0.0012%)，top20 bid 12.8K / ask 5.74K，买盘更厚，短线回踩承接较好
- 支撑：86.24-86.54
- 压力：87.99-88.16
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 86.24-86.54 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 86.24-86.54 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| HYPE |97.8 |+22.08% |$2.00B |$1.67B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| XRP |95.9 |+18.68% |$156M |$138M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| CASHCAT |94.8 |+35.49% |$15.9M |$18.4M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| PUMP |94.8 |+13.81% |$116M |$101M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| kPEPE |94.1 |+21.02% |$27.6M |$23.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |94.0 |+16.99% |$75.6M |$105M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.3 |+10.70% |$257M |$258M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |92.7 |+16.76% |$19.8M |$28.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: HYPE jumps 20% as Trump signals legal US path for Hyperliquid (Thu, 20 Aug 2026 05:52:30 +0000)
- Decrypt: Bitcoin's Sharpest Rally in Five Months Flips Markets From Bearish to Coin Flip (Wed, 19 Aug 2026 22:18:01 +0000)
- Decrypt: Trump Calls on Congress to Pass 'Fair Version' of Clarity Act at White House Crypto Meeting (Wed, 19 Aug 2026 19:56:45 +0000)
- Decrypt: Bitcoin Surges Toward $70K as $1.14 Billion in Crypto Shorts Get Rekt in an Hour (Wed, 19 Aug 2026 16:10:04 +0000)
- Decrypt: Coinbase Adds 50x Crypto Perps to Base App Through Hyperliquid (Wed, 19 Aug 2026 16:00:06 +0000)

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
