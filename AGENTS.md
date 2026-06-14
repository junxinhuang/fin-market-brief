## Crypto Data Routing

Surf has been removed. For crypto data queries, use a multi-source route and show data gaps explicitly.

Primary live derivatives source:

| Need | Source |
|---|---|
| Perpetual real-time price, mark/mid, funding, OI, 24h volume | Hyperliquid public API |
| 1h/4h/1d perpetual K-lines | Hyperliquid `candleSnapshot` |
| Order book depth and spread | Hyperliquid `l2Book` |
| Funding history | Hyperliquid `fundingHistory` |
| Ethereum gas | Ethereum public RPC `eth_gasPrice` |
| Market-wide sentiment proxy | Alternative.me Fear & Greed |
| Prediction market search | Polymarket Gamma API, when reachable |

Installed reference skills:

- `swap-market` and `swap-ws-market` from BingX official API skills are installed. They document perpetual market APIs, but direct BingX REST requests currently return CloudFront 403 from this environment, so they are not the primary live route.
- `alva` remains installed for future persistent monitoring, backtesting, feeds, and dashboards.

For BTC/ETH/SOL contract views, prefer:

```bash
node /Users/junxinhuang/Desktop/fin/skills/crypto-quant-analysis/scripts/crypto_realtime_snapshot.mjs ETH
```

If a requested field cannot be sourced, label it `缺失/未验证`; do not replace liquidation heatmaps, social sentiment, or long/short ratio with unrelated proxies.
