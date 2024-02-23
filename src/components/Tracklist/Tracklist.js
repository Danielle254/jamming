import React, { useState } from "react"
import Track from "../Track/Track"
import dataset from "../../data.js"

export default function TrackList(props) {
  const listToRender = props.listType
  const newDataset = dataset.map(
    each => ({
      ...each,
      playlist: true
    })
  )
  
  const [data, setData] = useState(newDataset)
    
  /* function ChangeList() {
    const idToChange = 
    setData(prevData => {
      const newData = prevData.filter(
        each => ({
          ...each,
          playlist: true
        })
      )
      return newData
    })
  } */
  function isPlaylist(item) {
    return item.playlist == true
    }
  
  let customPlaylist = data.filter(isPlaylist)

  
  const playlistToDisplay = customPlaylist.map(
      track => {
        
        return (
              
          <Track
            key={track.id}
            title={track.name}
            artist={track.artist}
            album={track.album}
            playlist={track.playlist}
            buttonType="-"
            /* handleClick={ChangeList} */
          />
    
          
            )
       
        })
    
      
  const results = data.map(
          track => {
          
            return (
                  
              <Track
                key={track.id}
                title={track.name}
                artist={track.artist}
                album={track.album}
                playlist={track.playlist}
                buttonType="+"
                /* handleClick={ChangeList} */
              />
        
              
                )
           
            })
      

  

  
  
  if (listToRender === "playlist") {
    return (
        <div>
          {playlistToDisplay}
        </div>
    ) } else {
      return (
        <div>
          {results}
        </div>
    ) }
    }
