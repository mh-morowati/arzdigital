import axios from "axios"

const getCurrencyList = async () => {
  const response = await fetch('https://api.coinlore.net/api/tickers/')
  return response
}

const getCurrencyFocus = async (nameId: string) => {
  const response = await axios.get(`https://api.coincap.io/v2/assets/${nameId}`)
  return response
}

export const apiService = {
  getCurrencyList,
  getCurrencyFocus
}