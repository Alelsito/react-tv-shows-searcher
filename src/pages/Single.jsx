// useParams
import { useParams } from 'react-router-dom'

// Sections
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'

// Styles
import '../styles/single.css'

// Hooks
import useGetData from '../hooks/useGetData'

const Single = () => {
  const { idShow } = useParams()

  // Primera sección
  const show = useGetData(`https://api.tvmaze.com/shows/${idShow}`)

  //   Segunda sección
  const seasons = useGetData(`https://api.tvmaze.com/shows/${idShow}/seasons`)

  // Tercera sección
  const cast = useGetData(`https://api.tvmaze.com/shows/${idShow}/cast`)

  return (
    <>
      {
        show.length !== 0 && <FirstSection showData={show} />
      }
      {
        seasons.length !== 0 &&
          <div className='accordion container second-section-container mt-2 mb-2' id='accordionExample'>
            {seasons.map((season, index) => (<div className='accordion-item' key={index}> <SecondSection {...season} /> </div>))}
          </div>
      }
      {
        cast.length !== 0 &&
          <div className='container third-section-container mt-4 mb-4'>
            <div className='row d-flex justify-content-center'>
              {
                cast.map((character, index) => (
                  <div className='card third-secetion-container-card d-flex flex-row p-0 m-3' style={{ width: '14rem' }} key={index}>
                    <ThirdSection cast={character} />
                  </div>
                ))
              }
            </div>
          </div>
      }
    </>
  )
}

export default Single
