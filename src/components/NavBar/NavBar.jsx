import NavCartButton from "../NavCartButton/NavCartButton"
import Navlink from "../NavLink/NavLink"
import Search from "../Search/Search"
import styled from 'styled-components'
import { HiMenu } from "react-icons/hi"
import Categories from '../Categories/Categories'
import "./NavBar.css"
import { useState, useEffect } from "react"
import { getGenres } from "../../services/genres"

const Navbar = () => {
    const [genres, setGenres] = useState([])
    const [showDrop, setShowDrop] = useState(false)

    useEffect(() => {
        fetchData()

        async function fetchData() {
            const genres = await getGenres()

            setGenres(genres)
        }
    }, [])

    return (
        <NavBarContainer>
            <div className="navbar-left">
                <Navlink href="/" text="👺" />
                <Search className="navbar-left-search" />
            </div>
            <div className="navbar-right">
                <Navlink href={'#'} droppable={ genres } text="Categories" setShowDrop={setShowDrop} showDrop={showDrop} />
                <Navlink href={'/manga'} text="Catalog" />
                <NavCartButton />
            </div>
            <div className="mobile-cart">
                <NavCartButton />
            </div>
            <div className="mobile-menu-container">
                <HiMenu className="mobile-menu-icon" onClick={ () => setShowDrop(!showDrop) } />
            </div>
            {showDrop && <Categories setShowDrop={ setShowDrop } genres={ genres } />}
        </NavBarContainer>
    )
}

export default Navbar

const NavBarContainer = styled.nav`
    position: relative;
`;