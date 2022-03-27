import { useState, useEffect} from 'react'
import getProducts from './dataMock'
import Loader from './components/Loader/Loader'
import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Footer from './components/Footer/Footer.jsx'
import Book from './components/Book/Book'
import './App.css';

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts().then((res) => {
        setItems(res)
    })
    .finally(() => {
        setLoading(!loading)
    })
  }, [])

  return (
    <div className="App">
      <NavBar />
      {loading ?
        <Loader />
      :
        <>
          <ItemListContainer greeting="Welcome" variant={ 3 } items={ items } />
          <BooksContainer>
            <b> Book component showcase (different <span>sizes</span>) </b>
            <Books>
              <Book size={1} cover={"https://patchbae.github.io/images/AKIRA.jpg"} thickness={1} enableZoom={false} />
              <Book size={2} cover={"https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png"} thickness={3} enableZoom={false} />
              <Book size={3} cover={"https://static.wikia.nocookie.net/manjipedia/images/6/6a/Volume_01.jpg"} thickness={2} enableZoom={false} />
            </Books>
            <Note>I think I'll use them in the detail page (if it is not too complicate)</Note>
            <Note>Or maybe in a manga showcase to highlight some of them in the home page, not for every manga</Note>
          </BooksContainer>
        </>
      }
      
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