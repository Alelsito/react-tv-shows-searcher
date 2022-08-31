import React from 'react'

const Card = ({ image, name }) => {
  return (
    <img src={image?.original} className='card-image' alt={name} />
  )
}

export default Card
