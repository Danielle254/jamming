import React from "react"
import Tracklist from "../Tracklist/Tracklist"
import "./Playlist.css"

export default function Playlist(props) {


    return (
        <div className="playlist">
            <h2>Custom Playlist</h2>
            <input className="playlist--input" type="text" placeholder="Title Your New Playlist" />            
            <button type="button" className="playlist--button">Save to Spotify</button>
            <Tracklist 
            playlist={props.playlist}
            listType="playlist"
            removeFromList={props.removeFromList}
            /> 
        </div>
    )
}