import './CardCast.css'
import { Card, Row, Text } from '@nextui-org/react'
import { FC } from 'react'
import { BASE_URL_IMAGES } from '../../../configs'

interface CardCastProps {
  cast: any
}

const CardCast:FC<CardCastProps> = ({ cast }) => {
  const { profile_path: profilePath, name } = cast
  const urlImage = `${BASE_URL_IMAGES}${profilePath}`

  return (
    <>
      <Card hoverable className="card-cast" css={{ w: '200px', borderRadius: '0px', backgroundColor: 'transparent' }}>
        <Card.Body css={{ p: 0, color: 'black', borderRadius: '0px' }}>
          <Card.Image
            src={urlImage}
            objectFit='cover'
            alt={name}
            width='100%'
            height='100%'
            css={{ h: '300px', borderRadius: '0px' }}
          />
        </Card.Body>
        <Card.Footer css={{ backgroundColor: 'white', borderRadius: '0px' }}>
          <Row wrap='wrap' justify="space-between">
            <Text b>
              {name}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </>
  )
}

export default CardCast
