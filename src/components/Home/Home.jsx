import styled from 'styled-components'
import ItemLIstContainerByFn from '../ItemListContainer/ItemListContainerByFn'
import { GetItems, GetItemsByAuthor } from '../../services/items'

const Home = () => {
    return (
        <HomeWrapper>
            <HighlightHeader>
                <BrandHighlight>
                    <h1>Tengu</h1>
                    <strong>Manga Store</strong>
                </BrandHighlight>
            </HighlightHeader>
            <HighlightSet>
                <ItemLIstContainerByFn fn={ GetItems } variant={2} title={"Most Popular"} />
            </HighlightSet>
            <HighlightSet>
                <ItemLIstContainerByFn fn={ GetItems } param={"action"} variant={2} title={"Action mangas"} />
            </HighlightSet>
            <HighlightSet>
                <ItemLIstContainerByFn fn={ GetItemsByAuthor } param={"Junji Ito"} variant={2} title={"Junji Ito Collection"} />
            </HighlightSet>
            <HighlightSet>
                <ItemLIstContainerByFn fn={ GetItemsByAuthor } param={"Makoto Yukimura"} variant={2} title={"Makoto Yukimura Collection"} />
            </HighlightSet>
        </HomeWrapper>
    )
}

export default Home

const HomeWrapper = styled.main`
    width: 100%;
    margin: 0 auto;
    padding: 10px;
`;

const HighlightHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    margin-bottom: 15px;
    
    h1 {
        font-size: 80px;
        color: #F03A17;
        line-height: 70px;
    }

    strong {
        font-style: italic;
        color: navajowhite;
        margin-bottom: 3px;
    }
`;

const BrandHighlight = styled.div`
    display: flex;
    align-items: flex-end;
`;

const HighlightSet = styled.div`
    
`;