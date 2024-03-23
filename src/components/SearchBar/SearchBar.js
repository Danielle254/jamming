import React from "react"
import "./SearchBar.css"

export default function SearchBar(props) {        

    return (
        <div className="searchbar">
            <h2>Step 2: Search for Songs</h2>
            <input 
            className="search--input" 
            type="text"
            onChange={props.updateSearch}
            value={props.searchInput} />
            <button 
            type="button" 
            className="search--button"
            onClick={props.searchSpotify} 
            >Search Spotify</button>            
        </div>
    )
}