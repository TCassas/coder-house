import NavCartButton from "../NavCartButton/NavCartButton"
import Navlink from "../NavLink/NavLink"
import Search from "../Search/Search"
import styled from 'styled-components'
import { HiMenu } from "react-icons/hi"
import Categories from '../Categories/Categories'
import "./NavBar.css"
import { useState } from "react"

const Navbar = () => {
    const [showDrop, setShowDrop] = useState(false)

    return (
        <NavBarContainer>
            <div className="navbar-left">
                <Navlink href="/" text="👺" />
                <Search className="navbar-left-search" />
            </div>
            <div className="navbar-right">
                <Navlink href={''} text="Categories" categories={[""]} setShowDrop={setShowDrop} showDrop={showDrop} />
                <Navlink href={'/manga'} text="Catalog" />
                {/* <Navlink href="#" text="Login" />
                <Navlink href="#" text="Register" /> */}
                <NavCartButton /> {/*If there are items in the cart, the icon changes. Thought creating a cart element would open some future improvements*/}
            </div>
            <div className="mobile-menu-container">
                <HiMenu className="mobile-menu-icon"/>
            </div>
            {showDrop && <Categories setShowDrop={ setShowDrop } categories={{"genres": ["sience fiction", "bozosoku", "psychological", "action", "samurai", "love", "historical", "war", "horror", "body dysmorphia", "philosophical", "emotional", "zombies", "survival", "comedy", "slice of life"], "categories": ["Most popular"]}} />}
        </NavBarContainer>
    )
}

export default Navbar

const NavBarContainer = styled.nav`
    position: relative;
`;