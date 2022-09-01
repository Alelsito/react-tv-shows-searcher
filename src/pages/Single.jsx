import { useParams } from 'react-router-dom'

// Section
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'
import ThirdSection from '../components/ThirdSection'

// Hooks
import useGetData from '../hooks/useGetData'

const Single = () => {
  const { idShow } = useParams()

  // Primera sección
  const show = useGetData(`https://api.tvmaze.com/shows/${idShow}`)

  //   Segunda sección
  const seasons = useGetData(`https://api.tvmaze.com/shows/${idShow}/seasons`)

  const cast = useGetData(`https://api.tvmaze.com/shows/${idShow}/cast`)

  return (
    <>
      {
        show.length !== 0 && <FirstSection showData={show} />
      }
      {
        seasons.length !== 0 &&
          <div className='accordion container mt-2 mb-2' id='accordionExample'>
            {seasons.map((season, index) => (<div className='accordion-item' key={index}> <SecondSection {...season} /> </div>))}
          </div>
      }
      {
        cast.length !== 0 &&
          <div className='container mt-4 mb-4'>
            <div className='row d-flex justify-content-center'>
              {
                cast.map((character, index) => (
                  <div className='card p-0 m-3' style={{ width: '12rem' }} key={index}>
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