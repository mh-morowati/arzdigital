'use client'
import { Crypto } from "@/components/price/interfaces"
import { useEffect, useState } from "react"
import { apiService } from "@/api/services"
import PricesList from '@/components/price/priceList'
import Loading from '@/app/loading'

function PricePage() {

  const [data, setData] = useState<Crypto[]>()

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

  if (!data) {
    return Loading()
  }
    
  return (<>
      
          <PricesList cryptoData={data} />
      
    </>);
}

export default PricePage