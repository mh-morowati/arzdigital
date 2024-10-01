/* eslint-disable @next/next/no-img-element */
import React from "react";
import axios from "axios";



interface Crypto {
    id: string;
    name: string;
    current_price: number;
    image: string;
    market_cap_rank: number;
    market_cap: number;
    total_volume: number;
}



const Prices = async () => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    return ( <div>
         <ul>
         <li className="mt-2 mb-7 bg-slate-300">
                    <span className="mr-5">#</span>
                    
                    <span className=" text-zinc-500">currency</span>
                    <span className="mx-14 w-[120px] text-zinc-500">price$</span>
                    <span className="mx-20 w-[180px] text-zinc-500">market cap$</span>
                    <span className="mx-20 w-[180px] text-zinc-500">market volume$</span>
                </li>
            { res.data.map((coin: Crypto) => (
                <li key={coin.id} className="my-2">
                    <span className="mr-5">{coin.market_cap_rank}</span>
                    <img className="inline-block" src={coin.image} alt={coin.name} width="20" height="20" />
                    <span>{coin.name}</span>
                    <span className="mx-14 w-[120px] text-sky-600 text-center">{coin.current_price}</span>
                    <span className="mx-20 w-[180px] text-center">{coin.market_cap}</span>
                    <span className="mx-20 w-[180px] text-center">{coin.total_volume}</span>
                </li>
            ))
            }
        </ul>
    </div> );
}

export default Prices;
