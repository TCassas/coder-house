import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import styled from 'styled-components'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'


import { Link, useParams } from 'react-router-dom'
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting, variant }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { genre } = useParams()

    useEffect(() => {
        const colletionRef = genre ? 
            query(collection(firestoreDb, 'products'), where('genres', '==', genre)) :
            collection(firestoreDb, 'products')

        getDocs(colletionRef).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setItems(products)            
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setItems([])
            setLoading(true)
        })
    }, [genre])

    //Add to cart function
    const onAdd = (quantity) => {
        console.log(quantity)
    }

    return (
        <ItemsContainer className="itemListContainer">
            { loading ?
                <Loader />
            :    
                (items.length > 0 ?
                    <Items variant={variant}>
                            {items.map(item =>
                                <Link to={`/manga/${item.id}`} key={item.id}>
                                    <Item variant={variant} data={item} onAdd={onAdd} key={item.id} />
                                </Link>
                            )}
                    </Items>
                :
                    <h1>404 - Mangas not found</h1>
                )
            }
        </ItemsContainer>
    )
}

export default ItemListContainer

const ItemsContainer = styled.section`
    display: flex;
    flex-direction: column;
    
    > h1 {
        text-align: center
    };
`;

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(
        ${(props) => props.variant === 2 ? "300px" : "200px"}, 1fr
    ));
    row-gap: ${(props) => props.variant === 2 ? "3px" : "26px"};
`;