import {Routes, Route} from 'react-router-dom'

import HomePage from '../Home/HomePage'


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
    </Routes>
  )
}

export default AppRoutes