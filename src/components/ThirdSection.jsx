import React from 'react'

const ThirdSection = ({ cast }) => {
  console.log(cast)
  return (
    <>
      <img
        src={
            cast.character.image !== null
              ? cast.character.image.original
              : cast.person.image.original
        }
        className='card-img-top' alt='...'
      />
      <div className='card-body'>
        <h5 className='card-title'>{cast.person.name}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>as {cast.character.name}</h6>
      </div>
    </>
  )
}

export default ThirdSection
