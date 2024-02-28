import React, {useState} from "react"
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import dataset from "./data.js"



function App() {
  const [results, setResults] = useState(dataset)
  const [playlistData, setPlaylistData] = useState([])
  const [playlistTitle, setPlaylistTitle] = useState("")
    

  function addToList(track) {
    setPlaylistData(prevPlaylistData => {
      const newPlaylistData = []
      const id = track.id
      
      if (prevPlaylistData.length == 0) {
        newPlaylistData.push(track)
        return newPlaylistData  
      } else {
        const contains = prevPlaylistData.every(
          item => item.id != id
        )
        return contains ? [...prevPlaylistData, track] :  prevPlaylistData
        }
    }
    )
      } 
      
 

  function removeFromList(track) {
    setPlaylistData(prevPlaylistData => {
      
      const newPlaylistData = prevPlaylistData.filter(
          item => item.id != track.id
        )
        return newPlaylistData
        }
    )
  }

  function handleTitle(event) {
    setPlaylistTitle(event.target.value)
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
      playlistTitle={playlistTitle}
      handleTitle={handleTitle}
      />
      </div>
      
    </div>
  );
}

export default App;
