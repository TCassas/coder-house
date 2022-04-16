import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CartItem = ({ item }) => {
    return (
        <CartItemContainer>
            <picture>
                <img src={item.img} />
            </picture>
            <CartItemInfo>
                <CartItemName>
                    <Link to={`/manga/${item.id}`}>
                        { item.name }
                    </Link>
                </CartItemName>
                <div>
                    <p>Quantity: { item.quantity }</p>
                    <p>Unitary price: { item.price }</p>
                    <p>Total price: { parseInt(item.price) * parseInt(item.quantity) }</p>
                </div>
            </CartItemInfo>
        </CartItemContainer>
    )
}

export default CartItem

const CartItemContainer = styled.article`
    display: flex;

    picture img {
        width: 72px;
        margin-right: 5px;
    }
`

const CartItemInfo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 2px;
`

const CartItemName = styled.strong`
    a {
        color: #F03A17;
    }
    font-size: 18px;
    line-height: 18px;
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