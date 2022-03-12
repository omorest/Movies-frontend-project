import './DiscoverPage.css'
import { CarouselMovies, FiltersMovies, Navbar } from '../../components'
import { useEffect, useState } from 'react'
import { fetchFilterMovies } from '../../api'
import { Button, Spinner, Text } from '@chakra-ui/react'
import { Filters } from '../../api/discover/model'
import { Movie } from '../../api/movies/models'

const DiscoverPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState<Movie[]>([])
  const [filters, setFilters] = useState<Filters>()
  const [pageMovies, setPageMovies] = useState(1)

  const handlerMovies = async (filters: any) => {
    setFilters(filters)
    setPageMovies(1)
    const filteredMovies = await fetchFilterMovies(filters, 1)
    setMovies(filteredMovies)
  }

  const handlerNewMovies = async () => {
    const filteredMovies = await fetchFilterMovies(filters, pageMovies + 1)
    console.log(filteredMovies)
    setPageMovies(pageMovies + 1)
    setMovies([...movies, ...filteredMovies])
  }

  useEffect(() => {
    const getFirstMovies = async () => {
      setIsLoading(true)
      const firstMovies = await fetchFilterMovies({ genres: [], rate: 0, releaseDate: '' }, 1)
      setMovies(firstMovies)
      setFilters({ genres: [], rate: 0, releaseDate: '' })
      setIsLoading(false)
    }
    getFirstMovies()
  }, [])

  if (isLoading) {
    return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      size='xl'
    />
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
          <br />
          <Button colorScheme="blackAlpha" backgroundColor="#171923" color="white" variant='solid' isFullWidth onClick={handlerNewMovies} >Show more</Button>
          <br />
        </div>
      </div>
    </div>
  )
}

export default DiscoverPage
