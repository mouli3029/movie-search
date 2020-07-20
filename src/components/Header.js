import React,{useState} from 'react'
import "./Header.css"
import MovieItem from "./MovieItem"

function Header() {
    const[input,setInput]= useState('');
    const[movies, setMovies]=useState([]);

    const handleChange = async(e) =>{
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=f7b6f060d7f742312965b57d828ce95f&language=en-US&query=${input}&page=1&include_adult=false`

        try{
        const response = await fetch(url)
        const data = await response.json();
        setMovies(data.results);
        }
        catch(err){
            console.error(err)
        }
    }

    return (
        <div className="header">
            <h1 className="header__title">Search your Favourite Movie</h1>
            <div className="header__main">
                <label className="label">Movie Name</label>
                <input
                className="header__main-input" 
                type="text"
                placeholder="Ex: Starwars"
                value = {input}
                onChange ={(e)=>setInput(e.target.value)}
                />
                <button
                className="main__header-button"
                 onClick ={handleChange} 
                 >Search</button>
            </div>

            <div className="card">
              {movies.filter(movie => movie.poster_path).map(movie => (
                   <MovieItem movie={movie} key={movie.id} />
                ))}
                
            </div>
        </div>
    )
}

export default Header
