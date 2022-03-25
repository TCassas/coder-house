import { useState } from 'react'
import Variant1 from './Variant1'
import Variant2 from './Variant2'

const Item = ({ variant, data, onAdd }) => {
    const { stock, initial } = data
    const [count, setCount] = useState(initial ? initial : 0)

    const addOne = () => {
        if(count + 1 <= stock) {
            setCount(count + 1)
        }
    }

    const removeOne = () => {
        if(count - 1 >= 0) {
            setCount(count - 1)
        }
    }

    const editCart = (e) => {
        const value = e.target.value
        if(value && value > stock) {
            setCount(parseInt(stock))
        } else if(value < 0) {
            setCount(0)
        } else {
            setCount(value)
        }
    }

    const  addToCart = () => {
        onAdd(count)
    }

    return (
        <>
            { variant == 1 ?
                <Variant1
                    data = { data }
                    onAdd = { onAdd }
                    addOne = { addOne }
                    removeOne = { removeOne }
                    editCart = { editCart }
                    addToCart = { addToCart }
                    count = { count }
                />
            :
                <Variant2
                    data = { data }
                    onAdd = { onAdd }
                    addOne = { addOne }
                    removeOne = { removeOne }
                    editCart = { editCart }
                    addToCart = { addToCart }
                    count = { count }
                />
            }
        </>
    )
}

export default Item