import Link from 'next/link';
import Coins from './coins/page';

function Home() {
    return ( <div className="md:mx-auto md:w-[90%]">
        <div className="h-96 overflow-hidden">
            <Coins/>
        </div>
        <div className='text-center'>
        <Link href={'/coins'}>
        <button className='border border-zinc-300 px-20 py-2 text-[#1aa089] rounded mt-2'>نمایش همه ارزها</button>
        </Link>
        </div>
    </div> );
}

export default Home;