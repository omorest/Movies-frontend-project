import './CardMovie.css'
import { Box, Image } from '@chakra-ui/react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../../../api/movies/models'
import { BASE_URL_IMAGES } from '../../../../configs'

interface CardMovieProps {
  movie: Movie
}

const CardMovie:FC<CardMovieProps> = ({ movie }) => {
  const { title, poster_path: posterPath, id } = movie
  const urlImage = `${BASE_URL_IMAGES}${posterPath}`

  return (
    <div >
      <div >
        <Link to={`/details/${id}`}>
          <Box w='200px' borderWidth='0px' overflow='hidden' className="card-movie" >
            <Image src={urlImage} alt={title} />
          </Box>
        </Link>
      </div>
    </div>
  )
}

export default CardMovie
