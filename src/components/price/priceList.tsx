import Link from "next/link";
import { PricesProps } from "./interfaces";


const PricesList: React.FC<PricesProps> = ({ cryptoData }) => {
    return (<div>
        <ul>
          <li className="mt-2 md:mb-7 flex">
            <span className="md:mr-5">#</span>
            <span className=" text-zinc-500 md:basis-3/12 max-[850px]:basis-2/5 max-[850px]:text-center">currency</span>
            <span className="text-zinc-500 md:basis-2/12 max-[850px]:basis-2/5 max-[850px]:text-center">price$</span>
            <span className="text-zinc-500 md:basis-2/12 max-[850px]:hidden">percent_change_1h</span>
            <span className="text-zinc-500 md:basis-2/12 max-[850px]:basis-1/5 max-[850px]:text-center">percent_change_24h</span>
            <span className="text-zinc-500 md:basis-2/12 max-[850px]:hidden">percent_change_7d</span>
          </li>
          {cryptoData.map((coin) => (
            <Link key={coin.id} href={`/coins/${coin.nameid}`}>
            <li className="my-2 flex py-1">
              <span className="mr-5 text-sm text-zinc-600">{coin.rank}</span>
              <span className="md:basis-3/12 max-[850px]:basis-2/5">{coin.name}</span>
              <span className=" text-sky-700 md:basis-2/12 max-[850px]:basis-2/5">${coin.price_usd}</span>
              {parseFloat(coin.percent_change_1h) >= 0 ? <span className=" text-center basis-2/12 text-green-600 max-[850px]:hidden">{coin.percent_change_1h}%</span> :
                <span className=" text-center md:basis-2/12 text-red-600 max-[850px]:hidden">{coin.percent_change_1h}%</span>}
              {parseFloat(coin.percent_change_24h) >= 0 ? <span className=" text-center md:basis-2/12 max-[850px]:basis-1/5"><span className="bg-green-500 rounded-xl text-white px-2 py-1">
                {coin.percent_change_24h}%</span></span> :
                <span className=" text-center md:basis-2/12 max-[850px]:basis-1/5"><span className="bg-red-500 py-1 rounded-xl px-2 text-white">{coin.percent_change_24h}%</span></span>}
              {parseFloat(coin.percent_change_7d) >= 0 ? <span className=" text-center md:basis-2/12 text-green-600 max-[850px]:hidden">{coin.percent_change_7d}%</span> :
                <span className=" text-center md:basis-2/12 text-red-600 max-[850px]:hidden">{coin.percent_change_7d}%</span>}
            </li>
            </Link>
          ))
          }
        </ul>
      </div> );
  };
  
  export default PricesList;