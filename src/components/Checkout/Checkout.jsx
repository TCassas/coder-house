import styled from 'styled-components'
import { useState, useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { UserContext } from '../../context/UserContext'
import Button from '../Standard/Button'
import Input from '../Standard/Input'

const Checkout = ({ items, total, onSubmit }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const { user, isLoggedIn } = useContext(UserContext)
    useEffect(() => {
        if(isLoggedIn) {
            setEmail(user.email)
        }
    }, [])

    return (
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0, transition: {duration: 0.3, delay: 0.8} }} exit={{ opacity: 0, x: -10 }} >
            <CheckoutContainer>
                <CheckoutForm>
                    <h1>Complete with your personal data</h1>
                    <Input label='Name' type='text' change={ setName } value= { name } />
                    <Input label='Email' type='mail' change={ setEmail } value= { email } />
                    <Input label='Phone' type='phoe' change={ setPhone } value= { phone } />
                </CheckoutForm>
                <QuickSummary>
                    <strong>Summary</strong>
                    <div>
                        {items.map(item => <p key={ item.id } id={ item.id }>${ item.price } (x{ item.quantity }) { item.name }</p>)}
                    </div>
                    <strong>Total <span>${ total }</span></strong>
                </QuickSummary>
                <Button color='success' text='Complete order' click={() => onSubmit({name, email, phone})} />
            </CheckoutContainer>
        </motion.div>
    )
}

export default Checkout

const CheckoutContainer = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    gap: 30px;
    overflow: hidden;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
    }
`

const CheckoutForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
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