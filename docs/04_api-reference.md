# API Reference

_Base URL: `https://api.atlaterminal.io/v1`_

## Token Data
| Feature         | Method & Path                      | Description                          |
|-----------------|------------------------------------|--------------------------------------|
| Trending Tokens | `GET /tokens/trending`             | List trending tokens across chains   |
| Token Search    | `GET /tokens/search?query=…`       | Search by name, symbol, or address   |
| Token Metadata  | `GET /tokens/{chain}/{address}`    | Fetch name, symbol, decimals, logo   |

## Pair / Pool
| Feature       | Path                                         | Description                        |
|---------------|----------------------------------------------|------------------------------------|
| List Pairs    | `GET /pairs/{chain}/{tokenAddress}`          | Trading pairs for a token          |
| Pair Stats    | `GET /pairs/{chain}/{pairAddress}/stats`     | Price, volume, liquidity stats     |
| Swap History  | `GET /pairs/{chain}/{pairAddress}/swaps`     | Recent swap transactions           |
| Sniper Bots   | `GET /pairs/{chain}/{pairAddress}/snipers`   | Early buyers/sniper detection      |

## Holders
| Feature          | Path                                         | Description                          |
|------------------|----------------------------------------------|--------------------------------------|
| List Holders     | `GET /holders/{chain}/{tokenAddress}`        | All holders & balances               |
| Holder Analytics | `GET /holders/{chain}/{tokenAddress}/stats`  | Distribution & top-holder metrics    |

See the openapi.yaml file for more details on the API endpoints and their parameters.
