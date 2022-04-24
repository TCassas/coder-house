import styled from 'styled-components'
import Cart from '../Cart/Cart'
import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import { insertOrderAndUpdateStocks } from '../../services/items'
import { Navigate } from 'react-router'

const CartContainer = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, getCartTotal } = useContext(CartContext)

    const onCreateOrder = () => {
        createOrder()

        async function createOrder() {
            const order = {
                buyer: { name: 'Tomás Cassas', phone: '381-3870742', email: 'tomascassas@gmail.com'},
                cart,
                total: getCartTotal()
            }

            try {
                const orderId = await insertOrderAndUpdateStocks(order)
    
                setOrderId(orderId)
            } catch(error) {
                if(error.reason === 'STOCK') {
                    console.log('Items without stock', error.description)
                }
            }
        }
    }

    return (
        <CartContainerWrapper>
            { !orderId ?
                <Cart items={ cart } getTotal={ getCartTotal } createOrder={ onCreateOrder } />
            :
                <Navigate to={`/orders/${orderId}`} />
            }
            
        </CartContainerWrapper>
    )
}

export default CartContainer

const CartContainerWrapper = styled.section`
    display: flex;
    width: 100%;
    padding: 10px;
`