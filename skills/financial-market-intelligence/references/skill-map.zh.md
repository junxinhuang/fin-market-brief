# 伞状 Skill 结构

## 设计目标

`financial-market-intelligence` 是总控 skill。它负责统一框架、路由任务、维护 taxonomy、管理输出模板和质量标准。

后续子 skill 只处理自己的专业域，不重新定义全局框架。

## 结构

```text
financial-market-intelligence
├── market-news-collector
├── market-data-deep-diver
├── market-signal-classifier
├── macro-policy-calendar
├── macro-policy-analyst
├── cross-asset-market-analyst
├── us-equity-intel
├── gold-intel
├── china-a-share-intel
├── crypto-intel
├── geo-risk-monitor
└── market-briefing-writer
```

## 子 Skill 职责

### `market-news-collector`

信息入口层：

- 搜集相关新闻和公告。
- 去重。
- 保留时间、来源、链接、原始标题。
- 区分官方、媒体、通讯社、社交媒体。
- 默认继承 `financial-market-intelligence/references/source-map.zh.md` 的来源分层。

### `market-signal-classifier`

结构化层：

- 给原始信息打标签。
- 判断资产、地区、主题、紧急程度、置信度、方向。
- 生成统一数据对象。

### `market-data-deep-diver`

主动下钻层：

- 当结论依赖 CPI、ETF 流、K 线、资金费率、成交额、政策文件等变量时，主动获取数据。
- 不把“需要关注某某信息”交给用户。
- 输出该变量当前是利多、利空还是中性，并给出操作含义、失效条件和置信度。

### `macro-policy-analyst`

宏观政策层：

- 央行、宏观数据、利率、汇率、流动性。
- 跟踪政策反应函数。
- 分析数据意外和市场定价变化。

### `macro-policy-calendar`

日历和预期差层：

- 专门记录中美欧日央行、官方数据、政策发布。
- 维护未来几日已排期事件。
- 记录市场共识预期、前值、实际值和预期差。
- 分析事件对加密、A 股、美股、黄金的传导路径。

### `cross-asset-market-analyst`

跨资产层：

- 检查股票、利率、汇率、商品、波动率、加密资产之间是否互相确认。
- 判断事件属于局部扰动还是全局风险。
- 输出跨资产主题。

### `us-equity-intel`

美股专项：

- 指数、行业、风格因子、财报、估值、盈利预期。
- 重点关注 S&P 500、Nasdaq 100、Russell 2000 和核心权重股。

### `gold-intel`

黄金专项：

- 实际利率、美元、通胀、避险、央行购金、ETF 流。
- 区分宏观驱动和地缘驱动。

### `china-a-share-intel`

A 股专项：

- 政策、流动性、产业方向、地产链、北向资金、融资余额。
- 重点关注沪深 300、上证、创业板、科创板和政策敏感行业。

### `crypto-intel`

加密专项：

- BTC、ETH、ETF 流、链上流动性、杠杆、监管、稳定币风险。
- 区分宏观 beta、链上结构和监管冲击。

### `geo-risk-monitor`

地缘风险层：

- 战争、制裁、能源、航运、选举、网络安全。
- 映射到黄金、能源、美元、军工、航运、供应链、风险资产。

### `market-briefing-writer`

输出层：

- 盘中简报。
- 日度简报。
- 周度主题总结。
- 保持事实、解读、置信度、后续观察分离。

## 迭代规则

新增要求时按以下顺序处理：

1. 判断是全局规则还是子域规则。
2. 全局规则写入 umbrella skill。
3. 子域规则写入对应 child skill。
4. 如果一个子域规则被多个子 skill 复用，提升为 umbrella 规则。
5. 如果一个子 skill 变得过大，拆成更小的专项 reference，而不是把 SKILL.md 写长。

## 推荐建设顺序

1. `financial-market-intelligence`
2. `market-news-collector`
3. `market-data-deep-diver`
4. `market-signal-classifier`
5. `macro-policy-calendar`
6. `market-briefing-writer`
7. `macro-policy-analyst`
8. `cross-asset-market-analyst`
9. `us-equity-intel`
10. `gold-intel`
11. `china-a-share-intel`
12. `crypto-intel`
13. `geo-risk-monitor`

先建立入口、分类和输出，再扩展专业分析层。
