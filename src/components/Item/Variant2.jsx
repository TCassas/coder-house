import { useState } from 'react'
import styled from 'styled-components'

const Variant2 = ( { data } ) => {
    const { name, img, author, info, price, stock, initial } = data
    const [count, setCount] = useState(initial ? initial : 0)

    const addToCart = () => {
        if(count + 1 <= stock) {
            setCount(count + 1)
        }
    }

    const removeFromCart = () => {
        if(count - 1 >= 0) {
            setCount(count - 1)
        }
    }

    const editCart = (e) => {
        const value = e.target.value
        if(value && value > stock) {
            setCount(parseInt(stock))
        } else if(value < 0) {
            setCount(0)
        } else {
            setCount(value)
        }
    }
    
    return (
        <ItemContainer>
            <LeftSide>
                <ItemName>{ name }</ItemName>
                <ItemInfo>
                    <p>{ author }</p>
                    <p>{ info }</p>
                    {/* categorias */}
                    <CartCount>
                        <CartButton onClick={() => removeFromCart()}>-</CartButton>
                        <input
                            value={ count }
                            type="number"
                            onChange={(e) => editCart(e)}
                            min={0}
                        />
                        <CartButton onClick={() => addToCart()}>+</CartButton>
                    </CartCount>
                    <CartAdd>
                        <CartButton>Agregar al carrito</CartButton>
                        <strong>${ price }</strong>
                    </CartAdd>
                </ItemInfo>
            </LeftSide>
            <RightSide image={img} >
            </RightSide>
        </ItemContainer>
    )
}

export default Variant2

const ItemContainer = styled.article`
    display: grid;
    grid-template-columns: 3fr 1.5fr;
    margin-bottom: 50px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    width: 355px;
    transition: 0.4s;
    
    &:hover {
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
    }
`;

const RightSide = styled.picture`
    background-image: url(${(props) => props.image}); //picante
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const CartAdd = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`;

const CartButton = styled.button`
    background-color: #FCE100;
    color: white;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    font-weight: bold;
    border-radius: 2px;
    border: none;
    padding: 2px 7px;
    cursor: pointer;
`;

const CartCount = styled.div`
    display: flex;
    justify-content: left;
    gap: 2.25px;
    margin-top: 5px;

    input {
        width: 78px;
        text-align: center;
    }
`;

const ItemName = styled.strong`
    color: #F03A17;
    font-weight: bold;
    margin-bottom: 5px;
`;

const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;
