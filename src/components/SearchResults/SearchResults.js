import React from "react"
import Tracklist from "../Tracklist/Tracklist"
import "./SearchResults.css"


export default function SearchResults(props) {
    
    
    return (
        <div>
            <header>
                <h2>Step 3: Add Songs to Your New Playlist</h2>
                <h3>Search Results</h3>
                <Tracklist 
                results={props.results}
                listType="resultsList"
                addToList={props.addToList}
                /> 
            </header>
            
        </div>
    )
}