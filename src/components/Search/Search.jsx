import "./Search.css"
import { HiSearch } from "react-icons/hi"

const Search = () => {
    return (
        <div className="search-container">
            <input type="txt" placeholder="Search mangas by name / author" />
            <button>
                <HiSearch />
            </button>
        </div>
    )
}

export default Search