import styled from 'styled-components'
import OrderListItem from './OrderListItem'
import { motion } from 'framer-motion'

const OrderList = ({ orders }) => {
    return (
        <OrderListContainer>
            { (orders.length > 0) ?
                orders.map((order, i) => 
                    <motion.div key={ order.id } initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 0.2 * i} }} exit={{ opacity: 0 }}>
                        <OrderListItem order={ order } />
                    </motion.div>
                )
            :
                <EmptyOrders>
                    <p>Hmm... no orders?</p>
                    <picture>
                        <img src='/imgs/no-orders.jfif' alt="Girls' last tour pannel of the protagonists seing nothingness" />
                    </picture>
                </EmptyOrders>
            }
        </OrderListContainer>
    )
}

export default OrderList

const OrderListContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
`

const EmptyOrders = styled.div`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;

    p {
        text-align: right;
        font-size: 14px;
        font-style: italic;
    }

    img {
        width: 100%;
        border: 1px solid black;
    }
`