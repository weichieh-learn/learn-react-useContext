import React from 'react'

function Movie({name, price}) {
  

  return (
    <div className="movie">
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

export default Movie
