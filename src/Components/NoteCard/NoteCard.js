import React from "react";
const NoteCard = (props) => {
  return (
    <div>
      <div
        class="card "
        style={{
          marginTop: "5px",
          marginRight: "15px",
          backgroundColor: "#F0F0F0",
        }}
      >
        <div class="card-body">
          <div className="row">
            <div className="col-9">{props.pushData1}</div>
            <div className="col-3">{props.pushData2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
