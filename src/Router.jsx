// Router
import { Routes, Route, Navigate } from 'react-router-dom'

// Components
import NotFound from './components/common/NotFound'

// Pages
import App from './pages/App'
import Single from './pages/Single'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/show/:idShow' element={<Single />} />
      <Route path='*' element={<Navigate to='404' />} />
      <Route path='404' element={<NotFound />} />
    </Routes>
  )
}

export default Router
