import './ReviewsSection.css'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { FC, useEffect, useState } from 'react'
import { Accordion, Text } from '@chakra-ui/react'
import { fetchReviews } from '../../../api'
import { Review } from '../../../api/movies/models'
import ReviewDetails from '../ReviewDetails/ReviewDetails'

interface ReviewsSectionProps {
  id: number
}

const ReviewsSection: FC<ReviewsSectionProps> = ({ id }) => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(1)

  useEffect(() => {
    const requestRevies = async () => {
      const { results, total_pages } = await fetchReviews(id, page)
      setReviews(results)
      setTotalPage(total_pages)
    }
    requestRevies()
  }, [page])

  const prevPage = () => {
    if (page > 1) setPage(page - 1)
  }
  const nextPage = () => {
    if (page < totalPage) setPage(page + 1)
  }

  return (
    <div className="reviews-section">
      <Text fontSize='2xl' as='b'>Reviews</Text>
      <div className="no-reviews">
        {totalPage === 0 ? <Text fontSize='xl' as='i'>No reviews</Text> : null}
      </div>
      <div className="reviews">
        <Accordion defaultIndex={[0]} allowToggle>
          {
            reviews?.map(review => <ReviewDetails review={review} key={review.id}/>)
          }
        </Accordion>
      </div>
      <div className="pagination">
        <div className="prev" onClick={prevPage}>
          {page > 1 ? <AiOutlineArrowLeft className="arrow"/> : null}
        </div>
        <div className="next" onClick={nextPage}>
          {
            (totalPage > 1 && page !== totalPage)
              ? <AiOutlineArrowRight className="arrow"/>
              : null
          }
        </div>
        <div className="no-more-reviews">
          {totalPage === 1 ? <Text fontSize='xl' as='b'>No more reviews</Text> : null}
        </div>
      </div>
    </div>
  )
}

export default ReviewsSection
