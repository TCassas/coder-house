import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Button = ({ color, text, click }) => {
    const [buttonColor, setButtonColor] = useState()

    useEffect(() => {
        switch(color) {
            case 'success':
                setButtonColor('#009C5E')
                break;
            case 'warning':
                setButtonColor('#E8A91A')
                break;
            case 'error':
                setButtonColor('#E82802')
                break;
            default:
                setButtonColor('#E8A91A')            
        }
    }, [])

    return (
        <StyledButton
            buttonColor={ buttonColor }
            onClick={() => click && click()}
        >{text}</StyledButton>
    )
}

export default Button

const StyledButton = styled.button`
    border: none;
    color: white;
    background-color: ${(props) => props.buttonColor};
    padding: 5px 12px;
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;
    border-radius: 6px;
`