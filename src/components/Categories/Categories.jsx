import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Categories = ({ setShowDrop, genres }) => {
    return (
        <CategoriesWrapper>
            <CategoriesContainer className="shadow">
                <CategoriesColumn>
                    <strong>Genres</strong>
                    <CategoriesList>
                        {genres.map(genre =>
                            <Link to={`/genre/${genre}`} onClick={() => setShowDrop()} key={genre}>
                                <div> { genre } </div>
                            </Link>
                        )}
                    </CategoriesList>
                </CategoriesColumn>
                <CategoriesColumn>
                    <Link
                        to='/manga'
                        onClick={() => setShowDrop()}
                    >
                        <strong>All mangas</strong>
                    </Link>
                </CategoriesColumn>
            </CategoriesContainer>
        </CategoriesWrapper>
    )
}

export default Categories

const CategoriesWrapper = styled.div`
    position: absolute;
    top: 64.5px;
    width: 100%;
    padding: 0 10px;
    transition: 1s;
    z-index: 1;
`;

const CategoriesContainer = styled.section`
    display: flex;
    gap: 10px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    padding: 10px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`;

const CategoriesList = styled.article`
    display: flex;
    flex-direction: column;
    
    strong {
        margin-bottom: 10px;
    }
    
    div {
        display: relative;
        left: 0px;
        transition: 0.1s;
    }

    div:hover {
        left: 10px;
        color: #F03A17;
    }
`;

const CategoriesColumn = styled.section`
    display: flex;
    flex-direction: column;
`;