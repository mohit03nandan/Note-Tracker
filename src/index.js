import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import background from "../src/Components/Images/background.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center-center",
      backgroundAttachment: "fixed",
    }}
  >
    <App />
  </div>
);
