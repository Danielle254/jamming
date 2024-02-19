import React from "react"

export default function Track(props) {
    return (
        <div>
            <p className="track--title">{props.tracktitle}</p>
            <p className="track--details">{props.trackartist}</p>
            <p className="track--details">{props.trackalbum}</p>
            <button type="button" className="button">{props.buttontype}</button>
        </div>
    )
}