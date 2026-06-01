"use client";

import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme(); 

  return (
    <button
      className="btn btn-primary"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
    >
      {resolvedTheme === "dark" ? "☀️ Light" : "🌙 Dark"} 
    </button>
  );
};

export default ThemeToggle;