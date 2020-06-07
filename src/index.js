import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("RootApp");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
