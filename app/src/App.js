import './App.css';
import Header from './components/header/Header';
import Browser from './components/content/browser/Browser';
import PlayerControls from './components/content/player/PlayerControls';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-container">
          <Browser />

	  <PlayerControls />
      </div>
    </div>
  );
}

export default App;
