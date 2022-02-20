import React, {useState} from 'react';

export const FavoriteContext = React.createContext();

const FavoriteProvider = ({ children }) => {
   
    const [favoriteMovie, setFavoriteMovie] = useState([]);

  

    const favorites={
        favoriteMovie,
        setFavoriteMovie,
       
    }

  return (
    <FavoriteContext.Provider value={favorites}>
        {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider
  