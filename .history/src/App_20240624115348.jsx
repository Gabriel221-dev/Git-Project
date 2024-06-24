import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search/Search.jsx";
import Preview from "./components/Preview/Preview.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col gap-5 h-screen w-full justify-center items-center bg-dark-bg">
      <div>
        <Search />
      </div>
      <div>
        <Preview />
      </div>
    </div>
  );
}

export default App;
