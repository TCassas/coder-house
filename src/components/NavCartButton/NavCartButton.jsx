import './Cart.css'
import { HiShoppingCart, HiOutlineShoppingCart } from "react-icons/hi"
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom'

const NavCartButton = () => {
    const { cart, getCartCount } = useContext(CartContext)

    return (
        <Link to={'/cart'} className="cart-button">
            <span>
                { cart.length ? <HiShoppingCart /> : <HiOutlineShoppingCart /> }
            </span> { getCartCount() }
        </Link>
    )
}

export default NavCartButton