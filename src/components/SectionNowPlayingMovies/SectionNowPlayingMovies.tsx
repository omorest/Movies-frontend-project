import { useEffect, useState } from 'react'
import { BASE_URL, KEY } from '../../../configs'
import { fetchMovies } from '../../api'
import CarouselMovies from '../CarouselMovies/CarouselMovies'

const urlNowPlayingMovies = `${BASE_URL}/movie/now_playing?api_key=${KEY}&page=`

const SectionNowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    const requestMovies = async () => {
      const movies = await fetchMovies(urlNowPlayingMovies + page)
      setNowPlayingMovies(movies)
    }
    requestMovies().catch((err) => console.log(err))
  }, [])

  return (
    <>
      <CarouselMovies
        listMovies={nowPlayingMovies}
        title={'Most populars movies'}
        isTypeGrid={true} />
    </>
  )
}

export default SectionNowPlayingMovies
