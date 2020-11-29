import React from "react";
import ReactDOM from "react-dom";

// Libraries
import { Provider } from "react-redux";
import store from "./store";

// Main Page
import Main from "./main/index";

// Global Styles
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
