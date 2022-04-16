import styled from 'styled-components'
import CartItem from './CartItem'

const Cart = ({ items }) => {
    return (
        <CartItemListWrapper>
            <h1>Cart</h1>
            <CartItemList>
                { items.map( item => <CartItem item={ item } />)}
            </CartItemList>
        </CartItemListWrapper>

    )
}

export default Cart

const CartItemList = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`;

const CartItemListWrapper = styled.main`
    width: 100%;
`