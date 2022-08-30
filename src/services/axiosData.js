import axios from 'axios'

const axiosData = async (url) => {
  const { data } = await axios.get(url)
  return data
}

export default axiosData
