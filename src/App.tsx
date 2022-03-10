import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home, SearchPage } from './pages/'
import DiscoverPage from './pages/DiscoverPage/DiscoverPage'
import { Container } from '@chakra-ui/react'
import DetailsPage from './pages/DetailsPage/DetailsPage'

function App () {
  return (
    <Container maxW='container.xl'>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/discover' element={<DiscoverPage />} />
          <Route path='/details/:id/' element={<DetailsPage />} />
        </Routes>
      </div>
    </Container>
  )
}

export default App
