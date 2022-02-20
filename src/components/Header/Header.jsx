import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../../context/FavoriteContext';

import "./Header.scss"

import ThemeContext from '../../context/ThemeContext';
import ThemeSwitcher from '../../context/ThemeSwicher';

const Header = ({user,logoutUser,loginUser}) => {
  const {theme}= useContext(ThemeContext);

  const{favoriteMovie} = useContext (FavoriteContext);
  const [isFavorite, setIsFavorite]= useState(false);

  const handleShowFavorites=()=>{
    setIsFavorite(!isFavorite);
  }


  
    return (
    <header className="header" style={{ background: theme.background, color: theme.foreground }} >
    <ThemeSwitcher/>

      <div className='link'>
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/search"><h3>Search Movies</h3></Link>
        <Link to="/favorite"><h3>Favorites Movies</h3></Link>
        <Link to="/about"><h3>About</h3></Link>
        
        </div>

      <div className='button-header'>
        <Link to="/profile">
        <button className='profile'>Profile</button>
        </Link>
        
        {user ?
        <span>
          Hello {user.name}! 
          <button className= "logout" onClick={()=>logoutUser()}>Logout</button>
        </span> :
        <Link to="/login"><button className='login' onClick={()=>loginUser()}>Login</button></Link>}
      </div>
    

    <button onClick={()=>handleShowFavorites()}>
        Favorito 
    </button> 
      
        {isFavorite&&
        <div>
          Favorito 
            <div>
              {favoriteMovie.map((favorite, index)=>(<img  key={index} src={favorite.Poster} alt={favorite.Poster}/> ))}
            </div>
        </div>
        
        }
      

    </header>
   
   
   )};

export default Header