import './CarouselCompanies.css'
import { FC } from 'react'
import { Text } from '@chakra-ui/react'
import CardCompany from '../CardCompany/CardCompany'
import { Company } from '../../api/companies/model'

interface CarouselCompaniesProps {
  isTypeGrid: boolean,
  title?: string,
  listCompanies: Company[]
}

const CarouselCompanies: FC<CarouselCompaniesProps> = ({ listCompanies, title, isTypeGrid = true }) => {
  const typeViewCompanies = isTypeGrid ? 'gallery' : 'carousel'

  return (
    <>
      <div className="text">
        <Text fontSize='2xl' as='b' textAlign='left'>{title}</Text>
      </div>
      <br/>
      <div className={typeViewCompanies}>
        {listCompanies?.map((company: any) => <CardCompany company={company} key={company.id} />)}
      </div>
    </>
  )
}

export default CarouselCompanies
