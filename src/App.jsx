import { useEffect, useState } from "react";
import Home from "./pages/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("aim-clinic-theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("aim-clinic-theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Home
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode((current) => !current)}
      />
    </div>
  );
}

export default App;