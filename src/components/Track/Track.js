import React, { useState } from "react"
import "./Track.css"

export default function Track(props) {
    const [listType, setListType] = useState(props.listType)
    
    function ChangeList() {
        setListType(prevListType => prevListType === "resultsList" ? "playList" : "resultsList")
    }


    return (
        <div className="track">
            <p className="title">{props.title}</p>
            <p className="details">{props.artist}</p>
            <p className="details">{props.album}</p>
            <button onClick={ChangeList} type="button" className="button">{listType === "resultsList" ? "+" : "-"}</button>
        </div>
    )
}