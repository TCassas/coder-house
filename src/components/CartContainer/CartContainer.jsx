import styled from 'styled-components'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'
import { insertOrderAndUpdateStocks } from '../../services/items'

const CartContainer = () => {
    const { cart, getCartTotal, clearCart } = useContext(CartContext)

    const onCreateOrder = () => {
        createOrder()

        async function createOrder() {
            const order = {
                buyer: { name: 'Tomás Cassas', phone: '381-3870742', email: 'tomascassas@gmail.com'},
                cart,
                total: getCartTotal()
            }
    
            const orderId = await insertOrderAndUpdateStocks(order)

            console.log(orderId)

            clearCart()
        }

    }

    return (
        <CartContainerWrapper>
            <Cart items={ cart } getTotal={ getCartTotal } createOrder={ onCreateOrder } />
        </CartContainerWrapper>
    )
}

export default CartContainer

const CartContainerWrapper = styled.section`
    display: flex;
    width: 100%;
    padding: 10px;
`