import './CardCompany.css'
import { Box, Image } from '@chakra-ui/react'
import { FC } from 'react'
import { BASE_URL_IMAGES } from '../../../configs'

interface CardCompanyProps {
  company: any
}

const CardCompany:FC<CardCompanyProps> = ({ company }) => {
  const { logo_path: logoPath, name } = company
  const urlImage = `${BASE_URL_IMAGES}${logoPath}`

  return (
    <>
      <Box w='200px'
        overflow='hidden'
        className="card-company"
        borderWidth='3px'
        borderRadius='3px'
      >
        <Box className="card-image">
          <Image src={urlImage} alt={name} borderRadius='3px' />
        </Box>
        <Box
          className="card-text"
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          {name}
        </Box>
      </Box>
    </>
  )
}

export default CardCompany
