import React, {useState} from "react"
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import Track from './components/Track/Track.js'
import data from "./data.js"


function App() {
  

  /* function RemoveFromList() {

  } */
  
  const tracks = data.map(
    track => {
        return (
            
            <Track
              key={track.id}
              title={track.name}
              artist={track.artist}
              album={track.album}
              /* onClick={RemoveFromList} */
            />
            
        )
    }
)


  
  return (
    <div className="App">
      <SearchBar />
      <div className="main">
      <SearchResults />
      <Playlist />
      </div>
      {tracks}
    </div>
  );
}

export default App;
