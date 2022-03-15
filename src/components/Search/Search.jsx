import "./Search.css"
import { HiSearch } from "react-icons/hi"

const Search = () => {
    return (
        <div className="search-container">
            <input type="txt" placeholder="Honda prelude 1981" />
            <button>
                <HiSearch />
            </button>
        </div>
    )
}

export default Search