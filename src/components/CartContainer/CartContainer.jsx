import styled from 'styled-components'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const CartContainer = () => {
    const { cart, getCartTotal } = useContext(CartContext)

    return (
        <CartContainerWrapper>
            <Cart items={ cart } getTotal={ getCartTotal } />
        </CartContainerWrapper>
    )
}

export default CartContainer

const CartContainerWrapper = styled.section`
    display: flex;
    width: 100%;
    padding: 10px;
`