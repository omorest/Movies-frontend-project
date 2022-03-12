import { useEffect, useState } from 'react'
import { BASE_URL, KEY } from '../../../configs'
import { fetchMovies } from '../../api'
import { Movie } from '../../api/movies/models'
import CarouselMovies from '../CarouselMovies/CarouselMovies'

const urlPopularMovies = `${BASE_URL}/movie/popular?api_key=${KEY}&page=`

const SectionPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([])
  const [page, setPage] = useState<number>(1)

  const handlerPagination = () => setPage(page + 1)

  useEffect(() => {
    const requestMovies = async () => {
      const movies: Movie[] = await fetchMovies(urlPopularMovies + page)
      setPopularMovies([...popularMovies, ...movies])
    }
    requestMovies().catch((err) => console.log(err))
  }, [page])

  return (
    <>
      <CarouselMovies
        listMovies={popularMovies}
        title={'Most popular movies'}
        isTypeGrid={false}
        onUpdateMovies={handlerPagination}
      />
    </>
  )
}

export default SectionPopularMovies
