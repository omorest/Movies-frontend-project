import './CarouselCasts.css'
import { FC } from 'react'
import CardCast from '../CardCast/CardCast'
import { Text } from '@chakra-ui/react'

interface CarouselCastsProps {
  isTypeGrid: boolean,
  title?: string,
  listCasts: any
}

const CarouselCasts: FC<CarouselCastsProps> = ({ listCasts, title, isTypeGrid = true }) => {
  const typeViewCasts = isTypeGrid ? 'carousel' : 'gallery'

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
