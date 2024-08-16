import { useEffect, useState } from "react";
import { Layout } from "./pages/Layout";

function App() {
  const [themeMode, setThemeMode] = useState<string>("dark");

  const toggleThemeMode = (): void => {
    const changedTheme = themeMode === "dark" ? "light" : "dark";
    setThemeMode(changedTheme);
    localStorage.setItem("theme", changedTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(changedTheme);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.body.classList.add(theme);
      setThemeMode(theme);
      return;
    }
    document.body.classList.remove("dark", "light");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <>
      <h2 className="text-center mt-4 font-bold text-2xl gradient-text">
        Framer Motion Animation
      </h2>
      <Layout toggleThemeMode={toggleThemeMode} themeMode={themeMode} />
    </>
  );
}

export default App;
