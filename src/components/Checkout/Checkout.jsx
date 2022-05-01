import styled from 'styled-components'
import { useState, useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { UserContext } from '../../context/UserContext'

const Checkout = ({ items, total, onSubmit }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const { user } = useContext(UserContext)
    useEffect(() => {
        if(user.email) {
            setEmail(user.email)
        }
    }, [])

    return (
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0, transition: {duration: 0.3, delay: 0.8} }} exit={{ opacity: 0, x: -10 }} >
            <CheckoutContainer>
                <CheckoutForm>
                    <h1>Complete with your personal data</h1>
                    <div>
                        <label>Name</label>
                        <input type='text'
                            onChange={(e) => setName(e.target.value)}
                            value={ name }
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={ email }
                            readOnly={true}
                        />
                    </div>
                    <div>
                        <label>Phone number</label>
                        <input type='phone'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </CheckoutForm>
                <QuickSummary>
                    <strong>Summary</strong>
                    <div>
                        {items.map(item => <p id={ item.id }>${ item.price } (x{ item.quantity }) { item.name }</p>)}
                    </div>
                    <strong>Total <span>${ total }</span></strong>
                </QuickSummary>
                <BuyBotton
                    onClick={() => onSubmit({ name, email, phone })}
                >
                    Complete order
                </BuyBotton>
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

const BuyBotton = styled.button`
    border: none;
    color: white;
    background-color: #009C5E;
    padding: 5px 12px;
    font-weight: bold;
    font-size: 18px;
    border-radius: 6px;
`;