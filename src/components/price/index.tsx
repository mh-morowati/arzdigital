"use client"
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Crypto {
    id: string;
    name: string;
    price_usd: string;
    rank: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
  }

const Prices: React.FC = () => {
    const [cryptoData, setCryptoData] = useState<Crypto[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("https://api.coinlore.net/api/tickers/");
            setCryptoData(res.data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

      
    return (<div>
        <ul>
            <li className="mt-2 mb-7 flex">
                <span className="mr-5">#</span>

                <span className=" text-zinc-500 basis-3/12">currency</span>
                <span className="text-zinc-500 basis-2/12">price$</span>
                <span className="text-zinc-500 basis-2/12">percent_change_1h</span>
                <span className="text-zinc-500 basis-2/12">percent_change_24h</span>
                <span className="text-zinc-500 basis-2/12">percent_change_7d</span>
            </li>
            {cryptoData.map((coin) => (
                <li key={coin.id} className="my-2 flex py-1">
                    <span className="mr-5 text-sm text-zinc-600">{coin.rank}</span>
                    <span className="basis-3/12">{coin.name}</span>
                    <span className=" text-sky-700  basis-2/12">${coin.price_usd}</span>
                    {parseFloat(coin.percent_change_1h) >= 0 ? <span className=" text-center basis-2/12 text-green-600">{coin.percent_change_1h}%</span> :
                        <span className=" text-center basis-2/12 text-red-600">{coin.percent_change_1h}%</span>}
                    {parseFloat(coin.percent_change_24h) >= 0 ? <span className=" text-center basis-2/12"><span className="bg-green-500 rounded-xl text-white px-2 py-1">
                        {coin.percent_change_24h}%</span></span> :
                        <span className=" text-center basis-2/12"><span className="bg-red-500 py-1 rounded-xl px-2 text-white">{coin.percent_change_24h}%</span></span>}
                    {parseFloat(coin.percent_change_7d) >= 0 ? <span className=" text-center basis-2/12 text-green-600">{coin.percent_change_7d}%</span> :
                        <span className=" text-center basis-2/12 text-red-600">{coin.percent_change_7d}%</span>}
                </li>
            ))
            }
        </ul>
    </div>);
}

export default Prices;
