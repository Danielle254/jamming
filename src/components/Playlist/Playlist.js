import React from "react"
import Tracklist from "../Tracklist/Tracklist"
import "./Playlist.css"

export default function Playlist(props) {
    

    /* function handleSubmit(event) {

    } */

    return (
        <div className="playlist">
            <h2>Step 4: Save Your New Playlist</h2>
            <input 
                className="playlist--input"
                onChange={props.handleTitle} 
                value={props.playlistTitle}
                type="text" 
                placeholder="Title Your New Playlist" />            
            <button 
                type="submit" 
                className="playlist--button"
                /* onChange={handleSubmit} */
                >Save to Spotify</button>
            
            <Tracklist 
            playlist={props.playlist}
            listType="playlist"
            removeFromList={props.removeFromList}
            /> 
        </div>
    )
}