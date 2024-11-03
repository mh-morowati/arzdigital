import Link from 'next/link';
import Coins from './coins/page';
import Image from 'next/image';

function Home() {
    return ( <div className="md:mx-auto md:w-[90%]">
        <div className='flex'>
            <Link className='max-[850px]:hidden' href={'https://chromewebstore.google.com/detail/arzdigital/bjhbojnjmbnidlfobobbjipgnnmigkpn'} target='_blank'>
            <Image className='md:mr-2' src={'/19ad0bc765993a468ecbb4ec16b36aa1.webp'} alt={'arzdigital chrome extension'} width={630} height={120}/>
            </Link>
            <Link href={'https://chromewebstore.google.com/detail/arzdigital/bjhbojnjmbnidlfobobbjipgnnmigkpn'} target='_blank'>
        <Image src={'/231f637ec42e18bc3061009c32389e12.webp'} alt={'arzdigital chrome extension'} width={630} height={120}/>
        </Link>
        </div>
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