
const getCurrencyList = async () => {
    const response = await fetch('https://api.coinlore.net/api/tickers/')
    return response
  }

  export const apiService = {
    getCurrencyList,

  }