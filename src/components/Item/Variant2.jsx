import styled from 'styled-components'

const Variant2 = ( { data } ) => {
    const { name, img, author, info, price } = data

    return (
        <ItemContainer>
            <LeftSide>
                <ItemName>{ name }</ItemName>
                <ItemInfo>
                    <p>{ author }</p>
                    <div className='flex-between'>
                        <Info>{ info }</Info>
                        <strong>${ price }</strong>
                    </div>
                    {/* categorias */}
                </ItemInfo>
            </LeftSide>
            <RightSide image={img} >
            </RightSide>
        </ItemContainer>
    )
}

export default Variant2

const Info = styled.p`
    width: 160px;
    overflow:hidden; 
    white-space:nowrap; 
    text-overflow: ellipsis;
`;

const ItemContainer = styled.article`
    display: grid;
    grid-template-columns: 3fr 1fr;
    margin: 0 auto;
    margin-bottom: 10px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    width: 300px;
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
