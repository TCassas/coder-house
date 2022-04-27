import "./Search.css"
import { HiSearch } from "react-icons/hi"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
    const [search, setSearch] = useState('')
    
    return (
        <form className="search-container">
            <input
                type="txt"
                placeholder="Search mangas by name / author"
                onChange={ (e) => setSearch(e.target.value) }
            />
            <Link to={`${search !== '' ? `/manga?q=${search}` : '#'}`}>
                <button>
                    <HiSearch />
                </button>
            </Link>
        </form>
    )
}

export default Search