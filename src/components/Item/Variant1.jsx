import { useEffect, useState } from 'react'
import styled from "styled-components"

const Variant1 = ( { data, addToCart, addOne, removeOne, editCart, count } ) => {
    const { name, img, author, info, price } = data

    return (
        <ItemContainer>
            <ItemPhoto>
                <img src={`${img}`} />
            </ItemPhoto>
            <ItemName>{name}</ItemName>
            <ItemInfo>
                <p>{author}</p>
                <div className='flex-between'>
                    <p>{info}</p>
                    <strong>${ price }</strong>
                </div>
                {/* categorias */}
                <CartCount>
                    <CartButton onClick={() => addToCart()}>Agregar al carrito</CartButton>                    
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
                </CartCount>
            </ItemInfo>
        </ItemContainer>
    )
}

export default Variant1

const ItemContainer = styled.article`
    display: flex;
    flex-direction: column;
    margin-top: 165px;
    width: 300px;
    /* padding: 10px; */
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    margin-bottom: 50px;
    transition: 1s;
    background-color: white;
    
    &:hover {
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);

        picture {
            top: -70px;
        }
    }
`;

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
    justify-content: space-between;
    margin-top: 5px;
    gap: 2.25px;

    input {
        width: 78px;
        text-align: center;
    }
`;

const ItemPhoto = styled.picture`
    position: relative;
    top: 0;
    transition: 0.1s;
    
    img {
        position: absolute;
        z-index: -2;
        top: -100px;
        left: 70px;
        width: 120px;
        border-bottom: 1px dashed #F03A17;
        transition: 1s;
    }
`;

const ItemName = styled.strong`
    color: white;
    font-weight: bold;
    margin-bottom: 5px;
    background-color: #F03A17;
    padding: 2px 10px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;


const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10px 10px 10px;

    button {
        background-color: #FCE100;
        color: white;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        cursor: pointer;
        font-weight: bold;
        border-radius: 2px;
        border: none;
        padding: 2px 7px;
    }
`;