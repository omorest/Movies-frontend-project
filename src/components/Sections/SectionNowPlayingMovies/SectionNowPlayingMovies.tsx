import { useEffect, useState } from 'react'
import { urlNowPlayingMovies } from '../../../api/urlsApi'
import { CarouselMovies } from '../../Carousels'
import { fetchMovies } from '../../../api'
import { Movie } from '../../../api/movies/models'

const SectionNowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([])
  const [page, setPage] = useState<number>(1)

  const handlerPagination = () => setPage(page + 1)

  useEffect(() => {
    const requestMovies = async () => {
      const { results: movies } = await fetchMovies(`${urlNowPlayingMovies}&page=${page}`)
      setNowPlayingMovies([...nowPlayingMovies, ...movies])
    }
    requestMovies().catch((err) => console.log(err))
  }, [page])

  return (
    <>
      <CarouselMovies
        listMovies={nowPlayingMovies}
        title={'Now playing movies'}
        isTypeGrid={false}
        onUpdateMovies={handlerPagination}
      />
    </>
  )
}

export default SectionNowPlayingMovies
