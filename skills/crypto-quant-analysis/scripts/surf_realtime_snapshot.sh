#!/usr/bin/env bash
set -euo pipefail

SYMBOL="${1:-ETH}"
EXCHANGE="${2:-binance}"
TYPE="${3:-swap}"
PAIR="${SYMBOL}/USDT"
SURF_BIN="${SURF_BIN:-/Users/junxinhuang/.local/bin/surf}"

if [ ! -x "$SURF_BIN" ]; then
  echo "surf binary not found at $SURF_BIN" >&2
  exit 127
fi

echo "### surf exchange-price ${PAIR}"
"$SURF_BIN" exchange-price --pair "$PAIR" --type "$TYPE" --exchange "$EXCHANGE" --json

echo
echo "### surf exchange-klines ${PAIR} 1h"
"$SURF_BIN" exchange-klines --pair "$PAIR" --type "$TYPE" --exchange "$EXCHANGE" --interval 1h --limit 24 --json

echo
echo "### surf exchange-klines ${PAIR} 4h"
"$SURF_BIN" exchange-klines --pair "$PAIR" --type "$TYPE" --exchange "$EXCHANGE" --interval 4h --limit 18 --json

echo
echo "### surf exchange-klines ${PAIR} 1d"
"$SURF_BIN" exchange-klines --pair "$PAIR" --type "$TYPE" --exchange "$EXCHANGE" --interval 1d --limit 30 --json

echo
echo "### surf exchange-funding-history ${PAIR}"
"$SURF_BIN" exchange-funding-history --pair "$PAIR" --exchange "$EXCHANGE" --limit 12 --json

echo
echo "### surf exchange-depth ${PAIR}"
"$SURF_BIN" exchange-depth --pair "$PAIR" --type "$TYPE" --exchange "$EXCHANGE" --limit 50 --json

echo
echo "### surf market-liquidation-chart ${SYMBOL}"
LIQ_EXCHANGE="$(tr '[:lower:]' '[:upper:]' <<< "${EXCHANGE:0:1}")${EXCHANGE:1}"
"$SURF_BIN" market-liquidation-chart --symbol "$SYMBOL" --interval 1h --exchange "$LIQ_EXCHANGE" --limit 24 --json

echo
echo "### surf market-futures"
"$SURF_BIN" market-futures --json
