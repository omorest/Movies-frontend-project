import './CardCast.css'
import { BASE_URL_IMAGES } from '../../../../configs'
import { Box, Image, Text } from '@chakra-ui/react'
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
      <Box className="card-cast" borderWidth='3px' borderRadius='3px' >
        <div className="image">
          <Image src={urlImage} alt={name} borderRadius='1px' />
        </div>
        <div className="text-cast">
          <Text fontSize='m' as='b' className="name-cast">{name}</Text>
        </div>
      </Box>
    </>
  )
}

export default CardCast
