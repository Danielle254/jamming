import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import Track from './components/Track/Track.js'
import data from "./data.js"

function App() {
  const tracks = data.map(
    track => {
        return (
            <div>
            <Track
              key={track.id}
              title={track.name}
              artist={track.artist}
              album={track.album}
            />
            <hr /></div>
        )
    }
)
  
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist />
      {tracks}
    </div>
  );
}

export default App;
