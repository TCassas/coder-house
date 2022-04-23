import styled from 'styled-components'
import CartItem from './CartItem'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import { addDoc, collection } from 'firebase/firestore'

const Cart = ({ items, getTotal, createOrder }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(getTotal())
    }, [items])
    
    if(items.length === 0) {
        return (
            <EmptyCart>
                <picture>
                    <h1>Such an empty cart</h1>
                    <p>Go search through our <Link to='/manga'>catalog</Link> and add something to the cart!</p>
                    <img src='imgs/empty-cart.png' />
                </picture>
            </EmptyCart>
        )
    }

    return (
        <CartItemListWrapper>
            <CartInfo>
                <h1>Cart</h1>
                <p>Total: <strong>${total}</strong></p>
            </CartInfo>
            <CartItemTable>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Unitary price</th>
                        <th>Quantity</th>
                        <th>Total price</th>
                    </tr>
                </thead>
                <tbody>
                    { items.map( item => <CartItem key={ item.id } item={ item } />)}
                </tbody>
            </CartItemTable>
            <CartActions>
                <BuyBotton
                    onClick={() => createOrder()}
                >
                    Complete order
                </BuyBotton>
            </CartActions>
        </CartItemListWrapper>

    )
}

export default Cart

const CartItemTable = styled.table`
    width: 100%;
`;

const CartItemListWrapper = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
`

const CartInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const EmptyCart = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;

    a {
        color: #F03A17;
    }

    img {
        width: 100%;
    }
`

const CartActions = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const BuyBotton = styled.button`
    border: none;
    color: white;
    background-color: #009C5E;
    padding: 5px 12px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 6px;
`;