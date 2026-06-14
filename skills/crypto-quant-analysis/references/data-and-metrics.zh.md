# 数据与指标清单

## 基础市场数据

- 任何加密货币交易判断必须先给实时数据块：当前价格和时间戳、1h/4h/1d K线、funding、OI变化、强平热力图、成交量/VWAP、盘口深度。缺失项必须标注为未验证。
- OHLCV：价格、成交量、成交额、振幅、跳空、K 线结构。
- 波动率：实现波动率、ATR、Parkinson/Garman-Klass 估计、波动率分位数。
- 流动性：盘口深度、买卖价差、冲击成本、交易所间价差、稳定成交量。
- 市场结构：趋势、区间、突破、均值回归、波动压缩、成交量确认。

## 衍生品数据

- Funding rate：方向拥挤度和持仓成本，不单独作为反向信号。
- Open interest：新增杠杆、去杠杆、趋势确认或挤仓风险。
- Basis：现货与期货价差，反映杠杆需求和期限结构。
- Liquidations：强平瀑布、短期流动性冲击、潜在反身性。
- Long/short ratio：交易所口径差异大，只作为辅助情绪指标。
- Options：隐含波动率、偏度、期限结构、gamma 暴露；数据不足时不要硬推结论。

## 链上与资金流

- Exchange reserves/netflow：交易所净流入偏潜在卖压，净流出偏持有意愿，但需结合价格确认。
- Stablecoin supply/flows：稳定币市值、交易所稳定币余额、铸造/销毁。日报默认使用 DeFiLlama stablecoins API 的总供给和 1日/7日/30日变化作为链上美元流动性代理。
- Active addresses/transactions/fees：链上活跃度，需注意刷量和链间差异。
- Whale flows：大额转账需要确认是否为交易所、托管、内部调拨。
- ETF flows：BTC/ETH ETF 净流入、成交额、溢折价和持仓变化。

## 稳定币流动性解释

- 7日稳定币总供给增速 > +0.2%：链上美元流动性扩张，对加密 7日/30日风险偏好偏利多。
- 7日稳定币总供给增速 < -0.2%：链上美元流动性收缩，BTC/ETH 即使站上 VWAP，也要降低反弹质量判断。
- 1日扩张但 7日/30日收缩：短线有补流动性，但中期购买力仍不足，结论偏中性或谨慎。
- 稳定币指标不能单独作为买入信号，必须和价格结构、funding、OI、宏观美元/利率一起判断。

## 可选衍生品补充源

- Binance public long/short ratio：可作为账户多空情绪代理，但不同交易所口径差异大，不能单独决定方向。
- Binance force-order liquidation flow：可作为近期强平订单代理，但不是跨市场 liquidation heatmap。
- Coinalyze/Coinglass：优先用于真正的清算热力图、多空比例和跨交易所衍生品结构；若需要 key，应标注为候选源。
- Farside BTC/ETH ETF flows：若网页受 Cloudflare 或缺稳定 JSON/CSV，不能作为无人值守硬依赖；找到稳定镜像/API 后再纳入日报主源。

## 宏观与跨资产

- DXY、美元流动性、U.S. Treasury yields、实际利率。
- Nasdaq/S&P 500、VIX、信用利差、全球风险偏好。
- 央行政策预期、CPI/PCE/非农、财政和监管新闻。
- BTC dominance、ETH/BTC、TOTAL/TOTAL2/TOTAL3，用于判断资金在大盘币和山寨币之间迁移。

## 数据质量检查

- 明确数据源、交易所、时区、频率、缺失值处理。
- 处理幸存者偏差：退市币、改名币、流动性枯竭币不能直接消失。
- 避免未来函数：资金费率、链上数据、ETF 数据要使用实际可获得时间。
- 成本建模：手续费、滑点、资金费、冲击成本、提款/充值延迟。
- 多交易所数据要统一符号、计价币、合约乘数和结算方式。
