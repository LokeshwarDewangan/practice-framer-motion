import { useEffect, useState } from "react";
import { Layout } from "./pages/Layout";
import FollowCursor from "./components/animation/FollowCursor";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import MasonryLayout from "./pages/Masonry/MasonryLayout";

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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="framer-motion"
          element={
            <Layout toggleThemeMode={toggleThemeMode} themeMode={themeMode} />
          }
        />
        <Route
          path="masonry"
          element={
            <MasonryLayout />
          }
        />

        {/* <FollowCursor /> */}
      </Routes>
    </>
  );
}

export default App;
