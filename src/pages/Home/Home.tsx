import { MoviesSections, Navbar, SearchInput } from '../../components'
import './Home.css'

const Home = () => {
  return (
    <>
      <Navbar />
      <br />
      <SearchInput/>
      <br />
      <br />
      <MoviesSections />
      <br />
    </>
  )
}

export default Home
