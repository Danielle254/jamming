import React from "react"
import Tracklist from "../Tracklist/Tracklist"
import "./SearchResults.css"


export default function SearchResults(props) {
    
    
    return (
        <div>
            <header>
                <h2>Search Results</h2>
                
                <Tracklist 
                results={props.results}
                listType="resultsList"
                addToList={props.addToList}
                /> 
            </header>
            
        </div>
    )
}