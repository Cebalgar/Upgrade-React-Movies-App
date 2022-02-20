import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import FavoriteProvider from './context/FavoriteContext'


import App from './App';



ReactDOM.render(
  <React.StrictMode>
 
 <Router>
 <FavoriteProvider>
    <App />
    </FavoriteProvider>
  </Router>
 
  </React.StrictMode>,
  document.getElementById('root')
);

