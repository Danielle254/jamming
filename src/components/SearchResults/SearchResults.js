import React from "react"
import Tracklist from "../Tracklist/Tracklist"
import dataset from "../../data.js"



export default function SearchResults() {
    
    
    return (
        <div>
            <header>
                <h2>Search Results</h2>
                <Tracklist 
                
                dataset={dataset}
                buttonType="+"
                />
            </header>
            
        </div>
    )
}