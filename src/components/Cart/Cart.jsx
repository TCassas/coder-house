import './Cart.css'
import { HiShoppingCart, HiOutlineShoppingCart } from "react-icons/hi"

const Cart = ({ cartContent }) => {
    return (
        <button className="cart-button">
            <span>
                { cartContent?.length ? <HiShoppingCart /> : <HiOutlineShoppingCart /> }
            </span> { cartContent?.length ? cartContent.length : 0 }
        </button>
    )
}

export default Cart