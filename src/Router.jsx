import { Routes, Route } from 'react-router-dom'

// Pages
import App from './pages/App'
import Single from './pages/Single'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/pelicula/:idShow' element={<Single />} />
    </Routes>
  )
}

export default Router
