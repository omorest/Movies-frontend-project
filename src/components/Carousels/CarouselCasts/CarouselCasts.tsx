import './CarouselCasts.css'
import { CardCast } from '../../Cards'
import { Text } from '@chakra-ui/react'
import { Cast } from '../../../api/cast/model'
import { FC } from 'react'

interface CarouselCastsProps {
  isTypeGrid: boolean,
  title?: string,
  listCasts: Cast[]
}

const CarouselCasts: FC<CarouselCastsProps> = ({ listCasts, title, isTypeGrid = true }) => {
  const typeViewCasts = isTypeGrid ? 'gallery' : 'carousel-cast'

  return (
    <>
      <div className="text">
        <Text fontSize='2xl' as='b'>{title}</Text>
      </div>
      <div className={typeViewCasts}>
        {listCasts?.map((cast: any) => <CardCast cast={cast} key={cast.id} />)}
      </div>
    </>
  )
}

export default CarouselCasts
