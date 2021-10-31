import React, { useState, useContext } from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieContext'

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext)

  return (
    <div className="movie-wrap">
        {/* <h1>{value}</h1> */}
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </div>
  )
}

export default MovieList
