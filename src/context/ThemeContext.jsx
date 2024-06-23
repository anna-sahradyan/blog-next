"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
        const root = document.documentElement;
        if (theme === "light") {
            root.style.setProperty("--bg", "#F0F8FF");
            root.style.setProperty("--textColor", "black");
        } else {
            root.style.setProperty("--bg", "#0f172a");
            root.style.setProperty("--textColor", "#ddd");

        }
    }, [theme])
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
