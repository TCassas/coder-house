import styled from 'styled-components'
import ItemLIstContainerByFn from '../ItemListContainer/ItemListContainerByFn'
import { getItems, getItemsByAuthor } from '../../services/items'
import { motion,  } from 'framer-motion'

const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <HomeWrapper>
                <HighlightHeader>
                    <BrandHighlight>
                        <h1>Tengu</h1>
                        <strong>Manga Store</strong>
                    </BrandHighlight>
                </HighlightHeader>
                <HighlightSet>
                    <ItemLIstContainerByFn fn={ getItems } variant={2} title={"Most Popular"} />
                </HighlightSet>
                <HighlightSet>
                    <ItemLIstContainerByFn fn={ getItems } param={"action"} variant={2} title={"Action mangas"} />
                </HighlightSet>
                <HighlightSet>
                    <ItemLIstContainerByFn fn={ getItemsByAuthor } param={"Junji Ito"} variant={2} title={"Junji Ito Collection"} />
                </HighlightSet>
                <HighlightSet>
                    <ItemLIstContainerByFn fn={ getItemsByAuthor } param={"Makoto Yukimura"} variant={2} title={"Makoto Yukimura Collection"} />
                </HighlightSet>
            </HomeWrapper>
        </motion.div>
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
    grid-template-columns: 1fr;
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