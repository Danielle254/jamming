import React from "react"
import Track from "../Track/Track"

export default function SearchResults() {
    return (
        <div>
            <header>
                <h2>Search Results</h2>
            </header>
            <Track 
            tracktitle="Song 2" 
            trackartist="Artist 2" 
            buttontype="+"
            />
        </div>
    )
}