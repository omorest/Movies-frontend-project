import { Card, Row, Text } from '@nextui-org/react'
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
      <Card hoverable className="card-cast" css={{ w: '200px', borderRadius: '0px', backgroundColor: 'white' }}>
        <Card.Body css={{ p: 0, color: 'black', borderRadius: '0px' }}>
          <Card.Image
            src={urlImage}
            alt={name}
            objectFit='contain'
            width='100%'
            height='100%'
            css={{ h: '300px' }}
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

export default CardCompany
