import './Avatar.css'

const Avatar = (params) => {
    console.log(params)

    return (
        <picture>
            <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="Lego" />
            <p>Lego 6</p>
            <p>{params.src}</p>
        </picture>
    )
}

export default Avatar