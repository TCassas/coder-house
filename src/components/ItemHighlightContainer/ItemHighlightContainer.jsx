import styled from "styled-components"
import ItemHighlight from "../ItemHighlight/ItemHighlight"

const ItemHighlight = ({ id }) => {
    const [item, setItem] = useState({})

    useEffect(() => {
        getProductById(id).then((res) => {
            setItem(res)
        })
    }, [])

    return (
        <ItemHighlightWrapper>
            <ItemHighlight manga={ item } />
        </ItemHighlightWrapper>
    )
}

export default ItemHighlight

const ItemHighlightWrapper = styled.section`

`;