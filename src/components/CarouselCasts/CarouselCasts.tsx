import './CarouselCasts.css'
import { FC } from 'react'
import CardCast from '../CardCast/CardCast'
import { Text } from '@chakra-ui/react'
import { Cast } from '../../api/cast/model'

interface CarouselCastsProps {
  isTypeGrid: boolean,
  title?: string,
  listCasts: Cast[]
}

const CarouselCasts: FC<CarouselCastsProps> = ({ listCasts, title, isTypeGrid = true }) => {
  const typeViewCasts = isTypeGrid ? 'gallery' : 'carousel'

  return (
    <>
      <div className="text">
        <Text fontSize='2xl' as='b'>{title}</Text>
      </div>
      <br/>
      <div className={typeViewCasts}>
        {listCasts?.map((cast: any) => <CardCast cast={cast} key={cast.id} />)}
      </div>
    </>
  )
}

export default CarouselCasts
