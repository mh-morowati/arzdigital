'use client'
import Link from 'next/link';
import { Crypto } from "@/components/price/interfaces"
import { useEffect, useState } from "react"
import { apiService } from "@/api/services"
import PricesList from '@/components/price/priceList';

function Home() {
    const [data, setData] = useState<Crypto[]>([])

  useEffect(() => {

    (async () => {
      try {
        const response = await apiService.getCurrencyList()
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result.data)
      } catch (error) {
        console.error('An error occurred while fetching the data:', error)
      }
    })()

  }, [data])
    
    return (<div className="md:mx-auto md:w-[90%]">
        <div className=" md:mx-auto mt-14 mb-14 md:w-[70%]">
        <Link href={"/"}>
          <h1
            className="text-center md:text-3xl text-[#30505c]"
          >قیمت لحظه‌ ای ارز‌های دیجیتال
          </h1>
        </Link>
        <div className='mt-10'>
          <PricesList cryptoData={data} />
        </div>
      </div>
    </div>);
}

export default Home;