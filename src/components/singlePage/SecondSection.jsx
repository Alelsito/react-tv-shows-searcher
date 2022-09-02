import React from 'react'

// Componentes
import Episode from './Episode'

// Utils
import stringToNumber from '../../utils/stringToNumber'

const SecondSection = ({ number, _links }) => {
  return (
    <>
      <h2 className='accordion-header d-flex justify-content-center' id={`heading${stringToNumber(number)}`}>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${stringToNumber(number)}`} aria-expanded='false' aria-controls={`collapse${stringToNumber(number)}`}>
          <h5 className='second-section-season-text'>
            SEASON {number}
          </h5>
        </button>
      </h2>
      <div id={`collapse${stringToNumber(number)}`} className='accordion-collapse collapse' aria-labelledby={`heading${stringToNumber(number)}`} data-bs-parent='#accordionExample'>
        <table className='table ms-1'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Date</th>
              <th scope='col'>Name</th>
              <th scope='col'>Score</th>
            </tr>
          </thead>
          <tbody>
            <Episode urlEpisodes={_links.self} />
          </tbody>
        </table>

      </div>
    </>
  )
}

export default SecondSection
