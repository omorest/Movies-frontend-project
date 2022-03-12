import { useEffect, useState } from 'react'
import { urlPopularMovies } from '../../../api/urlsApi'
import { CarouselMovies } from '../../Carousels'
import { fetchMovies } from '../../../api'
import { Movie } from '../../../api/movies/models'

const SectionPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([])
  const [page, setPage] = useState<number>(1)

  const handlerPagination = () => setPage(page + 1)

  useEffect(() => {
    const requestMovies = async () => {
      const movies: Movie[] = await fetchMovies(`${urlPopularMovies}&page=${page}`)
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
