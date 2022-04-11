import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import styled from 'styled-components'
import Loader from '../Loader/Loader'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import "./ItemListContainer.css"

const ItemLIstContainerByProp = ({ fn, param, variant, title }) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fn(param && param).then(res => {
            setItems(res)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <ItemsContainer className="itemListContainer">
            <strong>{title}</strong>
            { loading ?
                <Loader />
            :    
                (items.length > 0 ?
                    <>
                        <motion.div
                            drag='x'
                            dragConstraints={{right: 0, left: (items.length - 1) * -300}}
                        >
                            <Items variant={variant}>
                                {items.map(item =>
                                        <Link to={`/manga/${item.id}`} key={item.id}>
                                            <Item variant={variant} data={item}  key={item.id} />
                                        </Link>
                                )}
                            </Items>
                        </motion.div>
                    </>
                :
                    <h1>404 - Mangas not found</h1>
                )
            }
        </ItemsContainer>
    )
}

export default ItemLIstContainerByProp

const ItemsContainer = styled.section`
    display: flex;
    width: auto;
    overflow: hidden;
    
    > h1 {
        text-align: center
    };
`;

const Items = styled.div`
    display: flex;
    /* align-items: center; */
    width: max-content;
    gap: 20px;
    height: 110px;
    cursor: grab;

    a {
        height: fit-content;
    }
`;