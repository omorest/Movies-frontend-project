import { Card, Text, Row } from '@nextui-org/react'
import { FC } from 'react'

interface CardMovieProps {
  titleMovie: string,
  pathPoster: string
}

const CardMovie:FC<CardMovieProps> = ({ titleMovie, pathPoster }) => {
  return (
    <div className="card-movie">
      <Card hoverable clickable css={{ w: '200px' }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            objectFit="cover"
            src={pathPoster}
            width='100%'
            height='100%'
            alt={titleMovie}
          />
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardMovie
