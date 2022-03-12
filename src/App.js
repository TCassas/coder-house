import Avatar from './components/Avatar/Avatar'

function App() {
  const ids = [0,1,2,3,4,5,6]
  return (
    <div className="App">
      <header className="App-header">
        {ids.map(id => <Avatar id={id} key={id}/>)}
      </header>
    </div>
  );
}

export default App