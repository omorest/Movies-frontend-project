import './DetailsPage.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL_IMAGES } from '../../../configs'
import { fetchAccountId, fetchCastMovies, fetchDetailsMovies, fetchFavouriteMovies, fetchPostFavouriteMovie } from '../../api'
import { CarouselCasts, Navbar } from '../../components'
import { Badge, Text } from '@chakra-ui/react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const DetailsPage = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [details, setDetails] = useState<any>()
  const [accountId, setAccountId] = useState('')
  const [cast, setCast] = useState<any[]>([])
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  const { id } = useParams()
  useEffect(() => {
    const isLogged = Boolean(localStorage.getItem('sessionId'))
    const request = async () => {
      setIsLoading(true)
      const detailsMovies = await fetchDetailsMovies(id as string)
      const castMovie = await fetchCastMovies(id as string, 10)
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

  if (isLoading) return <h2>Is loading</h2>

  const handlerFavouriteMovie = () => {
    fetchPostFavouriteMovie(localStorage.getItem('sessionId') as string, accountId, details.id as string, !isFavourite)
      .then((response) => {
        setIsFavourite(!isFavourite)
      })
      .catch((error) => {
        console.error(error)
        setIsFavourite(isFavourite)
      })
  }

  const urlImage = `${BASE_URL_IMAGES}${details.poster_path}`
  const genresBadges = details.genres?.map(({ name, id }: any) => <Badge colorScheme='blue' key={id} >{name}</Badge>)
  const productionCompanies = details.production_companies?.map(({ name, id }: any) => <Text fontSize='m' textAlign='left' key={id}>{ name }</Text>)
  const budget = details.budget?.toLocaleString()
  const revenue = details.revenue?.toLocaleString()

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container-details">
        <div className="header-details">
          <div className="main-info">
            <div className="title"><Text fontSize='5xl' as='b' textAlign='left'>{details.title}</Text></div>
            <Text fontSize='xl' textAlign='left' className="overview">{details.overview}</Text>
            {
              isLogged
                ? <div className="fav" onClick={handlerFavouriteMovie}>
                  <Text fontSize='5xl' as='b' textAlign='left'>
                    {isFavourite ? <BsHeartFill /> : <BsHeart/>}
                  </Text>
                </div>
                : null
            }
          </div>
          <div className="img">
            <img src={urlImage} alt={details.title} />
          </div>
        </div>
        <div className="generic-info">
          <div className="casts">
            <CarouselCasts title='Cast' isTypeGrid={true} listCasts={cast}/>
          </div>
          <div className="extra-info">
            <div className="release-date">
              <Text fontSize='xl' as='b' textAlign='left'>Release Date</Text>
              <Text fontSize='m' textAlign='left'>{details.release_date}</Text>
            </div>
            <div className="status">
              <Text fontSize='xl' as='b' textAlign='left'>Status</Text>
              <Badge colorScheme='purple'>{details.status}</Badge>
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
              <Text fontSize='lg' textAlign='left'>${budget}</Text>
            </div>
            <div className="revenue">
              <Text fontSize='xl' as='b' textAlign='left'>Revenue</Text>
              <Text fontSize='lg' textAlign='left'>${revenue}</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsPage
