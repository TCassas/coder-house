import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main h1="すみません" />
      <Footer />
    </div>
  );
}

export default App;
