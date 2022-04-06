import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import styled from 'styled-components'
import Loader from '../Loader/Loader'
import { getProducts, getProductByGenre } from '../../dataMock'
import { Link, useParams } from 'react-router-dom'
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting, variant }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { genre } = useParams()

    useEffect(() => {
        if(genre) {
            getProductByGenre(genre).then((res) => {
                setItems(res);
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProducts().then((res) => {
                setItems(res);
            }).finally(() => {
                setLoading(false)
            })
        }

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
                <Items variant={variant}>
                    {items.map(item =>
                        <Link to={`/manga/${item.id}`} key={item.id}>
                            <Item variant={variant} data={item} onAdd={onAdd} key={item.id} />
                        </Link>
                    )}
                </Items>
            }
        </ItemsContainer>
    )
}

export default ItemListContainer

const ItemsContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(
        ${(props) => props.variant === 2 ? "300px" : "200px"}, 1fr
    ));
    row-gap: ${(props) => props.variant === 2 ? "3px" : "26px"};
`;