import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Loader from './components/Loader/Loader'
import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<h1> Home </h1>} />
          <Route path='/manga' element={<ItemListContainer variant={3} />}/>
          <Route path='/manga/:id' element={<ItemDetailContainer  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;