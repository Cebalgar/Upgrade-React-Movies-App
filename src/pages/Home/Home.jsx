import React, { useContext } from 'react';
import './Home.scss'

import ThemeContext from '../../context/ThemeContext';


const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className= "home">
    <h1 style={{ background: theme.background, color: theme.foreground }}>Search the information of your favorite movies</h1>
    </div>
  );
}

export default Home;