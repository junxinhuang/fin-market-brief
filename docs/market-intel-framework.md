# Financial Market Intelligence Framework

## Objective

Build a repeatable market intelligence workflow for collecting, classifying, analyzing, and summarizing information that may affect:

- U.S. equities
- Gold and precious metals
- China A-shares
- Crypto assets
- Major global indices
- Central bank policy
- Geopolitical events

The system should separate raw information gathering from interpretation. Each output should make clear what happened, why it matters, which assets are affected, and what still needs confirmation.

## Core Principles

1. **Separate facts from interpretation**
   - Facts: source, time, actor, event, data point, quote, market move.
   - Interpretation: likely impact, confidence, affected assets, second-order effects.

2. **Use cross-market thinking**
   - A single event should be checked against rates, FX, commodities, equities, credit, and crypto where relevant.
   - Avoid analyzing each asset class in isolation.

3. **Prefer primary and high-signal sources**
   - Central banks, exchanges, regulators, official statistics, company filings, earnings calls.
   - Reputable wires and major financial media for fast event discovery.
   - Social media only as an early warning layer, not as final evidence.

4. **Keep confidence explicit**
   - Use confidence levels: high, medium, low.
   - Explain what would raise or lower confidence.

5. **Track time sensitivity**
   - Immediate: intraday trading relevance.
   - Short term: 1-5 trading days.
   - Medium term: 1-8 weeks.
   - Structural: multi-month or regime-level implications.

## Market Coverage

### U.S. Equities

Primary watch areas:

- S&P 500, Nasdaq 100, Dow Jones, Russell 2000
- Mega-cap technology and AI-related names
- Banks, energy, healthcare, consumer discretionary
- Earnings, guidance, buybacks, margins, labor cost, credit stress
- U.S. macro: CPI, PCE, payrolls, ISM, retail sales, GDP, Treasury auctions

Key interpretation questions:

- Is the event affecting index level, sector rotation, factor exposure, or single names?
- Does it change earnings expectations, discount rates, liquidity, or risk appetite?
- Is the move valuation-driven, policy-driven, or positioning-driven?

### Gold

Primary watch areas:

- Real yields
- U.S. dollar
- Fed policy expectations
- Central bank gold purchases
- ETF flows
- Geopolitical stress
- Inflation expectations

Key interpretation questions:

- Is gold reacting as a real-rate asset, a dollar hedge, an inflation hedge, or a crisis hedge?
- Are moves supported by rates and FX, or mainly by safe-haven demand?
- Is physical demand or central bank buying part of the story?

### China A-Shares

Primary watch areas:

- CSI 300, SSE Composite, ChiNext, STAR Market
- PBOC liquidity, reserve requirement ratio, loan prime rate
- Fiscal stimulus, property sector policy, local government debt
- Industrial profits, PMI, exports, credit data, inflation
- Northbound flows, margin financing, sector policy

Key interpretation questions:

- Is the event policy easing, liquidity support, industrial policy, or regulatory risk?
- Which sectors benefit or suffer: property, banks, brokers, consumption, EV, semiconductors, defense?
- Is sentiment being driven by domestic liquidity or global China-risk pricing?

### Crypto

Primary watch areas:

- BTC, ETH, major layer-1 assets, stablecoins
- Spot ETF flows
- On-chain liquidity, leverage, funding rates
- Regulatory actions
- Exchange risk, custody risk, stablecoin risk
- Correlation with Nasdaq, dollar liquidity, and real yields

Key interpretation questions:

- Is the event macro liquidity, regulatory, technical/on-chain, or market-structure driven?
- Is leverage rising or being flushed?
- Does the news affect BTC dominance, ETH beta, or broader altcoin risk?

### Major Indices

Primary watch areas:

- S&P 500, Nasdaq 100, Russell 2000
- Nikkei 225, TOPIX
- Euro Stoxx 50, DAX, FTSE 100
- Hang Seng Index, Hang Seng Tech
- CSI 300, SSE Composite
- U.S. Dollar Index, U.S. Treasury yields, VIX

Key interpretation questions:

- Is the event local, regional, or global?
- Are indices confirming the same risk signal, or diverging?
- Is the market reaction led by equities, rates, FX, commodities, or volatility?

### Central Banks

Primary watch areas:

- Federal Reserve
- PBOC
- ECB
- BOJ
- BOE
- SNB
- Major emerging-market central banks when relevant

Signal types:

- Rate decisions
- Policy statements
- Meeting minutes
- Speeches
- Balance sheet changes
- Liquidity operations
- Forward guidance

Key interpretation questions:

- Did the event shift the reaction function?
- Did the market price a different rate path?
- Is policy easing/tightening through rates, liquidity, currency management, or guidance?

### Geopolitics

Primary watch areas:

- War and military escalation
- Sanctions and export controls
- Energy supply disruption
- Shipping lanes and trade routes
- Elections and regime change
- Cybersecurity incidents affecting markets
- U.S.-China, Middle East, Russia-Ukraine, Taiwan Strait

Key interpretation questions:

- Is this a headline risk, supply shock, demand shock, or sanctions/regulatory event?
- Which assets are first-order exposed?
- What are the plausible escalation and de-escalation paths?

## Signal Taxonomy

Each collected item should be tagged with:

- `asset_class`: equities, rates, FX, commodities, crypto, credit, multi-asset
- `region`: U.S., China, Europe, Japan, global, other
- `topic`: macro, policy, earnings, liquidity, flows, regulation, geopolitics, market-structure
- `time_horizon`: immediate, short_term, medium_term, structural
- `impact_direction`: bullish, bearish, mixed, unclear
- `confidence`: high, medium, low
- `source_quality`: primary, high, medium, low
- `urgency`: breaking, monitor, background

## Analysis Workflow

1. **Collect**
   - Pull from predefined source lists.
   - Capture timestamp, source, headline, summary, link, and relevant quote if needed.

2. **Classify**
   - Assign taxonomy tags.
   - Identify affected asset classes and markets.

3. **Verify**
   - Check whether the item is confirmed by a primary source or multiple credible sources.
   - Flag rumors and unconfirmed reports clearly.

4. **Interpret**
   - Explain the likely transmission channel.
   - Separate first-order and second-order effects.
   - Note what market pricing is already reflecting when data is available.

5. **Prioritize**
   - Score importance by market impact, novelty, source quality, and time sensitivity.

6. **Synthesize**
   - Produce a concise daily or intraday briefing.
   - Group related events into themes.
   - Highlight conflicts, divergences, and confirmation signals.

7. **Monitor Follow-Ups**
   - List specific data, speeches, filings, market levels, or official confirmations to watch.

## Importance Scoring

Use a 1-5 score for each dimension:

- Market impact: expected influence on prices or risk appetite.
- Novelty: how much the event changes the known story.
- Source quality: reliability and proximity to primary evidence.
- Breadth: number of affected markets or asset classes.
- Urgency: how quickly the information needs action or monitoring.

Suggested total score:

```text
importance = market_impact + novelty + source_quality + breadth + urgency
```

Interpretation:

- 21-25: top priority, briefing lead
- 16-20: important, include in main briefing
- 11-15: relevant, include if connected to theme
- 5-10: background or watchlist only

## Standard Output Template

```markdown
## Market Intelligence Brief

Date:
Session:

### Executive Summary

- 

### Top Market-Moving Items

#### 1. [Headline]

- What happened:
- Why it matters:
- Affected markets:
- Directional read:
- Confidence:
- Watch next:
- Sources:

### Cross-Market Themes

- 

### Asset-Class Notes

#### U.S. Equities
- 

#### Gold
- 

#### China A-Shares
- 

#### Crypto
- 

#### Rates / FX / Volatility
- 

### Central Bank Watch

- 

### Geopolitical Watch

- 

### Follow-Up Checklist

- 
```

## Proposed Skills

### 1. `market-news-collector`

Purpose:

- Collect and deduplicate market-relevant news.
- Preserve source, timestamp, link, and raw headline.
- Distinguish primary sources, wires, media, and social signals.

Likely references:

- Source whitelist
- Search query patterns
- Region and asset-class source maps

### 2. `market-signal-classifier`

Purpose:

- Convert raw news items into structured tags.
- Identify asset class, region, topic, urgency, confidence, and likely direction.

Likely references:

- Signal taxonomy
- Classification examples
- Directionality heuristics

### 3. `macro-policy-analyst`

Purpose:

- Analyze central bank, macro data, rates, FX, and liquidity implications.
- Track policy reaction functions and major data surprises.

Likely references:

- Central bank calendars and source list
- Macro indicator interpretation guide
- Rates and FX transmission channels

### 4. `cross-asset-market-analyst`

Purpose:

- Synthesize implications across U.S. equities, gold, A-shares, crypto, indices, rates, FX, and volatility.
- Detect whether market reactions confirm or conflict with the narrative.

Likely references:

- Cross-asset transmission map
- Asset-specific interpretation guide
- Market regime checklist

### 5. `geo-risk-monitor`

Purpose:

- Track geopolitical events and map them to market transmission channels.
- Separate headline risk from confirmed policy, supply, sanctions, or military developments.

Likely references:

- Geopolitical region map
- Escalation/de-escalation framework
- Asset exposure map

### 6. `market-briefing-writer`

Purpose:

- Turn structured analysis into intraday, daily, or weekly briefings.
- Keep facts, interpretation, confidence, and follow-ups explicit.

Likely references:

- Briefing templates
- Tone and formatting rules
- Example outputs

## Skill Architecture

Recommended folder structure:

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

## Data Object Draft

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

## Next Build Step

Create the first two skills in order:

1. `market-news-collector`
2. `market-signal-classifier`

These establish the intake and structure layer. Analysis skills should depend on their output rather than trying to solve collection, classification, and interpretation at the same time.
