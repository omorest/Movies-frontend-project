import './DetailsPage.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL_IMAGES } from '../../../configs'
import { fetchCastMovies, fetchDetailsMovies } from '../../api'
import { CarouselCasts, Navbar } from '../../components'
import { Badge, Text } from '@chakra-ui/react'

const DetailsPage = () => {
  const { id } = useParams()
  const [details, setDetails] = useState<any[]>([])
  const [cast, setCast] = useState<any[]>([])
  const urlImage = `${BASE_URL_IMAGES}${details.poster_path}`

  useEffect(() => {
    fetchDetailsMovies(id as string).then((res: any[]) => setDetails(res))
    fetchCastMovies(id as string, 10).then((res: any[]) => setCast(res))
  }, [id])

  const genresBadges = details.genres?.map(({ name, id }: any) => {
    return <Badge colorScheme='blue' key={id} >{name}</Badge>
  })

  const productionCompanies = details.production_companies?.map(({ name, id }: any) => {
    return <Text fontSize='m' textAlign='left' key={id}>{ name }</Text>
  })

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
            <Text fontSize='xl' textAlign='left'><p className="overview">{details.overview}</p></Text>
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
