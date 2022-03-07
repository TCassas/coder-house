import { useEffect, useState } from 'react'
import './Avatar.css'

const Avatar = (params) => {
    const [id, setId] = useState()

    useEffect(() => {
        setId(params.params.id)
    }, [])

    return (
        <picture>
            <img src={`https://randomuser.me/api/portraits/lego/${id}.jpg`} alt="Lego" />
            <p>Lego {id}</p>
        </picture>
    )
}

export default Avatar