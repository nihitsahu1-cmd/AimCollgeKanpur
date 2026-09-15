import "./App.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Popup from "./components/Popup";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("aimcollege-theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("aimcollege-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((current) => !current);

  return (
    <div className="app-shell">
      {/* Admission Popup */}
      <Popup />

      {/* Website Routes */}
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />}
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />}
        />

        {/* Other URLs */}
        <Route
          path="*"
          element={<Home isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />}
        />

      </Routes>
    </div>
  );
}

export default App;