import { useEffect, useState } from 'react'
import { BASE_URL, KEY } from '../../../configs'
import { fetchMovies } from '../../api'
import CarouselMovies from '../CarouselMovies/CarouselMovies'

const urlPopularMovies = `${BASE_URL}/movie/popular?api_key=${KEY}&page=1`

const SectionPopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState<any[]>([])
  const [page, setPage] = useState(1)

  const handlerPagination = () => setPage(page + 1)

  useEffect(() => {
    const requestMovies = async () => {
      const movies: any[] = await fetchMovies(urlPopularMovies + page)
      setPopularMovies([...popularMovies, ...movies])
    }
    requestMovies().catch((err) => console.log(err))
  }, [page])

  return (
    <>
      <CarouselMovies
        listMovies={popularMovies}
        title={'Most populars movies'}
        isTypeGrid={true}
        onUpdateMovies={handlerPagination}
      />
    </>
  )
}

export default SectionPopularMovies
