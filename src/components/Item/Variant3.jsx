import styled from "styled-components"

const Variant3 = ( { data } ) => {
    const { name, img, author, info, price } = data

    return (
        <ItemContainer>
            <ItemPhoto image={img}/>
            <ItemName>{name}</ItemName>
            <ItemInfo>
                <p>{author}</p>
                <div className='flex-between'>
                    <p>{info}</p>
                    <strong>${ price }</strong>
                </div>
                {/* categorias */}
            </ItemInfo>
        </ItemContainer>
    )
}

export default Variant3

const ItemContainer = styled.article`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 200px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    transition: 0.5s;
    
    &:hover {
        box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.25);
    }
`;

const ItemPhoto = styled.picture`
    display: flex;
    justify-content: center;
    background-image: url(${(props) => props.image}); //picante
    background-size: cover;
    background-position: center;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    height: 190px;
`;

const ItemName = styled.strong`
    color: white;
    font-weight: bold;
    margin-bottom: 5px;
    background-color: #F03A17;
    padding: 2px 10px;
    overflow:hidden; 
    white-space:nowrap; 
    text-overflow: ellipsis;
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