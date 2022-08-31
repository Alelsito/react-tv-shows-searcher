import { useParams } from 'react-router-dom'
import FirstSection from '../components/FirstSection'
import useGetData from '../hooks/useGetData'

const Single = () => {
  const { idShow } = useParams()
  console.log(idShow)

  // Primera sección
  const show = useGetData(`https://api.tvmaze.com/shows/${idShow}`)
  console.log(show)

  //   Segunda sección
  const seasons = useGetData(`https://api.tvmaze.com/shows/${idShow}/seasons`)
  console.log(seasons)

  //   -each seasonId
  seasons.map((season, index) => console.log(season.id, index))

  return (
    <>
      {
        show.length !== 0 && <FirstSection showData={show} />
      }
    </>
  )
}

export default Single
