import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosData from '../services/axiosData'

const Single = () => {
  const { idShow } = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    const asyncData = async () => {
      const res = await axiosData(`https://api.tvmaze.com/shows/${idShow}`)
      setData(res)
    }
    asyncData()
  }, [])

  console.log(data)

  return (
    <div>Single</div>
  )
}

export default Single
