import React from "react"
import "./Track.css"

export default function Track(props) {
    const track = {
        title: props.title,
        artist: props.artist,
        album: props.album,
        id: props.id
    }
    const listType = props.listType
    const buttonType = listType === "resultsList" ? "+" : "-"
    /* const onClickFunction = props.listType === "resultsList" ? props.addToList(track) : props.removeFromList(track) */

    return (
        <div className="track">
            <p className="title">{props.title}</p>
            <p className="details">{props.artist}</p>
            <p className="details">{props.album}</p>
            <button /* onClick={() => props.setterFunction(track)} */ type="button" className="button">{props.buttonType}</button>
        </div>
    )
}