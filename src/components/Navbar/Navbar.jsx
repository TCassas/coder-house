import Cart from "../Cart/Cart"
import Navlink from "../Navlink/Navlink"
import Search from "../Search/Search"
import "./Navbar.css"

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
                {/* <Navlink href="#" text="🛒 0" sm={true} /> */}
            </div>
        </nav>
    )
}

export default Navbar