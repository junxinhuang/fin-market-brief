# 每日加密交易决策

生成时间：2026/07/06 09:16:50 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏多但降仓
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 24 / Extreme Fear；ETH gas 0.1634 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Dubai tops Asian crypto hubs, India isolates banks from crypto: Asia Express (Sun, 05 Jul 2026 23:35:03 +0000)
- Cointelegraph: Bitcoin nears $63.5K into weekly close as trader warns of 'terrible' Monday (Sun, 05 Jul 2026 16:06:20 +0000)
- Cointelegraph: Binance outflows triple to $1.2B as ETH withdrawals hit 3-year high (Sun, 05 Jul 2026 08:33:39 +0000)
- Cointelegraph: Here’s what happened in crypto today (Sun, 05 Jul 2026 03:51:24 +0000)
- Cointelegraph: Vitalik Buterin shares top priorities for new 'Lean Ethereum' strawmap (Sun, 05 Jul 2026 03:50:36 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：63,772，24h 相对 prevDay：+1.25%
- 成交/持仓：24h notional volume $1.24B，base volume 19.7K BTC，Hyperliquid OI 35.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +5.89%，区间 57,768-63,997，位置 96.5%，VWAP 61,102；30d +4.79%，区间 57,768-67,283，位置 63.2%，VWAP 62,283
- 1h结构：阳线 O:63,757 H:63,860 L:63,685 C:63,777，VWAP上方，VWAP 63,123
- 4h结构：阳线 O:63,635 H:63,860 L:63,323 C:63,777，VWAP上方，VWAP 60,644
- 1d结构：阳线 O:63,635 H:63,860 L:63,323 C:63,777，VWAP上方，VWAP 63,722
- funding/premium：funding +<0.1%，premium +0.000%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.26B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 57,395 / 70,149；25x 多/空 61,221 / 66,323；50x 多/空 62,497 / 65,047。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 63,777 / ask 63,778，spread 1.0000 (0.0016%)，top20 bid 124.67 / ask 31.02，买盘更厚，短线回踩承接较好
- 支撑：63,323-63,685
- 压力：63,941-63,997
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 63,323-63,685 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 63,323-63,685 且 OI 上升、价格不收回。

## 5. ETH

- 实时价格：1,792，24h 相对 prevDay：+1.12%
- 成交/持仓：24h notional volume $348M，base volume 196K ETH，Hyperliquid OI 781K ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +11.19%，区间 1,550-1,809，位置 93.7%，VWAP 1,680；30d +14.26%，区间 1,511-1,850，位置 83.2%，VWAP 1,678
- 1h结构：阴线 O:1,794 H:1,796 L:1,792 C:1,792，VWAP上方，VWAP 1,782
- 4h结构：阳线 O:1,786 H:1,796 L:1,776 C:1,792，VWAP上方，VWAP 1,655
- 1d结构：阳线 O:1,786 H:1,796 L:1,776 C:1,793，VWAP上方，VWAP 1,718
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $1.40B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 1,613 / 1,971；25x 多/空 1,721 / 1,864；50x 多/空 1,756 / 1,828。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 1,793 / ask 1,793，spread 0.2000 (0.0112%)，top20 bid 8.98K / ask 7.37K，买卖盘接近平衡
- 支撑：1,783-1,792
- 压力：1,804-1,809
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 1,783-1,792 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 1,783-1,792 且 OI 上升、价格不收回。

## 6. SOL

- 实时价格：82.01，24h 相对 prevDay：+1.00%
- 成交/持仓：24h notional volume $238M，base volume 2.94M SOL，Hyperliquid OI 5.95M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +9.09%，区间 71.90-83.99，位置 83.7%，VWAP 79.19；30d +31.93%，区间 61.92-83.99，位置 91.1%，VWAP 71.86
- 1h结构：阴线 O:82.20 H:82.32 L:81.92 C:82.04，VWAP上方，VWAP 81.29
- 4h结构：阳线 O:81.58 H:82.32 L:81.11 C:82.04，VWAP上方，VWAP 77.20
- 1d结构：阳线 O:81.58 H:82.32 L:81.11 C:82.02，VWAP上方，VWAP 71.70
- funding/premium：funding +<0.1%，premium +<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $488M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 73.81 / 90.21；25x 多/空 78.73 / 85.29；50x 多/空 80.37 / 83.65。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 82.02 / ask 82.02，spread 0.0010 (0.0012%)，top20 bid 7.67K / ask 9.46K，买卖盘接近平衡
- 支撑：81.44-81.92
- 压力：82.32-82.50
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好；7d涨幅较大且接近区间上沿，追多性价比下降
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 81.44-81.92 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 81.44-81.92 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| LIT |98.3 |+18.76% |$68.7M |$147M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| PUMP |96.7 |+8.25% |$12.6M |$49.5M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| HYPE |96.3 |+4.67% |$260M |$1.59B |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |92.9 |+2.39% |$15.7M |$81.8M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| FARTCOIN |92.1 |+3.83% |$11.6M |$28.3M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| TRUMP |89.8 |-6.42% |$8.17M |$12.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| BNB |89.4 |+3.34% |$9.82M |$26.0M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |87.6 |+2.36% |$3.72M |$27.0M |+<0.1% |不碰：流动性/OI 偏低 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Senator Gillibrand Seeks to Ban Trump, Elected Officials From Launching Meme Coins (Fri, 03 Jul 2026 21:03:33 +0000)
- Cointelegraph: Donald Trump says ‘nothing wrong’ with $1.4B crypto windfall while in office (Fri, 03 Jul 2026 16:57:26 +0000)

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
