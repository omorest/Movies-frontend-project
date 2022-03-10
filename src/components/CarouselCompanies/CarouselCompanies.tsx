import './CarouselCompanies.css'
import { FC } from 'react'
import CardCompany from '../CardCompany/CardCompany'

interface CarouselCompaniesProps {
  isTypeGrid: boolean,
  title?: string,
  listCompanies: any
}

const CarouselCompanies: FC<CarouselCompaniesProps> = ({ listCompanies, title, isTypeGrid = true }) => {
  const typeViewCompanies = isTypeGrid ? 'gallery' : 'carousel'

  return (
    <>
      <h2>{title}</h2>
      <br/>
      <div className={typeViewCompanies}>
        {listCompanies?.map((company: any) => <CardCompany company={company} key={company.id} />)}
      </div>
    </>
  )
}

export default CarouselCompanies
