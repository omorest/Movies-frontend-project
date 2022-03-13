import './MainInfoDetails.css'
import { MovieDetails, TrailerMovie } from '../../../api/movies/models'
import { FC, useEffect, useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { Text } from '@chakra-ui/react'

interface MainInfoDetailsProps {
  details: MovieDetails,
  isFavourite: boolean,
  trailerMovie: TrailerMovie,
  onFavourite: () => void
}

const urlYoutube = 'https://www.youtube.com/watch?v='

const MainInfoDetails: FC<MainInfoDetailsProps> = ({ details, isFavourite, trailerMovie, onFavourite }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  useEffect(() => {
    const isLogged = Boolean(localStorage.getItem('sessionId'))
    setIsLogged(isLogged)
  }, [])

  return (
    <div className="main-info">
      <div className="title"><Text fontSize='5xl' as='b' textAlign='left'>{details?.title}</Text></div>
      <Text fontSize='xl' textAlign='left' className="overview">{details?.overview}</Text>
      {
        isLogged
          ? <div className="fav" onClick={onFavourite}>
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
