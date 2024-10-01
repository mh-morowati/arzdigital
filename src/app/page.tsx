import Prices from '../components/price/index';



 const Home = () => {
  return (
    <div>
      <div className="w-[70%] mx-auto mt-14 mb-14">
        <h1 className="text-center text-3xl text-[#30505c]">قیمت لحظه‌ ای ارز‌های دیجیتال</h1>
        <div className='mt-5'>
       <Prices/>
        </div>
      </div>
    </div>
  );
}

export default Home;