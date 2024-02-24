import React, { useState } from "react"
import Tracklist from "../Tracklist/Tracklist"


export default function Playlist() {
    const [playlistData, setPlaylistData] = useState([])
    
    function addToList(track) { 
        setPlaylistData(prevPlaylistData => {
        const newPlaylistData = []
        const id = track.id
        if (prevPlaylistData.length > 0) {
            for(let i = 0; i < prevPlaylistData.length; i++) {
                const currentItem = prevPlaylistData[i]
                if(currentItem.id != id) {
                
                newPlaylistData.push(track)
                } 
            }
            return newPlaylistData
        } 
        else {
            newPlaylistData.push(track)
        }
        })
    }

    return (
        <div>
            <input type="text" placeholder="Title Your New Playlist" />            
            <button type="button" className="button">Save to Spotify</button>
            {/* <Tracklist 
            dataset={playlistData}
            listType="playlist"
            addToList={addToList}
            /> */}
        </div>
    )
}