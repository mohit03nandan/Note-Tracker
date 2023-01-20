import React,{useState} from 'react'
import Note from '../../Note/Note'
import Bookmark from "../../Bookmark/Bookmark"
import styles from "./Home.module.css"
const Home = () => {



  const [view, setView] = useState(0);

console.log(view)


   function toggleNotes(){
    setView(0);
   }

   
   function toggleBookmark(e){
    setView(1);
   }
   
  const Pagination = (e) => {
    if (view === 0) {
        
      return <Note/>;
    } 
    else if (view === 1) {
    
      return <Bookmark/>;
    } 
  };


  return (
    <div class="card "  className={styles.main}>
       <div >
           <div class="row">
                 <div class="col-4">
                     <div className={styles.sidebar}>
                     <div class="card" className={styles.card1}>
                        <div  class="container">
                            <div class="row">
                                <div  class="col-3" >
                                <i class='far fa-edit' style={{color: "yellow" , fontSize:"38px"}} ></i>
                                </div>
                                <div  class="col-9" style={{color: "white"}}>
                                     Daily Note Tracker
                                    
                                </div>
                            </div>
                            </div>     
                    </div>
              
                   <div class="card" className={styles.card2}>
                        <div  class="container">
                            <div class="row">
                                <div  class="col-3" >
                                <button className="btn btn-outline-secondary rounded-circle" onClick={toggleNotes} >

                                
                                <i class='fas fa-file-alt' style={{color: "#806BFF" , fontSize:"38px"}} ></i>
                                </button>
                                </div>
                                <div  class="col-9" style={{color: "#806BFF"}}>
                                    Daily Notes
                                </div>
                            </div>
                            </div>     
                    </div>
                    
                    <div class="card" className={styles.card3}>
                        <div  class="container">
                            <div class="row">
                                <div  class="col-3" >
                                <button className="btn btn-outline-secondary rounded-circle"  onClick={toggleBookmark}>
                                <i class='fas fa-bookmark' style={{color: "#FF6B6B" , fontSize:"38px"}} ></i>
                                </button>
                                </div>
                                <div  class="col-9"  style={{color: "#FF6B6B"}}>
                                    Bookmark
                                </div>
                            </div>
                            </div>     
                    </div>
                  

                     </div>
                 </div>
                  <div class="col-8">
                  {Pagination()}
                  </div>
           </div>
      </div>
  </div>
  )
}

export default Home