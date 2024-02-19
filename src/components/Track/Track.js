import React from "react"

export default function Track(props) {
    return (
        <div className="track">
            <p className="track--title">{props.title}</p>
            <p className="track--details">{props.artist}</p>
            <p className="track--details">{props.album}</p>
            <button type="button" className="button">+</button>
        </div>
    )
}