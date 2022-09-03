import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvder } from "./context/DataProvder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <DataProvder>
    <App />
  </DataProvder>
  // </React.StrictMode>
);
