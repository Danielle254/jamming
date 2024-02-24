import React from "react"
import Track from "../Track/Track"


export default function TrackList(props) {
  const listType = props.listType
  const list = listType === "resultsList" ? props.results : props.playlist
  
  /* want to pass the appropriate function for Track to render based off of listType
      addToList={props.addToList} 
      removeFromList={props.removeFromList} 
  const setterFunction = props.listType === "resultsList" ? props.addToList : props.removeFromList
              */
  const tracks = list.map(
          track => {
          
            return (
                  
              <Track
                key={track.id}
                id={track.id}
                title={track.name}
                artist={track.artist}
                album={track.album}
                buttonType={props.listType === "resultsList" ? "+" : "-"}
                /* setterFunction={setterFunction} */
                
              />
                      
                )
           
            })
   
  
  return (
    <div>
      {tracks}
    </div>
  )}

