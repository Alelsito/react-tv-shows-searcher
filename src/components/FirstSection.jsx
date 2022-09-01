import React from 'react'

// Utils
import removeTags from '../utils/removeTags'

const FirstSection = ({ showData }) => {
  return (
    <div className='container mt-4 mb-2 p-2 first-section-cards'>
      <div className='row'>
        <div className='col'>
          <div className='movie_card'>
            <div className='info_section d-flex flex-row'>
              <div className='movie_header row'>
                <div className='col-5 d-flex justify-content-end'>
                  <img className='locandina' src={showData.image.original} alt={showData.name} />
                </div>
                <div className='col'>
                  <div className='col'>
                    <h1 className='show-title'>{showData.name}</h1>
                  </div>
                  <div className='col'>
                    <h4 className='network-language'>
                      {showData.network === null ? showData.network : showData.network.country.code},{' '}
                      {showData.language}
                    </h4>
                  </div>
                  <div className='col'>
                    <div className='row'>
                      <div className='col-2 d-flex align-items-center me-3'>
                        {showData.rating.average === null
                          ? (
                            <span className='minutes d-flex flex-row align-items-center'>
                              <i className='fa-regular fa-star' />
                            </span>
                            )
                          : (
                            <span className='minutes d-flex flex-row align-items-center'>
                              {showData.rating.average}
                              <i className='fa-regular fa-star ms-1' />
                            </span>
                            )}
                      </div>
                      <div className='col-9 d-flex justify-content-start align-items-center p-0'>
                        <div className='type row d-flex flex-row'>
                          {showData.genres.map((genre, index) => (
                            <div className='col pe-0' key={index}>
                              {' '}
                              {genre}{' '}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col mt-2'>
                    <p className='type'>Show Type: {showData.type}</p>
                  </div>
                  <div className='col mt-2'>
                    <p className='type'>Status: {showData.status}</p>
                  </div>
                </div>
              </div>
              <div className='movie_desc d-flex align-items-center'>
                <p className='text'> {removeTags(showData.summary)} </p>
              </div>
            </div>
            <div className='blur_back bright_back' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstSection
