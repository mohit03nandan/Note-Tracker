import React from 'react'
import styles from "./BookMarkCard.module.css"
const BookMarkCard = (props) => {

    var LinkTab = props.pushData1
    console.log("link",LinkTab)



  return (
    <div >
     <div class="card"  >
       <div class="card-body" className={styles.cardBody} >
       <a href={`//${LinkTab}`} target="_blank" rel="noopener noreferrer">
       <h3> {props.pushData1}</h3>
      </a>
      </div>
      
    </div>
  </div>
  )
}

export default BookMarkCard