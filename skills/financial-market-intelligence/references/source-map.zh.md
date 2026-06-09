# 消息来源规划

## 目标

为金融市场信息面系统建立分层来源体系。所有消息先按来源质量分层，再进入分类、验证、分析和简报流程。

可访问性、墙内直连测试和替代策略见 `source-accessibility.zh.md`。来源质量高不等于自动化直连稳定，采集系统必须同时考虑信源质量和网络可用性。

第一阶段核心自动化源见 `core-source-whitelist.zh.md`。当需要构建 collector 时，优先使用白名单，而不是本文件中的完整扩展来源池。

来源分为四层：

1. **一级来源：官方与原始文件**
2. **二级来源：高质量新闻与专业媒体**
3. **三级来源：市场数据与价格确认**
4. **四级来源：预警信号与社交来源**

原则：

- 交易判断优先使用一级来源和价格确认。
- 二级来源用于快速发现和补充背景。
- 四级来源只能触发 watch，不直接作为结论依据。

## 一级来源：官方与原始文件

### 美国宏观与政策

- Federal Reserve：FOMC 声明、会议纪要、SEP、新闻发布会、官员讲话。
- BLS：CPI、PPI、就业、工资、JOLTS。
- BEA：GDP、PCE、个人收入与支出。
- U.S. Treasury：美债发行、财政部公告、TGA 相关信息。
- SEC EDGAR：上市公司 10-K、10-Q、8-K、13F、Form 4、S-1 等。
- CFTC：COT 持仓报告，尤其用于黄金、美元、利率、能源、股指期货。

用途：

- 确认宏观数据、政策信号、公司公告和监管事件。
- 对媒体报道做最终校验。

### 中国宏观、政策与 A 股

- 中国人民银行：货币政策、流动性操作、金融数据、官员讲话。
- 国家统计局：PMI、CPI、PPI、工业增加值、社零、固定资产投资、房地产数据。
- 财政部、发改委、商务部：财政刺激、产业政策、贸易政策。
- 证监会：资本市场监管、政策、处罚、发行制度。
- 上交所：上市公司公告、交易提示、监管信息、行情与数据。
- 深交所：上市公司公告、停复牌、融资融券、监管信息。
- 北交所：北交所上市公司和政策信息。
- 港交所 / HKEXnews：港股公告、互联互通、港股和中概相关信息。

用途：

- 确认 A 股政策、公司公告、交易规则、监管变化。
- 追踪政策驱动型行情。

### 黄金与大宗商品

- CFTC COT：黄金期货持仓结构。
- CME / COMEX：黄金期货、期权、成交和合约信息。
- World Gold Council：黄金需求、央行购金、ETF 流、年度和季度报告。
- 各国央行官方储备数据：央行购金和外汇储备变化。

用途：

- 区分黄金的宏观驱动、仓位驱动、避险驱动和实物需求驱动。

### 加密货币

- SEC / CFTC：美国加密监管、ETF、交易所、诉讼和执法。
- CME：BTC、ETH 期货和期权，机构化衍生品数据。
- ETF 发行商官网：IBIT、FBTC、GBTC、BITB 等产品资金流、持仓和公告。
- Coinbase Institutional：机构研究和市场结构观察。
- Binance、OKX、Kraken、Coinbase Exchange 官方公告：交易所风控、上币、储备、监管相关信息。
- DeFiLlama、Glassnode、CryptoQuant、Token Terminal：链上流动性、协议收入、稳定币、交易所余额等。

用途：

- 区分宏观 beta、ETF 资金流、链上结构、监管冲击和交易所风险。

### 地缘政治与政策

- White House、U.S. State Department、U.S. Treasury OFAC：美国政策、制裁、外交声明。
- EU Council / European Commission：欧盟制裁、贸易和监管政策。
- NATO、UN、IAEA：安全、战争、核能和国际机构信息。
- 中国外交部、商务部、国务院：中方官方回应、贸易和外交政策。
- OPEC：能源政策和产量安排。

用途：

- 对地缘新闻做事实确认。
- 判断是否从标题风险升级为政策、制裁、能源或供应链冲击。

## 二级来源：高质量新闻与专业媒体

### 快速新闻源

- Bloomberg
- Reuters
- Dow Jones / MarketWatch
- Wall Street Journal
- Financial Times
- CNBC
- Associated Press

用途：

- 快速发现重大事件。
- 获取市场参与者解读和背景。
- 对官方来源暂未清晰呈现的信息做过渡性监控。

注意：

- 通讯社速度快，但仍要回到官方文件确认。
- 标题推送要警惕断章取义，尤其是央行讲话和地缘新闻。

### 中国与亚洲市场

- 财新
- 第一财经
- 证券时报
- 上海证券报
- 中国证券报
- 21 世纪经济报道
- Wind / Choice / 同花顺资讯
- Nikkei Asia
- South China Morning Post

用途：

- 追踪中国政策预期、产业链、A 股市场情绪、港股和亚洲市场联动。

注意：

- 政策相关报道要回到央行、证监会、财政部、发改委、交易所等官方渠道确认。

### 加密专业媒体

- The Block
- CoinDesk
- Cointelegraph
- Blockworks
- DL News

用途：

- 发现链上、交易所、监管、项目和 ETF 相关新闻。

注意：

- 项目方消息、交易所消息和 KOL 推文需要单独验证。

## 三级来源：市场数据与价格确认

### 跨资产价格

- TradingView：跨资产图表和初步价格确认。
- Yahoo Finance：股票、指数、ETF 基础数据。
- Nasdaq / NYSE / CME 官方页面：交易所层面的确认。
- FRED：美国宏观时间序列、利率、信用和流动性数据。
- Investing.com / MarketWatch：经济日历和资产报价备查。

### 中国市场数据

- Wind / Choice / 同花顺：A 股、港股、债券、资金流、行业数据。
- 上交所、深交所、港交所：官方公告和部分交易数据。
- 中证指数公司：A 股指数信息。

### 加密市场数据

- CoinMarketCap / CoinGecko：市值、价格和交易对初筛。
- Kaiko：市场微观结构和交易所流动性。
- Coinglass：合约持仓、资金费率、爆仓数据。
- DeFiLlama：TVL、稳定币、链上协议数据。
- Glassnode / CryptoQuant：链上指标和交易所余额。

用途：

- 验证新闻是否被价格确认。
- 判断影响是否跨资产扩散。
- 跟踪仓位、杠杆、流动性和资金流。

## 四级来源：预警信号与社交来源

- X / Twitter：央行记者、监管记者、地缘记者、链上分析师、项目方账号。
- Reddit / Discord / Telegram：加密社区和散户情绪。
- GitHub：加密项目、协议安全事件、开源项目动态。
- 公司 IR 邮件、RSS、新闻订阅。

用途：

- 早期预警。
- 发现尚未被主流媒体覆盖的线索。

限制：

- 不作为最终事实依据。
- 必须回到官方、链上数据、交易所公告或可信媒体确认。

## 来源质量打标

```text
primary = 官方文件、交易所公告、监管文件、央行/统计局/公司公告
high = Bloomberg、Reuters、WSJ、FT、CNBC、AP、财新等高质量媒体
medium = 行业媒体、专业博客、研究摘要、数据商二次解读
low = 社交媒体、KOL、论坛、单一未确认截图或传闻
```

## 按资产的默认来源组合

### 美股

默认组合：

- Fed + BLS + BEA + Treasury
- SEC EDGAR
- Bloomberg / Reuters / WSJ / FT / CNBC
- TradingView / Yahoo Finance / Nasdaq / NYSE

优先确认：

- 宏观事件看官方数据和 Fed。
- 公司事件看 EDGAR、公司 IR 和交易所公告。
- 市场反应看指数、行业 ETF、利率、美元和 VIX。

### 黄金

默认组合：

- Fed + U.S. Treasury yields + DXY
- CFTC COT
- CME / COMEX
- World Gold Council
- Bloomberg / Reuters

优先确认：

- 实际利率、美元、ETF 流、央行购金、地缘事件。

### 中国 A 股

默认组合：

- PBOC + 国家统计局 + 财政部 + 发改委 + 商务部
- 证监会 + 上交所 + 深交所 + 北交所
- 财新 / 第一财经 / 证券时报 / 中国证券报 / 上海证券报
- Wind / Choice / 同花顺

优先确认：

- 政策信息必须回到官方。
- 公司信息必须回到交易所公告。
- 资金面看北向、融资余额、央行操作和市场成交。

### 加密货币

默认组合：

- SEC / CFTC / CME
- ETF 发行商官网和 SEC filings
- Coinbase Institutional
- DeFiLlama / Glassnode / CryptoQuant / Coinglass
- The Block / CoinDesk / Blockworks
- 交易所官方公告

优先确认：

- ETF 和监管看 SEC、CFTC、发行商公告。
- 交易所风险看交易所公告、链上数据和储备证明。
- 杠杆风险看 funding、open interest、清算数据。

### 央行与宏观政策

默认组合：

- Fed、PBOC、ECB、BOJ、BOE、SNB
- BLS、BEA、国家统计局、Eurostat、日本总务省等官方统计机构
- CME FedWatch、利率期货、国债收益率曲线
- Bloomberg / Reuters / FT

优先确认：

- 先读原文声明，再看新闻解读。
- 对官员讲话要检查上下文。

### 地缘政治

默认组合：

- White House、State Department、OFAC、EU、NATO、UN、IAEA、中国外交部、商务部
- Reuters / AP / Bloomberg / FT
- 能源相关再看 OPEC、EIA、IEA

优先确认：

- 官方声明、制裁文件、军事或航运事实。
- 区分传闻、表态、政策文件和实际执行。

## 采集优先级

### 盘中监控

1. Bloomberg / Reuters / CNBC / 财新 / X 预警
2. 官方确认
3. 价格反应确认
4. 结构化标签和简报

### 日度简报

1. 官方和交易所公告
2. 高质量媒体复盘
3. 市场数据验证
4. 跨资产主题归纳

### 周度复盘

1. 宏观数据和央行信息
2. 资金流、仓位、ETF、COT、链上数据
3. 行业和主题变化
4. 下周关键日历
