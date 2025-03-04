import Link from "next/link"
import { TbBraille } from "react-icons/tb"
import Search from '../search/search'
import TetherPrice from './tetherPrice'


function Header() {
    return (
        <div className="tablet:h-20 tablet:border-b">

            <div className="tablet:w-[90%] tablet:flex tablet:p-5 max-tablet:p-3 max-tablet:fixed
        
         max-tablet:bg-white max-tablet:w-[100%] max-tablet:z-50 max-[850px]:h-14 max-tablet:border-b"
            >
                <div className="tablet:flex tablet:basis-1/2 max-tablet:text-center">
                    
                    <Link className="tablet:flex" href={"/"}>
                        <TbBraille className="w-10 h-10 text-[#1aa089] max-[850px]:hidden" />
                        <span className="text-2xl tracking-tighter align-middle font-medium text-[#1e2025]">
                            ArzDigital
                        </span>
                    </Link>

                <Search />
            </div>
                <div className="basis-1/2 text-right max-tablet:hidden">
                    
                    <h1 className="inline-block">قیمت تتر:
                        <TetherPrice />
                        <span className="text-zinc-600 text-xs">تومان
                        </span>
                    </h1>

                    <Link href={"/"}>
                        <button className="hover:bg-slate-200 rounded py-1 px-3">ارزها:
                            <span className="text-[#1aa089]">100</span>
                        </button>
                </Link>
            </div>
        </div>

        {/* this div just for max-tablet width */}
            <div
                className="tablet:hidden flex relative top-[57px] border border-zinc-800 h-7 text-xs"
            >
                <h1
                    className="py-1 float-right max-[400px]:ml-10 max-[375px]:ml-0 max-[500px]:ml-14 max-tablet:ml-36"
                >قیمت تتر:
                    <TetherPrice />
                    <span className="text-zinc-600 text-xs">تومان
                    </span>
                </h1>
            <Link href={"/"}>
            
                <button className="hover:bg-slate-200 rounded py-1 px-3 max-m333:px-2"
                >لیست کل ارزها</button>
            </Link>
        </div>
    </div>)
}

export default Header