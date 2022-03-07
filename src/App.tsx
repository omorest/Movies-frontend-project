import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, MoviesPage } from './pages/'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MoviesPage />} />
      </Routes>
    </div>
  )
}

export default App
