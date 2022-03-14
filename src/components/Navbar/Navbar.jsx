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
                <Navlink href="#" text="🛒 0" sm={true} />
            </div>
        </nav>
    )
}

export default Navbar