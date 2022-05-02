import styled from 'styled-components'
import Book from '../Book/Book'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { HiOutlineHeart, HiArrowCircleRight, HiOutlineX, HiHeart } from 'react-icons/hi'
import { useState, useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import CartContext from '../../context/CartContext'
import { addLike, alradyLiked } from '../../services/likes'
import NotificationContext from '../../context/NotificationContext'
import { UserContext } from '../../context/UserContext'

const ItemDetail = ({ item })  => {
    const { id, author, img, info, name, price, stock, description, audience, genres, quantity } = item
    const { addItem, removeItem, isInCart } = useContext(CartContext)
    const { user } =  useContext(UserContext)
    const { addNotification } = useContext(NotificationContext)
    const [countInCart, setCountInCart] = useState(quantity)
    const [like, setLike] = useState(false)
    const [outOfStock, setOutOfStock] = useState(false)
    
    useEffect(() => {
        setLike(fetchLike())

        async function fetchLike() {
            setLike(await alradyLiked(user.uid, id))
        }

        if(isInCart(id).index < 0 && stock == 0) setOutOfStock(true)
    }, [])

    const onAdd = (quantity) => {
        if(quantity > 0) {
            setCountInCart(quantity)
            addItem({ ...item }, quantity)
        }
    }

    const onRemove = () => {
        removeItem(id)
        setCountInCart(0)
    }

    const onLike = () => {
        postLike()

        async function postLike() {
            if(user?.uid && id) {
                const likeResponse = await addLike(user.uid, id)

                addNotification(likeResponse.message, "success")
                setLike(likeResponse.id)
            } else {
                addNotification("You need to be logged in to like something", "warning")
            }
        }
    }

    return (
            <ItemDetailContainer>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0, transition: {duration: 0.5} }} exit={{ opacity: 0, x: -20 }} >
                    <ItemDetailLeft>
                        <Book
                            size={3}
                            thickness={3}
                            enableZoom={false}
                            cover={`/imgs/${img}`}
                        />
                    </ItemDetailLeft>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0, transition: {duration: 0.5} }} exit={{ opacity: 0, x: 20 }} >
                    <ItemDetailRight>
                        <h1>{ name }</h1>
                        <ItemLike onClick={() => onLike()}>
                            { like ?
                                <HiHeart />
                            :
                                <HiOutlineHeart />
                            }

                        </ItemLike>
                        <strong><span>Price</span>: ${ price }</strong>
                        <strong><span>Author</span>: { author }</strong>
                        <strong><span>Series</span>: { info }</strong>
                        <ItemDescription>
                            <strong><span>Description</span></strong>
                            <p>{ description }</p>
                        </ItemDescription>
                        <strong><span>Audience</span>: { audience }</strong>
                        <strong><span>Genres</span></strong>
                        <ItemGenres>
                            { genres.map(genre =>
                                <Link key={ genre } to={`/genre/${genre}`}>
                                    <ItemGenre>{ genre }</ItemGenre>
                                </Link>
                            )}
                        </ItemGenres>
                        { !outOfStock ?
                            <ItemControls both={ countInCart > 0 }>
                                <ItemCount stock={ stock } initial={ countInCart } onAdd={ onAdd } alreadyInCart={ countInCart > 0 } />
                                { countInCart > 0 &&
                                    <GoToCart>
                                        <Link to={'/cart'}>Go to cart <HiArrowCircleRight /></Link>
                                        <RemoveFromCart
                                            onClick={() => onRemove()}
                                        >
                                            <span>Remove from cart</span>
                                            <HiOutlineX />
                                        </RemoveFromCart>
                                    </GoToCart>
                                }
                            </ItemControls>
                        :
                            <OutOfStock>Out of stock :(</OutOfStock>
                        }
                    </ItemDetailRight>
                </motion.div>
            </ItemDetailContainer>
    )
}

export default ItemDetail

const ItemDetailContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 20px;
    gap: 15px;

    @media (max-width: 760px) {
        grid-template-columns: 1fr !important;
        grid-template-rows: 310px 1fr !important;
        padding: 0px;   
        gap: 0px;
    }
`;

const ItemDetailLeft = styled.section`
    width: 100%;
    height: 100%;
    background-color: #e5e5f7;
    border-radius: 10px;
    background: radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #e5e5f7 20%, #e5e5f7 80%, transparent 80%, transparent) 25px 25px, linear-gradient(#F03A17 2px, transparent 2px) 0 -1px, linear-gradient(90deg, #F03A17 2px, #e5e5f7 2px) -1px 0;
    background-size: 50px 50px, 50px 50px, 25px 25px, 25px 25px;

    @media (max-width: 760px) {
        border-radius: 0px;
    }
`;

const ItemDetailRight = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    padding: 10px;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    h1 {
        background-color: #F03A17;
        color: white;
        padding: 10px;
    }

    strong span {
        color: #F03A17;
    }

    @media (max-width: 760px) {
        border-radius: 0px;
    }
`;

const ItemDescription = styled.div`
    display: flex;
    flex-direction: column;

    p {
        margin-left: 5px;
    }
`;

const ItemGenres = styled.section`
    display: flex;
    gap: 10px;
    margin-left: 5px;
`;

const ItemGenre = styled.article`
    font-weight: bold;
    padding: 3px 15px;
    background-color: #FCE100;
    border-radius: 6px;
`;

const ItemControls = styled.div`
    display: flex;
    justify-content: ${(props) => props.both ? 'space-between' : 'center'};
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    margin-top: 10px;

    @media (max-width: 925px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ItemLike = styled.button`
    display: flex;
    justify-content: center;
    padding: 5px;
    border: none;
    font-size: 22px;
    cursor: pointer;
`;

const GoToCart = styled.div`
    display: flex;
    flex-direction: column;
    
    a, span {
        font-weight: bold;
        font-size: 20px;
    }
    
    a {
        display: flex;
        justify-content: flex-end;
        gap: 4px;
        text-align: right;
        align-items: center;
        padding-right: 10px;
        color: white;
        background-color: #009C5E;
    }
`;

const RemoveFromCart = styled.button`
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;
    background-color: #FCE100;
    padding: 0 10px;
    font-size: 20px;
    cursor: pointer;
`

const OutOfStock = styled.p`
    margin: 10px auto;
`