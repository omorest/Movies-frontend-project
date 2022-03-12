import { useEffect, useState } from 'react'
import { fetchAccountId, fetchFavouriteMovies } from '../../api'
import { Movie } from '../../api/movies/models'
import { CarouselMovies, Navbar } from '../../components'

const FavouritesPage = () => {
  const [favouriteMovies, setFavouriteMovies] = useState<Movie[]>([])

  useEffect(() => {
    const requestFavouriteMovies = async () => {
      const accountId = await fetchAccountId(localStorage.getItem('sessionId') as string)
      const movies = await fetchFavouriteMovies(localStorage.getItem('sessionId') as string, accountId)
      setFavouriteMovies(movies)
    }
    requestFavouriteMovies()
  }, [])

  return (
    <>
      <Navbar />
      <CarouselMovies title='Favourite Movies' listMovies={favouriteMovies} isTypeGrid={true}/>
    </>
  )
}

export default FavouritesPage
