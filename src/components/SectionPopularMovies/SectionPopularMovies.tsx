import { useEffect, useState } from 'react'
import { BASE_URL, KEY } from '../../../configs'
import { fetchMovies } from '../../api'
import CardMovie from '../CardMovie/CardMovie'
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

  const movies = popularMovies?.map((movie: any) => {
    return <CardMovie movie={movie} key={movie.id} />
  })

  return (
    <>
      <CarouselMovies title={'Most populars movies'} isTypeGrid={true}>
        {movies}
      </CarouselMovies>
    </>
  )
}

export default SectionPopularMovies
