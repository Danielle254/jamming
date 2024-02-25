import React from "react"
import "./Track.css"

export default function Track(props) {
    const track = {
        title: props.title,
        artist: props.artist,
        album: props.album,
        id: props.id
    }
    
    return (
        <div className="track">
            <p className="title">{props.title}</p>
            <p className="details">{props.artist} | {props.album}</p>
            
            <button onClick={() => props.setterFunction(track)} type="button" className="track--button">{props.buttonType}</button>
        </div>
    )
}