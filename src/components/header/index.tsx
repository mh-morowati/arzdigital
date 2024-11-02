import Link from "next/link";
import { TbBraille } from "react-icons/tb";
import { TbTransactionBitcoin } from "react-icons/tb";
import Search from './search';
import TetherPrice from './tetherPrice';


function Header() {
    return (<div className="h-20 border-b flex p-5">
            <Link className="flex" href={"/"}><TbBraille className="w-10 h-10 text-[#1aa089]" />
            <span className="text-2xl tracking-tighter align-middle font-medium text-[#1e2025]">ArzDigital</span></Link>
            <Search/>
            <div className="float-right">
            <h1 className="inline-block">قیمت تتر: <TetherPrice/> تومان</h1>
                <button className="hover:bg-slate-200 rounded py-1 px-3"><TbTransactionBitcoin className="inline-block w-5 h-5 text-red-400"/>ماشین حساب ارز دیجیتال</button>
            <Link href={"/coins"}><button className="hover:bg-slate-200 rounded py-1 px-3">ارزها: <span className="text-[#1aa089]">100</span></button>
            </Link>
            </div>
    </div>);
}

export default Header;