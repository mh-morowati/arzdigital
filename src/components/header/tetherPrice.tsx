import axios from "axios";

interface OrderbookResponse {
    lastTradePrice: string;
}

async function TetherPrice() {

    const response = await axios.get<OrderbookResponse>('https://api.nobitex.ir/v3/orderbook/USDTIRT',{
        data:{revalidate: 60}
    });

    return (<>
        {parseInt(response.data.lastTradePrice) / 10}
    </>);
}

export default TetherPrice;







