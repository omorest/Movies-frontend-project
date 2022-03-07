import { Spacer } from '@nextui-org/react'
import SectionNowPlayingMovies from '../SectionNowPlayingMovies/SectionNowPlayingMovies'
import SectionPopularMovies from '../SectionPopularMovies/SectionPopularMovies'

const MoviesSections = () => {
  return (
    <>
      <SectionPopularMovies />
      <Spacer y={1}/>
      <SectionNowPlayingMovies />
      <Spacer y={2}/>
    </>
  )
}

export default MoviesSections
