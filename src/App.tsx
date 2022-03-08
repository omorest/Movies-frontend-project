import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, SearchPage } from './pages/'

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </div>
  )
}

export default App
