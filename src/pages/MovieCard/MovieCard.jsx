import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import "./MovieCard.scss"



const API_KEY =  "9954f6a1";

const MovieCard = () => {
   
 
   
  const [selectedMovie, setSelectedMovie] = useState('');
  let {id} = useParams();
  
    useEffect(()=>{
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      
      .then (res=>res.json())
      .then((response)=>{
          setSelectedMovie(response)
       
      })
  
  
      },[id])


    return (
        <div className="detail-container">
          <div className="poster">
            {(<img src={selectedMovie.Poster} alt={selectedMovie.Title} />)}
          </div>
          <div className="info">
            <div className="field">
              <div className="label">
                <p className="title label-p">{selectedMovie.Title}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                <p className="label-p">{selectedMovie.Plot}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                Released: <p className="label-p">{selectedMovie.Released}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                Runtime: <p className="label-p">{selectedMovie.Runtime}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                Genre: <p className="label-p">{selectedMovie.Genre}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                IMDB Rating: <p className="label-p">{selectedMovie.imdbRating}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                Director(s): <p className="label-p">{selectedMovie.Director}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
                Writer(s): <p className="label-p">{selectedMovie.Writer}</p>
              </div>
            </div>
            <div className="field">
              <div className="label">
              Language(s): <p className="label-p">{selectedMovie.Language}</p>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default MovieCard