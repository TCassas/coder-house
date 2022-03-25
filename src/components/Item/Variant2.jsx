import styled from 'styled-components'

const Variant2 = ( { data, addToCart, addOne, removeOne, editCart, count } ) => {
    const { name, img, author, info, price } = data

    return (
        <ItemContainer>
            <LeftSide>
                <ItemName>{ name }</ItemName>
                <ItemInfo>
                    <p>{ author }</p>
                    <div className='flex-between'>
                        <p>{ info }</p>
                        <strong>${ price }</strong>
                    </div>
                    {/* categorias */}
                    <CartAdd>
                        <CartButton onClick={ addToCart }>Agregar al carrito</CartButton>
                        <CartCount>
                            <CartButton onClick={() => removeOne()}>-</CartButton>
                            <input
                                value={ count }
                                type="number"
                                onChange={(e) => editCart(e)}
                                min={0}
                            />
                            <CartButton onClick={() => addOne()}>+</CartButton>
                        </CartCount>
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
    grid-template-columns: 3fr 1fr;
    margin-bottom: 50px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    width: 405px;
    transition: 0.4s;
    
    &:hover {
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
    }
`;

const RightSide = styled.picture`
    background-image: url(${(props) => props.image}); //picante
    background-size: cover;
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
    /* margin-top: 5px; */

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
