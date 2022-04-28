import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import styled from 'styled-components'
import Loader from '../Loader/Loader'
import { getItems, searchItems } from '../../services/items'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import "./ItemListContainer.css"

const ItemListContainer = ({ variant }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { genre } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()


    useEffect(() => {
        fetchItems()

        async function fetchItems() {
            const items = await getItems(genre)
            await setItems(items)
            setLoading(false)
        }

        return (() => {
            setItems([])
            setLoading(true)
        })
    }, [genre])

    useEffect(() => {
        searchParams.get("q") && fetchItems()

        async function fetchItems() {
            const items = await searchItems(searchParams.get("q"))
            setItems(items)
            setLoading(false)
        }

        return (() => {
            setItems([])
            setLoading(true)
        })
    }, [searchParams])

    return (
        <ItemsContainer className="itemListContainer">
            { loading ?
                <Loader />
            :    
                (items.length > 0 ?
                    <Items variant={variant}>
                            {items.map(item =>
                                <Link to={`/manga/${item.id}`} key={item.id}>
                                    <Item variant={variant} data={item} key={item.id} />
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
    margin: 14px 0;
    
    > h1 {
        text-align: center
    };
`;

const Items = styled.div`
    display: grid;
    justify-content: space-around;
    grid-template-columns: repeat(auto-fit, minmax(
        ${(props) => props.variant === 2 ? "300px" : "200px"}, 1fr
    ));

    row-gap: ${(props) => props.variant === 2 ? "3px" : "26px"};
`;