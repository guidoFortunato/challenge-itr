import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvder } from "./context/DataProvder";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <DataProvder>
      <AppRouter />
    </DataProvder>
  </BrowserRouter>
  // </React.StrictMode>
);
