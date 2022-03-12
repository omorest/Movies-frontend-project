import './FiltersMovies.css'
import { FC, useState } from 'react'
import { Button, Text } from '@chakra-ui/react'
import { Filters } from '../../api/discover/model'
import FilterGenres from '../FilterGenres/FilterGenres'
import FilterRate from '../FilterRate/FilterRate'
import FilterReleaseDate from '../FilterReleaseDate/FilterReleaseDate'

interface FilterMoviesProps {
  onSearchFilterMovies: (filters: Filters) => void
}

const FiltersMovies: FC<FilterMoviesProps> = ({ onSearchFilterMovies }) => {
  const [genres, setGenres] = useState<string[]>([])
  const [rate, setRate] = useState<number>(0)
  const [date, setDate] = useState<string>()

  const handlerGenres = (valueGenres: string[]) => setGenres(valueGenres)
  const handlerRate = (valueRate: number) => setRate(valueRate)
  const handlerDate = (valueDate: string) => setDate(valueDate)

  const handlerSearch = () => onSearchFilterMovies({ genres, rate, releaseDate: date })

  return (
    <div className="filter-movies">
      <div className="text">
        <Text fontSize='2xl' as='b' textAlign='left'>Filters</Text>
      </div>
      <FilterGenres onFilterChange={handlerGenres}/>
      <FilterRate onFilterChange={handlerRate} sliderValue={rate}/>
      <FilterReleaseDate onFilterChange={handlerDate} dateValue={date}/>
      <Button colorScheme='blackAlpha' backgroundColor='#242424' onClick={handlerSearch}>Search</Button>
    </div>
  )
}

export default FiltersMovies
