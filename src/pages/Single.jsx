import { useParams } from 'react-router-dom'

// Section
import FirstSection from '../components/FirstSection'
import SecondSection from '../components/SecondSection'

// Hooks
import useGetData from '../hooks/useGetData'

const Single = () => {
  const { idShow } = useParams()

  // Primera sección
  const show = useGetData(`https://api.tvmaze.com/shows/${idShow}`)

  //   Segunda sección
  const seasons = useGetData(`https://api.tvmaze.com/shows/${idShow}/seasons`)

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

      }
    </>
  )
}

export default Single
