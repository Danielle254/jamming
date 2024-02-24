import React from "react"
import Tracklist from "../Tracklist/Tracklist"



export default function SearchResults(props) {
    
    
    return (
        <div>
            <header>
                <h2>Search Results</h2>
                
                <Tracklist 
                results={props.results}
                listType="resultsList"
                /> 
            </header>
            
        </div>
    )
}