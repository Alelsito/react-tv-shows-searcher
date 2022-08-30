import { useEffect, useState } from 'react'
import Searcher from '../components/Searcher'
import axiosData from '../services/axiosData'

function App () {
  const [data, setData] = useState([])
  const [url, setUrl] = useState('https://api.tvmaze.com/shows')

  useEffect(() => {
    const asyncData = async () => {
      const rest = await axiosData(url)
      setData(rest)
    }
    asyncData()
  }, [url])

  // Search show
  const createUrl = (show) => {
    setUrl(`https://api.tvmaze.com/search/shows?q=${show}`)
  }

  // Data
  console.log(data)

  return (
    <div className='App'>
      <Searcher onCreate={createUrl}> </Searcher>
    </div>
  )
}

export default App
