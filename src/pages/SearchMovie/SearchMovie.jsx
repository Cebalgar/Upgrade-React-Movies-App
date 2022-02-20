import React, {useState, useEffect} from 'react'



import "./SearchMovie.scss"


const SearchMovie = (props) => {


    const [searchMovies, setSearchMovies]=useState("");
    const [isLoaded, setIsloaded]= useState(false);

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?s=${searchMovies}&apikey=9954f6a1`)
     
        .then(res=> res.json())
        .then((response)=>{
           props.setMovies(response.Search)

            setIsloaded(true);

        })
    },[searchMovies,props]);

  
  if (!isLoaded){
      return <div>Loading...</div>
  }else


  return (
    <div className='container'>

    <input className='search' value={searchMovies} onChange={(e)=>setSearchMovies(e.target.value)} placeholder="Search the Movie" />
    
    </div>

    

  );
};





export default SearchMovie;



