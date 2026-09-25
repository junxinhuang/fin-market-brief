# 每日加密交易决策

生成时间：2026/09/25 14:13:58 北京时间
覆盖资产：BTC / ETH / SOL / 热门永续候选

## 1. 总判断

- 市场状态：震荡偏多但降仓
- 今日主策略：主策略是回踩做多 BTC/ETH/SOL 中结构最强者，热门币只做确认后的短线机会。
- 风险偏好：risk-off。跨资产环境压制风险资产，crypto 反弹更容易被视为减仓/反弹做空窗口。
- 情绪代理：Fear & Greed 71 / Greed；ETH gas 0.2656 gwei，链上交易很便宜，gas 本身不是风险源。
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
- Cointelegraph: Here’s what happened in crypto today (Fri, 25 Sep 2026 05:30:56 +0000)
- Cointelegraph: Researchers propose Zcash-style private Bitcoin transfers without a soft fork (Fri, 25 Sep 2026 04:41:06 +0000)
- Cointelegraph: Block brings Bitcoin Lightning payments to x402 for AI agents (Fri, 25 Sep 2026 02:00:54 +0000)
- Cointelegraph: Bitcoin price steadies, ONDO rallies as US Treasury yields hit 2007 highs (Thu, 24 Sep 2026 20:32:16 +0000)
- Cointelegraph: Sequans exits Bitcoin treasury strategy after selling remaining 314 BTC (Thu, 24 Sep 2026 17:13:38 +0000)

交易含义：新闻如果只带来短线拉升，但 OI 上升、long ratio 偏高且价格不再创新高，容易变成反弹末端；如果新闻后价格守住 VWAP 并且回踩缩量，则更像可交易的修复。

## 4. BTC

- 实时价格：84,001，24h 相对 prevDay：-<0.1%
- 成交/持仓：24h notional volume $3.88B，base volume 46.1K BTC，Hyperliquid OI 39.5K BTC；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +3.79%，区间 80,148-87,471，位置 52.3%，VWAP 84,743；30d +6.27%，区间 74,903-87,471，位置 72.2%，VWAP 79,702
- 1h结构：阴线 O:84,186 H:84,219 L:83,964 C:83,979，VWAP下方，VWAP 84,067
- 4h结构：阴线 O:84,221 H:84,339 L:83,964 C:83,981，VWAP上方，VWAP 83,077
- 1d结构：阴线 O:84,386 H:84,876 L:83,964 C:83,981，VWAP上方，VWAP 77,965
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $3.32B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 75,601 / 92,401；25x 多/空 80,641 / 87,361；50x 多/空 82,321 / 85,681。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 83,980 / ask 83,981，spread 1.0000 (0.0012%)，top20 bid 30.11 / ask 36.12，买卖盘接近平衡
- 支撑：83,891-83,964
- 压力：84,876-84,925
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 84,876-84,925 或跌破 83,891-83,964 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 5. ETH

- 实时价格：2,672，24h 相对 prevDay：-0.58%
- 成交/持仓：24h notional volume $1.04B，base volume 389K ETH，Hyperliquid OI 1.07M ETH；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：中期震荡修复；7d +2.24%，区间 2,563-2,810，位置 44.0%，VWAP 2,707；30d +6.59%，区间 2,356-2,810，位置 69.5%，VWAP 2,522
- 1h结构：阴线 O:2,680 H:2,680 L:2,671 C:2,671，VWAP下方，VWAP 2,674
- 4h结构：阴线 O:2,679 H:2,685 L:2,671 C:2,671，VWAP上方，VWAP 2,649
- 1d结构：阴线 O:2,687 H:2,700 L:2,671 C:2,671，VWAP上方，VWAP 2,461
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $2.85B；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 2,405 / 2,939；25x 多/空 2,565 / 2,779；50x 多/空 2,618 / 2,725。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 2,671 / ask 2,671，spread 0.1000 (0.0037%)，top20 bid 3.15K / ask 3.11K，买卖盘接近平衡
- 支撑：2,671-2,671
- 压力：2,700-2,706
- 判断：震荡。价格低于1h VWAP；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：区间交易或等待突破/跌破确认
- 触发条件：突破 2,700-2,706 或跌破 2,671-2,671 后等反抽/回踩确认。
- 失效条件：区间上下沿被放量突破。

## 6. SOL

- 实时价格：116.12，24h 相对 prevDay：+0.95%
- 成交/持仓：24h notional volume $313M，base volume 2.71M SOL，Hyperliquid OI 5.98M SOL；Coinalyze OI 24h 缺失/未验证。
- 7d/30d背景：短中期共振修复；7d +2.98%，区间 107.39-120.09，位置 68.6%，VWAP 115.77；30d +13.66%，区间 95.75-120.09，位置 83.6%，VWAP 106.13
- 1h结构：阴线 O:116.40 H:116.49 L:116.08 C:116.09，VWAP上方，VWAP 115.35
- 4h结构：阴线 O:116.86 H:117.30 L:116.08 C:116.10，VWAP上方，VWAP 112.85
- 1d结构：阴线 O:117.01 H:118.43 L:116.08 C:116.10，VWAP上方，VWAP 101.69
- funding/premium：funding +<0.1%，premium -<0.1%
- Coinalyze long/short：缺失/未验证
- 估算多/空持仓：总 OI $694M；估多仓 $0；估空仓 $0。估算：Hyperliquid OI × 标记价 × Coinalyze 多空占比；不等同真实仓位分布或强平热力图。
- 估算强平价带：10x 多/空 104.51 / 127.73；25x 多/空 111.48 / 120.76；50x 多/空 113.80 / 118.44。未计维护保证金、真实入场分布和逐仓/全仓差异。
- 近6小时强平流：long liq 0.0000，short liq 0.0000。这是已发生强平流，不是热力图。
- 盘口深度/spread：bid 116.09 / ask 116.10，spread 0.0100 (0.0086%)，top20 bid 38.3K / ask 33.4K，买卖盘接近平衡
- 支撑：116.10-116.11
- 压力：117.90-118.43
- 判断：偏多。价格站在1h VWAP上方；价格站在4h VWAP上方；价格站上30d日线VWAP，中期修复质量更好
- 策略：回踩支撑后做多，不追高
- 触发条件：回踩 116.10-116.11 不破，1h 重新站回 VWAP 后试多。
- 失效条件：跌破 116.10-116.11 且 OI 上升、价格不收回。

## 7. 热门叙事币

| 币种 |热度分 |24h |成交额 |OI |funding |处理 |
| --- |--- |--- |--- |--- |--- |--- |
| XPL |96.2 |+31.12% |$78.3M |$101M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ONDO |95.3 |+23.50% |$155M |$78.4M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LINK |93.1 |+7.57% |$34.7M |$93.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| NEAR |92.9 |+5.83% |$285M |$350M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LTC |92.6 |+5.40% |$69.4M |$47.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| LIT |92.1 |-6.95% |$68.8M |$216M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| SUI |91.8 |+5.06% |$41.0M |$70.6M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |
| ENA |89.7 |+4.35% |$79.5M |$108M |+<0.1% |可交易：高成交/高OI/有波动，等待技术位确认 |

热门币结论：只把前排当候选，不直接追。优先选择“高成交 + 高OI + funding不过热 + 有新闻叙事”的币；被脚本标成“不碰”的币，即使涨幅大也先排除。

热门币相关新闻：
- Cointelegraph: Bitcoin price steadies, ONDO rallies as US Treasury yields hit 2007 highs (Thu, 24 Sep 2026 20:32:16 +0000)
- Cointelegraph: IBM opens beta Swift ledger link for 24/7 tokenized deposits (Thu, 24 Sep 2026 13:29:06 +0000)

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
