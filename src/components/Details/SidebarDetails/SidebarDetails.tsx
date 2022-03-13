import './SidebarDetails.css'
import { MovieDetails } from '../../../api/movies/models'
import { Badge, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface SidebarDetailsProps {
  movieDetails: MovieDetails
}

const SidebarDetails: FC<SidebarDetailsProps> = ({ movieDetails }) => {
  const genresBadges = movieDetails?.genres?.map(({ name, id }: any) => <Badge colorScheme='blue' key={id} >{name}</Badge>)
  const productionCompanies = movieDetails?.production_companies?.map(({ name, id }: any) => <Text fontSize='m' textAlign='left' key={id}>{ name }</Text>)
  const dollarFormatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
  const budget = dollarFormatter.format(movieDetails?.budget || 0)
  const revenue = dollarFormatter.format(movieDetails?.revenue || 0)

  return (
    <div className="extra-info">
      <div className="release-date">
        <Text fontSize='xl' as='b' textAlign='left'>Release Date</Text>
        <Text fontSize='m' textAlign='left'>{movieDetails?.release_date}</Text>
      </div>
      <div className="status">
        <Text fontSize='xl' as='b' textAlign='left'>Status</Text>
        <Badge colorScheme='purple'>{movieDetails?.status}</Badge>
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
  )
}

export default SidebarDetails
