import './DetailsPage.css'
import { fetchCastMovies, fetchDetailsMovies, fetchAccountId, fetchFavouriteMovies, fetchPostFavouriteMovie, fetchSimilarMovies } from '../../api/'
import { CarouselCasts, CarouselMovies, Navbar } from '../../components'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { BASE_URL_IMAGES } from '../../../configs'
import { Movie, MovieDetails } from '../../api/movies/models'
import { Badge, Spinner, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Cast } from '../../api/cast/model'

const DetailsPage = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [details, setDetails] = useState<MovieDetails>()
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([])
  const [accountId, setAccountId] = useState<number>()
  const [cast, setCast] = useState<Cast[]>([])
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  const { id } = useParams()
  useEffect(() => {
    const isLogged = Boolean(localStorage.getItem('sessionId'))
    const request = async () => {
      setIsLoading(true)
      const detailsMovies = await fetchDetailsMovies(id as string)
      const castMovie = await fetchCastMovies(id as string, 10)
      const similarMovies = await fetchSimilarMovies(id as string)
      setSimilarMovies(similarMovies)
      setDetails(detailsMovies)
      setCast(castMovie)
      setIsLogged(isLogged)
      if (isLogged) {
        const accountId = await fetchAccountId(localStorage.getItem('sessionId') as string)
        const favouriteMovies = await fetchFavouriteMovies(localStorage.getItem('sessionId') as string, accountId)
        const isFavouriteMovie = favouriteMovies.find((movie: any) => movie.id === detailsMovies.id)
        setAccountId(accountId)
        isFavouriteMovie ? setIsFavourite(true) : setIsFavourite(false)
      }
      setIsLoading(false)
    }
    request()
  }, [])

  if (isLoading) {
    return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      size='xl'
    />
  }

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

  const urlImage = `${BASE_URL_IMAGES}${details?.poster_path}`
  const genresBadges = details?.genres?.map(({ name, id }: any) => <Badge colorScheme='blue' key={id} >{name}</Badge>)
  const productionCompanies = details?.production_companies?.map(({ name, id }: any) => <Text fontSize='m' textAlign='left' key={id}>{ name }</Text>)
  const dollarFormatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  const budget = dollarFormatter.format(details?.budget || 0)
  const revenue = dollarFormatter.format(details?.revenue || 0)

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container-details">
        <div className="header-details">
          <div className="main-info">
            <div className="title"><Text fontSize='5xl' as='b' textAlign='left'>{details?.title}</Text></div>
            <Text fontSize='xl' textAlign='left' className="overview">{details?.overview}</Text>
            {
              isLogged
                ? <div className="fav" onClick={handlerFavouriteMovie}>
                  <Text fontSize='5xl' as='b' textAlign='left' cursor='pointer'>
                    {isFavourite ? <BsHeartFill /> : <BsHeart/>}
                  </Text>
                </div>
                : null
            }
          </div>
          <div className="img">
            <img src={urlImage} alt={details?.title} />
          </div>
        </div>
        <div className="generic-info">
          <div className="movies-cast">
            <div className="similar-movies">
              <CarouselMovies title='Similar movies' isTypeGrid={false} listMovies={similarMovies}/>
            </div>
            <div className="casts">
              <CarouselCasts title='Cast' isTypeGrid={true} listCasts={cast}/>
            </div>
          </div>
          <div className="extra-info">
            <div className="release-date">
              <Text fontSize='xl' as='b' textAlign='left'>Release Date</Text>
              <Text fontSize='m' textAlign='left'>{details?.release_date}</Text>
            </div>
            <div className="status">
              <Text fontSize='xl' as='b' textAlign='left'>Status</Text>
              <Badge colorScheme='purple'>{details?.status}</Badge>
            </div>
            <div className="genres">
              <Text fontSize='xl' as='b' textAlign='left'>Genres</Text>
              <div className="genres-badges">
                {genresBadges}
              </div>
            </div>
            <div className="production-companies">
              <Text fontSize='xl' as='b' textAlign='left'>Production companies</Text>
              {productionCompanies}
            </div>
            <div className="budget">
              <Text fontSize='xl' as='b' textAlign='left'>Budget</Text>
              <Text fontSize='lg' textAlign='left'>{budget}</Text>
            </div>
            <div className="revenue">
              <Text fontSize='xl' as='b' textAlign='left'>Revenue</Text>
              <Text fontSize='lg' textAlign='left'>{revenue}</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsPage
