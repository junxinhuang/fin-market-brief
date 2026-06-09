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

状态：待正式接入。

测试结果：

- Yahoo Finance chart 在当前环境返回 HTML 防护页，不适合作为稳定接口。

建议接入：

- Polygon.io
- Tiingo
- Alpha Vantage
- Marketstack
- Nasdaq Data Link
- IEX Cloud，如账号可用

日报规则：

- 在正式 key 接入前，美股行情和板块数据使用官方日历 + 可访问市场更新 + GitHub Pages 报告明确降低置信度。
- 美股正式数据接口是下一优先级。

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

