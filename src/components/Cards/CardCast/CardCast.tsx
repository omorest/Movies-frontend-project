import './CardCast.css'
import { BASE_URL_IMAGES } from '../../../../configs'
import { Box, Image } from '@chakra-ui/react'
import { Cast } from '../../../api/cast/model'
import { FC } from 'react'

interface CardCastProps {
  cast: Cast
}

const CardCast:FC<CardCastProps> = ({ cast }) => {
  const { profile_path: profilePath, name } = cast
  const urlImage = `${BASE_URL_IMAGES}${profilePath}`

  return (
    <>
      <Box w='200px' className="card-cast" borderWidth='3px' borderRadius='3px'>
        <Image src={urlImage} alt={name} borderRadius='3px' />
        <Box display='flex' alignItems='baseline' >
          <Box
            width='100%'
            p='3'
            color='black.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='4'
          >
            {name}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default CardCast
