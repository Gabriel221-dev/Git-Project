import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode className="flex flex-col gap-5 h-lvh max-w-full justify-center items-center bg-dark-bg bg-transparent">
    <App />
  </React.StrictMode>
);
