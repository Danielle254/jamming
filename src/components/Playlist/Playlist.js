import React from "react"
import Tracklist from "../Tracklist/Tracklist"
import data from "../../data2"

export default function Playlist() {
    let playlistTracks = data
    
    return (
        <div>
            <input type="text" placeholder="Title Your New Playlist" />            
            <button type="button" className="button">Save to Spotify</button>
            <Tracklist 
            dataset={playlistTracks}
            buttonType="-"
            />
        </div>
    )
}