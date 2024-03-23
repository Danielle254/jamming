import React, {useState} from "react"
import './App.css';
import SearchBar from "./components/SearchBar/SearchBar"
import SearchResults from "./components/SearchResults/SearchResults"
import Playlist from "./components/Playlist/Playlist"
import SpotifyLogin from "./components/SpotifyLogin/SpotifyLogin"
import Authorize from './Auth'



function App() {
  const [results, setResults] = useState([]);
  const [playlistData, setPlaylistData] = useState([]);
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [accessToken, setAccessToken] = useState('');
  const [searchInput, setSearchInput] = useState("");
  

  function updateSearch(event) {
        setSearchInput(event.target.value);
  } 
  
   
  async function searchSpotify() {
    const currentURL = window.location.href;
    if (currentURL.includes('#')) {
      const startIndex = currentURL.indexOf('=') +1;
      const endIndex = currentURL.indexOf('&');      
      setAccessToken(currentURL.slice(startIndex, endIndex));
    
    const limitResults = 6;
    const response = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=track&limit=' + limitResults.toString() + '&offset=0', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ accessToken
        }       
            
        }); 
    const data = await response.json();
    setResults(() => {
      const newResults = [];
      for (let i = 0; i < limitResults; i++) {
        newResults.push(
          {
            name: data.tracks.items[i].name,
            artist: data.tracks.items[i].artists[0].name,
            album: data.tracks.items[i].album.name,
            id: data.tracks.items[i].id,
            uri: data.tracks.items[i].uri
          });
      }
      return newResults;
    
    });
  } else {
    alert("Please log in to be able to search");
  }
  }

  function addToList(track) {
    setPlaylistData(prevPlaylistData => {
      const newPlaylistData = []
      const id = track.id;      
      if (prevPlaylistData.length == 0) {
        newPlaylistData.push(track)
        return newPlaylistData;  
      } else {
        const contains = prevPlaylistData.every(
          item => item.id != id
        )
        return contains ? [...prevPlaylistData, track] :  prevPlaylistData
      }
    })
  } 
      
 

  function removeFromList(track) {
    setPlaylistData(prevPlaylistData => {      
      const newPlaylistData = prevPlaylistData.filter(
          item => item.id != track.id
        )
      return newPlaylistData;
    })
  }

  function handleTitle(event) {
    setPlaylistTitle(event.target.value);
  }

  
  
  return (
    <div className="App">
      <SpotifyLogin 
      login={Authorize}/>
      <SearchBar 
      updateSearch={updateSearch}      
      searchSpotify={searchSpotify}/>
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
