"use client"
import { apiService } from "@/api/services"
import Link from "next/link";
import { useEffect, useState } from "react"

interface Crypto {
    id: string;
    name: string;
    symbol: string;
    price_usd: string;
    nameid: string
}


function Search() {
    
    const [searchTerm, setSearchTerm] = useState("")
    const [cryptos, setCryptos] = useState<Crypto[]>([])
    
    useEffect(() => {
    
        (async () => {
          try {
            const response = await apiService.getCurrencyList()
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json()
            setCryptos(result.data)
          } catch (error) {
            console.error('An error occurred while fetching the data:', error)
          }
        })()
    
    }, [cryptos])
    
    // Filter cryptos based on search term
    const filteredCryptos = cryptos.filter(crypto =>
        crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="relative">
            <input
                className="px-10 bg-slate-200 rounded-lg text-right md:ml-20 w-[340px] h-[42px] max-md:w-80 max-md:absolute max-md:left-0 z-50"
                id="search"
                name="search"
                type="text"
                placeholder="جستجو در ارزدیجیتال"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Show filtered results */}
            {searchTerm && (
                <ul className="absolute bg-white w-full mt-2 rounded-lg shadow-lg z-50">
                    {filteredCryptos.length > 0 ? (
                        filteredCryptos.map(crypto => (
                              <Link key={crypto.id} href={`/${crypto.nameid}`}>
                            <li className="px-4 py-2 hover:bg-gray-100">
                                {crypto.name} ({crypto.symbol.toUpperCase()})
                                <span className="float-right">
                                    {crypto.price_usd}
                                </span>
                                </li>
                                </Link>
                        ))
                    ) : (
                        <li className="px-4 py-2 text-gray-500">نتیجه‌ای یافت نشد</li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default Search
