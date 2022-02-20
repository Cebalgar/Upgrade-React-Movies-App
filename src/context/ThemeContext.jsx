import React from "react";

export const themes = {
  light: {
    name: 'light',
    foreground: '#000000',
    background: 'white'
  },
  dark: {
    name: 'dark',
    foreground: '#ffffff',
    background: 'black'
  }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;