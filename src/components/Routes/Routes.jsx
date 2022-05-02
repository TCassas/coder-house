import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { Routes as ReactRoutes, Route, useLocation, Navigate } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import CartContainer from '../CartContainer/CartContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Home from '../Home/Home'
import Order from '../Order/Order'
import CheckoutContainer from '../Checkout/CheckoutContainer';
import Login from '../User/Login'
import Register from '../User/Register'
import { AnimatePresence } from 'framer-motion';
import User from '../User/User'

const Routes = () => {
    const location = useLocation()
    const { isLoggedIn } = useContext(UserContext)

    return (
        <AnimatePresence>
            <ReactRoutes location={ location } key={ location.pathname } >
                <Route path='/' element={ <Home /> } />
                <Route path='/cart' element={ <CartContainer />} />
                <Route path='/manga' element={ <ItemListContainer variant={3} />} />
                <Route path='/manga/:id' element={ <ItemDetailContainer  />} />
                <Route path='/genre/:genre' element={ <ItemListContainer variant={3} />} />
                <Route path='/orders/:id' element={ <Order /> } />
                <Route path='/checkout' element={ <CheckoutContainer /> } />

                {/* Auth dependent routes */}
                <Route path='/login' element={ !isLoggedIn ? <Login /> : <Navigate to='/' /> } />
                <Route path='/register' element={ !isLoggedIn ? <Register /> : <Navigate to='/' />} />
                {/* Auth only routes */}
                <Route path='/user' element={ isLoggedIn ? <User /> : <Navigate to='/login' /> } />
            </ReactRoutes>
        </AnimatePresence>
    )
}

export default Routes