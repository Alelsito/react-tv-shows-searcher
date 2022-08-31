import React from 'react'

// Utils
import stringToNumber from '../utils/stringToNumber'

// Componentes
import Episode from './common/Episode'

const SecondSection = ({ number, _links }) => {
  return (
    <>
      <div>
        <h2 className='accordion-header' id={`heading${stringToNumber(number)}`}>
          <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${stringToNumber(number)}`} aria-expanded='true' aria-controls={`collapse${stringToNumber(number)}`}>
            Season #{number}
          </button>
        </h2>
        <div id={`collapse${stringToNumber(number)}`} className='accordion-collapse collapse' aria-labelledby={`heading${stringToNumber(number)}`} data-bs-parent='#accordionExample'>
          {/* Table header */}
          <table className='table'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Date</th>
                <th scope='col'>Name</th>
                <th scope='col'>Score</th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              <Episode urlEpisodes={_links.self} />
            </tbody>
          </table>

        </div>
      </div>

    </>
  )
}

export default SecondSection
