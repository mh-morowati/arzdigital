import PricesList from "@/components/price/priceList";
import { PricesApi } from "@/components/price/interfaces";
import Link from "next/link";
import axios from "axios";


 const Coins = async () => {
  const res= await axios.get<PricesApi>("https://api.coinlore.net/api/tickers/");


  return (
    <div>
      <div className=" md:mx-auto mt-14 mb-14 md:w-[70%]">
        <Link href={"/coins"}><h1 className="text-center md:text-3xl text-[#30505c]">قیمت لحظه‌ ای ارز‌های دیجیتال</h1></Link>
        <div className='mt-10'>
        <PricesList cryptoData={res.data.data} />
        </div>
      </div>
    </div>
  );
}

export default Coins;