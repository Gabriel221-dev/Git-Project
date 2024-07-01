import { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Preview from "./components/Preview/Preview";
import DarkAndLightBtn from "./components/DarkAndLightBtn/DarkAndLightBtn";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex flex-col gap-5 h-lvh max-w-full justify-center items-center bg-dark-gray bg-transparent">
          <div className={`App ${isDarkMode ? 'dark' : ''} min-h-screen flex flex-col items-center gap-5`}>
      <div className={`w-full p-5 ${isDarkMode ? 'bg-dark-background text-dark-text' : 'bg-light-background text-light-text'}`}>
        <button
          onClick={toggleTheme}
          className={`${isDarkMode ? 'bg-dark-primary text-dark-text' : 'bg-light-primary text-light-text'} p-2 rounded-md`}
        >
          Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
      <div>
        <Search setData={setData} setIsLoading={setIsLoading} />
      </div>
      <div>
        <Preview
          avatarUrl={data.avatar_url}
          blog={data.blog}
          email={data.email}
          followers={data.followers}
          following={data.following}
          location={data.location}
          login={data.login}
          name={data.name}
          public_repos={data.public_repos}
          twitter={data.twitter}
          isLoading={isLoading}
          bio={data.bio}
          joinedAt={data.created_at?.split("T")[0]}
        />
      </div>
    </div>
  );
}

export default App;
