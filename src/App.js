import React, {useState} from "react"
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import dataset from "./data.js"



function App() {
  const [results, setResults] = useState(dataset)
  const [playlistData, setPlaylistData] = useState([])
    

  function addToList(track) {
    setPlaylistData(prevPlaylistData => {
      const newPlaylistData = []
      const id = track.id
      let contains = false
      if (prevPlaylistData.length == 0) {
        newPlaylistData.push(track)
        return newPlaylistData  
      } else {
        for (let i = 0; i < prevPlaylistData.length; i++) {
          if (prevPlaylistData[i].id == id) {
            contains = true
          }
        }
        if (contains) {
          return prevPlaylistData
        } else {
          return [...prevPlaylistData, track] }}
    }
    )
      } 
      
 

  function removeFromList(track) {
    
  }
  
  return (
    <div className="App">
      <SearchBar />
      <div className="main">      
      <SearchResults 
      results={results}
      addToList={addToList}
      />
      <Playlist 
      playlist={playlistData}
      removeFromList={removeFromList}
      />
      </div>
      
    </div>
  );
}

export default App;
