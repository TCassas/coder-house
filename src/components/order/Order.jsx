import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Loader from '../Loader/Loader'
import { getOrderById } from '../../services/orders'
import { motion } from 'framer-motion'

const Order = () => {
    const [order, setOrder] = useState('')
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        fetchOrder()

        async function fetchOrder() {
            const order = await getOrderById(id)

            setOrder(order)
            setLoading(false)
        }
    }, [id])

    return (
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0, transition: {duration: 0.3, delay: 0.8} }} exit={{ opacity: 0, x: -10 }} >
            <OrderWrapper>
                { !loading ?
                    <OrderContainer>
                        <h1>Order id: { order.id }</h1>
                        <p>Date: { order.date.getDate() }/{ order.date.getMonth() + 1 }/{ order.date.getFullYear() }</p>
                        <p>Time: { order.date.getHours() }:{ order.date.getMinutes() }</p>
                        <p>Summary</p>
                        <ol>
                            <OrderSummary>
                                { order.cart.map(item => <li key={ item.id }> <strong>{ item.name } { item.info }</strong> (x{ item.quantity } units) ${ item.price }</li>) }
                            </OrderSummary>
                        </ol>
                        <OrderTotal>Total: ${ order.total }</OrderTotal>
                        <OrderBuyerInfo>
                            <strong>Buyer info</strong>
                            <p>Name: { order.buyer.name }</p>
                            <p>Email: { order.buyer.email }</p>
                            <p>Phone: { order.buyer.phone }</p>
                        </OrderBuyerInfo>
                    </OrderContainer>
                :
                    <Loader />
                }
            </OrderWrapper>
        </motion.div>
    )
}

export default Order

const OrderWrapper = styled.main`
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;
`

const OrderContainer = styled.section`
    width: 100%;
    padding: 10px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
`

const OrderSummary = styled.article`
    padding-left: 30px;
`

const OrderBuyerInfo = styled.article`
    margin-top: 10px;
    border-top: 1px solid gainsboro;
    padding-top: 10px;
`

const OrderTotal = styled.p`
    text-align: right;
    width: 100%;
`

/*
{
    "id": "BSXV7pSu3S59rctg1q5b",
    "date": {
        "seconds": 1650759831,
        "nanoseconds": 854000000
    },
    "cart": [
        {
            "quantity": 4,
            "audience": "+16",
            "author": "Minoru Furuya",
            "genres": [
                "comedy",
                "philosophical",
                "slice of life"
            ],
            "id": "FuAgwKxJ0seMsbhrt9dV",
            "price": 480,
            "img": "saltiness-cover.jpg",
            "name": "Saltiness",
            "stock": 4,
            "info": "Vol. 3",
            "description": "31 year old Nakamaru Takehiko has trained all his life to never be disturbed by anything that the world throws at him. Whether dog poop begins to rain down from the heavens, or a human shaped strawberry monster shows up in front of him, his will never faltered. But when he realized that his existence in the house inhibits his sister from getting married, he panicked. In his panicked state, he left the house for Tokyo. Now homeless, he must find ways to survive in this world with only his iron will and the companions he finds along the way."
        }
    ],
    "total": 1920,
    "buyer": {
        "email": "tomascassas@gmail.com",
        "name": "Tomás Cassas",
        "phone": "381-3870742"
    }
}
*/