import React from 'react'
const NoteCard = (props) => {
  return (
    <div >
     <div class="card"  >
       <div class="card-body" >
       <input class="form-control" type="text"  value={props.pushData1} placeholder="Default input"/> 
      </div>
      
    </div>
  </div>
  )
}

export default NoteCard