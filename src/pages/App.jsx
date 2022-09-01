import { useEffect, useState } from 'react'
import Card from '../components/Card'
import NotFound from '../components/NotFound'
import Searcher from '../components/Searcher'
import axiosData from '../services/axiosData'

// Styles
import '../styles/index.css'

function App () {
  const [data, setData] = useState([])
  const [url, setUrl] = useState('https://api.tvmaze.com/shows')

  useEffect(() => {
    const asyncData = async () => {
      const res = await axiosData(url)
      setData(res)
    }
    asyncData()
  }, [url])

  // Search show
  const createUrl = (show) => {
    setUrl(`https://api.tvmaze.com/search/shows?q=${show}`)
  }

  return (
    <>
      <Searcher onCreate={createUrl} />
      {url === 'https://api.tvmaze.com/shows' || data.length === 0
        ? (
          <></>
          )
        : (
          <div className='container mt-4 p-2 cards'>
            {' '}
            <div className='row d-flex justify-content-center'>
              {' '}
              {data.map((show, index) => (
                <div key={index} className='col-2 m-3'>
                  {' '}
                  <Card {...show.show} />{' '}
                </div>
              ))}{' '}
            </div>{' '}
          </div>
          )}
      {data.length === 0 && <NotFound />}
    </>
  )
}

export default App
