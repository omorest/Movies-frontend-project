import './CarouselMovies.css'
import { FC } from 'react'

interface CarouselMoviesProps {
  isTypeGrid: boolean
  title?: string
}

const CarouselMovies: FC<CarouselMoviesProps> = ({ children, title, isTypeGrid = true }) => {
  const typeViewMovies = isTypeGrid ? 'carousel-movies' : 'gallery-movies'

  return (
    <>
      <h2>{title}</h2>
      <div className={typeViewMovies}>
        {children}
      </div>
    </>
  )
}

export default CarouselMovies
