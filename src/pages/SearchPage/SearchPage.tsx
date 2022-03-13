import './SearchPage.css'
import { CarouselMovies, Navbar, SearchInput, CarouselCasts, CarouselCompanies } from '../../components'
import { urlSearchCasts, urlSearchCompanies, urlSearchMovies } from '../../api/urlsApi'
import { fetchCast, fetchCompanies, fetchMovies } from '../../api'
import { ReactElement, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ButtonGroup, Button, Spinner } from '@chakra-ui/react'
import { Movie } from '../../api/movies/models'
import { Cast } from '../../api/cast/model'
import { Company } from '../../api/companies/model'

const SearchPage = () => {
  const [pageMovies, setPageMovies] = useState<number>(1)
  const [pageCasts, setPageCasts] = useState<number>(1)
  const [pageCompanies, setPageCompanies] = useState<number>(1)
  const [totalPageCast, setTotalPageCast] = useState<number>(1)
  const [totalPageCompanies, setTotalPageCompanies] = useState<number>(1)
  const [totalPageMovies, setTotalPageMovies] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [typeSection, setTypeSection] = useState('movies')
  const [list, setList] = useState<ReactElement>()
  const [movies, setMovies] = useState<Movie[]>([])
  const [casts, setCasts] = useState<Cast[]>([])
  const [companies, setCompanies] = useState<Company[]>([])
  const location = useLocation()
  const { inputValue } = location.state as any

  const urlParamsMovies = `&page=${pageMovies}&query=${inputValue}`
  const urlParamsCasts = `&page=${pageCasts}&query=${inputValue}`
  const urlParamsCompanies = `&page=${pageCompanies}&query=${inputValue}`

  useEffect(() => {
    const requestMovies = async () => {
      setIsLoading(true)
      const { results: movies, total_pages: totalPageMovies } = await fetchMovies(urlSearchMovies + urlParamsMovies)
      const { results, total_pages: totalPageCast } = await fetchCast(urlSearchCasts + urlParamsCasts)
      const { results: companies, total_pages: totalPageCompanies } = await fetchCompanies(urlSearchCompanies + urlParamsCompanies)
      setTotalPageCast(totalPageCast)
      setTotalPageCompanies(totalPageCompanies)
      setTotalPageMovies(totalPageMovies)
      setMovies(movies)
      setCasts(results)
      setCompanies(companies)
      setIsLoading(false)
    }
    requestMovies().catch((err) => console.log(err))
  }, [inputValue])

  const handlerCast = () => setTypeSection('casts')
  const handlerMovies = () => setTypeSection('movies')
  const handlerCompanies = () => setTypeSection('companies')

  const handlerNewMovies = async () => {
    setPageMovies(pageMovies + 1)
    const urlParamsMovies = `&page=${pageMovies + 1}&query=${inputValue}`
    const { results: newMovies } = await fetchMovies(urlSearchMovies + urlParamsMovies)
    setMovies([...movies, ...newMovies])
  }

  const handlerNewCasts = async () => {
    setPageCasts(pageCasts + 1)
    const urlParamsCasts = `&page=${pageCasts + 1}&query=${inputValue}`
    const { results: newCasts } = await fetchCast(urlSearchCasts + urlParamsCasts)
    setCasts([...casts, ...newCasts])
  }

  const handlerNewCompanies = async () => {
    setPageCompanies(pageCompanies + 1)
    const urlParamsCompanies = `&page=${pageCompanies + 1}&query=${inputValue}`
    const { results: newCompanies } = await fetchCompanies(urlSearchCompanies + urlParamsCompanies)
    setCompanies([...companies, ...newCompanies])
  }

  const handlerInitialStatePages = () => {
    setPageCompanies(1)
    setPageMovies(1)
    setPageCasts(1)
  }

  const section: any = {
    casts:
      <>
        <CarouselCasts listCasts={casts} title={inputValue} isTypeGrid={true} />
        <br/>
        {
          totalPageCast > 1 && pageCasts < totalPageCast
            ? <Button colorScheme="blackAlpha" backgroundColor="#171923" color="white" variant='solid' isFullWidth onClick={handlerNewCasts} >Show more</Button>
            : null
        }
        <br/>
      </>,
    companies:
      <>
        <CarouselCompanies listCompanies={companies} title={inputValue} isTypeGrid={true} />
        <br/>
        {
          totalPageCompanies > 1 && pageCompanies < totalPageCompanies
            ? <Button colorScheme="blackAlpha" backgroundColor="#171923" color="white" variant='solid' isFullWidth onClick={handlerNewCompanies} >Show more</Button>
            : null
        }
        <br/>
      </>,
    movies:
      <>
        <CarouselMovies listMovies={movies} title={inputValue} isTypeGrid={true} />
        <br />
        {
          totalPageMovies > 1 && pageMovies < totalPageMovies
            ? <Button colorScheme="blackAlpha" backgroundColor="#171923" color="white" variant='solid' isFullWidth onClick={handlerNewMovies} >Show more</Button>
            : null
        }
        <br />
      </>
  }

  useEffect(() => {
    const listSelection = section[typeSection]
    if (!isLoading) setList(listSelection)
  }, [typeSection, isLoading, movies, casts, companies])

  if (isLoading) {
    return <Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      size='xl'
    />
  }

  return (
    <>
      <Navbar></Navbar>
      <br />
      <SearchInput onSearch={handlerInitialStatePages}/>
      <br />
      <br />
      <div className="buttons">
        <ButtonGroup variant='solid' spacing='6'>
          <Button colorScheme="blackAlpha" backgroundColor="#171923" onClick={handlerMovies}>Movies</Button>
          <Button colorScheme="blackAlpha" backgroundColor="#171923" onClick={handlerCast}>Casts</Button>
          <Button colorScheme="blackAlpha" backgroundColor="#171923" onClick={handlerCompanies}>Companies</Button>
        </ButtonGroup>
      </div>
      <br />
      {list}
      <br />
    </>
  )
}

export default SearchPage
