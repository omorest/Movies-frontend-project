import './App.css'
import { Home, LoggedPage, SearchPage, DiscoverPage, FavouritesPage, DetailsPage } from './pages/'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Container } from '@chakra-ui/react'

function App () {
  return (
    <Container maxW='85%'>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/discover' element={<DiscoverPage />} />
            <Route path='/favourites' element={<FavouritesPage />} />
            <Route path='/logged' element={<LoggedPage />} />
            <Route path='/details/:id/' element={<DetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Container>
  )
}

export default App
