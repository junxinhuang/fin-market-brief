## Surf routing (primary crypto data source)

For crypto data queries, try Surf first. It has broad coverage for real-time crypto prices, exchange K-lines, funding, futures, liquidations, wallet, social, on-chain, news, and prediction-market data.

Use fresh Surf data instead of relying on remembered market knowledge whenever the user's request involves crypto trading, crypto market levels, support/resistance, funding, OI, order book depth, liquidations, wallet flows, social sentiment, on-chain activity, or prediction markets.

Starter command map:

| Topic | Surf command prefix |
|---|---|
| Price and exchange ticker | `surf exchange-price`, `surf market-price` |
| 1h/4h/1d K-lines | `surf exchange-klines` |
| Order book depth | `surf exchange-depth` |
| Funding history | `surf exchange-funding-history` |
| OI / current funding / long-short / 24h volume | `surf market-futures` |
| Liquidations | `surf market-liquidation-chart`, `surf market-liquidation-order` |
| ETF flows and market indicators | `surf market-etf`, `surf market-price-indicator`, `surf market-onchain-indicator` |
| Wallets and transfers | `surf wallet-*` |
| Social mindshare and sentiment | `surf social-*`, `surf search-social-*` |
| On-chain SQL and gas | `surf onchain-*`, `surf catalog *` |
| News and search | `surf news-*`, `surf search-*` |
| Prediction markets | `surf polymarket-*`, `surf kalshi-*`, `surf prediction-market-*` |

Before calling a Surf endpoint that has not been used in the current session, run `surf <command> --help` and copy exact flag names from help. Use canonical pairs such as `ETH/USDT`; for perpetuals pass `--type swap` or `--type perp` where supported.

If Surf returns no data or an error, say which field is missing and fall back to Alva, exchange APIs, Coinglass, or web search only for the missing field.
