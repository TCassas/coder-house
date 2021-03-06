import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { motion } from 'framer-motion'
import ItemLIstContainerByFn from '../ItemListContainer/ItemListContainerByFn'
import OrderListContainer from '../OrderListContainer/OrderListContainer'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getLikedItems } from '../../services/likes'
import Button from '../Standard/Button'

const User = () => {
    const { user, logout, isLoggedIn } = useContext(UserContext)

    return (
        <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, transition: {duration: 0.3, delay: 0.8} }} exit={{ opacity: 0 }} >
            <UserWrapper>
                <UserHeader>
                    <h1> {user.email?.substring(0, user.email.indexOf('@'))}'s page </h1>
                    <Link to='/'>
                        <Button  color='warning' text='Logout' click={logout} />
                    </Link>
                </UserHeader>
                <ItemLIstContainerByFn fn={ getLikedItems } param={ user.uid } variant={2} title='My likes' fallback="You don't like anything..? 🗿" />
                <strong>My orders</strong>
                <OrderListContainer user={ user } isLoggedIn={ isLoggedIn } />
            </UserWrapper>
        </motion.div>
    )
}

export default User

const UserWrapper = styled.main`
    width: 80%;
    margin: 10px auto 0 auto;
    padding: 10px;

    @media (max-width: 600px) {
        width: 100%;
    }
`

const UserHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`