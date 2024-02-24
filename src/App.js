import React, {useState} from "react"
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import dataset from "./data.js"



function App() {
  const [results, setResults] = useState(dataset)
  const [playlistData, setPlaylistData] = useState([{
    name: "Alcohol", 
    artist: "X Ambassadors", 
    album: "Alcohol", 
    id: 3}])
    

  function addToList(track) {
    setPlaylistData(prevPlaylistData => {
      const newPlaylistData = []
      const id = track.id
      if (prevPlaylistData.length > 0) {
          for(let i = 0; i < prevPlaylistData.length; i++) {
              const currentItem = prevPlaylistData[i]
              if(currentItem.id != id) {
              
              newPlaylistData.push(track)
              } 
          }
          return newPlaylistData
      } 
      else {
          newPlaylistData.push(track)
          return newPlaylistData
      }
      })
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
