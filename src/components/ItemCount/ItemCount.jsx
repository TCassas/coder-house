import { useState } from 'react'
import styled from "styled-components";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial ? initial : 0)

    const addOne = () => {
        if(count + 1 <= stock) {
            setCount(count + 1)
        }
    }

    const removeOne = () => {
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
            setCount(parseInt(value))
        }
    }

    return (
        <div>
            <CartCount>
                <CartControls>
                    <CartButton onClick={() => removeOne()}>-</CartButton>
                    <input
                        value={ count }
                        type="number"
                        onChange={(e) => editCart(e)}
                        min={0}
                    />
                    <CartButton onClick={() => addOne()}>+</CartButton>
                </CartControls>
                <CartButton onClick={() => onAdd(count)}>Agregar al carrito</CartButton>                    
            </CartCount>
        </div>
    )
}

export default ItemCount

const CartControls = styled.div`
    display: flex;
    gap: 5px;
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
    flex-direction: column;
    justify-content: space-between;
    margin-top: 5px;
    width: 200px;
    margin: 0 auto 20px auto;
    gap: 2.25px;

    input {
        width: 100%;
        text-align: center;
    }
`;
