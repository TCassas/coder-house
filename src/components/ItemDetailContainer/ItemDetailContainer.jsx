import styled from "styled-components"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById, getProducts } from '../../dataMock'
import { useState, useEffect } from 'react'
import Loader from "../Loader/Loader"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductById(4).then((res) => {
            setItem(res)
        })
        .finally(() => {
            setLoading(!loading)
        })
    }, [])
      
    return (
        <ItemDetailWrapper>
            {loading ?
                <Loader />
            :
                <ItemDetail item={ item } />
            }
        </ItemDetailWrapper>
    )
}

export default ItemDetailContainer

const ItemDetailWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`;