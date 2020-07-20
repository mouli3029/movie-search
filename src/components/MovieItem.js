import React from 'react'
import "./MovieItem.css"

function MovieItem({movie}) {
    console.log(movie)
    
    return (
        <div className="movie__card">
            <img className="card--image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}/>
            <div className="movie-details">
                 <h1 className="card--title">{movie.title}</h1>
                 <p className="movie"><h3>ReleaseDate :</h3>{movie.release_date}</p>
                 <p className="movie"><h3>Overview    :</h3>{movie.overview}</p>
                 <p className="movie"><h3>AdultContent:</h3>{movie.adult?"Yes":"No"}</p>
                 <p className="movie"><h3>Popularity  :</h3>{movie.popularity}</p>
                
            </div>
            
             
            
        </div>
    )
}

export default MovieItem
