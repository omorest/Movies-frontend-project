import './CardMovie.css'
import { Box, Image } from '@chakra-ui/react'
import { FC } from 'react'
import { BASE_URL_IMAGES } from '../../../configs'
import { Link } from 'react-router-dom'

interface CardMovieProps {
  movie: any
}

const CardMovie:FC<CardMovieProps> = ({ movie }) => {
  const { title, poster_path: posterPath } = movie
  const urlImage = `${BASE_URL_IMAGES}${posterPath}`

  return (
    <div >
      <div >
        <Link to={`/details/${movie.id}`}>
          <Box w='200px' borderWidth='0px' overflow='hidden' className="card-movie" >
            <Image src={urlImage} alt={title} />
          </Box>
        </Link>
      </div>
    </div>
  )
}

export default CardMovie
