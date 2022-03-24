import styled from 'styled-components'
import Item from './components/Item/Item'
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

      <div style={{display: "flex", flexDirection: "column"}}>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <Item variant={1} data={{name: "AKIRA", img: "./imgs/akira-cover.jpeg", author: "Katsuhiro Otomo", info: "Vol. 13 - 400 Pages", price: "720", stock: 4, initial: 1}}/>
          <Item variant={1} data={{name: "AKIRA", img: "./imgs/akira-cover.jpeg", author: "Katsuhiro Otomo", info: "Vol. 13 - 400 Pages", price: "720", stock: 4, initial: 2}}/>
        </div>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <Item variant={2} data={{name: "AKIRA", img: "./imgs/akira-cover.jpeg", author: "Katsuhiro Otomo", info: "Vol. 13 - 400 Pages", price: "720", stock: 4, initial: 3}}/>
          <Item variant={2} data={{name: "AKIRA", img: "./imgs/akira-cover.jpeg", author: "Katsuhiro Otomo", info: "Vol. 13 - 400 Pages", price: "720", stock: 4, initial: 4}}/>
        </div>
      </div>
      {/* <BooksContainer>
        <strong> Book component showcase (different <span>sizes</span>) </strong>
        <Books>
          <Book size={1} cover={"https://patchbae.github.io/images/AKIRA.jpg"} thickness={1} enableZoom={true} />
          <Book size={2} cover={"https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png"} thickness={3} enableZoom={false} />
          <Book size={3} cover={"https://static.wikia.nocookie.net/manjipedia/images/6/6a/Volume_01.jpg"} thickness={2} enableZoom={true} />
        </Books>
        <Note>Muy bonitos los modelos 3D, pero aún tengo que ver como utilizarlos sin sobrecargar la pagina</Note>
      </BooksContainer> */}

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

const Note = styled.p`
  width: 100%;
  color: gray;
  text-align: center;
`;