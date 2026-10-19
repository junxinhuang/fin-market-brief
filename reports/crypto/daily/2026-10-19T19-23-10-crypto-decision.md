# 每日加密交易决策

生成时间：2026/10/20 03:23:10 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：偏空
- 今日主策略：主策略是反弹做空弱势币，避免在刚强平后追空。
- 风险偏好：mixed。跨资产信号混合，crypto 方向主要看 BTC 结构、funding/OI 和新闻催化。
- 情绪代理：Fear & Greed 59 / Greed；ETH gas 0.1920 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Decrypt: JPMorgan's JPM Coin Arrives on Ethereum, Putting Bank Dollars on a Public Blockchain (Mon, 19 Oct 2026 17:31:04 +0000)
- Decrypt: Abandoned Bitcoin? Wallet Targeted by Noah Doe Lawsuit Moves $33 Million (Mon, 19 Oct 2026 16:46:05 +0000)
- Cointelegraph: Metaplanet to take 93.7% stake in Super League through 2,100 BTC deal (Mon, 19 Oct 2026 16:41:55 +0000)
- Cointelegraph: Strive buys $335M in Bitcoin, boosting holdings to 36,818 BTC (Mon, 19 Oct 2026 16:30:18 +0000)
- Cointelegraph: Bitcoin is rejected at $83K as US bond yields reverse higher with equities (Mon, 19 Oct 2026 16:05:57 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：81,873，24h 相对 prevDay：+1.04%
- 成交/持仓：24h notional volume $2.55B，base volume 31.1K BTC，Hyperliquid OI 39.7K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d +<0.1%，区间 79,732-84,133，位置 48.7%，VWAP 82,078；30d +0.72%，区间 79,732-87,471，位置 27.7%，VWAP 83,656
- 1h结构：阴线 O:81,939 H:81,963 L:81,836 C:81,874，VWAP下方，VWAP 81,878
- 4h结构：阴线 O:81,927 H:82,136 L:81,744 C:81,874，VWAP下方，VWAP 82,239
- 1d结构：阴线 O:82,078 H:83,138 L:81,719 C:81,874，VWAP上方，VWAP 81,779
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.25B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 73,686 / 90,060；25x 多/空 78,598 / 85,148；50x 多/空 80,236 / 83,510。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 81,873 / ask 81,874，spread 1.0000 (0.0012%)，top20 bid 111.69 / ask 29.81，买盘更厚，短线回踩承接较好
- 支撑：81,765-81,836
- 压力：83,073-83,138
- 判断：偏空。价格低于1h VWAP；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：反弹压力失败后做空，不在支撑位追空
- 触发条件：反弹 83,073-83,138 失败，1h 收不回 VWAP 后试空。
- 失效条件：放量站上 83,073-83,138 且 short liquidation 扩大。

## 5. ETH

- 实时价格：2,398，24h 相对 prevDay：+1.65%
- 成交/持仓：24h notional volume $1.06B，base volume 445K ETH，Hyperliquid OI 1.08M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.95%，区间 2,314-2,537，位置 37.5%，VWAP 2,434；30d -8.91%，区间 2,314-2,810，位置 16.9%，VWAP 2,589
- 1h结构：阴线 O:2,400 H:2,401 L:2,396 C:2,398，VWAP上方，VWAP 2,389
- 4h结构：阳线 O:2,393 H:2,407 L:2,387 C:2,398，VWAP下方，VWAP 2,443
- 1d结构：阴线 O:2,409 H:2,446 L:2,384 C:2,398，VWAP下方，VWAP 2,556
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.59B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,158 / 2,638；25x 多/空 2,302 / 2,494；50x 多/空 2,350 / 2,446。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,398 / ask 2,398，spread 0.1000 (0.0042%)，top20 bid 4.65K / ask 3.21K，买盘更厚，短线回踩承接较好
- 支撑：2,393-2,396
- 压力：2,445-2,446
- 判断：震荡。价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 2,445-2,446 或跌破 2,393-2,396 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：103.91，24h 相对 prevDay：+2.21%
- 成交/持仓：24h notional volume $231M，base volume 2.22M SOL，Hyperliquid OI 5.50M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期仍弱；7d -1.69%，区间 100.34-108.98，位置 41.3%，VWAP 104.89；30d -6.46%，区间 100.34-124.95，位置 14.5%，VWAP 113.67
- 1h结构：阴线 O:103.97 H:104.03 L:103.77 C:103.91，VWAP上方，VWAP 103.83
- 4h结构：阴线 O:104.08 H:104.71 L:103.62 C:103.91，VWAP下方，VWAP 105.52
- 1d结构：阴线 O:104.07 H:106.15 L:103.49 C:103.91，VWAP下方，VWAP 110.90
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $571M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 93.52 / 114.30；25x 多/空 99.75 / 108.07；50x 多/空 101.83 / 105.99。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 103.91 / ask 103.92，spread 0.0100 (0.0096%)，top20 bid 52.8K / ask 55.5K，买卖盘接近平衡
- 支撑：103.77-103.89
- 压力：105.92-106.15
- 判断：震荡。24h 价格走强；价格站在1h VWAP上方；价格低于4h VWAP；价格仍低于30d日线VWAP，中期反弹尚未确认反转
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 105.92-106.15 或跌破 103.77-103.89 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| PUMP |97.9 |+8.26% |$132M |$139M |-<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |94.1 |+5.17% |$197M |$291M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZEC |93.5 |+5.81% |$336M |$502M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| VVV |92.6 |+12.68% |$21.4M |$69.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ARB |92.4 |+8.19% |$21.5M |$19.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ZRO |92.0 |+7.03% |$23.9M |$67.7M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |91.6 |+4.00% |$37.3M |$82.2M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |90.9 |+5.59% |$15.4M |$122M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Decrypt: Zcash Developer Zakura Proposes Fix to Stop Quantum Computers Linking Shielded Swaps (Mon, 19 Oct 2026 10:11:21 +0000)

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
