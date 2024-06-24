import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Search from "./components/Search/Search.jsx";
import Preview from "./components/Preview/Preview.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div className="flex flex-col gap-5 h-screen w-full justify-center items-center bg-dark-bg">
      <div>
        <Search />
        <Preview />
      </div>
    </div> */}
  </React.StrictMode>
);
