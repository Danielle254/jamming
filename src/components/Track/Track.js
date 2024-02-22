import React, { useState } from "react"
import "./Track.css"

export default function Track(props) {
    const [buttonValue, setButtonValue] = useState(true)

    function ChangeButton() {
        setButtonValue(prevButtonValue => !prevButtonValue)
    }
    
    
    return (
        <div className="track">
            <p className="title">{props.title}</p>
            <p className="details">{props.artist}</p>
            <p className="details">{props.album}</p>
            <p>{props.listType}</p>
            <button onClick={ChangeButton} type="button" className="button">{buttonValue ? "+" : "-"}</button>
        </div>
    )
}