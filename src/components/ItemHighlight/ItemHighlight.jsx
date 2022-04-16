import Book from "../Book/Book"
import styled from "styled-components"

const ItemHighlight = ({ manga }) => {
    return (
        <ItemHighlightContainer>
            <Book
                size={3}
                thickness={3}
                enableZoom={false}
                cover={manga.img}
            />
        </ItemHighlightContainer>
    )
}

export default ItemHighlight

const ItemHighlightContainer = styled.section`
    width: 240px;
    height: 250px;
`;

