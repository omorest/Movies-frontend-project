import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, MoviesPage } from './pages/'
import DetailsPage from './pages/DetailsPage/DetailsPage'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/details' element={<DetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
