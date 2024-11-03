import axios from "axios";

interface OrderbookResponse {
    lastTradePrice: string;
}

async function TetherPrice() {

    const response = await axios.get<OrderbookResponse>('https://api.nobitex.ir/v3/orderbook/USDTIRT');

    return (<>
        {response.data.lastTradePrice}
    </>);
}

export default TetherPrice;







