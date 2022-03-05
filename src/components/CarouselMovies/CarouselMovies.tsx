import { FC } from 'react'
import './CarouselMovies.css'
import CardMovie from '../CardMovie/CardMovie'

interface CarouselMoviesProps {
  movies: any[]
}

const CarouselMovies: FC<CarouselMoviesProps> = ({ movies }) => {
  const listMovies = movies?.map(({ title, id, poster_path: posterPath }) => {
    return <CardMovie pathPoster={`https://image.tmdb.org/t/p/w500/${posterPath}`} titleMovie={title} key={id} />
  })

  return (
    <>
      <div className="carousel-movies">
        {listMovies}
      </div>
    </>
  )
}

export default CarouselMovies
