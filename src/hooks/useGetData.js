import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetData = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const asyncData = async () => {
      const res = await axios.get(url)
      setData(res.data)
    }
    asyncData()
  }, [])

  return data
}

export default useGetData
