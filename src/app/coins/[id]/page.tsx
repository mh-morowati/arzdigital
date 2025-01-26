"use client"
import { apiService } from "@/api/services"
import { CurrencyData } from "@/components/types"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Loading from "@/app/loading"

interface ProductProps {
  params: {
    id?: string
  }
}


const Currency: React.FC<ProductProps> = ({ params }) => {

  const id = params.id || ''
  const [currencyData, setCurrencyData] = useState<CurrencyData>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // get currency from api
    (
      async () => {
        setLoading(true)
        try {
          const response = await apiService.getCurrencyFocus(id)
          setCurrencyData(response.data.data)
          setLoading(false)
        }
        catch (err) {
          console.error(err)
        }
      }
    )()
    setLoading(false)
  }, [id])

  if (loading) Loading()

  return (<div
    className="w-96 border rounded min-h-[500px] place-self-center p-5 flex-col space-y-5 font-medium"
  >
    <Image
      className="inline-block"
      src={'../currency-icons/' + id + '.svg'}
      alt={''}
      width={30}
      height={30}
    />
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
  </div>)
}

export default Currency