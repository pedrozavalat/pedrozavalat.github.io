import { createContext, useContext, useState, useEffect } from "react";
import { PROJECTS } from "./elements/constants";
// Dark mode context
export const DarkModeContext = createContext();

function preloadImage(src) {
  const image = new Image();
  image.src = src;
  return image.decode?.().catch(() => {});
}

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", darkMode);
    
  }, [darkMode]);

  useEffect(() => {
    PROJECTS.forEach((project) => {
      preloadImage(project.icon.light);
      preloadImage(project.icon.dark);
    });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
