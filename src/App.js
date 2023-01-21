import React from "react";
import styles from "./App.module.css";

import Home from "./Components/Page/Home/Home";
const App = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};

export default App;
