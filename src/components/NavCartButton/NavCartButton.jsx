import './Cart.css'
import { HiShoppingCart, HiOutlineShoppingCart } from "react-icons/hi"
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const NavCartButton = () => {
    const { cart } = useContext(CartContext)

    return (
        <button className="cart-button">
            <span>
                { cart.length ? <HiShoppingCart /> : <HiOutlineShoppingCart /> }
            </span> { cart.length }
        </button>
    )
}

export default NavCartButton