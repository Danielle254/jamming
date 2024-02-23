import React, {useState} from "react"
import Tracklist from "../Tracklist/Tracklist"

export default function Playlist() {
    return (
        <div>
            <input type="text" placeholder="Title Your New Playlist" />            
            <button type="button" className="button">Save to Spotify</button>
            <Tracklist 
            listType="playlist"
            />
        </div>
    )
}