import Link from "next/link";
import { TbBraille } from "react-icons/tb";
import Search from './search';


function Header() {
    return (<div className="h-20 border-b flex p-5">
            <Link className="flex" href={"/"}><TbBraille className="w-10 h-10 text-[#1aa089]" />
            <span className="text-2xl tracking-tighter align-middle font-medium text-[#1e2025]">ArzDigital</span></Link>
            <Search/>
            <div className="float-right">
            <Link href={"/coins"}><h4>ارزها: <span className="text-[#1aa089]">100</span></h4>
            </Link>
            </div>
    </div>);
}

export default Header;