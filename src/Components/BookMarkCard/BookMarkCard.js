import React from "react";
import styles from "./BookMarkCard.module.css";

const BookMarkCard = (props) => {
  var LinkTab = props.pushData1;
  return (
    <div>
      <div
        class="card"
        style={{
          marginTop: "5px",
          marginRight: "15px",
          backgroundColor: "#F0F0F0",
        }}
      >
        <div class="card-body" className={styles.cardBody}>
          <div className="row">
            <div className="col-9">
              <a
                href={`//${LinkTab}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                {props.pushData1}{" "}
              </a>
            </div>

            <div className="col-3">{props.pushData2}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarkCard;
