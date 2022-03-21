import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Footer from './components/Footer/Footer.jsx'
import Book from './components/Book/Book'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="すみません" /> {/*Lo sentimos*/}

      <BooksContainer>
        <strong> Book component showcase (different <span>sizes</span>) </strong>
        <Books>
          <Book size={3} cover={"https://static.wikia.nocookie.net/manjipedia/images/6/6a/Volume_01.jpg"} thickness={2} enableZoom={true} />
        </Books>
      </BooksContainer>

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

  strong {
    font-size: 20px;
    text-align: center;

    span {
      color: #F03A17;
    }
  }
`;