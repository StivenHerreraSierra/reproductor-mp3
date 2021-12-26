import './App.css';
import Header from './components/header/Header';
import Browser from './components/content/browser/Browser';
import Player from './components/content/player/Player';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-container">
          <Browser />

	  <Player />
      </div>
    </div>
  );
}

export default App;
