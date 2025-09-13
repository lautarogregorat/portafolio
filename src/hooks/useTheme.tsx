import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    // Check system preference if no saved theme
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || 'light';
    console.log('Initial theme:', initialTheme); // DEBUG
    setTheme(initialTheme);
    
    // Apply theme class to document
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    console.log('Applied class to documentElement:', initialTheme === 'dark' ? 'dark' : 'light'); // DEBUG
  }, []);

  useEffect(() => {
    // Update document class and localStorage when theme changes
    document.documentElement.classList.toggle('dark', theme === 'dark');
    console.log('Theme changed to:', theme, 'Dark class applied:', theme === 'dark'); // DEBUG
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};