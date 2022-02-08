import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";

ReactDom.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
