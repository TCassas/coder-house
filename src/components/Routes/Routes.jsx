import { Routes as ReactRoutes, Route, useLocation } from 'react-router-dom'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import CartContainer from '../CartContainer/CartContainer'
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx'
import Home from '../Home/Home.jsx'
import Order from '../order/Order.jsx'
import CheckoutContainer from '../Checkout/CheckoutContainer';
import { AnimatePresence } from 'framer-motion';

const Routes = () => {
    const location = useLocation()
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
            </ReactRoutes>
        </AnimatePresence>
    )
}

export default Routes