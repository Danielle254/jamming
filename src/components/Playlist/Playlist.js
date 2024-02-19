import React from "react"


export default function Playlist() {
    return (
        <div>
            <input type="text" placeholder="Title Your New Playlist" />
            
            <button type="button" className="button">Save to Spotify</button>
        </div>
    )
}