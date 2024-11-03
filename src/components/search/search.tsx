import { FaSearch } from "react-icons/fa";

function Search() {

    return ( <>
    <input className="px-10 bg-slate-200 rounded-lg text-right ml-20 w-[340px] h-[42px] max-[850px]:hidden" id="search"
    name="search" type="text" placeholder='جستجو در ارزدیجیتال' />
    <label className="text-slate-400 relative right-7 top-[14px] max-[850px]:hidden" htmlFor="search" id="search"><FaSearch/></label>
    </> );
}

export default Search;