import { useState, createContext } from 'react'
import styled from 'styled-components'

const NotificationContext = createContext()

export const NotificationContextProvider = ({ children }) => {
    const [text, setText] = useState('')
    const [severity, setSeverity] = useState('')

    const addNotification = (text, severity) => {
        setText(text)

        switch(severity) {
            case 'success':
                setSeverity('#009C5E')
                break;
            case 'warning':
                setSeverity('#E8A91A')
                break;
            case 'error':
                setSeverity('#E82802')
                break;
            default:
                setSeverity('#E8A91A')
                
        }

        setTimeout(() => {
            setText('')
            setSeverity('')
        }, 5000)
    }

    return (
        <NotificationContext.Provider value={{
            addNotification
        }}>
            <NotificationContainer severity={ severity }>
                <strong>{ text }</strong>
            </NotificationContainer>
            { children }
        </NotificationContext.Provider>
    )
}

export default NotificationContext

const NotificationContainer = styled.section`
    position: absolute;
    z-index: 1;
    background-color: ${(props) => props.severity};
    width: 100%;
    text-align: center;
    color: white;
`