import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

/* 
    NOTE: switch to ScrollToHashElement since react-router-hash-link does not officially support React Router v6 (although I had gotten it to work).
    source: https://github.com/ncoughlin/scroll-to-hash-element 
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
