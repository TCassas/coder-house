import styled from 'styled-components'
import Cart from '../Cart/Cart';

const CartContainer = () => {
    return (
        <CartContainerWrapper>
            <Cart />
        </CartContainerWrapper>
    )
}

export default CartContainer

const CartContainerWrapper = styled.section`
    display: flex;
    justify-content: center;
    width: 100%
`;