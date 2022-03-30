import styled from 'styled-components'

const Categories = ({ categories }) => {
    return (
        <CategoriesWrapper>
            <CategoriesContainer className="shadow">
                <CategoriesColumn>
                    <strong>Genres</strong>
                    <CategoriesList>
                        {categories.genres.map(genre => <div> { genre }</div>)}
                    </CategoriesList>
                </CategoriesColumn>
                <CategoriesColumn>
                    <strong>Categories</strong>
                    <CategoriesList>
                        {categories.categories.map(categorie => <div> { categorie }</div>)}
                    </CategoriesList>
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
    height: 100vh;
    backdrop-filter: blur(5px);
    padding: 0 10px;
    transition: 1s;
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