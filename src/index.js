import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import smoothScrollPolyfill from "smoothscroll-polyfill";

//hash routing via https://github.com/rafgraph/react-router-hash-link
//adapted from demo https://github.com/rafgraph/react-router-hash-link/tree/main/demo
// updated for react 18+ & react-router-dom 16+

//TODO: check if need this
smoothScrollPolyfill.polyfill();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
