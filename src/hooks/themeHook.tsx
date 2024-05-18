import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.style.backgroundColor = "rgb(38, 38, 38)";
      }
      if (localTheme === "light") {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.backgroundColor = "#fff";
      }
    }
  }, [setTheme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    if (theme === "light") {
      document.documentElement.style.backgroundColor = "rgb(38, 38, 38)";
    } else {
      document.documentElement.style.backgroundColor = "#fff";
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
