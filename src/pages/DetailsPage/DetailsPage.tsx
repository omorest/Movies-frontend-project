import './DetailsPage.css'
import { CarouselCasts, CarouselMovies, MainInfoDetails, Navbar, SidebarDetails } from '../../components'
import { fetchCastMovies, fetchDetailsMovies, fetchSimilarMovies } from '../../api/'
import { Movie, MovieDetails } from '../../api/movies/models'
import { useEffect, useState } from 'react'
import { BASE_URL_IMAGES } from '../../../configs'
import { Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { Cast } from '../../api/cast/model'

const DetailsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [details, setDetails] = useState<MovieDetails>()
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([])
  const [cast, setCast] = useState<Cast[]>([])
  const { id } = useParams()

  useEffect(() => {
    const request = async () => {
      setIsLoading(true)
      const detailsMovies = await fetchDetailsMovies(id as string)
      const castMovie = await fetchCastMovies(id as string, 10)
      const similarMovies = await fetchSimilarMovies(id as string, 5)
      setSimilarMovies(similarMovies)
      setDetails(detailsMovies)
      setCast(castMovie)
      setIsLoading(false)
    }
    request()
  }, [id])

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
          <MainInfoDetails details={details!}/>
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
      </div>
      <br />
      <br />
    </>
  )
}

export default DetailsPage
