import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import { Reset } from "./styles/GlobalStyeld";

ReactDom.render(
  <Provider store={store}>
    <Reset />
    <App />
  </Provider>,
  document.getElementById("root")
);
