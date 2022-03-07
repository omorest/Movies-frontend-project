import { useEffect, useState } from 'react'
import { BASE_URL, KEY } from '../../../configs'
import { fetchMovies } from '../../api'
import CarouselMovies from '../CarouselMovies/CarouselMovies'

const urlPopularMovies = `${BASE_URL}/movie/popular?api_key=${KEY}&page=1`

const SectionPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    const requestMovies = async () => {
      const movies = await fetchMovies(urlPopularMovies)
      setPopularMovies(movies)
    }
    requestMovies().catch((err) => console.log(err))
  }, [])

  return (
    <>
      <CarouselMovies
        listMovies={popularMovies}
        title={'Most populars movies'}
        isTypeGrid={true} />
    </>
  )
}

export default SectionPopularMovies
