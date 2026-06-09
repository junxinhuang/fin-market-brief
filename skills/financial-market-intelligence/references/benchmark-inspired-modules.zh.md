# 外部日报借鉴模块清单

## 目标

先吸收 A 股、美股、加密、黄金和跨资产日报中的常见高价值模块，形成“全量加法版”日报结构。后续根据用户体验再做减法。

参考来源类型：

- A 股日报 / 复盘 / 夜报
- 美股盘前 / 盘后 / Wall Street Breakfast
- 加密市场日报 / ETF flow dashboard / DeFi newsletter
- 黄金日报 / ETF flow / macro model dashboard
- 跨资产宏观图表日报 / Smart Brevity 新闻简报

## 全量日报模块

### 1. Executive Summary

借鉴：Axios、Wall Street Breakfast、Bear & Talon。

必须包含：

- 一句话结论。
- 今日最重要的 3-5 个市场驱动。
- 今日不应忽略的风险。
- 是否有重点转向。

格式：

```text
今日主线：
最重要的三件事：
重点转向：
今日操作含义：
```

### 2. 政策与数据日历

借鉴：Market Daily Brief、宏观日历类日报。

必须包含：

- 中美欧日央行事件。
- 官方经济数据。
- 市场预期。
- 高于预期 / 符合预期 / 低于预期情景。
- 对加密、A 股、美股、黄金的影响。

### 3. 跨资产仪表盘

借鉴：The Daily Shot、EconInsight。

必须包含：

- 美债收益率。
- 美元指数。
- VIX。
- 黄金。
- BTC / ETH。
- S&P 500 / Nasdaq。
- 上证 / CSI300 / 创业板。
- 原油，如涉及通胀或地缘。

输出要求：

- 今日变化。
- 7 日趋势。
- 30 日趋势。
- 当前资产间是否一致。
- 是否出现分歧信号。

### 4. 今日核心资产矩阵

必须包含：

- 今日状态。
- 7 日回顾。
- 30 日回顾。
- 未来 1 日。
- 未来 7 日。
- 未来 30 日。
- 未来半年。
- 当前关键变量。
- 操作含义。
- 失效条件。

### 5. 市场情绪与风险偏好

借鉴：A 股夜报、crypto market sentiment、macro dashboard。

必须包含：

- 风险偏好：risk-on / risk-off / mixed。
- 恐慌或波动指标：VIX、加密清算、资金费率、A 股成交额。
- 是否出现高 beta 资产同步走弱或同步修复。
- 是否是防守轮动。

### 6. A 股专项

借鉴：Termo A Share Daily Report、A-Share Nightly Radar。

必须包含：

- 指数表现：上证、深成、创业板、沪深 300。
- 成交额。
- 北向资金，如可获取。
- 融资余额，如可获取。
- 板块涨跌：科技、半导体、AI、红利、金融、地产、消费、新能源、军工、医药、顺周期资源。
- 政策/监管信息。
- 情绪和题材周期。
- 重要个股或权重股，只列真正影响指数或板块的。

输出结构：

```text
指数结构：
资金结构：
政策结构：
板块强弱：
题材周期：
操作含义：
失效条件：
```

### 7. 美股专项

借鉴：Bear & Talon、Wall Street Breakfast、Daily Briefing。

必须包含：

- 指数表现：S&P 500、Nasdaq、Dow、Russell 2000。
- 板块表现：科技/AI/半导体、金融、能源、医疗、消费、工业、小盘、防御。
- 宏观驱动：CPI/PPI/PCE、非农、Fed、收益率、美元。
- 重点公司：只纳入能影响指数、板块或市场叙事的权重股。
- Earnings / guidance，如当天有重要财报。
- Sector rotation。

新闻分类：

- `MACRO`
- `FED POLICY`
- `EARNINGS`
- `SECTOR ROTATION`
- `TRADE / GEOPOLITICS`
- `MARKET STRUCTURE`

### 8. 加密专项

借鉴：DailyMarket.Report、The Defiant、WalletPilot、BTCOak、Coinslytic。

必须包含：

- BTC / ETH 价格结构。
- BTC / ETH ETF 日流和连续流向。
- 资金费率。
- 未平仓合约。
- 爆仓数据。
- 稳定币供给。
- BTC dominance。
- DeFi TVL / 协议收入，如可获取。
- 监管和 ETF 事件。
- 交易所/稳定币风险。
- 板块：BTC、ETH、主流 L1、DeFi、稳定币、平台币、AI/DePIN/RWA、Meme/高 beta。

输出结构：

```text
ETF 流：
杠杆结构：
链上/稳定币：
监管/交易所：
板块强弱：
综合判断：
操作含义：
失效条件：
```

### 9. 黄金专项

借鉴：WGC、ChartsGold、GoldPriceIntel、黄金宏观模型。

必须包含：

- 现货金 / 黄金期货价格。
- 美元指数。
- 10Y 美债收益率。
- 实际利率，如可获取。
- 黄金 ETF flow。
- CFTC COT。
- 央行购金。
- 地缘风险。
- 技术位：关键支撑/压力。

输出结构：

```text
利率驱动：
美元驱动：
资金流驱动：
央行购金：
地缘/避险：
价格结构：
综合判断：
操作含义：
失效条件：
```

### 10. 新闻影响解释

借鉴：MarketBriefed、Axios。

每条重要新闻必须包含：

- What happened：发生了什么。
- Why it matters：为什么重要。
- Asset impact：影响哪些资产。
- Direction：利多、利空、中性或混合。
- Confidence：置信度。
- What changes the view：什么会改变判断。

### 11. 机会与风险提醒

借鉴：Market Daily Brief、Daily Briefing。

必须包含：

- 可能出现的机会窗口。
- 最大下行风险。
- 最关键的触发点。
- 不适合操作的情形。

注意：

- 不能给具体投资建议或保证收益。
- 必须写成风险场景和观察框架。

### 12. 结论变化追踪

借鉴：连续日报和投研跟踪。

必须包含：

- 昨日判断。
- 今日验证。
- 是否转向。
- 转向触发原因。
- 转向是否确认。
- 下一步验证。

### 13. Watchlist

借鉴：Daily Briefing、A 股夜报。

必须包含：

- 宏观 watchlist。
- A 股板块 watchlist。
- 美股板块 / 权重股 watchlist。
- 加密 watchlist。
- 黄金 watchlist。

每个 watchlist 项必须有：

```text
观察对象：
触发条件：
影响资产：
如果触发，结论如何变化：
```

### 14. 数据质量和缺口

必须包含：

- 哪些数据已官方确认。
- 哪些数据来自媒体或数据商。
- 哪些数据暂时不可得。
- 哪些结论置信度因此降低。
- 下一步需要接入的 API。

## HTML 版式新增要求

HTML 完整版应按以下顺序组织：

1. Header：报告标题、时间、版本、核心资产。
2. Executive Summary：一句话结论 + 3-5 个核心驱动。
3. 重点转向提醒。
4. 昨日判断回溯。
5. 政策与数据日历。
6. 跨资产仪表盘。
7. 今日核心资产矩阵。
8. A 股专项。
9. 美股专项。
10. 加密专项。
11. 黄金专项。
12. 机会与风险提醒。
13. Watchlist。
14. 持续重要事项。
15. 来源和数据缺口。

## 飞书摘要新增要求

飞书摘要应包含：

- 一句话结论。
- 今日 3 个核心驱动。
- 是否有重点转向。
- 四类资产一句话判断。
- 完整 HTML 链接。

