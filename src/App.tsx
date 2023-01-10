import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import MainFeed from "./pages/MainFeed";
import Inbox from "./pages/Inbox";
import ProfilePage from "./pages/ProfilePage";
import ReelsPage from "./pages/ReelsPage";
import ExplorePage from "./pages/ExplorePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/feed" element={<MainFeed />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reels" element={<ReelsPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Routes>
    </div>
  );
}

export default App;
