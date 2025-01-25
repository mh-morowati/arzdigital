"use client"
import { apiService } from "@/api/services";
import { CurrencyData } from "@/components/types";
import { useEffect, useState } from 'react';
import Image from 'next/image';



interface ProductProps {
  params: {
    id?: string;
  };
}

const Currency: React.FC<ProductProps> = ({ params }) => {
  const id = params.id || ''
  const [currencyData, setCurrencyData] = useState<CurrencyData>();

  useEffect(() => {
    // get countries from server
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

  return (<div className="w-96 border rounded min-h-[500px] place-self-center p-5">
    <Image className="inline-block" src={'../currency-icons/' + id +'.svg'} alt={''} width={30} height={30}/>
  {
    currencyData && <>
    <h1 className="inline-block mx-2">{currencyData?.name} ({currencyData?.symbol})</h1>
    <p>Price (USD): {Number(currencyData?.priceUsd).toFixed(2)}</p>
    <p>Market Cap (USD): {Number(currencyData?.marketCapUsd).toFixed(2)}</p>
    <p>24Hr Change: {Number(currencyData?.changePercent24Hr).toFixed(2)}%</p>
    <p>Volume (24Hr): {Number(currencyData?.volumeUsd24Hr).toFixed(2)}</p>
    <p>VWAP (24Hr): {Number(currencyData?.vwap24Hr).toFixed(2)}</p>
    <p>Supply: {Number(currencyData?.supply).toFixed(2)}</p>
    <p>Max Supply: {Number(currencyData?.maxSupply).toFixed(2)}</p>
    <p>Rank: {currencyData?.rank}</p>
    <p>Explorer: <a href={currencyData?.explorer} target="_blank" rel="noopener noreferrer">{currencyData?.explorer}</a></p></>
  }
  </div>);
}

export default Currency;