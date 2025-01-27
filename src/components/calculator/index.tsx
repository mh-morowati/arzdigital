"use client"
import { useEffect, useState } from "react"
import { apiService } from "@/api/services"
import { Crypto } from "@/components/price/interfaces"


const CalculatorApi = () =>{

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

    return(
        <select>
        {data.map((coin) => (
          <option key={coin.id} value={coin.price_usd}>
              {coin.name}
              </option>
        ))}
      </select>
    )
}

export default CalculatorApi