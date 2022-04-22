import styled from 'styled-components'
import Book from '../Book/Book'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { HiOutlineHeart, HiArrowCircleRight, HiOutlineX } from 'react-icons/hi'
import { useState, useContext, useEffect } from 'react'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ item })  => {
    const { id, author, img, info, name, price, stock, description, audience, genres } = item
    const [countInCart, setCountInCart] = useState(0)
    const { addItem, isInCart, removeItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        if(quantity > 0) {
            setCountInCart(quantity)
            addItem({ id, name, price, author, img, stock }, quantity)
        }
    }

    const onRemove = () => {
        removeItem(id)
        setCountInCart(0)
    }

    useEffect(() => {
        const itemInCart = isInCart(id)
        if(itemInCart.data) {
            setCountInCart(itemInCart.data.quantity)
        }
    }, [id])

    return (
        <ItemDetailContainer>
            <ItemDetailLeft>
                <Book
                    size={3}
                    thickness={3}
                    enableZoom={false}
                    cover={`/imgs/${img}`}
                />
            </ItemDetailLeft>
            <ItemDetailRight>
                <h1>{ name }</h1>
                <ItemLike>
                    <HiOutlineHeart />
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
                <ItemControls both={ countInCart > 0 }>
                    <ItemCount stock={ stock } initial={ countInCart } onAdd={ onAdd } />
                    { countInCart > 0 &&
                        <GoToCart>
                            <RemoveFromCart
                                onClick={() => onRemove()}
                            >
                                <HiOutlineX />
                            </RemoveFromCart>
                            <Link to={'/cart'}>Go to cart <HiArrowCircleRight /></Link>
                        </GoToCart>
                    }
                </ItemControls>
            </ItemDetailRight>
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

    span {
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

    a {
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size: 20px;
        padding: 3px 15px;
        color: white;
        background-color: #009C5E;
        gap: 10px
    }
`;

const RemoveFromCart = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: #FCE100;
    padding: 0 10px;
    font-size: 20px;
    cursor: pointer;
`;