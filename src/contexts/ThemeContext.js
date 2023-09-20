import { createContext, useContext, useEffect, useRef, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    const mediaQuery = useRef(null);
    const changeTheme = (e) => setTheme(e.matches ? 'dark' : 'light');

    useEffect(() => {
        // first check if the user has explicitly set a theme
        const preference = localStorage.getItem('theme');
        if (preference) {
            setTheme(preference.toLowerCase());
        } else {
            // otherwise check the system preference, add listener for dynamic systems
            mediaQuery.current = window.matchMedia('(prefers-color-scheme: dark)');
            // initial set
            changeTheme(mediaQuery.current);
            // Listener for changes
            mediaQuery.current.addEventListener('change', changeTheme);
        }
        return () => {
            if (mediaQuery.current) mediaQuery.current.removeEventListener('change', changeTheme);
        }
    }, []);

    useEffect(() => {
        // Update the class list of the body based on the current theme
        // Since <body> element is not in React's scope, we'll manipulate it directly, sorry React
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }, [theme]);

    function setThemePreference(theme) {
        // set user preference in local storage to persist between visits
        localStorage.setItem('theme', theme);
        setTheme(theme);
        // make sure to remove the dynamic system preference listener if it exists
        if (mediaQuery.current) {
            mediaQuery.current.removeEventListener('change', changeTheme);
            mediaQuery.current = null;
        }
    }

    const value = {
        theme,
        setThemePreference,
    };
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}