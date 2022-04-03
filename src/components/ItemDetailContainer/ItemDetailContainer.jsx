import styled from "styled-components"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    return (
        <ItemDetailWrapper>
            <ItemDetail />
        </ItemDetailWrapper>
    )
}

export default ItemDetailContainer

const ItemDetailWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`;