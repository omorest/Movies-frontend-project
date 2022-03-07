import './CarouselCompanies.css'
import { FC } from 'react'
import CardCompany from '../CardCompany/CardCompany'

interface CarouselCompaniesProps {
  isTypeGrid: boolean,
  title?: string,
  listCompanies: any
}

const CarouselCompanies: FC<CarouselCompaniesProps> = ({ listCompanies, title, isTypeGrid = true }) => {
  const typeViewCompanies = isTypeGrid ? 'carousel' : 'gallery'

  return (
    <>
      <h2>{title}</h2>
      <div className={typeViewCompanies}>
        {listCompanies?.map((company: any) => <CardCompany company={company} key={company.id} />)}
      </div>
    </>
  )
}

export default CarouselCompanies
