import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const LogIn = lazy(() => import("./pages/LogIn"));
const MainFeed = lazy(() => import("./pages/MainFeed"));
const Inbox = lazy(() => import("./pages/Inbox"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const ReelsPage = lazy(() => import("./pages/ReelsPage"));
const ExplorePage = lazy(() => import("./pages/ExplorePage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/feed" element={<MainFeed />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
