import './Home.css'
import { Spacer } from '@nextui-org/react'
// import { useEffect, useState } from 'react'
import { BASE_URL, KEY } from '../../../configs'
import useFetchMovies from '../../hooks/useFetchMovies'
import { CarouselMovies, SearchMovie } from '../../components'

const urlPopularMovies = `${BASE_URL}/movie/popular?api_key=${KEY}&page=1`
const urlNowPlayingMovies = `${BASE_URL}/movie/now_playing?api_key=${KEY}&page=1`
// const urlSearchMovies = `${BASE_URL}/search/movie/?api_key=${KEY}&page=1&query=`

const Home = () => {
  const popularMovies = useFetchMovies(urlPopularMovies)
  const nowPlayingMovies = useFetchMovies(urlNowPlayingMovies)

  return (
    <>
      <h1>Movies App</h1>
      <Spacer y={2}/>
      <SearchMovie onSearch={() => {}}/>

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
