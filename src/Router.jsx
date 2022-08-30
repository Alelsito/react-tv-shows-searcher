import { Routes, Route } from 'react-router-dom'

// Pages
import App from './pages/App'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  )
}

export default Router
