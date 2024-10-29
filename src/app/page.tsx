import Prices from '../components/price/index';



 const Home = () => {
  return (
    <div>
      <div className=" md:mx-auto mt-14 mb-14 md:w-[70%] bg-yellow-500">
        <h1 className="text-center md:text-3xl text-[#30505c]">قیمت لحظه‌ ای ارز‌های دیجیتال</h1>
        <div className='mt-10'>
       <Prices/>
        </div>
      </div>
    </div>
  );
}

export default Home;