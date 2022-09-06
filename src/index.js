import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { DataProvider } from "./context/DataProvider";
import { HashRouter } from "react-router-dom";
import { AppRouter } from "./routers/AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <DataProvider>
        <AppRouter />
      </DataProvider>
    </HashRouter>
  </React.StrictMode>
);
