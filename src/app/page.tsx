import PricePage from '@/components/price/PricePage';
import Link from 'next/link'


function Home() {
    
    return (<div className="md:mx-auto md:w-[90%]">
        <div className=" md:mx-auto mt-14 mb-14 md:w-[70%]">
        <Link href={"/"}>
          <h1
            className="text-center md:text-3xl text-[#30505c]"
          >قیمت لحظه‌ ای ارز‌های دیجیتال
          </h1>
        </Link>
        <div className='mt-10'>
          <PricePage />
        </div>
      </div>
    </div>);
}

export default Home;