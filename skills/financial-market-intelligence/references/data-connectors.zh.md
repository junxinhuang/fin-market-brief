# 数据接口接入状态

## 目标

降低日报中的“数据缺口”，让结论尽量基于可重复抓取的数据接口，而不是临时网页搜索。

## 当前可用接口

## 每日日报默认执行清单

生成完整日报前，默认先跑以下脚本或等价数据源：

1. 加密：`node skills/crypto-quant-analysis/scripts/crypto_realtime_snapshot.mjs BTC`、`ETH`、`SOL`。
2. 美股/黄金：`skills/financial-market-intelligence/scripts/us_market_snapshot.mjs SPY QQQ DIA IWM XLK XLF XLE XLV XLY SMH TLT UUP HYG LQD GLD`。
3. 官方日历：BLS、Fed、BEA、中国官方数据与政策日历。
4. A 股仅在当前报告范围包含 A 股时执行：`skills/financial-market-intelligence/scripts/a_share_sector_snapshot.mjs`。

如果某个脚本失败：

- 不得删除对应模块。
- 必须尝试备源。
- 必须说明缺口、替代指标和置信度变化。
- 已有可用脚本不得在报告中写成“尚未接入”。
- 若市场未开盘、刚开盘、盘前、周末或假期导致实时字段为空，默认回退到最近一个已经确认有数据的有效收盘/报价点，不得把资产写成空值。

### 加密货币

状态：已接入。

可用组件：

- Crypto quant skill：`skills/crypto-quant-analysis`
- 实时快照脚本：`skills/crypto-quant-analysis/scripts/crypto_realtime_snapshot.mjs`
- 主源：Hyperliquid public API。
- 辅助源：DeFiLlama stablecoins API、Alternative.me Fear & Greed、Ethereum public RPC。
- 可选源：Binance public futures data 的 long/short ratio 和 force orders。当前网络环境可能超时，只作为可用即补的代理源，不作为日报硬依赖。

已实测可返回：

- BTC / ETH / SOL 永续实时价格、mark、mid。
- 1h / 4h / 1d K线。
- funding history。
- order book depth / spread。
- futures open interest、funding、24h volume。
- Ethereum gas。
- Alternative.me Fear & Greed 情绪代理。
- DeFiLlama 稳定币总供给、1日/7日/30日变化。

日报规则：

- 加密板块必须优先使用 `crypto_realtime_snapshot.mjs`。
- BTC / ETH / SOL 至少跑核心数据块：价格、1h/4h/1d K线、funding、OI、24h volume、盘口。
- BTC 快照必须输出稳定币总供给、1日/7日/30日变化，并把它解释为链上美元流动性扩张/收缩/中性。
- 若稳定币 7日变化 < -0.2%，即使 BTC 站上 4h VWAP，也不得直接把 7日或30日判断上调为进攻；应写“价格结构修复，但链上购买力收缩，反弹质量打折”。
- 若稳定币 7日变化 > +0.2%，且 BTC 站上 4h VWAP、funding 不拥挤，可把加密 7日判断从偏空上调到中性或中性偏多。
- Hyperliquid public API 不提供 liquidation heatmap 和账户 long-short ratio，不得伪造；应明确标注缺口并用 Coinalyze、Coinglass、交易所或后续免费源补充。
- Binance public 多空比/强平订单若可用，可以写入“衍生品补充”；若超时或被限制，只在来源和缺口中说明，不得把超时错误写进正文分析。

仍待补：

- 跨市场清算热力图：Coinglass/Coinalyze 或类似源。
- 稳定多空比例：Coinalyze/Coinglass/Binance/OKX 可用接口。
- BTC/ETH 现货 ETF 资金流：Farside 稳定镜像/API 或其他免费源；网页 Cloudflare challenge 不可作为无人值守主源。
- 链上钱包流和社交情绪：LunarCrush/Santiment/Alva/Nansen/Arkham 等，免费可用性需逐项验证。

### 中国 A 股

状态：指数部分接入，代表个股层已接入。

已实测可用：

- 东方财富指数 K 线接口。
- 东方财富实时指数接口。
- 腾讯 A 股公开行情接口，用作个股行情备源。
- 可复用脚本：`skills/financial-market-intelligence/scripts/a_share_sector_snapshot.mjs`。

已实测字段：

- 上证指数实时点位。
- 前收、最高、最低、开盘、成交量、成交额。
- 历史 K 线。
- A 股代表个股现价、涨跌幅、开盘、最高、最低、成交额、换手率、市盈率。

待补：

- 北向资金。
- 融资余额。
- 板块涨跌。
- 行业完整涨跌榜。

日报规则：

- A 股指数和成交额优先使用东方财富接口。
- A 股个股层优先使用 `a_share_sector_snapshot.mjs`，按照科技/半导体/AI、红利/高股息、金融/券商、地产链/消费、新能源/顺周期输出代表股。
- 若北向资金、融资余额无法稳定获取，必须标注缺口，并用成交额、指数结构、代表个股表现和板块强弱替代。
- 早报默认使用 A 股最近有效收盘/报价，不强行使用当日刚开盘字段；周末和节假日沿用最近有效交易日并说明口径。

### 美股

状态：已接入 ETF 代理行情，足够支撑日报中的指数、板块、风格和交叉资产判断；个股基本面和逐笔/实时深度仍待正式 API key。

可用组件：

- Nasdaq quote API ETF proxy。
- 可复用脚本：`skills/financial-market-intelligence/scripts/us_market_snapshot.mjs`。

已实测可返回：

- ETF 最新收盘/最近成交价。
- 单日涨跌额、涨跌幅。
- 成交量。
- 约 30 条历史日线，可计算 1 日、7 个交易日、30 日趋势。

已实测可用标的：

- 指数代理：SPY、QQQ、DIA、IWM。
- 板块代理：XLK、XLF、XLE、XLV、XLY。
- 黄金代理：GLD。
- 解释变量：TLT、UUP、HYG、LQD、SMH、XBI、ARKK。

测试结果：

- Nasdaq ETF quote / historical JSON 接口在外网权限下可用。
- Yahoo Finance chart 在当前环境返回 HTML 防护页，不适合作为稳定接口。
- Stooq 在当前环境返回浏览器验证/防护页，不适合作为稳定接口。

日报规则：

- 美股指数判断必须优先跑 `us_market_snapshot.mjs`，至少覆盖 SPY、QQQ、DIA、IWM。
- 美股板块判断必须覆盖 XLK、XLF、XLE、XLV、XLY；如讨论 AI/半导体，补充 SMH。
- 利率/美元/信用环境必须补充 TLT、UUP、HYG、LQD，用于解释估值压力、风险偏好和资金风格。
- 报告里不得再把美股行情泛称为“缺稳定数据源”；应写明“ETF 代理行情已接入”，并区分其局限：不是交易所官方指数点位，不含个股财报估值、盘前盘后和逐笔深度。
- 晚报默认使用美股最近有效收盘/报价，不强行使用盘前或刚开盘字段；若 Nasdaq 实时涨跌幅为空，使用历史日线最近两个有效收盘价计算涨跌幅。

后续增强：

- Polygon.io / Tiingo / Alpha Vantage / Marketstack：用于个股、盘前盘后、拆分复权、公司基本面。
- Nasdaq Data Link / FRED：用于利率、宏观和部分官方时间序列。

### 黄金

状态：部分接入。

已接入/可用来源：

- World Gold Council，用于黄金 ETF、央行购金和需求数据。
- CFTC COT，用于持仓结构。

待补：

- 稳定 XAU/USD 或 GC futures 实时报价。
- 实际利率。
- 黄金 ETF 日流。

建议接入：

- Metals-API 或 Twelve Data，用于 XAU/USD。
- FRED，用于实际利率和美债。
- Stooq / Nasdaq Data Link / CME 授权数据，用于期货备选。

## 报告措辞规则

已接入字段不得再写成“需要关注”。必须写：

```text
已检查：
最新数据：
对资产影响：
结论：
失效条件：
```

未接入字段可以写“数据缺口”，但必须给替代指标和下一步接口方案。
