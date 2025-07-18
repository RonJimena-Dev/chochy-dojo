import React, { useEffect, useState } from "react";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  // Default to dark
  return "dark";
};

const DarkModeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    // On mount, sync with localStorage
    setTheme(getInitialTheme());
  }, []);

  return (
    <button
      aria-label="Toggle dark mode"
      type="button"
      className="ml-2 px-2 py-1 rounded-full bg-zinc-600 hover:bg-zinc-500 text-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
