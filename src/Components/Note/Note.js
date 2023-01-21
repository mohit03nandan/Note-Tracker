import React, { useState, useEffect } from "react";
import NoteCard from "../NoteCard/NoteCard";
import Styles from "./Note.module.css";

const getlocalData = () => {
  let data = localStorage.getItem("addData");
  if (data) {
    return JSON.parse(localStorage.getItem("addData"));
  } else {
    return [];
  }
};

const Note = () => {
  const [note, setNote] = useState("");
  const [addData, setAddData] = useState(getlocalData());

  const noteChange = (e) => {
    setNote(e.target.value);
  };

  var d = new Date();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setAddData((notes) => {
        return [
          ...notes,
          {
            note: note,
            id:
              d.getDate() +
              "-" +
              (d.getMonth() + 1) +
              "-" +
              d.getFullYear() +
              " " +
              d.getHours() +
              ":" +
              d.getMinutes(),
          },
        ];
      });
    }
  };

  function submitNote(e) {
    e.preventDefault();
    setAddData((notes) => {
      return [
        ...notes,
        {
          note: note,
          id:
            d.getDate() +
            "-" +
            (d.getMonth() + 1) +
            "-" +
            d.getFullYear() +
            " " +
            d.getHours() +
            ":" +
            d.getMinutes(),
        },
      ];
    });
  }

  useEffect(() => {
    localStorage.setItem("addData", JSON.stringify(addData));
  }, [addData]);

  return (
    <div>
      <div className={Styles.card}>
        {addData.map((val, index) => {
          return <NoteCard pushData1={val.note} pushData2={val.id} />;
        })}
      </div>

      <div className={Styles.formControl}>
        <div
          class="row"
          style={{
            height: "60px",
            backgroundColor: " #FFFFFF",
            marginRight: "10px",
            paddingTop: "10px",
            borderRadius: "9.16667px",
            marginBottom: "10px",
          }}
        >
          <div class="col-10">
            {/* <div class="card"> */}
            <input
              class="form-control"
              type="text"
              name="note"
              value={note}
              placeholder="Type a daily notes..."
              onChange={noteChange}
              onKeyDown={handleKeyDown}
              style={{ background: "#E1E1E1", borderRadius: "9.16667px" }}
            />
            {/* </div> */}
          </div>
          <div class="col-1">
            <button class="btn btn-success" onClick={submitNote}>
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

export default Note;
