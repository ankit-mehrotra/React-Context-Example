import React,{useContext} from 'react';
import {MovieContext} from './MovieContext';
import Movie from './Movie';
const MovieList = () => {
   const {movies} = useContext(MovieContext);
    return (
        <div>
            <h1>Movie List</h1>
           {movies.map(movie => <Movie {...movie}/>)}
        </div>
    )
}

export default MovieList