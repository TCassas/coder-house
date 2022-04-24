import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './components/CartContainer/CartContainer'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Order from './components/order/Order.jsx'
import { CartContextProvider } from './context/CartContext.jsx'
import { NotificationContextProvider } from './context/NotificationContext.jsx'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NotificationContextProvider>
        <CartContextProvider >
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/cart' element={ <CartContainer />} />
              <Route path='/manga' element={ <ItemListContainer variant={3} />} />
              <Route path='/manga/:id' element={ <ItemDetailContainer  />} />
              <Route path='/genre/:genre' element={ <ItemListContainer variant={3} />} />
              <Route path='/orders/:id' element={ <Order /> } />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </NotificationContextProvider>
    </div>
  );
}

export default App;