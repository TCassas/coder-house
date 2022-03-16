import Cart from "../Cart/Cart"
import Navlink from "../NavLink/NavLink"
import Search from "../Search/Search"
import { HiMenu } from "react-icons/hi"
import "./NavBar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-left">
                <Navlink href="#" text="👺" />
                <Search className="navbar-left-search" />
            </div>
            <div className="navbar-right">
                <Navlink href="#" text="Categories" categories={[""]} />
                <Navlink href="#" text="Sell" />
                <Navlink href="#" text="Login" />
                <Navlink href="#" text="Register" />
                <Cart cartContent={[]}/> {/*If there are items in the cart, the icon changes. Thought creating a cart element would open some future improvements*/}
            </div>
            <div className="mobile-menu-container">
                
                <HiMenu className="mobile-menu-icon"/>
            </div>
        </nav>
    )
}

export default Navbar