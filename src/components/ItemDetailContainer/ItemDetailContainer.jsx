import styled from "styled-components"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useState, useEffect } from 'react'
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"
import { getItemById } from "../../services/items"

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            const item = await getItemById(id)
            item && setItem(item)
            setLoading(false)
        }

        fetchItem()
    }, [])
      
    return (
        <ItemDetailWrapper>
            {loading ?
                <Loader />
            :
                (item ?
                    <ItemDetail item={ item } />
                :
                    <h1>404 - Manga not found</h1>
                )
                
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