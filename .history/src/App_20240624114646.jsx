import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Search from "./components/Search/Search.jsx";
import Preview from "./components/Preview/Preview.jsx";

function App() {
  const [count, setCount] = useState(0);

  return <Search />;
}

export default App;
