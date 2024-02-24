import React, {useState} from "react"
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import dataset from "./data.js"



function App() {
  const [results, setResults] = useState(dataset)
  
  return (
    <div className="App">
      <SearchBar />
      <div className="main">      
      <SearchResults 
      results={results}
      />
      <Playlist />
      </div>
      
    </div>
  );
}

export default App;
