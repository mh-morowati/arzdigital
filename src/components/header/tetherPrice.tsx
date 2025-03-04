import axios from "axios"

interface OrderbookResponse {
    lastTradePrice: string
}


async function TetherPrice() {

    const response = await axios.get<OrderbookResponse>('https://api.nobitex.ir/v3/orderbook/USDTIRT')

    return (<>
        <span className="text-[#1aa089] font-medium">
            {
                parseInt(response.data.lastTradePrice) < 500000 ?
                response.data.lastTradePrice : parseInt(response.data.lastTradePrice) / 10
            }
        </span>
    </>)
}

export default TetherPrice







