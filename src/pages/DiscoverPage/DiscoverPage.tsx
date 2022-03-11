import './DiscoverPage.css'
import { useEffect, useState } from 'react'
import { CarouselMovies, Navbar } from '../../components'
import FiltersMovies from '../../components/FiltersMovies/FiltersMovies'
import { fetchFilterMovies } from '../../api'
import { Button, Text } from '@chakra-ui/react'

const DiscoverPage = () => {
  const [movies, setMovies] = useState<any[]>([])
  const [filters, setFilters] = useState()
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
      const firstMovies = await fetchFilterMovies({ genres: [], rate: 0, releaseDate: '' }, 1)
      setMovies(firstMovies)
      setFilters({ genres: [], rate: 0, releaseDate: '' })
    }
    getFirstMovies()
  }, [])

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
