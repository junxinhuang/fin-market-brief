# 中美欧日央行与官方数据日历

## 目标

建立一个专门模块，持续记录并分析中国、美国、欧洲、日本的央行信息、官方经济数据、政策发布和未来几日已排期事件。

该模块优先级高于普通市场新闻。若未来几日存在重大日历事件，简报必须提前列出，并给出市场预期、潜在预期差和核心资产影响路径。

## 覆盖范围

### 美国

核心机构：

- Federal Reserve
- BLS
- BEA
- U.S. Treasury
- CFTC
- SEC

核心事件：

- FOMC 利率决议
- FOMC 会议纪要
- SEP / 点阵图
- Fed 主席新闻发布会
- Fed 官员讲话
- CPI
- PPI
- PCE
- 非农就业
- 失业率
- 平均时薪
- JOLTS
- ISM PMI
- 零售销售
- GDP
- 美债拍卖
- Treasury refunding

重点市场预测：

- Fed 利率路径
- 降息/加息概率
- 美债收益率方向
- 美元指数
- 美股估值压力
- 黄金实际利率压力
- 加密风险偏好

### 中国

核心机构：

- 中国人民银行
- 国家统计局
- 财政部
- 发改委
- 商务部
- 证监会
- 上交所
- 深交所

核心事件：

- LPR
- MLF
- 逆回购操作
- 降准/降息
- 社融
- M2
- 新增人民币贷款
- CPI / PPI
- PMI
- 工业增加值
- 社会消费品零售
- 固定资产投资
- 房地产开发投资和销售
- 财政政策发布
- 资本市场政策
- 产业政策

重点市场预测：

- A 股流动性
- 政策托底力度
- 地产链修复
- 消费修复
- 科技和产业政策方向
- 人民币汇率
- 港股和中概传导

### 欧洲

核心机构：

- European Central Bank
- Eurostat
- European Commission

核心事件：

- ECB 利率决议
- ECB 新闻发布会
- ECB 会议纪要
- Eurozone CPI
- GDP
- PMI
- 失业率
- 财政和能源政策

重点市场预测：

- 欧元
- 欧洲股市
- 全球美元流动性
- 黄金和美元相对强弱
- 全球风险偏好

### 日本

核心机构：

- Bank of Japan
- Ministry of Finance Japan
- Statistics Bureau of Japan

核心事件：

- BOJ 利率决议
- BOJ 展望报告
- BOJ 新闻发布会
- 日本 CPI
- 工资数据
- GDP
- 贸易数据
- 汇率干预相关声明

重点市场预测：

- 日元
- 美日利差
- 全球套息交易
- 日股
- 美债收益率
- 全球风险资产波动

## 信息记录格式

每个事件应记录为结构化对象：

```json
{
  "event_name": "U.S. CPI",
  "region": "U.S.",
  "institution": "BLS",
  "scheduled_time": "ISO-8601",
  "event_type": "data_release | policy_decision | speech | minutes | auction | regulation",
  "importance": "tier_1 | tier_2 | tier_3",
  "market_consensus": {
    "headline": "string",
    "core": "string",
    "source": "string"
  },
  "previous": "string",
  "actual": "string",
  "surprise": "hotter | cooler | in_line | unknown",
  "impact_channels": ["rates", "FX", "equities", "gold", "crypto", "A_shares"],
  "expected_market_impact": "string",
  "post_release_market_reaction": "string",
  "watch_next": ["string"]
}
```

## 事件分级

### Tier 1

必须置顶：

- FOMC / ECB / BOJ / PBOC 重大政策变化
- CPI / PCE / 非农
- 中国社融、LPR、降准降息、重大财政政策
- 日本 BOJ 政策转向或汇率干预
- 欧洲 CPI / ECB 决议
- 美债收益率或美元异常波动相关事件

### Tier 2

必须进入简报：

- PPI
- PMI
- 零售销售
- GDP
- JOLTS
- 美债拍卖
- 中国工业、消费、投资、地产数据
- Fed / ECB / BOJ 重要官员讲话

### Tier 3

作为背景或观察：

- 二线官员讲话
- 常规流动性操作
- 非核心地区数据
- 没有预期差的重复政策表述

## 每次简报必须包含的日历模块

```markdown
### 中美欧日政策与数据日历

#### 已发布的重要信息

| 地区 | 事件 | 实际 | 预期 | 前值 | 预期差 | 市场影响 |
|---|---|---:|---:|---:|---|---|
| 美国 |  |  |  |  |  |  |
| 中国 |  |  |  |  |  |  |
| 欧洲 |  |  |  |  |  |  |
| 日本 |  |  |  |  |  |  |

#### 未来几日重点日程

| 日期 | 地区 | 事件 | 重要性 | 市场预期 | 可能结果 | 重点影响资产 | 观察要点 |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |

#### 对核心资产的传导

- 加密：
- 中国 A 股：
- 美股：
- 黄金：
```

## 分析规则

1. 先看日历，再看普通新闻。
2. 先看市场预期，再看实际数据。
3. 预期差比绝对值更重要。
4. 央行事件必须拆成：声明变化、新闻发布会、市场定价、资产反应。
5. 数据事件必须拆成：headline、core、前值修正、分项结构、市场预期差。
6. 对未来几日事件，必须提前说明可能的情景：
   - 高于预期
   - 符合预期
   - 低于预期
7. 每个情景必须映射到：
   - 美债
   - 美元
   - 美股
   - 黄金
   - 加密
   - A 股 / 人民币 / 港股

## 未来事件情景输出格式

未来几日重点日程不能只列事件名称，必须写清楚可能结果和交易含义。

```markdown
#### [事件名称]

- 市场预期：
- 情景 A：高于预期 / 偏鹰 / 风险更大
  - 可能市场反应：
  - 对加密：
  - 对 A 股：
  - 对美股：
  - 对黄金：
- 情景 B：符合预期
  - 可能市场反应：
  - 对核心资产：
- 情景 C：低于预期 / 偏鸽 / 风险缓和
  - 可能市场反应：
  - 对加密：
  - 对 A 股：
  - 对美股：
  - 对黄金：
- 最关键验证指标：
```

示例规则：

- 美国 CPI/PPI 高于预期：通常意味着降息预期下降、美债收益率和美元上行，短期压制美股成长股、黄金和加密；A 股可能受外部风险偏好和人民币压力拖累。
- 美国 CPI/PPI 低于预期：通常意味着降息预期回升、美债收益率和美元下行，短期利好美股成长股、黄金和加密；A 股外部压力缓和。
- FOMC 偏鹰：通常利空高估值和高 beta 资产，利好美元，压制黄金。
- FOMC 偏鸽：通常利好风险资产和黄金，压制美元。

## 默认官方来源

美国：

- Fed calendar and press releases
- BLS release calendar
- BEA release calendar
- U.S. Treasury announcements

中国：

- 中国人民银行
- 国家统计局
- 财政部
- 发改委
- 证监会

欧洲：

- ECB calendar
- Eurostat release calendar
- European Commission

日本：

- BOJ calendar
- Statistics Bureau of Japan
- Japan Ministry of Finance

## 后续子 Skill

建议未来单独形成：

```text
macro-policy-calendar
```

职责：

- 拉取中美欧日未来几日官方日历。
- 记录市场共识预期。
- 发布后对比实际值和预期差。
- 输出对加密、A 股、美股、黄金的传导判断。
