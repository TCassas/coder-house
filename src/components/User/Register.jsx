import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'
import NotificationContext from '../../context/NotificationContext'
import Input from '../Standard/Input'
import Button from '../Standard/Button'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { registerWithEmailAndPassword } = useContext(UserContext)
    const { addNotification } = useContext(NotificationContext)

    const onRegister = async() => {
        try {
            await registerWithEmailAndPassword(email, password)

            addNotification('Account created, Welcome!', 'success')
        } catch (error) {
            addNotification(error.code, 'warning')
        }
    }

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: 0.3, delay: 0.8} }} exit={{ opacity: 0 }} >
            <LoginContainer>
                <LoginForm>
                    <h1>Register</h1>
                    <Input label='Email' type='mail' change={ setEmail } value={ email } />
                    <Input label='Password' type='password' change={ setPassword } value={ password } />
                </LoginForm>
                <small>Already have an account?, <Link to={'/login'}>Login</Link></small>
                <Button color='success' text='Create account' click={ onRegister } />
            </LoginContainer>
        </motion.main>
    )
}

export default Register

const LoginContainer = styled.section`
    width: 100%;
    max-width: 480px;
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