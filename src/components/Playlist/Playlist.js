import React, { useState } from "react"
import Tracklist from "../Tracklist/Tracklist"
import "./Playlist.css"

export default function Playlist(props) {
    const [uriData, setUriData] = useState([
        "1xFKRN7Dx8KP8zdg7zs7XN",
        "0P9wLFurlgumLXuqFEpw52",
        "4nMUPQeTor23d8RxiiJO9W"
    ])

    function handleSubmit(event) {

    }

    return (
        <div className="playlist">
            <h2>Custom Playlist</h2>
            <input 
                className="playlist--input"
                onChange={props.handleTitle} 
                value={props.playlistTitle}
                type="text" 
                placeholder="Title Your New Playlist" />            
            <button 
                type="submit" 
                className="playlist--button"
                onChange={handleSubmit}
                >Save to Spotify</button>
            
            <Tracklist 
            playlist={props.playlist}
            listType="playlist"
            removeFromList={props.removeFromList}
            /> 
        </div>
    )
}