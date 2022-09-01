import React from 'react'

const ThirdSection = ({ cast }) => {
  return (
    <>
      <div className='col-9'>
        <img
          src={cast.character.image === null ? (cast.person.image === null ? <> </> : cast.person.image.original) : cast.character.image.original}
          className='card-img-top' alt='...' style={{ height: '15rem' }}
        />
      </div>
      <div className='card-body col-3'>
        <h5 className='card-title'>{cast.person.name}</h5>
        <h6 className='card-subtitle text-muted'>as {cast.character.name}</h6>
      </div>
    </>
  )
}

export default ThirdSection
