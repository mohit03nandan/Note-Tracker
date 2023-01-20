import React from 'react'
const BookMarkCard = (props) => {

function link(props){
    window.open(props.pushData1, 'props.pushData1')
}

  return (
    <div >
     <div class="card"  >
       <div class="card-body" onClick={link}  >
       {/* <input class="form-control" type="text"  onMouseOver={link} value={props.pushData1} placeholder="Default input"/>  */}
       
       {props.pushData1}
      </div>
      
    </div>
  </div>
  )
}

export default BookMarkCard