import React,{useState , useEffect} from "react";
import BookMarkCard from "../BookMarkCard/BookMarkCard";
import Styles from "./Bookmark.module.css";




const getlocalBookMark = () =>{
  let bookMark = localStorage.getItem("addBookMark");
  if(bookMark){
    return JSON.parse(localStorage.getItem('addBookMark'));
  }
  else{
     return [];
  }
}


const Bookmark = () => {
const [Bookmark, setBookmark] = useState("")
const [addBookMark, setaddBookMark] = useState(getlocalBookMark())


const BookMarkChange = (e) => {
  setBookmark(e.target.value)
}

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    setaddBookMark((notes)=>{
      return(
        [...notes,  Bookmark]
      )
    })
  }
}

function submitNote(e){
  e.preventDefault();
  setaddBookMark((bookmarks)=>{
    return(
      [...bookmarks,  Bookmark]
    )
  })

}


useEffect(() => {
 
  localStorage.setItem('addBookMark', JSON.stringify(addBookMark));

}, [addBookMark]);

  return (
    <div>
      <div className={Styles.card}>
      {addBookMark.map((val,index)=>{
       
          return <BookMarkCard
                pushData1 = {val}
          />
          
        })}
      
      </div>

      <div className={Styles.formControl}>
        <div class="row">
          <div class="col-10">
            <input
              class="form-control"
              type="text"
              name="note"
              value={Bookmark}
              placeholder="Type a daily BookMark..."
              onChange={BookMarkChange}
              onKeyDown={handleKeyDown}

            />
          </div>
          <div class="col-1">
            <button class="btn btn-success" onClick={submitNote} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="20"
                fill="currentColor"
                class="bi bi-send"
                viewBox="0 0 16 16"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default Bookmark;