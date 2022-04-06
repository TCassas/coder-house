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
            console.log(res)
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

`;