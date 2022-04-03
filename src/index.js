import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { EmailProvider } from "./contexts";

ReactDOM.render(
  <React.StrictMode>
    <EmailProvider>
      <App />
    </EmailProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
