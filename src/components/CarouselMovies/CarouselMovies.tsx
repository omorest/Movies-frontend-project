import './CarouselMovies.css'
import { FC } from 'react'
import CardMovie from '../CardMovie/CardMovie'

interface CarouselMoviesProps {
  isTypeGrid: boolean,
  title?: string,
  listMovies: any
}

const CarouselMovies: FC<CarouselMoviesProps> = ({ listMovies, title, isTypeGrid = true }) => {
  const typeViewMovies = isTypeGrid ? 'carousel-movies' : 'gallery-movies'

  return (
    <>
      <h2>{title}</h2>
      <div className={typeViewMovies}>
        {listMovies?.map((movie: any) => <CardMovie movie={movie} key={movie.id} />)}
      </div>
    </>
  )
}

export default CarouselMovies
