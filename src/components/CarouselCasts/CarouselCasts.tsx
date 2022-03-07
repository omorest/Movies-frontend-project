import './CarouselCasts.css'
import { FC } from 'react'
import CardCast from '../CardCast/CardCast'

interface CarouselCastsProps {
  isTypeGrid: boolean,
  title?: string,
  listCasts: any
}

const CarouselCasts: FC<CarouselCastsProps> = ({ listCasts, title, isTypeGrid = true }) => {
  const typeViewCasts = isTypeGrid ? 'carousel' : 'gallery'

  return (
    <>
      <h2>{title}</h2>
      <div className={typeViewCasts}>
        {listCasts?.map((cast: any) => <CardCast cast={cast} key={cast.id} />)}
      </div>
    </>
  )
}

export default CarouselCasts
