import styled from "styled-components"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from '../../dataMock'
import { useState, useEffect } from 'react'
import Loader from "../Loader/Loader"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

    useEffect(() => {
        const fetchItem = async () => {
            const snap = await getDoc(doc(firestoreDb, 'products', id))
            setItem(snap.data())
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