import { useEffect, useState } from 'react'
import { BASE_URL, BASE_URL_IMAGES, KEY } from '../../../configs'
import { fetchMovies } from '../../api'
import CardMovie from '../CardMovie/CardMovie'
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

  const movies = nowPlayingMovies?.map((movie: any) => {
    return <CardMovie movie={movie} key={movie.id} />
  })

  return (
    <>
      <CarouselMovies title={'Now playing movies'} isTypeGrid={true}>
        {movies}
      </CarouselMovies>
    </>
  )
}

export default SectionNowPlayingMovies
