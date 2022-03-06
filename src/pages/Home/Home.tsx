import './Home.css'
import { Spacer } from '@nextui-org/react'
import { BASE_URL, KEY } from '../../../configs'
import useFetchMovies from '../../hooks/useFetchMovies'
import { CarouselMovies, Navbar, SearchMovie } from '../../components'

const urlPopularMovies = `${BASE_URL}/movie/popular?api_key=${KEY}&page=1`
const urlNowPlayingMovies = `${BASE_URL}/movie/now_playing?api_key=${KEY}&page=1`

const Home = () => {
  const { listMovies: popularMovies } = useFetchMovies(urlPopularMovies)
  const { listMovies: nowPlayingMovies } = useFetchMovies(urlNowPlayingMovies)

  return (
    <>
      <Navbar></Navbar>
      <Spacer y={2}/>
      <SearchMovie/>

      <Spacer y={2}/>
      <h2>Most populars movies</h2>
      <CarouselMovies movies={popularMovies} isTypeGrid={true}/>
      <Spacer y={1}/>

      <h2>Now playing movies</h2>
      <CarouselMovies movies={nowPlayingMovies} isTypeGrid={true}/>
      <Spacer y={2}/>
    </>
  )
}

export default Home
