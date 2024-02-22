import React, {useState} from "react"
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import Track from './components/Track/Track.js'
import dataset from "./data.js"


function App() {
  
  const newDataset = dataset.map(
    item => ({...item, listType: "resultsList" })
  )

  
  const [data, setData] = useState(newDataset)
  
  function Shift(array) {
    const newArray = [...array]
    newArray.shift()
    return newArray;
  }

  function RemoveItem() {
    setData(prevData => Shift(prevData))
  }

  const tracks = data.map(
    track => {
        return (
            
            <Track
              key={track.id}
              title={track.name}
              artist={track.artist}
              album={track.album}
              listType={track.listType}
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
      <button onClick={RemoveItem} >Remove Item</button>
      {tracks}
    </div>
  );
}

export default App;
