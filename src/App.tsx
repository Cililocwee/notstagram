import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import MainFeed from "./pages/MainFeed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/feed" element={<MainFeed />} />
      </Routes>
    </div>
  );
}

export default App;
