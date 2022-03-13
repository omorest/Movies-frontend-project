import './DetailsPage.css'
import { CarouselCasts, CarouselMovies, MainInfoDetails, Navbar, SidebarDetails } from '../../components'
import {
  fetchAccountId, fetchCastMovies,
  fetchDetailsMovies, fetchFavouriteMovies,
  fetchPostFavouriteMovie, fetchSimilarMovies,
  fetchTrailerMovie
} from '../../api/'
import { Movie, MovieDetails, TrailerMovie } from '../../api/movies/models'
import { useEffect, useState } from 'react'
import { BASE_URL_IMAGES } from '../../../configs'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Cast } from '../../api/cast/model'
import ReviewsSection from '../../components/Details/ReviewsSection/ReviewsSection'

const DetailsPage = () => {
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([])
  const [trailerMovie, setTrailerMovie] = useState<TrailerMovie>()
  const [isFavourite, setIsFavourite] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [details, setDetails] = useState<MovieDetails>()
  const [accountId, setAccountId] = useState<number>()
  const [cast, setCast] = useState<Cast[]>([])
  const { id } = useParams()

  useEffect(() => {
    const isLogged = Boolean(localStorage.getItem('sessionId'))
    const request = async () => {
      setIsLoading(true)
      const similarMovies = await fetchSimilarMovies(id as string, 5)
      const detailsMovies = await fetchDetailsMovies(id as string)
      const castMovie = await fetchCastMovies(id as string, 10)
      const trailer = await fetchTrailerMovie(Number(id))
      setSimilarMovies(similarMovies)
      setDetails(detailsMovies)
      setCast(castMovie)
      setTrailerMovie(trailer)
      if (isLogged) {
        const accountId = await fetchAccountId(localStorage.getItem('sessionId') as string)
        const favouriteMovies = await fetchFavouriteMovies(localStorage.getItem('sessionId') as string, accountId)
        const isFavouriteMovie = favouriteMovies.find((movie: any) => movie.id === detailsMovies?.id)
        setAccountId(accountId)
        isFavouriteMovie ? setIsFavourite(true) : setIsFavourite(false)
      }
      setIsLoading(false)
    }
    request()
  }, [id])

  const handlerFavouriteMovie = () => {
    fetchPostFavouriteMovie(localStorage.getItem('sessionId') as string, accountId!, details?.id!, !isFavourite)
      .then((response) => {
        setIsFavourite(!isFavourite)
      })
      .catch((error) => {
        console.error(error)
        setIsFavourite(isFavourite)
      })
  }

  if (isLoading) {
    return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      size='xl'
    />
  }

  const urlImage = `${BASE_URL_IMAGES}${details?.poster_path}`

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container-details">
        <div className="header-details">
          <MainInfoDetails
            details={details!}
            isFavourite={isFavourite}
            trailerMovie={trailerMovie!}
            onFavourite={handlerFavouriteMovie}
          />
          <div className="img">
            <img src={urlImage} alt={details?.title} />
          </div>
        </div>
        <div className="generic-info">
          <div className="movies-cast">
            <div className="casts">
              <CarouselCasts title='Cast' isTypeGrid={false} listCasts={cast}/>
            </div>
            <div className="similar-movies">
              <CarouselMovies title='Similar movies' isTypeGrid={false} listMovies={similarMovies}/>
            </div>
          </div>
          <SidebarDetails movieDetails={details!}/>
        </div>
        <div >
          <ReviewsSection id={Number(id)}/>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default DetailsPage
