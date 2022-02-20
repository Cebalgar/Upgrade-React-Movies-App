

import React, {useState} from 'react';
import "./App.scss"
import {Routes,Route,useNavigate} from "react-router-dom";
import GlobalStyle from './theme/global';
import ThemeContext, {themes} from './context/ThemeContext';


import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import SearchMovie from "./pages/SearchMovie/SearchMovie";
import MovieCard from './pages/MovieCard/MovieCard';
import MovieList from './components/MovieList/MovieList';
import About from './pages/About/About';
import Profile from './components/Profile/Profile';
import LoginForm from './components/LoginForm/LoginForm';
import AuthRoute from './routes/AuthRoute';
import Favorite from './pages/Favorite/Favorite'


const userMockArray = [
  { email: 'celia@ballesteros.es', password: '123456', name: 'Celia' },
  { email: 'elena@ballesteros.es', password: '44108', name: 'Elena' },
]


function App() {

 const navigate = useNavigate();
 const [theme, setTheme] = useState(themes.light);

  const [movies, setMovies]=useState([]);

  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  const loginUser = (formData, prevRoute) => {
    const existsUser = userMockArray.find(el => el.password === formData?.password && el.email === formData?.email);

    if (existsUser) {
      setUser(existsUser);
      setLoginError('');
      navigate(prevRoute || '/search');
    } else {
      setUser(false);
      setLoginError('No existe el usuario o la contraseña no coincide');
    }
  };

  const logoutUser = () => {
    setUser(null);
  };

  const changeTheme = () => {
    setTheme(() => {
      return theme === themes.dark ? themes.light : themes.dark;
    });
  };
  
 
  
  return (
    <div className='App'>
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <GlobalStyle/>
      
  
    <Header user={user} logoutUser={logoutUser} loginUser={loginUser}/>
    
      <Routes>
        <Route exact path= "/" element= {<Home/>}/>
        <Route path= "/search" element= { <SearchMovie user={user} setMovies= {setMovies}/>}/>
        <Route path= "movies/:id" element= {<MovieCard/>}/>
        <Route path= "/favorite" element= {<Favorite/>}/>
        <Route path= "/about" element= {<About/>}/>
        <Route path="/profile" element={<AuthRoute user={user} component={<Profile user={user} />} />}/>
        <Route path="/login" element={<LoginForm loginUser={loginUser} loginError={loginError} />} />
        <Route path="*" element={<h4>404 Not Found</h4>} />
     </Routes>
     </ThemeContext.Provider>
     <MovieList movies= {movies}/ >
    
   
    </div>
  );
}

export default App;
