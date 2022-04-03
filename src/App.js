import { useState, useEffect} from 'react'
import { getProducts } from './dataMock'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Loader from './components/Loader/Loader'
import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Footer from './components/Footer/Footer.jsx'
import Book from './components/Book/Book'
import './App.css';
import ItemDetail from './components/ItemDetail/ItemDetail'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />

      <Footer />
    </div>
  );
}

export default App;

const Books = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

const BooksContainer = styled.div`
  display: grid;
  margin-top: 10px;
  height: 400px;

  b {
    font-size: 20px;
    text-align: center;

    span {
      color: #F03A17;
    }
  }
`;

const Note = styled.p`
  width: 100%;
  color: gray;
  text-align: center;
  margin-bottom: 10px;
`;