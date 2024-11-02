import Link from "next/link";

function Home() {
    return ( <div className="md:mx-auto mt-14 mb-14 md:w-[70%]">
        <Link href={"/coins"}>
        <h1 className="text-center md:text-3xl text-[#30505c]">لیست کامل قیمت لحظه ای ارزهای دیجیتال</h1>
        </Link>
    </div> );
}

export default Home;