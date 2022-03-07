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
      <Card hoverable css={{ w: '200px' }}>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={urlImage}
            objectFit='cover'
            width='100%'
            height='100%'
            css={{ h: '300px' }}
          />
        </Card.Body>
        <Card.Footer>
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
