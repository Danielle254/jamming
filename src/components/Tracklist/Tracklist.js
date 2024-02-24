import React, { useState } from "react"
import Track from "../Track/Track"
import dataset from "../../data.js"

const newDataset = dataset.map(
  each => ({
    ...each,
    playlist: false
  })
)

export default function TrackList(props) {
  const listToRender = props.listType
  
  const [data, setData] = useState(newDataset)
    
  function changeList(id) { 
    setData(prevData => {
      const newData = []
      for(let i = 0; i < prevData.length; i++) {
        const currentItem = prevData[i]
        if(currentItem.id === id) {
          const updatedItem = {
            ...currentItem,
            playlist: !currentItem.playlist
          }
          newData.push(updatedItem)
        } else {
          newData.push(currentItem)
        }
      }
      return newData
    })

  }
  
  let customPlaylist = data.filter(item => item.playlist === true)

  
  const playlistToDisplay = customPlaylist.map(
      track => {
        
        return (
              
          <Track
            key={track.id}
            id={track.id}
            title={track.name}
            artist={track.artist}
            album={track.album}
            playlist={track.playlist}
            buttonType="-"
            changeList={changeList}
          />
    
          
            )
       
        })
    
      
  const results = data.map(
          track => {
          
            return (
                  
              <Track
                key={track.id}
                id={track.id}
                title={track.name}
                artist={track.artist}
                album={track.album}
                playlist={track.playlist}
                buttonType="+"
                changeList={changeList}
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
