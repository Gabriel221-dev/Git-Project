import { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Preview from "./components/Preview/Preview";
import DarkAndLightBtn from "./components/DarkAndLightBtn/DarkAndLightBtn";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col h-screen w-full justify-center items-center bg-dark-bg">
      <div>
        <DarkAndLightBtn />
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