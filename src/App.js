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

      <Book />

      <Footer />
    </div>
  );
}

export default App;

const Test = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;