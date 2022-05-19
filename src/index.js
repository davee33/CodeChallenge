import React from "react";
import ReactDOM from "react-dom";
import { Time } from "./time.js";

ReactDOM.render(
  <div>
    <p> {Time()};</p>
  </div>,
  document.getElementById("app")
);
