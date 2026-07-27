# 每日加密交易决策

生成时间：2026/07/27 12:57:55 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏多但降仓
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 30 / Fear；ETH gas 0.0367 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Sun, 26 Jul 2026 21:30:00 +0000)
- Cointelegraph: Bitcoin OG selling eases as dormant BTC movement hits 4-year low: Galaxy (Sun, 26 Jul 2026 13:06:00 +0000)
- Cointelegraph: Bitcoin advocacy group to join US State Department’s ‘digital freedom’ program (Sat, 25 Jul 2026 18:19:00 +0000)
- Cointelegraph: Ethereum ETFs close week in red, end 5-day inflow streak (Sat, 25 Jul 2026 07:43:00 +0000)
- Cointelegraph: Strive’s SATA recovers most of June decline, trades within 3% of par (Fri, 24 Jul 2026 21:02:22 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：65,281，24h 相对 prevDay：+1.21%
- 成交/持仓：24h notional volume $855M，base volume 13.2K BTC，Hyperliquid OI 36.6K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +<0.1%，区间 63,730-66,918，位置 48.5%，VWAP 65,351；30d +8.80%，区间 57,768-66,918，位置 82.1%，VWAP 63,164
- 1h结构：阳线 O:65,261 H:65,470 L:65,225 C:65,277，VWAP上方，VWAP 64,809
- 4h结构：阳线 O:65,261 H:65,470 L:65,225 C:65,277，VWAP上方，VWAP 65,262
- 1d结构：阴线 O:65,372 H:65,470 L:64,866 C:65,277，VWAP上方，VWAP 62,799
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.39B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 58,753 / 71,809；25x 多/空 62,670 / 67,892；50x 多/空 63,975 / 66,587。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 65,277 / ask 65,278，spread 1.0000 (0.0015%)，top20 bid 136.87 / ask 37.35，买盘更厚，短线回踩承接较好
- 支撑：65,225-65,253
- 压力：65,484-65,561
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 65,225-65,253 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 65,225-65,253 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,954，24h 相对 prevDay：+3.60%
- 成交/持仓：24h notional volume $608M，base volume 316K ETH，Hyperliquid OI 1.06M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.59%，区间 1,847-1,968，位置 88.1%，VWAP 1,907；30d +24.20%，区间 1,548-1,968，位置 96.6%，VWAP 1,796
- 1h结构：阳线 O:1,949 H:1,962 L:1,948 C:1,954，VWAP上方，VWAP 1,919
- 4h结构：阳线 O:1,949 H:1,962 L:1,948 C:1,954，VWAP上方，VWAP 1,902
- 1d结构：阴线 O:1,954 H:1,962 L:1,936 C:1,954，VWAP上方，VWAP 1,752
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.07B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,758 / 2,149；25x 多/空 1,875 / 2,032；50x 多/空 1,914 / 1,993。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,954 / ask 1,954，spread 0.1000 (0.0051%)，top20 bid 6.69K / ask 6.46K，买卖盘接近平衡
- 支撑：1,946-1,948
- 压力：1,962-1,968
- 判断：偏多。24h 价格走强；价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,946-1,948 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,946-1,948 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：76.33，24h 相对 prevDay：+1.72%
- 成交/持仓：24h notional volume $128M，base volume 1.69M SOL，Hyperliquid OI 4.35M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短线反弹，但仍低于30d成本区；7d -1.90%，区间 73.40-78.86，位置 53.6%，VWAP 76.24；30d +8.34%，区间 69.47-83.99，位置 47.2%，VWAP 77.54
- 1h结构：阴线 O:76.38 H:76.62 L:76.26 C:76.33，VWAP上方，VWAP 75.49
- 4h结构：阴线 O:76.38 H:76.62 L:76.26 C:76.33，VWAP下方，VWAP 76.38
- 1d结构：阴线 O:76.74 H:76.77 L:75.98 C:76.33，VWAP上方，VWAP 74.87
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $332M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 68.70 / 83.96；25x 多/空 73.28 / 79.38；50x 多/空 74.80 / 77.86。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 76.33 / ask 76.33，spread 0.0010 (0.0013%)，top20 bid 13.1K / ask 9.75K，买盘更厚，短线回踩承接较好
- 支撑：76.26-76.30
- 压力：76.79-77.10
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 76.79-77.10 或跌破 76.26-76.30 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| KAITO |95.2 |+17.04% |$18.4M |$10.7M |-<0.1% |只观察：衍生品拥挤或溢价异常 |
| CASHCAT |93.4 |-11.05% |$6.81M |$8.97M |+<0.1% |只观察：衍生品拥挤或溢价异常 |
| ZEC |92.8 |+3.16% |$42.3M |$262M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |92.0 |+6.45% |$13.7M |$89.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| AAVE |91.7 |+8.89% |$12.0M |$89.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |91.0 |+2.91% |$131M |$1.35B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| WLD |90.0 |+5.14% |$11.3M |$40.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |89.9 |+10.44% |$38.5M |$58.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Stocks Just Topped Crypto on Hyperliquid. ARK Says That Changes Everything (Fri, 24 Jul 2026 22:03:16 +0000)

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
