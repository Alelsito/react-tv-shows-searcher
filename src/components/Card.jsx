import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ image, name, id }) => {
  return (
    <Link to={`/pelicula/${id}`}>
      <img src={image?.original} className='card-image' alt={name} />
    </Link>
  )
}

export default Card
