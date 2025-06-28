import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('orange');

  const toggleTheme = () => {
    const themes = ['orange', 'blue', 'purple'];
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  const getThemeColors = (theme) => {
    switch (theme) {
      case 'blue':
        return {
          primary: 'blue',
          bg: {
            50: 'bg-blue-50',
            100: 'bg-blue-100',
            200: 'bg-blue-200',
            300: 'bg-blue-300',
            400: 'bg-blue-400',
            500: 'bg-blue-500',
            600: 'bg-blue-600',
            700: 'bg-blue-700',
            800: 'bg-blue-800',
            900: 'bg-blue-900',
          },
          text: {
            50: 'text-blue-50',
            100: 'text-blue-100',
            200: 'text-blue-200',
            300: 'text-blue-300',
            400: 'text-blue-400',
            500: 'text-blue-500',
            600: 'text-blue-600',
            700: 'text-blue-700',
            800: 'text-blue-800',
            900: 'text-blue-900',
          },
          fill: {
            50: 'fill-blue-50',
            100: 'fill-blue-100',
            200: 'fill-blue-200',
            300: 'fill-blue-300',
            400: 'fill-blue-400',
            500: 'fill-blue-500',
            600: 'fill-blue-600',
            700: 'fill-blue-700',
            800: 'fill-blue-800',
            900: 'fill-blue-900',
          },
          border: {
            50: 'border-blue-50',
            100: 'border-blue-100',
            200: 'border-blue-200',
            300: 'border-blue-300',
            400: 'border-blue-400',
            500: 'border-blue-500',
            600: 'border-blue-600',
            700: 'border-blue-700',
            800: 'border-blue-800',
            900: 'border-blue-900',
          },
          hover: {
            300: 'hover:text-blue-300',
            500: 'hover:text-blue-500',
            900: 'hover:text-blue-900',
          }
        };
      case 'purple':
        return {
          primary: 'purple',
          bg: {
            50: 'bg-purple-50',
            100: 'bg-purple-100',
            200: 'bg-purple-200',
            300: 'bg-purple-300',
            400: 'bg-purple-400',
            500: 'bg-purple-500',
            600: 'bg-purple-600',
            700: 'bg-purple-700',
            800: 'bg-purple-800',
            900: 'bg-purple-900',
          },
          text: {
            50: 'text-purple-50',
            100: 'text-purple-100',
            200: 'text-purple-200',
            300: 'text-purple-300',
            400: 'text-purple-400',
            500: 'text-purple-500',
            600: 'text-purple-600',
            700: 'text-purple-700',
            800: 'text-purple-800',
            900: 'text-purple-900',
          },
          fill: {
            50: 'fill-purple-50',
            100: 'fill-purple-100',
            200: 'fill-purple-200',
            300: 'fill-purple-300',
            400: 'fill-purple-400',
            500: 'fill-purple-500',
            600: 'fill-purple-600',
            700: 'fill-purple-700',
            800: 'fill-purple-800',
            900: 'fill-purple-900',
          },
          border: {
            50: 'border-purple-50',
            100: 'border-purple-100',
            200: 'border-purple-200',
            300: 'border-purple-300',
            400: 'border-purple-400',
            500: 'border-purple-500',
            600: 'border-purple-600',
            700: 'border-purple-700',
            800: 'border-purple-800',
            900: 'border-purple-900',
          },
          hover: {
            300: 'hover:text-purple-300',
            500: 'hover:text-purple-500',
            900: 'hover:text-purple-900',
          }
        };
      default: // orange
        return {
          primary: 'orange',
          bg: {
            50: 'bg-orange-50',
            100: 'bg-orange-100',
            200: 'bg-orange-200',
            300: 'bg-orange-300',
            400: 'bg-orange-400',
            500: 'bg-orange-500',
            600: 'bg-orange-600',
            700: 'bg-orange-700',
            800: 'bg-orange-800',
            900: 'bg-orange-900',
          },
          text: {
            50: 'text-orange-50',
            100: 'text-orange-100',
            200: 'text-orange-200',
            300: 'text-orange-300',
            400: 'text-orange-400',
            500: 'text-orange-500',
            600: 'text-orange-600',
            700: 'text-orange-700',
            800: 'text-orange-800',
            900: 'text-orange-900',
          },
          fill: {
            50: 'fill-orange-50',
            100: 'fill-orange-100',
            200: 'fill-orange-200',
            300: 'fill-orange-300',
            400: 'fill-orange-400',
            500: 'fill-orange-500',
            600: 'fill-orange-600',
            700: 'fill-orange-700',
            800: 'fill-orange-800',
            900: 'fill-orange-900',
          },
          border: {
            50: 'border-orange-50',
            100: 'border-orange-100',
            200: 'border-orange-200',
            300: 'border-orange-300',
            400: 'border-orange-400',
            500: 'border-orange-500',
            600: 'border-orange-600',
            700: 'border-orange-700',
            800: 'border-orange-800',
            900: 'border-orange-900',
          },
          hover: {
            300: 'hover:text-orange-300',
            500: 'hover:text-orange-500',
            900: 'hover:text-orange-900',
          }
        };
    }
  };

  const theme = {
    currentTheme,
    toggleTheme,
    colors: getThemeColors(currentTheme),
    // Keep backward compatibility
    isBlueTheme: currentTheme === 'blue',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}; 