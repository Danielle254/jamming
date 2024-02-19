import React from "react"
import Track from "../Track/Track"

export default function Playlist() {
    return (
        <div>
            <input type="text" placeholder="Title Your New Playlist" />
            <Track tracktitle="Song 1" trackartist="Artist 1" buttontype="-"/>
            <button type="button" className="button">Save to Spotify</button>
        </div>
    )
}