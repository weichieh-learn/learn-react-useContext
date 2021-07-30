import React from 'react'

function Movie({name, price}) {
  

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
    </>
  )
}

export default Movie
