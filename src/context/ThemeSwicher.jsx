import React, { useContext } from 'react';

import ThemeContext from './ThemeContext';


const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const IconLight = process.env.PUBLIC_URL + '/images/light.png';
  const IconDark = process.env.PUBLIC_URL + '/images/dark.png';

  return (
    <span
      onClick={() => changeTheme(theme.name === "dark" ? "light" : "dark")}
      className="button-theme"
    >
      <img src={theme.name === "light" ? IconLight : IconDark} className="theme-icon" alt="theme" width="60px" height="60px"/>
    </span>
  )
}

export default ThemeSwitcher;