import styled from 'styled-components'
import CartItem from './CartItem'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../standar/Button'

const Cart = ({ items, getTotal }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(getTotal())
    }, [items])

    const AnimatedCart = ({ children }) => {
        return (
            <motion.div
                style={{ overflowX: 'hidden', width: '100%' }}
                initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: 0.8} }} exit={{ opacity: 0 }}
            >
                { children }
            </motion.div>
        )
    }
    
    if(items.length === 0) {
        return (
            <AnimatedCart>
                <EmptyCart>
                    <picture>
                        <h1>Such an empty cart</h1>
                        <p>Go search through our <Link to='/manga'>catalog</Link> and add something to the cart!</p>
                        <img src='imgs/empty-cart.png' alt='Uzumaki pannel of protagonist walking alone in the street' />
                    </picture>
                </EmptyCart>
            </AnimatedCart>
        )
    }

    return (
        <AnimatedCart>
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
                    <Link to={'/checkout'}>
                        <Button color='success' text='Proceed to checkout' />
                    </Link>
                </CartActions>
            </CartItemListWrapper>
        </AnimatedCart>
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