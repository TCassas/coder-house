import Avatar from './components/Avatar/Avatar'

function App() {
  const params = {src: "https://randomuser.me/api/portraits/lego/6.jpg", id: 6}
  return (
    <div className="App">
      <header className="App-header">
        <Avatar params={params}/>
      </header>
    </div>
  );
}

export default App