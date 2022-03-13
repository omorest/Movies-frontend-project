import './ReviewDetails.css'
import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Review } from '../../../api/movies/models'
import * as dayjs from 'dayjs'

interface ReviewDetailsProps {
  review: Review
}

const ReviewDetails: FC<ReviewDetailsProps> = ({ review }) => {
  const { author_details: { username, rating }, content, created_at } = review

  return (
    <div className="review">
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex='1' textAlign='left'>
              <Text fontSize='m' as='b'>{username}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} textAlign='left'>
          <div className="content-rate">
            <div className="content">
              <p>{content}</p>
            </div>
            <div className="rate">
              <Text fontSize='3xl' as='b' >{rating}</Text>
              <Text fontSize='xl' as='b' >Rate</Text>
            </div>
          </div>
          <br />
          <Text fontSize='m' as='b' >{dayjs(created_at).format('DD-MM-YYYY')}</Text>

        </AccordionPanel>
      </AccordionItem>
    </div>
  )
}

export default ReviewDetails
