import PricesList from "@/components/price/priceList";
import { Crypto } from "@/components/price/interfaces";


async function getCryptoData(): Promise<Crypto[]> {

    const res= await fetch("https://api.coinlore.net/api/tickers/" ,{
      cache: "force-cache",
      next: { revalidate: 60 },
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.data as Crypto[];
}


 const Coins = async () => {
  const cryptoData = await getCryptoData();


  return (
    <div>
      <div className=" md:mx-auto mt-14 mb-14 md:w-[70%]">
        <h1 className="text-center md:text-3xl text-[#30505c]">قیمت لحظه‌ ای ارز‌های دیجیتال</h1>
        <div className='mt-10'>
        <PricesList cryptoData={cryptoData} />
        </div>
      </div>
    </div>
  );
}

export default Coins;