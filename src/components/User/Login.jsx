import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
import NotificationContext from '../../context/NotificationContext'
import Button from '../Standard/Button'
import Input from '../Standard/Input'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { loginWithEmailAndPassword } = useContext(UserContext)
    const { addNotification } = useContext(NotificationContext)

    const onLogin = async () => {
        try {
            const credentials = await loginWithEmailAndPassword(email, password)

            addNotification(`Welcome back ${credentials.user.email}!`, 'success')
        } catch (error) {
            addNotification(error.code, 'warning')
        }
    }

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: 0.3, delay: 0.8} }} exit={{ opacity: 0 }} >
            <LoginContainer>
                <LoginForm>
                    <h1>Login</h1>
                    <Input label='Email' type='mail' change={ setEmail } value={ email } />
                    <Input label='Password' type='password' change={ setPassword } value={ password } />
                </LoginForm>
                <small>Don't have an account? <Link to={'/register'}>Register</Link></small>
                <Button color='success' text='Login' click={onLogin} />
            </LoginContainer>
        </motion.main>
    )
}

export default Login

const LoginContainer = styled.section`
    width: 100%;
    max-width: 480px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 40px auto;
    overflow: hidden;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
    }

    small a {
        color: #f03A17;
        font-weight: bold;
    }
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`