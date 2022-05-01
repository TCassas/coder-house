import {  useState, useEffect, createContext } from 'react'

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        try {
            if(JSON.parse(localStorage.getItem('cart')).length > 0) {
                setCart(JSON.parse(localStorage.getItem('cart')))
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    const addItem = (item, quantity) => {
        const itemToAdd = {
            ...item,
            quantity
        }
        
        const indexOfItemIncart = isInCart(itemToAdd.id).index
        if(indexOfItemIncart > -1) {
            const newCart = cart
            newCart[indexOfItemIncart].quantity = (item.id === itemToAdd.id) && quantity

            setCart([...newCart])

            updateCartLocalStorage(cart)
        } else {
            setCart([...cart, itemToAdd])

            updateCartLocalStorage([...cart, itemToAdd])
        }
    }

    const removeItem = (id) => {
        if(isInCart(id)) {
            const cartWithoutItem = cart.filter(itemInCart => itemInCart.id !== id)
            setCart(cartWithoutItem)

            updateCartLocalStorage(cartWithoutItem)
        }
    }

    const isInCart = (id) => {
        const indexInCart = cart.findIndex(itemInCart => itemInCart.id === id)

        return {
            index: indexInCart,
            data: cart[indexInCart]
        }
    }

    const clearCart = (item) => {
        setCart([])

        updateCartLocalStorage([])
    }

    const getCartTotal = () => {
        let total = 0
        cart.forEach(item => total += item.quantity * item.price)

        return total
    }

    const getCartCount = () => {
        let count = 0
        cart.forEach(item => count += item.quantity)
        return count
    }

    const updateCartLocalStorage = (cart) => {
        try {
            localStorage.removeItem('cart')
            localStorage.setItem('cart', JSON.stringify(cart))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            clearCart,
            isInCart,
            removeItem,
            getCartTotal,
            getCartCount
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext