import './CarouselMovies.css'
import { FC } from 'react'

interface CarouselMoviesProps {
  isTypeGrid: boolean
}

const CarouselMovies: FC<CarouselMoviesProps> = ({ children, isTypeGrid = true }) => {
  const typeViewMovies = isTypeGrid ? 'carousel-movies' : 'gallery-movies'

  return (
    <>
      <div className={typeViewMovies}>
        {children}
      </div>
    </>
  )
}

export default CarouselMovies
