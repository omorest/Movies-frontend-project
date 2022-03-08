import './SearchPage.css'
import { Button, Spacer } from '@nextui-org/react'
import { ReactElement, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BASE_URL, KEY } from '../../../configs'
import { fetchCasts, fetchCompanies, fetchMovies } from '../../api'
import { CarouselMovies, Navbar, SearchInput, CarouselCasts, CarouselCompanies } from '../../components'

const urlSearchMovies = `${BASE_URL}/search/movie?api_key=${KEY}`
const urlSearchCasts = `${BASE_URL}/search/person?api_key=${KEY}`
const urlSearchCompanies = `${BASE_URL}/search/company?api_key=${KEY}`

const SearchPage = () => {
  const [pageMovies, setPageMovies] = useState(1)
  const [pageCasts, setPageCasts] = useState(1)
  const [pageCompanies, setPageCompanies] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [typeSection, setTypeSection] = useState('movies')
  const [list, setList] = useState<ReactElement>()
  const [movies, setMovies] = useState<any[]>([])
  const [casts, setCasts] = useState<any[]>([])
  const [companies, setCompanies] = useState<any[]>([])
  const location = useLocation()
  const { inputValue } = location.state as any

  const urlParamsMovies = `&page=${pageMovies}&query=${inputValue}`
  const urlParamsCasts = `&page=${pageCasts}&query=${inputValue}`
  const urlParamsCompanies = `&page=${pageCompanies}&query=${inputValue}`

  useEffect(() => {
    const requestMovies = async () => {
      setIsLoading(true)
      const movies = await fetchMovies(urlSearchMovies + urlParamsMovies)
      const casts = await fetchCasts(urlSearchCasts + urlParamsCasts)
      const companies = await fetchCompanies(urlSearchCompanies + urlParamsCompanies)
      setMovies(movies)
      setCasts(casts)
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
    const newMovies = await fetchMovies(urlSearchMovies + urlParamsMovies)
    setMovies([...movies, ...newMovies])
  }

  const handlerNewCasts = async () => {
    setPageCasts(pageCasts + 1)
    const urlParamsCasts = `&page=${pageCasts + 1}&query=${inputValue}`
    const newCasts = await fetchCasts(urlSearchCasts + urlParamsCasts)
    setCasts([...casts, ...newCasts])
  }

  const handlerNewCompanies = async () => {
    setPageCompanies(pageCompanies + 1)
    const urlParamsCompanies = `&page=${pageCompanies + 1}&query=${inputValue}`
    const newCompanies = await fetchCompanies(urlSearchCompanies + urlParamsCompanies)
    setCompanies([...companies, ...newCompanies])
  }

  const section: any = {
    casts:
      <>
        <CarouselCasts listCasts={casts} title={inputValue} isTypeGrid={false} />
        <Spacer y={2}/>
        <Button color="gradient" auto onClick={handlerNewCasts} css={{ w: '100%' }}>Show more</Button>
      </>,
    companies:
      <>
        <CarouselCompanies listCompanies={companies} title={inputValue} isTypeGrid={false} />
        <Spacer y={2}/>
        <Button color="gradient" auto onClick={handlerNewCompanies} css={{ w: '100%' }}>Show more</Button>
      </>,
    movies:
      <>
        <CarouselMovies listMovies={movies} title={inputValue} isTypeGrid={false} />
        <Spacer y={2}/>
        <Button color="gradient" auto onClick={handlerNewMovies} css={{ w: '100%' }}>Show more</Button>
      </>
  }

  useEffect(() => {
    const listSelection = section[typeSection]
    if (!isLoading) setList(listSelection)
  }, [typeSection, isLoading, movies, casts, companies])

  if (isLoading) return <div>LOADING.....</div>

  return (
    <>
      <Navbar></Navbar>
      <Spacer y={2}/>
      <SearchInput />
      <Spacer y={2}/>
      <div className="buttons">
        <Button color="gradient" auto onClick={handlerMovies}>Movies</Button>
        <Button color="gradient" auto onClick={handlerCast}>Cast</Button>
        <Button color="gradient" auto onClick={handlerCompanies}>Companies</Button>
      </div>
      {list}
      <Spacer y={2}/>
    </>
  )
}

export default SearchPage
