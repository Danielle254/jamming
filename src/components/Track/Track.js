import React from "react"
import "./Track.css"

export default function Track(props) {
    const track = {
        name: props.name,
        artist: props.artist,
        album: props.album,
        id: props.id,
        uri: props.uri
    }
    
    return (
        <div className="track">
            <p className="title">{props.name}</p>
            <p className="details">{props.artist} | {props.album}</p>                    
            <button onClick={() => props.setterFunction(track)} type="button" className="track--button">{props.buttonType}</button>
        </div>
    )
}