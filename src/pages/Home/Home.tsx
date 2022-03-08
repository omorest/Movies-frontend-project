import './Home.css'
import { Spacer } from '@nextui-org/react'
import { Navbar, SearchInput } from '../../components'
import MoviesSections from '../../components/MoviesSections/MoviesSections'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Spacer y={2}/>
      <SearchInput/>
      <Spacer y={2}/>
      <MoviesSections />
    </>
  )
}

export default Home
