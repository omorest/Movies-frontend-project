import { fetchAccountId, fetchFavouriteMovies } from '../../api/'
import { CarouselMovies, Navbar } from '../../components'
import { useEffect, useState } from 'react'
import { Movie } from '../../api/movies/models'
import { Button } from '@chakra-ui/react'

const FavouritesPage = () => {
  const [favouriteMovies, setFavouriteMovies] = useState<Movie[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(1)

  useEffect(() => {
    const requestFavouriteMovies = async () => {
      const accountId = await fetchAccountId(localStorage.getItem('sessionId') as string)
      const { results, total_pages } = await fetchFavouriteMovies(localStorage.getItem('sessionId') as string, accountId, page)
      setFavouriteMovies([...favouriteMovies, ...results])
      setTotalPage(total_pages)
    }
    requestFavouriteMovies()
  }, [page])

  const handlerMoreMovies = () => {
    if (totalPage > 1) {
      setPage(page + 1)
    }
  }

  return (
    <>
      <Navbar />
      <CarouselMovies title='Favourite Movies' listMovies={favouriteMovies} isTypeGrid={true}/>
      <br />
      {
        totalPage > 1 && page < totalPage
          ? <Button colorScheme="blackAlpha" backgroundColor="#171923" color="white" variant='solid' isFullWidth onClick={handlerMoreMovies} >Show more</Button>
          : null
      }
      <br />
      <br />
      <br />
    </>
  )
}

export default FavouritesPage
