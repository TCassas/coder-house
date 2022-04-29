import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Routes from './components/Routes/Routes'
import { CartContextProvider } from './context/CartContext.jsx'
import { NotificationContextProvider } from './context/NotificationContext.jsx'
import './App.css';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NotificationContextProvider>
        <CartContextProvider >
          <BrowserRouter>
            <NavBar />
            <Routes />
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </NotificationContextProvider>
    </div>
  );
}

export default App;