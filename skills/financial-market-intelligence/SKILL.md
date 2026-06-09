---
name: financial-market-intelligence
description: Umbrella skill for financial market intelligence. Use when collecting, classifying, analyzing, or briefing market-moving information across U.S. equities, gold, China A-shares, crypto, major indices, central banks, macro data, and geopolitical events. This skill routes work to subdomain frameworks, enforces a shared taxonomy, separates facts from interpretation, and produces structured market briefings.
---

# Financial Market Intelligence

## Role

Act as the umbrella coordinator for market intelligence work. Keep all subdomain analysis aligned to one shared framework:

- Facts and interpretation are separated.
- Sources are ranked by quality.
- Every item is tagged using the shared taxonomy.
- Cross-asset transmission is considered before conclusions are written.
- Confidence and follow-up checks are explicit.

## Workflow

1. **Clarify the task type**
   - Collection: gather market-relevant information.
   - Classification: tag and score raw items.
   - Analysis: explain transmission channels and likely impact.
   - Briefing: synthesize items into a concise market note.
   - Framework iteration: update the umbrella framework or subdomain requirements.

2. **Select the relevant subdomain**
   - U.S. equities
   - Gold
   - China A-shares
   - Crypto
   - Major indices
   - Central banks and macro policy
   - Geopolitics
   - Cross-asset synthesis

3. **Apply the shared taxonomy**
   - `asset_class`: equities, rates, FX, commodities, crypto, credit, multi_asset
   - `region`: U.S., China, Europe, Japan, global, other
   - `topic`: macro, policy, earnings, liquidity, flows, regulation, geopolitics, market_structure
   - `time_horizon`: immediate, short_term, medium_term, structural
   - `impact_direction`: bullish, bearish, mixed, unclear
   - `confidence`: high, medium, low
   - `source_quality`: primary, high, medium, low
   - `urgency`: breaking, monitor, background

4. **Analyze transmission**
   - What happened?
   - Which market narrative changed?
   - Which assets are first-order exposed?
   - What are the second-order effects?
   - What would confirm or invalidate the interpretation?

5. **Produce the output**
   - Keep it concise.
   - Use explicit confidence.
   - Include sources when browsing or source material is used.
   - End with a watchlist or follow-up checklist when useful.

## Subdomain Routing

Use these reference files when the task needs deeper structure:

- Overall framework: `references/framework.zh.md`
- Coverage and analysis requirements: `references/coverage-and-analysis-requirements.zh.md`
- Autonomous deep-dive rules: `references/autonomous-deep-dive-rules.zh.md`
- Daily briefing continuity rules: `references/daily-briefing-continuity.zh.md`
- Report output format: `references/report-output-format.zh.md`
- Benchmark-inspired report modules: `references/benchmark-inspired-modules.zh.md`
- Central bank and official data calendar: `references/central-bank-data-calendar.zh.md`
- Source map: `references/source-map.zh.md`
- Core source whitelist: `references/core-source-whitelist.zh.md`
- Source accessibility and fallback rules: `references/source-accessibility.zh.md`
- Skill map and iteration rules: `references/skill-map.zh.md`

When a future child skill exists for a subdomain, use the umbrella skill first to preserve the shared framework, then use the child skill for domain-specific rules.

## Standard Briefing Shape

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
