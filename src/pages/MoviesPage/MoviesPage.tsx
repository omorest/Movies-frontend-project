import './MoviesPage.css'
import { Button, Spacer } from '@nextui-org/react'
import { ReactElement, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BASE_URL, BASE_URL_IMAGES, KEY } from '../../../configs'
import { fetchMovies } from '../../api'
import { CardMovie, CarouselMovies, Navbar, SearchMovie, CardCast, CardCompany } from '../../components'

const urlSearchMovies = `${BASE_URL}/search/movie?api_key=${KEY}&page=1&query=`
const urlSearchCasts = `${BASE_URL}/search/person?api_key=${KEY}&page=1&query=`
const urlSearchCompanies = `${BASE_URL}/search/company?api_key=${KEY}&page=1&query=`

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [typeSection, setTypeSection] = useState('movies')
  const [list, setList] = useState<ReactElement[]>([])
  const [movies, setMovies] = useState([])
  const [casts, setCasts] = useState([])
  const [companies, setCompanies] = useState([])
  const location = useLocation()
  const { inputValue } = location.state

  useEffect(() => {
    const requestMovies = async () => {
      setIsLoading(true)
      const movies = await fetchMovies(urlSearchMovies + inputValue)
      const casts = await fetchMovies(urlSearchCasts + inputValue)
      const companies = await fetchMovies(urlSearchCompanies + inputValue)
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

  useEffect(() => {
    let listSelection = []
    if (typeSection === 'casts') {
      listSelection = casts?.map((cast: any) => {
        return <CardCast cast={cast} key={cast.id}/>
      })
    } else if (typeSection === 'companies') {
      listSelection = companies?.map((company: any) => {
        return <CardCompany company={company} key={company.id} />
      })
    } else {
      listSelection = movies?.map(({ title, id, poster_path: posterPath }) => {
        return <CardMovie pathPoster={`${BASE_URL_IMAGES}${posterPath}`} titleMovie={title} key={id} />
      })
    }
    setList(listSelection)
  }, [typeSection, isLoading])

  return (
    <>
      <Navbar></Navbar>
      <Spacer y={2}/>
      <SearchMovie />
      <Spacer y={2}/>
      <div className="buttons">
        <Button color="gradient" auto onClick={handlerMovies}>Movies</Button>
        <Button color="gradient" auto onClick={handlerCast}>Cast</Button>
        <Button color="gradient" auto onClick={handlerCompanies}>Companies</Button>
      </div>
      <CarouselMovies title={inputValue} isTypeGrid={false}>
        {list}
      </CarouselMovies>
      <Spacer y={2}/>
    </>
  )
}

export default MoviesPage
