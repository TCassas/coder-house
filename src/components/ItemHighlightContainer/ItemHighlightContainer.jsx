import styled from "styled-components"
import ItemHighlight from "../ItemHighlight/ItemHighlight"
import { useState, useEffect } from 'react'
import { getProductById } from '../../dataMock'
import Loader from "../Loader/Loader"

const ItemHighlightContainer = ({ id }) => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductById(id).then((res) => {
            setItem(res)
        }).finally(() =>  {
            setLoading(false)
        })
    }, [])

    return (
        <ItemHighlightWrapper>
            { loading ?
                <Loader />
            :
                <ItemHighlight manga={ item } />
            }
        </ItemHighlightWrapper>
    )
}

export default ItemHighlightContainer

const ItemHighlightWrapper = styled.section`
    background: radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#F03A17 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #F03A17 2px, #e5e5f7 2px) -1px 0;
    background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;
    border-radius: 10px;
`;