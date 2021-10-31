import React, {useContext} from 'react'
import { MovieContext } from './MovieContext'

function Nav() {
    const [movies, setMovies] = useContext(MovieContext)
  

  return (
    <>
    <nav>
      <h3 className="navTitle">Jessica App</h3>
      <p className="navInfo">List of Movies: {movies.length}</p>
    </nav>
    </>
  )
}

export default Nav
