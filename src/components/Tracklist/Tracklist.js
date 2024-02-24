import React from "react"
import Track from "../Track/Track"


export default function TrackList(props) {
  
  const dataset = props.dataset
  
  /* const [data, setData] = useState(dataset) */
    
  /* function changeList(id) { 
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

  } */
  

  const tracks = dataset.map(
          track => {
          
            return (
                  
              <Track
                key={track.id}
                id={track.id}
                title={track.name}
                artist={track.artist}
                album={track.album}
                buttonType={props.buttonType}
                
              />
        
              
                )
           
            })
      

  

  
  return (
    <div>
      {tracks}
    </div>
  )}

