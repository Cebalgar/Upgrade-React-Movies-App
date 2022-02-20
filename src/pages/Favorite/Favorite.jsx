import React, {useState, useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';



const Favorite= () =>{
  const{favoriteMovie} = useContext (FavoriteContext);
  const [isFavorite]= useState(false);

/* const handleShowFavorites=()=>{
    setIsFavorite(!isFavorite);
  } */

return(
  <>

{isFavorite ?
<div>
{favoriteMovie.map((favorite, index)=>{
  return(
    
    <img key={index} src={favorite.Poster} alt= {favorite.Poster}/>
    
  )
})}
</div> : null}

</>



  );

};

export default Favorite;
