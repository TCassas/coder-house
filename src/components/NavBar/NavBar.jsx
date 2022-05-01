import NavCartButton from "../NavCartButton/NavCartButton"
import Navlink from "../NavLink/NavLink"
import Search from "../Search/Search"
import styled from 'styled-components'
import { HiMenu } from "react-icons/hi"
import Categories from '../Categories/Categories'
import "./NavBar.css"
import { useState, useEffect, useContext } from "react"
import { getGenres } from "../../services/genres"
import { UserContext } from "../../context/UserContext"

const Navbar = () => {
    const [genres, setGenres] = useState([])
    const [showDrop, setShowDrop] = useState(false)
    const { isLoggedIn } = useContext(UserContext)

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
                { isLoggedIn ? <Navlink href={'/user'} text="User" /> : <Navlink href={'/login'} text="Login" />}
                <NavCartButton />
            </div>
            <div className="mobile-cart">
                <NavCartButton />
            </div>
            <div className="mobile-menu-container">
                { isLoggedIn ? <Navlink href={'/user'} text="User" className="mobile-user-icon" /> : <Navlink href={'/login'} text="Login" />}
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