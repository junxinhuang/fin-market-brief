# 金融市场消息汇总与分析框架

## 目标

搭建一个可重复执行的金融市场信息面工作流，用于搜集、分类、验证、分析并输出市场简报，重点覆盖：

- 美股
- 黄金
- 中国 A 股
- 加密货币
- 全球主要指数
- 央行政策
- 地缘政治大新闻

核心目标不是简单堆新闻，而是把每条信息转化为结构化判断：发生了什么、为什么重要、影响哪些资产、影响路径是什么、置信度如何、下一步要盯什么。

## 基本原则

1. **事实与解读分离**
   - 事实：时间、来源、主体、事件、数据、原文链接、市场价格反应。
   - 解读：影响方向、传导路径、资产映射、置信度、潜在二阶影响。

2. **跨资产联动**
   - 同一事件要同时检查股票、利率、汇率、商品、波动率、信用、加密资产的反应。
   - 避免只在单一资产内部解释市场。

3. **信源分层**
   - 一级：央行、监管机构、交易所、统计部门、公司公告、财报、官方声明。
   - 二级：主流财经媒体、通讯社、专业数据终端。
   - 三级：社交媒体、爆料账号、论坛，只作为预警，不作为最终依据。

4. **显式标注置信度**
   - 高：官方确认或多个高质量来源一致。
   - 中：可靠媒体报道，但仍缺少原始文件或官方确认。
   - 低：传闻、单一来源、社交媒体线索。

5. **区分时间尺度**
   - 盘中：立刻影响价格和风险偏好。
   - 短期：1-5 个交易日。
   - 中期：1-8 周。
   - 结构性：多月级别或市场 regime 变化。

## 覆盖模块

### 美股

关注对象：

- S&P 500、Nasdaq 100、Dow Jones、Russell 2000
- 科技巨头、AI 链、银行、能源、医疗、消费
- 财报、指引、回购、利润率、信用风险
- CPI、PCE、非农、ISM、零售销售、GDP、美债拍卖

分析问题：

- 影响的是指数、行业轮动、因子，还是个股？
- 改变的是盈利预期、折现率、流动性，还是风险偏好？
- 市场反应来自估值、政策、仓位，还是基本面？

### 黄金

关注对象：

- 实际利率
- 美元指数
- 美联储路径
- 央行购金
- 黄金 ETF 流入流出
- 地缘避险
- 通胀预期

分析问题：

- 黄金是在交易实际利率、美元、通胀，还是避险？
- 金价走势是否被美债收益率和美元确认？
- 是否存在央行买盘或实物需求支撑？

### 中国 A 股

关注对象：

- 沪深 300、上证指数、创业板、科创板
- PBOC 流动性、降准、LPR、MLF、逆回购
- 财政刺激、地产政策、地方债
- PMI、出口、社融、工业利润、CPI/PPI
- 北向资金、融资余额、行业政策

分析问题：

- 事件属于政策宽松、流动性支持、产业政策，还是监管风险？
- 哪些行业受益或受损：地产、银行、券商、消费、汽车、半导体、军工？
- 情绪来自国内流动性，还是全球资金对中国风险的重定价？

### 加密货币

关注对象：

- BTC、ETH、主要公链、稳定币
- 现货 ETF 资金流
- 链上流动性、杠杆、资金费率
- 监管事件
- 交易所、托管、稳定币风险
- 与 Nasdaq、美元流动性、实际利率的相关性

分析问题：

- 事件属于宏观流动性、监管、链上、技术，还是市场结构？
- 杠杆是在累积还是出清？
- 影响的是 BTC 主导率、ETH beta，还是山寨币风险偏好？

### 全球主要指数

关注对象：

- S&P 500、Nasdaq 100、Russell 2000
- Nikkei 225、TOPIX
- Euro Stoxx 50、DAX、FTSE 100
- 恒生指数、恒生科技
- 沪深 300、上证指数
- 美元指数、美债收益率、VIX

分析问题：

- 事件是本地、区域，还是全球性质？
- 不同市场是否给出一致信号？
- 领涨或领跌的是股票、利率、汇率、商品，还是波动率？

### 央行

关注对象：

- 美联储
- 中国人民银行
- 欧洲央行
- 日本央行
- 英国央行
- 瑞士央行

信号类型：

- 利率决议
- 会议声明
- 会议纪要
- 官员讲话
- 资产负债表变化
- 流动性操作
- 前瞻指引

分析问题：

- 是否改变了政策反应函数？
- 市场是否重新定价降息或加息路径？
- 政策变化通过利率、流动性、汇率，还是预期管理传导？

### 地缘政治

关注对象：

- 战争与军事升级
- 制裁和出口管制
- 能源供应扰动
- 航运与贸易路线
- 选举与政权变化
- 网络安全事件
- 中美、中东、俄乌、台海

分析问题：

- 是标题风险、供应冲击、需求冲击，还是制裁和监管风险？
- 哪些资产有一阶暴露？
- 升级和缓和路径分别是什么？

## 信号分类

每条信息建议打以下标签：

- `asset_class`：equities、rates、FX、commodities、crypto、credit、multi_asset
- `region`：U.S.、China、Europe、Japan、global、other
- `topic`：macro、policy、earnings、liquidity、flows、regulation、geopolitics、market_structure
- `time_horizon`：immediate、short_term、medium_term、structural
- `impact_direction`：bullish、bearish、mixed、unclear
- `confidence`：high、medium、low
- `source_quality`：primary、high、medium、low
- `urgency`：breaking、monitor、background

## 分析流程

1. **搜集**
   - 抓取预设信息源。
   - 保留时间、来源、标题、摘要、链接、必要引用。

2. **分类**
   - 打标签。
   - 标记涉及的市场、资产和地区。

3. **验证**
   - 检查是否有官方来源或多个可信来源确认。
   - 对传闻和未确认消息明确标注。

4. **解读**
   - 写清传导路径。
   - 区分一阶影响和二阶影响。
   - 如果可获得价格数据，说明市场是否已经部分反映。

5. **排序**
   - 按市场影响、信息新颖度、信源质量、影响广度、紧急程度打分。

6. **综合**
   - 形成盘中、日度或周度简报。
   - 将相关事件归并成主题。
   - 标注互相确认或互相矛盾的市场信号。

7. **跟踪**
   - 列出后续要盯的数据、讲话、公告、价格水平或官方确认。

## 重要性评分

每项 1-5 分：

- 市场影响：对价格或风险偏好的潜在影响。
- 新颖度：是否改变原有叙事。
- 信源质量：是否接近一手证据。
- 影响广度：涉及多少资产和地区。
- 紧急程度：是否需要立刻跟踪。

总分：

```text
importance = 市场影响 + 新颖度 + 信源质量 + 影响广度 + 紧急程度
```

解释：

- 21-25：最高优先级，简报头条。
- 16-20：重要，进入主简报。
- 11-15：相关，若能连接主题则纳入。
- 5-10：背景或观察名单。

## 输出模板

```markdown
## 市场信息面简报

日期：
交易时段：

### 一句话总览

- 

### 最重要的市场事件

#### 1. [标题]

- 发生了什么：
- 为什么重要：
- 影响市场：
- 方向判断：
- 置信度：
- 下一步观察：
- 来源：

### 跨资产主题

- 

### 分资产观察

#### 美股
- 

#### 黄金
- 

#### 中国 A 股
- 

#### 加密货币
- 

#### 利率 / 汇率 / 波动率
- 

### 央行观察

- 

### 地缘政治观察

- 

### 后续跟踪清单

- 
```

## 建议拆分的 Skills

总体采用伞状结构：`financial-market-intelligence` 是总控 skill，负责统一框架、路由任务、维护 taxonomy、管理输出模板和质量标准。其他子 skill 只处理自己的专业域，不重复定义全局规则。

```text
financial-market-intelligence
├── market-news-collector
├── market-signal-classifier
├── macro-policy-analyst
├── cross-asset-market-analyst
├── us-equity-intel
├── gold-intel
├── china-a-share-intel
├── crypto-intel
├── geo-risk-monitor
└── market-briefing-writer
```

新增规则时先判断它属于总框架还是子板块：如果会影响多个市场或多个输出流程，就放入总控 skill；如果只影响某个资产或专题，就放入对应子 skill。

### 0. `financial-market-intelligence`

负责：

- 作为伞状总控 skill。
- 统一事实和解读分离原则。
- 统一标签体系、评分体系、输出结构。
- 决定任务应该路由到哪个子 skill。
- 管理后续所有子板块的迭代边界。

### 1. `market-news-collector`

负责：

- 搜集市场相关新闻。
- 去重。
- 保留来源、时间、链接、原始标题。
- 区分官方、媒体、通讯社、社交媒体信号。

### 2. `market-signal-classifier`

负责：

- 将原始新闻转为结构化标签。
- 判断资产、地区、主题、紧急程度、置信度、可能方向。

### 3. `macro-policy-analyst`

负责：

- 分析央行、宏观数据、利率、汇率、流动性影响。
- 跟踪政策反应函数和数据意外。

### 4. `cross-asset-market-analyst`

负责：

- 综合美股、黄金、A 股、加密、指数、利率、汇率、波动率。
- 检查价格反应是否确认新闻叙事。

### 5. `geo-risk-monitor`

负责：

- 跟踪地缘政治事件。
- 映射到能源、黄金、美元、军工、航运、供应链、风险资产。
- 区分传闻、标题风险和实质政策变化。

### 6. `market-briefing-writer`

负责：

- 把结构化分析写成盘中、日度或周度简报。
- 保持事实、解读、置信度和后续观察清晰分离。

## 推荐 Skill 结构

```text
skills/
  market-news-collector/
    SKILL.md
    references/
      sources.md
      query-patterns.md
  market-signal-classifier/
    SKILL.md
    references/
      taxonomy.md
      examples.md
  macro-policy-analyst/
    SKILL.md
    references/
      central-banks.md
      macro-indicators.md
  cross-asset-market-analyst/
    SKILL.md
    references/
      transmission-map.md
      regime-checklist.md
  geo-risk-monitor/
    SKILL.md
    references/
      geopolitical-map.md
      exposure-map.md
  market-briefing-writer/
    SKILL.md
    references/
      templates.md
      style.md
```

## 数据对象草案

```json
{
  "id": "string",
  "timestamp": "ISO-8601 string",
  "source": {
    "name": "string",
    "url": "string",
    "quality": "primary | high | medium | low"
  },
  "headline": "string",
  "summary": "string",
  "asset_class": ["equities"],
  "region": ["U.S."],
  "topic": ["macro"],
  "affected_markets": ["S&P 500", "Nasdaq 100", "gold", "BTC"],
  "time_horizon": "immediate | short_term | medium_term | structural",
  "impact_direction": "bullish | bearish | mixed | unclear",
  "confidence": "high | medium | low",
  "importance_score": 0,
  "analysis": {
    "transmission_channel": "string",
    "first_order_effect": "string",
    "second_order_effect": "string",
    "watch_next": ["string"]
  }
}
```

## 下一步

建议先创建前两个 skills：

1. `market-news-collector`
2. `market-signal-classifier`

原因：先把信息入口和结构化标签稳定下来，再做宏观、跨资产和简报写作，整体会更稳。
