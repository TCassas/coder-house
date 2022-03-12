import './Avatar.css'

const Avatar = (params) => {
    return (
        <picture>
            <img src={`https://randomuser.me/api/portraits/lego/${params.id}.jpg`} alt="Lego" />
            <p>Lego {params.id}</p>
        </picture>
    )
}

export default Avatar