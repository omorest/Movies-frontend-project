import './DiscoverPage.css'
import { useState } from 'react'
import { CarouselMovies, Navbar } from '../../components'
import FiltersMovies from '../../components/FiltersMovies/FiltersMovies'
import { fetchFilterMovies } from '../../api'
import { Text } from '@chakra-ui/react'

const DiscoverPage = () => {
  const [movies, setMovies] = useState<any[]>([])
  const handlerMovies = async (filters: any) => {
    const filteredMovies = await fetchFilterMovies(filters)
    setMovies(filteredMovies)
  }

  return (
    <div className="discover">
      <Navbar />
      <div className="text">
        <Text fontSize='3xl' as='b' textAlign='left'>Discover movies</Text>
      </div>
      <div className="container-discover">
        <div className="filters">
          <FiltersMovies onSearchFilterMovies={handlerMovies}/>
        </div>
        <div className="movies">
          <CarouselMovies isTypeGrid={true} listMovies={movies}/>
        </div>
      </div>
    </div>
  )
}

export default DiscoverPage
