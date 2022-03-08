import './CarouselMovies.css'
import { FC, useRef } from 'react'
import CardMovie from '../CardMovie/CardMovie'

interface CarouselMoviesProps {
  isTypeGrid: boolean,
  title?: string,
  listMovies: any,
  onUpdateMovies?: () => void
}

const CarouselMovies: FC<CarouselMoviesProps> = ({ listMovies, title, isTypeGrid = true, onUpdateMovies }) => {
  const scrollRef = useRef<any>(null)
  const typeViewMovies = isTypeGrid ? 'carousel-movies' : 'gallery-movies'

  const handleScroll = () => {
    const scrollWidth = scrollRef.current?.scrollWidth
    const scrollLeft = Math.trunc(scrollRef.current.scrollLeft)
    const clientWidth = scrollRef.current?.clientWidth
    const isScrollFinished = scrollWidth - scrollLeft === clientWidth

    if (isScrollFinished) onUpdateMovies()
  }

  return (
    <>
      <h2>{title}</h2>
      <div className={typeViewMovies} ref={scrollRef} onScroll={handleScroll}>
        {listMovies?.map((movie: any) => <CardMovie movie={movie} key={movie.id} />)}
      </div>
    </>
  )
}

export default CarouselMovies
