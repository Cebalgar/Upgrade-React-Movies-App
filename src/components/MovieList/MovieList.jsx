import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../../context/FavoriteContext';

import "./MovieList.scss"


const MovieList = (props) => {
  const {favoriteMovie, setFavoriteMovie}=useContext(FavoriteContext)


    
    return (
      <>
 
    
    <div className='container'>
        {props.movies?.map((favorite)=>{
          return (
            <div key={favorite.imdbID}>

          <Link to={`movies/${favorite.imdbID}`}>
          <img src={favorite.Poster} alt= {favorite.name}/>
          </Link>

          <button onClick={()=> setFavoriteMovie([...favoriteMovie, favorite ])}>añadir</button>

          </div>

        )})}
    </div>
    </>


   
  
  )
}


export default MovieList;

 