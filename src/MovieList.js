import React, { useState, useContext } from 'react'
import Movie from './Movie'
import {MovieContext} from './MovieContext'

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext)

  return (
    <>
        {/* <h1>{value}</h1> */}
      {movies.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </>
  )
}

export default MovieList
