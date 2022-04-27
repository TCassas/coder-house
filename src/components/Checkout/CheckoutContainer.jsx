import Checkout from './Checkout'
import styled from 'styled-components'
import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import { insertOrderAndUpdateStocks } from '../../services/items'
import { Navigate } from 'react-router'
import NotificationContext from '../../context/NotificationContext'

const CheckoutContainer = () => {
    const [orderId, setOrderId] = useState('')
    const { cart, getCartTotal, clearCart } = useContext(CartContext)
    const { addNotification } = useContext(NotificationContext)

    const onSubmit = ({ name, email, phone }) => {
        if (!name || !email || !phone) {
            return addNotification("Fill the form with your data!", "warning")
        }
        const buyer = { name, email, phone }
        onCreateOrder(buyer)
    }

    const onCreateOrder = (buyer) => {
        createOrder()

        async function createOrder() {
            const order = {
                buyer: {...buyer},
                cart,
                total: getCartTotal()
            }

            try {
                const orderId = await insertOrderAndUpdateStocks(order)
    
                setOrderId(orderId)
                addNotification('Order completed succesfully!', 'success')
                clearCart()
            } catch(error) {
                if(error.reason === 'STOCK') {
                    addNotification(`No stock avaible for: ${ error.description.toString() }`, 'warning')
                }
            }
        }
    }

    return (
        <CheckoutContainerWrapper>
            { !orderId ?
                <Checkout items={ cart } total={ getCartTotal() } onSubmit={ onSubmit } />
            :
                <Navigate to={`/orders/${orderId}`} />
            }
        </CheckoutContainerWrapper>
    )
}

export default CheckoutContainer

const CheckoutContainerWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 950px;
    margin: 10px auto;
    min-height: 300px;
`