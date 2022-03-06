import './CardMovie.css'
import { Card } from '@nextui-org/react'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL_IMAGES } from '../../../configs'

interface CardMovieProps {
  movie: any
}

const CardMovie:FC<CardMovieProps> = ({ movie }) => {
  const { title, poster_path: posterPath } = movie
  const urlImage = `${BASE_URL_IMAGES}${posterPath}`
  const navigate = useNavigate()

  const handlerClick = (event: any) => {
    event.preventDefault()
    navigate('/details', { state: { movie: movie } })
  }

  return (
    <div >
      <Card clickable css={{ w: '200px' }} className="card-movie" onClick={handlerClick}>
        <Card.Body css={{ p: 0, color: 'black' }} className="card-body">
          <Card.Image
            objectFit='cover'
            src={urlImage}
            width='100%'
            height='100%'
            alt={title}
            css={{ h: '300px' }}
          />
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardMovie
