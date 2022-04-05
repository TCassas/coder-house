import styled from "styled-components"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from '../../dataMock'
import { useState, useEffect } from 'react'
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        getProductById(id).then((res) => {
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
    max-width: 1650px;
    margin: 0 auto;
`;