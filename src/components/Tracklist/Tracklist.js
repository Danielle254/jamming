import React from "react"
import Track from "../Track/Track"


export default function TrackList(props) {
  
  
  /* want to pass the appropriate function for Track to render based off of listType
      addToList={props.addToList} 
      removeFromList={props.removeFromList} 
  const setterFunction = props.listType === "resultsList" ? props.addToList : props.removeFromList
              */
  const tracks = props.results.map(
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

