import { useState, useEffect } from 'react'
import OrderList from '../OrderList/OrderList'
import { getOrdersByEmail } from '../../services/orders'
import styled from 'styled-components'

const OrderListContainer = ({ user, isLoggedIn }) => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(isLoggedIn) {
            fetchOrders()
        }
        
        async function fetchOrders() {
            const orders = await getOrdersByEmail(user.email)
            setOrders(orders)
            setLoading(false)
        }
    }, [])

    return (
        <OrderListWrapper>
            {!loading && <OrderList orders={ orders } />}
        </OrderListWrapper>

    )
}

export default OrderListContainer

const OrderListWrapper = styled.section`
    width: 100%;
`