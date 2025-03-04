"use client"
import { apiService } from "@/api/services"
import { CurrencyData } from "@/components/types"
import { useEffect, useState } from 'react'

type Props = {
    id: string
}
const CoinPrice = (props : Props) => {

    const { id } = props
    const [currencyData, setCurrencyData] = useState<CurrencyData>()
    
  useEffect(() => {
    // get currency from api
    (
      async () => {
        try {
          const response = await apiService.getCurrencyFocus(id)
          setCurrencyData(response.data.data)
        }
        catch (err) {
          console.error(err)
        }
      }
    )()
  }, [id])
    
    return (<>
     {
      currencyData && <>
        <h1 className="inline-block mx-2">
          {currencyData?.name} ({currencyData?.symbol})
        </h1>
        <p>Price (USD):
          <span className="text-sm text-stone-600 float-right">
            {Number(currencyData?.priceUsd).toFixed(2)}
          </span>
        </p>
        <p>Market Cap (USD):
          <span className="text-sm text-stone-600 float-right">
            {Number(currencyData?.marketCapUsd).toFixed(2)}
          </span>
        </p>
        <p>24Hr Change:
          <span className="text-sm text-stone-600 float-right">
            {Number(currencyData?.changePercent24Hr).toFixed(2)}%
          </span>
        </p>
        <p>Volume (24Hr):
          <span className="text-sm text-stone-600 float-right">
            {Number(currencyData?.volumeUsd24Hr).toFixed(2)}
          </span>
        </p>
        <p>VWAP (24Hr):
          <span className="text-sm text-stone-600 float-right">
            {Number(currencyData?.vwap24Hr).toFixed(2)}
          </span>
        </p>
        <p>Supply:
          <span className="text-sm text-stone-600 float-right">
            {Number(currencyData?.supply).toFixed(2)}
          </span>
        </p>
        <p>Max Supply:
          <span className="text-sm text-stone-600 float-right">
            {Number(currencyData?.maxSupply).toFixed(2)}
          </span>
        </p>
        <p>Rank:
          <span className="text-sm text-stone-600 float-right">
            {currencyData?.rank}
          </span>
        </p>
        <a
          className="text-blue-600 float-right"
          href={currencyData?.explorer}
          target="_blank"
          rel="noopener noreferrer"
        >
          {currencyData?.explorer}
        </a>
      </>
    }
    {
      !currencyData && <h1>
    No information...
      </h1>
        }
    </>)
}

export default CoinPrice