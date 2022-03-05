import './Home.css'
import { Input, Spacer } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { fetchMovies } from '../../api'
import CarouselMovies from '../../components/CarouselMovies/CarouselMovies'

const KEY = import.meta.env.VITE_KEY_TMDB
const urlPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&page=1`
const urlNowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&page=1`

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])

  useEffect(() => {
    const requestMovies = async () => {
      const movies = await fetchMovies(urlPopularMovies)
      setPopularMovies(movies)
    }
    requestMovies().catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    const requestMovies = async () => {
      const movies = await fetchMovies(urlNowPlayingMovies)
      setNowPlayingMovies(movies)
    }
    requestMovies().catch((err) => console.log(err))
  }, [])

  return (
    <>
      <h1>Movies App</h1>
      <Spacer y={2}/>
      <Input clearable bordered placeholder="Cast, movie, production"
        color="secondary"
        width='300px'
      />

      <Spacer y={2}/>
      <h2>Most populars movies</h2>
      <CarouselMovies movies={popularMovies} />
      <Spacer y={1}/>

      <h2>Now playing movies</h2>
      <CarouselMovies movies={nowPlayingMovies} />
    </>
  )
}

export default Home
