import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'

const OrderListItem = ({ order }) => {
    const [showDetail, setShowDetail] = useState(false)

    return (
        <OrderItem >
            <OrderHeader>
                <p>Identifier: <Link to={`/orders/${order.id}`}>{order.id}</Link></p>
                <p>{ order.date.getDate() }/{ order.date.getMonth() + 1 }/{ order.date.getFullYear() } - { order.date.getHours() }:{ order.date.getMinutes() }</p>
            </OrderHeader>
            <section>
                <OrderControls>
                    <strong
                        onClick={() => setShowDetail(!showDetail)}
                    >{ showDetail ? "Hide" : "Show "} order detail</strong>
                </OrderControls>
                { showDetail &&
                    <motion.table initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: 0.5 } }} exit={{ opacity: 0 }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            { order.cart.map(item => {
                                return (
                                    <tr key={ item.id } item={ item.name }>
                                        <td><Link to={`/manga/${item.id}`}> { item.name } </Link></td>
                                        <td>${ item.price }</td>
                                        <td>x{ item.quantity }</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </motion.table>
                }
            </section>
            <strong>Total: ${ order.total }</strong>
        </OrderItem>
    )
}

export default OrderListItem

const OrderItem = styled.article`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 20px;
    border-radius: 6px;

    table {
        width: 100%;
        margin: 5px 0;
    }

    table tbody td {
        border-bottom: 1px solid gainsboro;
    }

    table td:nth-of-type(1) {
        font-weight: bold;

        a {
            color: #F03A17;
        }
    }

    table td:nth-of-type(2), td:nth-of-type(3) {
        text-align: center;
        width: 120px;
    }
`

const OrderHeader = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
    }

    a {
        color: #F03A17;
    }
`

const OrderControls = styled.div`
    display: flex;

    strong {
        cursor: pointer;
    }
`