# 数据接口接入状态

## 目标

降低日报中的“数据缺口”，让结论尽量基于可重复抓取的数据接口，而不是临时网页搜索。

## 当前可用接口

### 加密货币

状态：已接入。

可用组件：

- Surf skill：`/Users/junxinhuang/.codex/skills/surf`
- Surf CLI：`/Users/junxinhuang/.local/bin/surf`
- Crypto quant skill：`skills/crypto-quant-analysis`
- 实时快照脚本：`skills/crypto-quant-analysis/scripts/surf_realtime_snapshot.sh`

已实测可返回：

- ETH 实时价格。
- 1h / 4h / 1d K线。
- funding history。
- order book depth / spread。
- liquidation chart。
- futures open interest、funding、long-short ratio、24h volume。

日报规则：

- 加密板块必须优先使用 Surf 和 `crypto-quant-analysis`。
- BTC / ETH / SOL 至少跑核心数据块：价格、1h/4h/1d K线、funding、OI、清算、盘口。
- 若 Surf 某字段失败，才降级到交易所 API、Coinglass、ETF flow 页面或 web search。

### 中国 A 股

状态：部分接入。

已实测可用：

- 东方财富指数 K 线接口。
- 东方财富实时指数接口。

已实测字段：

- 上证指数实时点位。
- 前收、最高、最低、开盘、成交量、成交额。
- 历史 K 线。

待补：

- 北向资金。
- 融资余额。
- 板块涨跌。
- 个股/行业成交额。

日报规则：

- A 股指数和成交额优先使用东方财富接口。
- 若北向资金、融资余额无法稳定获取，必须标注缺口，并用成交额、指数结构、板块表现替代。

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
