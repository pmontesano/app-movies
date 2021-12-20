import React from "react";
import ReactDom from "react-dom";
import "../styles/main.scss";

import App from "../index";

const preloadedState = window._PRELOADED_STATE;

ReactDom.hydrate(<App {...preloadedState} />, document.getElementById("root"));
