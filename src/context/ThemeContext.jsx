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
  const [isBlueTheme, setIsBlueTheme] = useState(false);

  const toggleTheme = () => {
    setIsBlueTheme(!isBlueTheme);
  };

  const theme = {
    isBlueTheme,
    toggleTheme,
    colors: {
      primary: isBlueTheme ? 'blue' : 'orange',
      bg: {
        50: isBlueTheme ? 'bg-blue-50' : 'bg-orange-50',
        100: isBlueTheme ? 'bg-blue-100' : 'bg-orange-100',
        200: isBlueTheme ? 'bg-blue-200' : 'bg-orange-200',
        300: isBlueTheme ? 'bg-blue-300' : 'bg-orange-300',
        400: isBlueTheme ? 'bg-blue-400' : 'bg-orange-400',
        500: isBlueTheme ? 'bg-blue-500' : 'bg-orange-500',
        600: isBlueTheme ? 'bg-blue-600' : 'bg-orange-600',
        700: isBlueTheme ? 'bg-blue-700' : 'bg-orange-700',
        800: isBlueTheme ? 'bg-blue-800' : 'bg-orange-800',
        900: isBlueTheme ? 'bg-blue-900' : 'bg-orange-900',
      },
      text: {
        50: isBlueTheme ? 'text-blue-50' : 'text-orange-50',
        100: isBlueTheme ? 'text-blue-100' : 'text-orange-100',
        200: isBlueTheme ? 'text-blue-200' : 'text-orange-200',
        300: isBlueTheme ? 'text-blue-300' : 'text-orange-300',
        400: isBlueTheme ? 'text-blue-400' : 'text-orange-400',
        500: isBlueTheme ? 'text-blue-500' : 'text-orange-500',
        600: isBlueTheme ? 'text-blue-600' : 'text-orange-600',
        700: isBlueTheme ? 'text-blue-700' : 'text-orange-700',
        800: isBlueTheme ? 'text-blue-800' : 'text-orange-800',
        900: isBlueTheme ? 'text-blue-900' : 'text-orange-900',
      },
      fill: {
        50: isBlueTheme ? 'fill-blue-50' : 'fill-orange-50',
        100: isBlueTheme ? 'fill-blue-100' : 'fill-orange-100',
        200: isBlueTheme ? 'fill-blue-200' : 'fill-orange-200',
        300: isBlueTheme ? 'fill-blue-300' : 'fill-orange-300',
        400: isBlueTheme ? 'fill-blue-400' : 'fill-orange-400',
        500: isBlueTheme ? 'fill-blue-500' : 'fill-orange-500',
        600: isBlueTheme ? 'fill-blue-600' : 'fill-orange-600',
        700: isBlueTheme ? 'fill-blue-700' : 'fill-orange-700',
        800: isBlueTheme ? 'fill-blue-800' : 'fill-orange-800',
        900: isBlueTheme ? 'fill-blue-900' : 'fill-orange-900',
      },
      border: {
        50: isBlueTheme ? 'border-blue-50' : 'border-orange-50',
        100: isBlueTheme ? 'border-blue-100' : 'border-orange-100',
        200: isBlueTheme ? 'border-blue-200' : 'border-orange-200',
        300: isBlueTheme ? 'border-blue-300' : 'border-orange-300',
        400: isBlueTheme ? 'border-blue-400' : 'border-orange-400',
        500: isBlueTheme ? 'border-blue-500' : 'border-orange-500',
        600: isBlueTheme ? 'border-blue-600' : 'border-orange-600',
        700: isBlueTheme ? 'border-blue-700' : 'border-orange-700',
        800: isBlueTheme ? 'border-blue-800' : 'border-orange-800',
        900: isBlueTheme ? 'border-blue-900' : 'border-orange-900',
      },
      hover: {
        300: isBlueTheme ? 'hover:text-blue-300' : 'hover:text-orange-300',
        500: isBlueTheme ? 'hover:text-blue-500' : 'hover:text-orange-500',
        900: isBlueTheme ? 'hover:text-blue-900' : 'hover:text-orange-900',
      }
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}; 