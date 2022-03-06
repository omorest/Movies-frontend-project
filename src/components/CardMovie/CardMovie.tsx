import './CardMovie.css'
import { Card } from '@nextui-org/react'
import { FC } from 'react'

interface CardMovieProps {
  titleMovie: string,
  pathPoster: string
}

const CardMovie:FC<CardMovieProps> = ({ titleMovie, pathPoster }) => {
  return (
    <div >
      <Card clickable css={{ w: '200px' }} className="card-movie">
        <Card.Body css={{ p: 0, color: 'black' }} className="card-body">
          <Card.Image
            objectFit='cover'
            src={pathPoster}
            width='100%'
            height='100%'
            alt={titleMovie}
            css={{ h: '300px' }}
          />
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardMovie
