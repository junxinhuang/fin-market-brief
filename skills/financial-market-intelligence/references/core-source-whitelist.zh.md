# 核心消息源白名单

## 测试说明

测试日期：2026-06-04

测试环境：

- 当前机器外部网络。
- 使用 `curl`，带合规 User-Agent。
- 结果代表当前时间和当前线路，不代表永久可用。

状态：

- `OK`：本次测试可获取信息。
- `Conditional`：可用但需要特定端点、User-Agent、API key、订阅或后续处理。
- `Backup`：质量高，但本次不适合作为核心自动化来源。

## 按分类的核心来源

### 美股与上市公司

#### SEC EDGAR / SEC data

- 类型：美国上市公司公告与监管文件。
- 权威性：最高，属于一手来源。
- 用途：10-K、10-Q、8-K、13F、Form 4、S-1、ETF 文件。
- 自动化入口：`https://data.sec.gov/submissions/CIK0000320193.json`
- 本次状态：`OK`
- 备注：必须带合规 User-Agent；不建议直接抓 SEC 网页首页。

#### Nasdaq / NYSE

- 类型：交易所信息、上市公司和市场数据补充。
- 权威性：高。
- 用途：交易所公告、上市状态、部分行情和证券基础信息。
- 本次状态：未列为第一阶段核心 API。
- 备注：第一阶段美股事实确认以 SEC 为核心，价格确认可用 Yahoo Finance、TradingView、券商数据或交易所授权数据补充。

### 美国政府与宏观

#### Federal Reserve

- 类型：央行政策。
- 权威性：最高，属于一手来源。
- 用途：FOMC 声明、会议纪要、官员讲话、政策新闻。
- 自动化入口：`https://www.federalreserve.gov/feeds/press_all.xml`
- 本次状态：`OK`

#### BEA

- 类型：美国经济数据。
- 权威性：最高，属于一手来源。
- 用途：GDP、PCE、个人收入与支出。
- 自动化入口：`https://apps.bea.gov/api/data`
- 本次状态：`OK`
- 备注：正式使用应配置 BEA API key。

备选：

- BLS：CPI、PPI、就业数据权威源，但本次 BLS API 测试超时，先列为 `Conditional`，后续用 FRED 或官方发布页兜底。

### 黄金与商品

#### CFTC COT

- 类型：期货持仓。
- 权威性：最高，属于监管一手数据。
- 用途：黄金、美元、利率、能源、股指期货的持仓结构。
- 自动化入口：`https://www.cftc.gov/dea/newcot/f_disagg.txt`
- 本次状态：`OK`

#### World Gold Council

- 类型：黄金需求、ETF、央行购金和研究数据。
- 权威性：高。
- 用途：黄金实物需求、央行购金、ETF 流、季度/年度报告。
- 入口：`https://www.gold.org/goldhub/data`
- 本次状态：`OK`

备选：

- CME / COMEX：期货合约和交易所数据权威源，但本次直连超时，先列为 `Conditional`。

### 中国 A 股与中国政策

#### 中国人民银行

- 类型：中国央行与货币政策。
- 权威性：最高，属于一手来源。
- 用途：货币政策、流动性操作、金融数据、政策声明。
- 入口：`https://www.pbc.gov.cn/`
- 本次状态：`OK`

#### 国家统计局

- 类型：中国宏观数据。
- 权威性：最高，属于一手来源。
- 用途：PMI、CPI、PPI、工业、消费、投资、地产等数据。
- 入口：`https://www.stats.gov.cn/english/`
- 本次状态：`OK`

#### 证监会

- 类型：资本市场监管。
- 权威性：最高，属于一手来源。
- 用途：监管政策、处罚、发行制度、市场制度变化。
- 入口：`https://www.csrc.gov.cn/csrc_en/index.shtml`
- 本次状态：`OK`

#### 上交所 / 深交所

- 类型：交易所公告和上市公司信息。
- 权威性：最高，属于一手来源。
- 用途：公司公告、停复牌、监管信息、交易规则。
- 入口：
  - `https://www.sse.com.cn/`
  - `https://www.szse.cn/English/`
- 本次状态：`OK`

第一阶段建议：

- 政策和宏观：PBOC + 国家统计局。
- 监管和公司公告：证监会 + 上交所/深交所。

### 加密货币

#### SEC / CFTC

- 类型：监管和 ETF 文件。
- 权威性：最高，属于一手来源。
- 用途：ETF、交易所、执法、监管诉讼、衍生品监管。
- 自动化入口：
  - SEC data：`https://data.sec.gov/`
  - CFTC：`https://www.cftc.gov/`
- 本次状态：`OK`

#### Coinglass

- 类型：加密衍生品与市场结构数据。
- 权威性：中高，属于专业数据源。
- 用途：资金费率、持仓、爆仓、市场杠杆。
- 入口：`https://www.coinglass.com/`
- 本次状态：`OK`

备选：

- Coinbase Institutional：质量高，但本次超时，先列为 `Backup`。
- CoinGecko / CoinMarketCap / DeFiLlama：本次测试不稳定，先列为 `Backup` 或后续 API 备选。

### 高质量媒体

#### CNBC RSS

- 类型：财经新闻 RSS。
- 权威性：高。
- 用途：快速发现美股、宏观、企业和市场新闻。
- 自动化入口：`https://www.cnbc.com/id/100003114/device/rss/rss.html`
- 本次状态：`OK`
- 备注：官网网页返回过 `403`，自动化优先用 RSS。

#### Associated Press

- 类型：新闻媒体。
- 权威性：高。
- 用途：宏观、地缘、全球市场新闻确认。
- 入口：`https://apnews.com/hub/financial-markets`
- 本次状态：`OK`

备选：

- Bloomberg、Reuters、FT、WSJ：质量高，但当前测试不适合作为无授权、无代理的核心自动化来源；保留为人工阅读、授权终端或后续代理源。

### 地缘政治与制裁

#### OFAC

- 类型：美国制裁与财政部行动。
- 权威性：最高，属于一手来源。
- 用途：制裁、实体名单、金融限制、地缘政策冲击。
- 入口：`https://ofac.treasury.gov/recent-actions`
- 本次状态：`OK`
- 备注：本次响应较慢，但可获取。

#### U.S. State Department

- 类型：外交政策和地缘声明。
- 权威性：最高，属于一手来源。
- 用途：外交声明、地区冲突、政策立场。
- 入口：`https://www.state.gov/press-releases/`
- 本次状态：`OK`

## 第一阶段默认核心源组合

```text
美股/公司：SEC data
美国宏观：Fed RSS + BEA API
黄金：CFTC COT + World Gold Council
A股/中国政策：PBOC + 国家统计局 + 证监会 + 上交所/深交所
Crypto：SEC/CFTC + Coinglass
媒体：CNBC RSS + AP
地缘：OFAC + State Department
```

## Collector 规则

第一阶段 `market-news-collector` 应只把 `OK` 和必要的 `Conditional` 源作为核心自动化源。

高质量但不稳定的源，例如 Bloomberg、Reuters、FT、WSJ、CME、Coinbase Institutional、CoinGecko、CoinMarketCap、DeFiLlama，不进入第一阶段核心自动化，但保留在来源地图中作为后续扩展对象。

