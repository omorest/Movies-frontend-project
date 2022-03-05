import './CarouselMovies.css'
import { FC } from 'react'
import { BASE_URL_IMAGES } from '../../../configs'
import CardMovie from '../CardMovie/CardMovie'

interface CarouselMoviesProps {
  movies: any[],
  isTypeGrid: boolean
}

const CarouselMovies: FC<CarouselMoviesProps> = ({ movies, isTypeGrid = true }) => {
  const typeViewMovies = isTypeGrid ? 'carousel-movies' : 'gallery-movies'
  const listMovies = movies?.map(({ title, id, poster_path: posterPath }) => {
    return <CardMovie pathPoster={`${BASE_URL_IMAGES}${posterPath}`} titleMovie={title} key={id} />
  })

  return (
    <>
      <div className={typeViewMovies}>
        {listMovies}
      </div>
    </>
  )
}

export default CarouselMovies
