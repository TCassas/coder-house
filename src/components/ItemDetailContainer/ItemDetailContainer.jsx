import styled from "styled-components"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"
import { getItemById } from "../../services/items"
import { useState, useEffect, useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const { isInCart } = useContext(CartContext)

    useEffect(() => {
        const fetchItem = async () => {
            const itemById = await getItemById(id)
            const itemInCart = await (isInCart(id))

            if(itemInCart.data) {
                setItem(itemInCart.data)
            } else {
                itemById && setItem(itemById)
            }

            setLoading(false)
        }

        fetchItem()
    }, [id])
      
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