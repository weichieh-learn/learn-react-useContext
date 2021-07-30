import React, {useState, createContext} from 'react'
import MovieList from './MovieList'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
          name: 'Harry Potter',
          price: '$10',
          id: 23456,
        },
        {
          name: 'Game of Thrones',
          price: '$10',
          id: 2345556,
        },
        {
          name: 'Inception',
          price: '$10',
          id: 2773456,
        },
      ])
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}