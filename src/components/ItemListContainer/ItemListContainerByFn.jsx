import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import Dummy from '../Item/Dummy'
import styled from 'styled-components'
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
                <Items>
                    <Dummy />
                    <Dummy />
                    <Dummy />
                    <Dummy />
                    <Dummy />
                    <Dummy />
                </Items>
            :    
                (items.length > 0 ?
                    <>
                        <motion.div
                            drag='x'
                            dragConstraints={{right: 0, left: (items.length - 1) * -314.6}}
                        >
                            <Items variant={variant}>
                                {items.map((item, i) =>
                                    <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 0.1 * i} }} exit={{ opacity: 0 }}>
                                        <Link to={`/manga/${item.id}`}>
                                            <Item variant={variant} data={item}  key={item.id} />
                                        </Link>
                                    </motion.div>
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
    width: max-content;
    gap: 20px;
    height: 120px;
    cursor: grab;

    a {
        height: fit-content;
    }
`;