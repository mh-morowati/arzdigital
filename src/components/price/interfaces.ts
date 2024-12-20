export interface Crypto {
    id: string;
    name: string;
    nameid: string;
    price_usd: string;
    rank: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
  }
  
  export interface PricesProps {
    cryptoData: Crypto[];
  }

  export interface PricesApi {
    [x: string]: Crypto[];
  }