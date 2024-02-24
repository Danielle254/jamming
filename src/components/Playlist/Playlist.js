import React from "react"
import Tracklist from "../Tracklist/Tracklist"


export default function Playlist(props) {


    return (
        <div>
            <input type="text" placeholder="Title Your New Playlist" />            
            <button type="button" className="button">Save to Spotify</button>
            <Tracklist 
            playlist={props.playlist}
            listType="playlist"
            removeFromList={props.removeFromList}
            /> 
        </div>
    )
}