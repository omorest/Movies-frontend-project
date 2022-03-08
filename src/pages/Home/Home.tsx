import './Home.css'
import { Navbar, SearchInput } from '../../components'
import MoviesSections from '../../components/MoviesSections/MoviesSections'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <br />
      <SearchInput/>
      <br />
      <br />
      <MoviesSections />
    </>
  )
}

export default Home
