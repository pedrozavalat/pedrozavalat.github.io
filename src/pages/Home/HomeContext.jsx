import { createContext, useContext, useState, useEffect } from "react";

// Dark mode context
export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        document.documentElement.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    }

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    return useContext(DarkModeContext);
}