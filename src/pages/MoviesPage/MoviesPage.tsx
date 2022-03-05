import { Spacer } from '@nextui-org/react'
import { useLocation } from 'react-router-dom'
import { BASE_URL, KEY } from '../../../configs'
import { CarouselMovies, Navbar, SearchMovie } from '../../components'
import useFetchMovies from '../../hooks/useFetchMovies'

const urlSearchMovies = `${BASE_URL}/search/movie?api_key=${KEY}&page=1&query=`
const urlPopularMovies = `${BASE_URL}/movie/popular?api_key=${KEY}&page=1`

const MoviesPage = () => {
  const location = useLocation()
  const { inputValue } = location.state || ''
  const moviesSearched = (inputValue) ? useFetchMovies(urlSearchMovies + inputValue) : useFetchMovies(urlPopularMovies)

  return (
    <>
      <Navbar></Navbar>
      <Spacer y={2}/>
      <SearchMovie />
      <Spacer y={2}/>
      <h2>{inputValue}</h2>
      <CarouselMovies movies={moviesSearched} isTypeGrid={false}/>
      <Spacer y={2}/>
    </>
  )
}

export default MoviesPage
