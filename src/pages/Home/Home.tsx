import './Home.css'
import { Spacer } from '@nextui-org/react'
import { Navbar, SearchMovie } from '../../components'
import MoviesSections from '../../components/MoviesSections/MoviesSections'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Spacer y={2}/>
      <SearchMovie/>
      <Spacer y={2}/>
      <MoviesSections />
    </>
  )
}

export default Home
