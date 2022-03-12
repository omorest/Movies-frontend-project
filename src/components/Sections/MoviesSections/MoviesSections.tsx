import SectionNowPlayingMovies from '../SectionNowPlayingMovies/SectionNowPlayingMovies'
import SectionPopularMovies from '../SectionPopularMovies/SectionPopularMovies'

const MoviesSections = () => {
  return (
    <>
      <SectionPopularMovies />
      <br/>
      <SectionNowPlayingMovies />
      <br/>
    </>
  )
}

export default MoviesSections
