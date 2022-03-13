import './ReviewsSection.css'
import { FC, useEffect, useState } from 'react'
import { Accordion, Text } from '@chakra-ui/react'
import { fetchReviews } from '../../../api/movies/moviesRequests'
import { Review } from '../../../api/movies/models'
import ReviewDetails from '../ReviewDetails/ReviewDetails'

interface ReviewsSectionProps {
  id: number
}

const ReviewsSection: FC<ReviewsSectionProps> = ({ id }) => {
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    const requestRevies = async () => {
      const reviews = await fetchReviews(id, 1)
      setReviews(reviews)
    }
    requestRevies()
  }, [])

  return (
    <div className="reviews-section">
      <Text fontSize='2xl' as='b'>Reviews</Text>
      <div className="reviews">
        <Accordion defaultIndex={[0]} allowToggle>
          {
            reviews?.map(review => <ReviewDetails review={review} key={review.id}/>)
          }
        </Accordion>
      </div>
    </div>
  )
}

export default ReviewsSection
