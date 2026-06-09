# 来源可访问性与替代策略

## 测试说明

测试日期：2026-06-04

测试方式：

- 使用当前机器的外部网络执行 `curl` 连通性测试。
- 测试结果只代表当前网络、当前时间、当前 DNS/线路。
- 中国大陆网络访问状态可能因地区、运营商、DNS、协议、站点防护和时间变化。

结论分级：

- `stable`：当前直连可用。
- `usable_with_rules`：当前可用，但需要请求头、API key、RSS、合规 User-Agent 或特定端点。
- `unstable`：当前失败、超时、403、503，或站点防护明显。
- `avoid_as_core`：不建议作为核心自动化来源，只适合作为人工参考或备用。

## 当前测试结果摘要

### 稳定可用

- Federal Reserve 官网：`stable`
- Federal Reserve RSS：`stable`
- BEA 官网/API：`stable`
- CFTC 官网/COT 文本文件：`stable`
- U.S. Treasury 官网：`stable`
- 中国国家统计局：`stable`
- 中国人民银行：`stable`
- 中国证监会：`stable`
- 上交所：`stable`
- 深交所：`stable`
- World Gold Council：`stable`
- Coinglass：`stable`
- CNBC RSS：`stable`

### 需要规则或特定端点

- SEC：
  - 官网首页测试返回 `403`。
  - `data.sec.gov` 在带合规 User-Agent 后返回 `200`。
  - 自动化应优先使用 `data.sec.gov` 和 SEC 官方数据端点。

- BEA：
  - API 测试可用。
  - 正式使用应配置 API key，不依赖 sample user。

- CNBC：
  - 官网返回 `403`。
  - RSS 端点可用。
  - 自动化优先使用 RSS，不抓网页。

### 不稳定或当前不可用

- BLS：
  - 官网 HEAD 测试返回 `403`。
  - Public API 测试超时。
  - 建议准备替代：FRED、官方发布 PDF/HTML、经济日历、数据镜像。

- HKEXnews：
  - 当前返回 `503`。
  - 建议准备替代：港交所其他入口、披露易页面重试、公司 IR、Wind/Choice。

- CME Group：
  - 当前超时。
  - 建议准备替代：交易所授权数据、TradingView、Yahoo Finance、Investing、券商数据、CME RSS/数据文件如可用。

- DeFiLlama：
  - 当前失败。
  - 建议准备替代：DefiLlama API 镜像、CoinGecko、CoinMarketCap、Token Terminal、链上 RPC/数据商。

- CoinGecko：
  - 当前超时。
  - 建议准备替代：CoinMarketCap、CryptoCompare、交易所 API、Kaiko、CoinAPI。

- CoinMarketCap：
  - 当前超时。
  - 建议准备替代：CoinGecko、交易所 API、Coinglass、Kaiko、CoinAPI。

- Reuters：
  - 当前超时。
  - 不建议作为无代理自动化核心来源。

- Bloomberg：
  - 当前不可用。
  - 需要授权终端、邮件/RSS、代理或人工摘要。

- FT：
  - 当前超时。
  - 需要订阅、RSS/邮件、代理或人工摘要。

- WSJ：
  - 当前超时。
  - 需要订阅、RSS/邮件、代理或人工摘要。

## 自动化采集建议

### 核心层优先使用直连稳定源

默认作为自动化核心：

- Fed RSS 和官网
- BEA API
- CFTC COT 文本数据
- U.S. Treasury 官网/API
- 中国国家统计局
- 中国人民银行
- 证监会
- 上交所
- 深交所
- World Gold Council
- Coinglass
- SEC `data.sec.gov`

### 对不稳定源使用替代策略

1. **BLS**
   - 首选：BLS API。
   - 备选：FRED、BEA/经济日历、官方新闻稿页面、数据商。

2. **CME**
   - 首选：CME 官方数据或授权接口。
   - 备选：TradingView、Yahoo Finance、Investing、券商行情、CFTC COT。

3. **HKEXnews**
   - 首选：HKEXnews。
   - 备选：港交所其他入口、公司 IR、Wind/Choice、披露易重试。

4. **加密数据**
   - 首选：Coinglass、交易所 API、SEC/CFTC/CME、ETF 发行商。
   - 备选：CoinGecko、CoinMarketCap、CryptoCompare、Kaiko、CoinAPI、链上 RPC。

5. **海外财经媒体**
   - 首选：Reuters/Bloomberg/FT/WSJ 授权终端或邮件订阅。
   - 备选：CNBC RSS、AP、MarketWatch、官方源、国内财经媒体。
   - 若没有代理或授权，不应作为核心自动化依赖。

## 架构要求

后续 `market-news-collector` 必须支持：

- 来源健康检查。
- 请求头配置，尤其是 SEC User-Agent。
- API key 配置。
- 重试与超时。
- 主备来源切换。
- 本地缓存，避免单点网络故障。
- 手动补录入口，用于授权终端或无法直连的高质量信息。

## 采集优先级修正

在中国大陆直连环境下，优先级应调整为：

1. 国内官方源和交易所源。
2. 可直连的美国官方 API/RSS。
3. 可直连的数据商和 RSS。
4. 高质量媒体的授权终端、邮件、RSS 或代理。
5. 社交媒体和 KOL 仅作预警。

