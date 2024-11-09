'use client'
import PricesList from "@/components/price/priceList";
import { Crypto } from "@/components/price/interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";



 const Coins = () => {
  const [data, setData] = useState<Crypto[]>([])
 
  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await fetch('https://api.coinlore.net/api/tickers/')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result.data)
    } catch (error) {
      console.error('An error occurred while fetching the data:', error);
    }
  };
 
  fetchData();

  const intervalId = setInterval(fetchData, 50000); // 50-second interval

  // Clean up the interval on component unmount
  return () => clearInterval(intervalId);
  }, [])


  return (
    <div>
      <div className=" md:mx-auto mt-14 mb-14 md:w-[70%]">
        <Link href={"/coins"}><h1 className="text-center md:text-3xl text-[#30505c]">قیمت لحظه‌ ای ارز‌های دیجیتال</h1></Link>
        <div className='mt-10'>
        <PricesList cryptoData={data} />
        </div>
      </div>
    </div>
  );
}

export default Coins;