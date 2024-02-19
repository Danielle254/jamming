import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import Tracklist from "./components/Tracklist/Tracklist"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <Playlist />
      <Tracklist />
    </div>
  );
}

export default App;
