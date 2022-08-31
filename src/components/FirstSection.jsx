import React from 'react'

// Utils
import removeTags from '../utils/removeTags'

const FirstSection = ({ showData }) => {
  return (
    <div className='card container flex-row mt-3 mb-3'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img src={showData.image.original} className='img-fluid rounded-start' alt={showData.name} />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h2 className='card-title'>{showData.name} </h2>
            <p className='card-text'>{removeTags(showData.summary)}</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='card' style={{ width: '25rem' }}>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Network: {showData.network === null ? showData.network : showData.network.country.code}</li>
            <li className='list-group-item'>Language: {showData.language}</li>
            <li className='list-group-item'>Status: {showData.status}</li>
            <li className='list-group-item'>Show Type: {showData.type}</li>
            <li className='list-group-item'>Genres: {showData.genres.map((genre, index) => <div key={index}> {genre} </div>)}</li>
          </ul>
          <div className='card-footer'>Rating: {showData.rating.average}</div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
