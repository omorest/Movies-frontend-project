import { Spacer } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BASE_URL, KEY } from '../../../configs'
import { CarouselMovies, Navbar, SearchMovie } from '../../components'
import useFetchMovies from '../../hooks/useFetchMovies'

const urlSearchMovies = `${BASE_URL}/search/movie?api_key=${KEY}&page=1&query=`
const urlPopularMovies = `${BASE_URL}/movie/popular?api_key=${KEY}&page=1`

const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const location = useLocation()
  const { inputValue } = location.state || ''

  const { getListMovies } = useFetchMovies('')
  useEffect(() => {
    const getMovies = async () => {
      const moviesSearched = (inputValue) ? await getListMovies(urlSearchMovies + inputValue) : await getListMovies(urlPopularMovies)
      setMovies(moviesSearched)
    }
    getMovies()
  }, [inputValue])

  return (
    <>
      <Navbar></Navbar>
      <Spacer y={2}/>
      <SearchMovie />
      <Spacer y={2}/>
      <h2>{inputValue}</h2>
      <CarouselMovies movies={movies} isTypeGrid={false}/>
      <Spacer y={2}/>
    </>
  )
}

export default MoviesPage
