import { createContext, useContext, useState, useEffect, ReactNode, FC } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

// Create a context with a default value
const ThemeContext = createContext({
  isDarkMode: false, // Default is light mode
  toggleTheme: () => {} // Placeholder function
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode); // Toggle the boolean state
  };

  // Effect to add or remove the dark class based on isDarkMode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);