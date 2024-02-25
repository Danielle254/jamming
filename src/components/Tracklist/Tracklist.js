import React from "react"
import Track from "../Track/Track"
import "./Tracklist.css"


export default function TrackList(props) {
  const listType = props.listType
  const list = listType === "resultsList" ? props.results : props.playlist
  const buttonType = listType === "resultsList" ? "+" : "-"

  const setterFunction = listType === "resultsList" ? props.addToList : props.removeFromList
              
  const tracks = list.map(
          track => {
          
            return (
                  
              <Track
                key={track.id}
                id={track.id}
                title={track.title}
                artist={track.artist}
                album={track.album}
                buttonType={buttonType}
                setterFunction={setterFunction}
                
              />
                      
                )
           
            })
   
  
  return (
    <div>
      {tracks}
    </div>
  )}

