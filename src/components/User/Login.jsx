import { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { UserContext } from '../../context/UserContext'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { loginWithEmailAndPassword } = useContext(UserContext)

    const onLogin = () => {
        loginWithEmailAndPassword(email, password)
    }

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {duration: 0.3, delay: 0.8} }} exit={{ opacity: 0 }} >
            <LoginContainer>
                <LoginForm>
                    <h1>Login</h1>
                    <div>
                        <label>Email</label>
                        <input type='mail'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </LoginForm>
                <small>Don't have an account? <Link to={'/register'}>Register</Link></small>
                <LoginButton
                    onClick={() => onLogin()}
                >
                    Login
                </LoginButton>
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
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
        width: 100%;
        border: none;
        padding: 5px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        caret-color: #F03A17;
        border: 2px solid white;
        transition: 0.1s;
        font-size: 14px;
        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
        background-color: rgb(243, 246, 252);
        border-radius: 2px;

        &:focus {
            outline: none;
            border: 2px solid #F03A17;
            border-radius: 2px;
        }
    }
`

const QuickSummary = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 2px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    padding: 10px;

    p {
        padding-left: 8px;
        color: rgb(156, 156, 156);
    }

    strong:nth-of-type(2) {
        text-align: right;

        span {
            color: #F03A17;
        }
    }
`

const LoginButton = styled.button`
    border: none;
    color: white;
    background-color: #009C5E;
    padding: 5px 12px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 6px;
`;