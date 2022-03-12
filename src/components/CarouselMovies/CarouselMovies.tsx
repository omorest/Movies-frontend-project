import './CarouselMovies.css'
import { FC, useRef } from 'react'
import { Text } from '@chakra-ui/react'
import { Movie } from '../../api/movies/models'
import CardMovie from '../CardMovie/CardMovie'

interface CarouselMoviesProps {
  title?: string,
  isTypeGrid?: boolean,
  listMovies: Movie[],
  onUpdateMovies?: () => void
}

const CarouselMovies: FC<CarouselMoviesProps> = ({ listMovies, title, isTypeGrid = true, onUpdateMovies }) => {
  const scrollRef = useRef<any>(null)
  const typeViewMovies = isTypeGrid ? 'gallery-movies' : 'carousel-movies'

  const handleScroll = () => {
    const scrollWidth = scrollRef.current?.scrollWidth
    const scrollLeft = Math.trunc(scrollRef.current.scrollLeft)
    const clientWidth = scrollRef.current?.clientWidth
    const isScrollFinished = scrollWidth - scrollLeft === clientWidth
    if (isScrollFinished && onUpdateMovies) onUpdateMovies()
  }

  return (
    <>
      <div className="text">
        <Text fontSize='2xl' as='b' textAlign='left'>{title}</Text>
      </div>
      <br/>
      <div className={typeViewMovies} ref={scrollRef} onScroll={handleScroll}>
        {listMovies?.map((movie: any) => <CardMovie movie={movie} key={movie.id} />)}
      </div>
    </>
  )
}

export default CarouselMovies
