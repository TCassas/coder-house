import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HiOutlineX } from 'react-icons/hi'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <CartItemTr>
            <CartItemName>
                <Link to={`/manga/${item.id}`}>
                    {item.name}
                </Link>
            </CartItemName>
            <td>${item.price}</td>
            <td>x{item.quantity}</td>
            <td>${parseInt(item.price) * parseInt(item.quantity)}</td>
            <CartItemRemove
                onClick={() => removeItem(item.id)}
            ><HiOutlineX /></CartItemRemove>
        </CartItemTr>
    )
}

export default CartItem

const CartItemTr = styled.tr`
    td {
        text-align: center;
        border: none;
        border-bottom: 1px solid gainsboro;
    }

    td:nth-of-type(2), td:nth-of-type(4)  {
        width: 140px;
    }

    td:nth-of-type(3) {
        width: 10px;
    }
`

const CartItemName = styled.td`
    text-align: left !important;
    white-space:nowrap; 
    text-overflow: ellipsis;
    a {
        color: #F03A17;
        font-weight: bold;
    }
`

const CartItemRemove = styled.td`
    background-color: #F03A17;
    width: 12px;
    padding: 6px 2px 1px 2px;
    font-size: 20px;
    color: white;
    cursor: pointer;
`

/*
author: "Hiroaki Samura"
id: 2
img: "/imgs/blade-of-the-immortal-cover.jpg"
name: "Blade of the Immortal"
price: "1200"
quantity: 3
stock: 4
*/