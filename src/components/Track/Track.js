import React from "react"
import "./Track.css"

export default function Track(props) {
    
    return (
        <div className="track">
            <p className="title">{props.title}</p>
            <p className="details">{props.artist}</p>
            <p className="details">{props.album}</p>
            <p>{props.playlist ? "true" : "false"}</p>
            <button onClick={() => props.changeList(props.id)} type="button" className="button">{props.buttonType}</button>
        </div>
    )
}