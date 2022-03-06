import './Home.css'
import { Spacer } from '@nextui-org/react'
import { BASE_URL, BASE_URL_IMAGES, KEY } from '../../../configs'
import useFetchMovies from '../../hooks/useFetchMovies'
import { CardMovie, CarouselMovies, Navbar, SearchMovie } from '../../components'

const urlPopularMovies = `${BASE_URL}/movie/popular?api_key=${KEY}&page=1`
const urlNowPlayingMovies = `${BASE_URL}/movie/now_playing?api_key=${KEY}&page=1`

const Home = () => {
  const popularMovies = useFetchMovies(urlPopularMovies)
  const nowPlayingMovies = useFetchMovies(urlNowPlayingMovies)

  const listPopularMovies = popularMovies?.map(({ title, id, poster_path: posterPath }) => {
    return <CardMovie pathPoster={`${BASE_URL_IMAGES}${posterPath}`} titleMovie={title} key={id} />
  })

  const listNowPlayingMovies = nowPlayingMovies?.map(({ title, id, poster_path: posterPath }) => {
    return <CardMovie pathPoster={`${BASE_URL_IMAGES}${posterPath}`} titleMovie={title} key={id} />
  })

  return (
    <>
      <Navbar></Navbar>
      <Spacer y={2}/>
      <SearchMovie/>

      <Spacer y={2}/>
      <h2>Most populars movies</h2>
      <CarouselMovies isTypeGrid={true}>
        {listPopularMovies}
      </CarouselMovies>
      <Spacer y={1}/>

      <h2>Now playing movies</h2>
      <CarouselMovies isTypeGrid={true}>
        {listNowPlayingMovies}
      </CarouselMovies>
      <Spacer y={2}/>
    </>
  )
}

export default Home
