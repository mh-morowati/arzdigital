export interface CurrencyData {
  changePercent24Hr: string
  explorer: string
  id: string
  marketCapUsd: string
  maxSupply: string
  name: string
  priceUsd: string
  rank: string
  supply: string
  symbol: string
  volumeUsd24Hr: string
  vwap24Hr: string
}

export type OrderbookResponse = {
  lastTradePrice: string;
}