import { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

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
          <Route path="/" element={<MainFeed />} />
          {/* <Route path="/feed" element={<MainFeed />} /> */}
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reels" element={<ReelsPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/*" element={<div>404: Page not found</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
