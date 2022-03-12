import './MainInfoDetails.css'
import { fetchAccountId, fetchFavouriteMovies, fetchPostFavouriteMovie, fetchTrailerMovie } from '../../../api'
import { MovieDetails, TrailerMovie } from '../../../api/movies/models'
import { FC, useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { Text } from '@chakra-ui/react'

interface MainInfoDetailsProps {
  details: MovieDetails
}

const urlYoutube = 'https://www.youtube.com/watch?v='

const MainInfoDetails: FC<MainInfoDetailsProps> = ({ details }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  const [accountId, setAccountId] = useState<number>()
  const [isFavourite, setIsFavourite] = useState<boolean>(false)
  const [trailerMovie, setTrailerMovie] = useState<TrailerMovie>()

  useEffect(() => {
    const isLogged = Boolean(localStorage.getItem('sessionId'))
    const request = async () => {
      const trailer = await fetchTrailerMovie(details.id)
      setTrailerMovie(trailer)
      setIsLogged(isLogged)
      if (isLogged) {
        const accountId = await fetchAccountId(localStorage.getItem('sessionId') as string)
        const favouriteMovies = await fetchFavouriteMovies(localStorage.getItem('sessionId') as string, accountId)
        const isFavouriteMovie = favouriteMovies.find((movie: any) => movie.id === details.id)
        setAccountId(accountId)
        isFavouriteMovie ? setIsFavourite(true) : setIsFavourite(false)
      }
    }
    request()
  }, [details.id])

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

  return (
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
      {
        trailerMovie
          ? <div className="title">
            <a href={`${urlYoutube}${trailerMovie.key}`} target="_blank" rel="noreferrer">
              <Text fontSize='2xl' as='b' textAlign='left'>Watch trailer</Text>
            </a>
          </div>
          : null
      }
    </div>
  )
}

export default MainInfoDetails
