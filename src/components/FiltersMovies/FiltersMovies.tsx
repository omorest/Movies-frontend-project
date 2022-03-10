import './FiltersMovies.css'
import FilterGenres from '../FilterGenres/FilterGenres'
import FilterRate from '../FilterRate/FilterRate'
import FilterReleaseDate from '../FilterReleaseDate/FilterReleaseDate'
import { FC, useState } from 'react'
import { Button } from '@chakra-ui/react'

interface FilterMoviesProps {
  onSearchFilterMovies: (filters: any) => void
}

const FiltersMovies: FC<FilterMoviesProps> = ({ onSearchFilterMovies }) => {
  const [genres, setGenres] = useState<string[]>([])
  const [rate, setRate] = useState<number>()
  const [date, setDate] = useState<string>()

  const handlerGenres = (valueGenres: string[]) => setGenres(valueGenres)
  const handlerRate = (valueRate: number) => setRate(valueRate)
  const handlerDate = (valueDate: string) => setDate(valueDate)

  const handlerSearch = () => onSearchFilterMovies({ genres, rate, releaseDate: date })

  return (
    <div className="filter-movies">
      <FilterGenres onFilterChange={handlerGenres}/>
      <FilterRate onFilterChange={handlerRate} sliderValue={rate}/>
      <FilterReleaseDate onFilterChange={handlerDate} dateValue={date}/>
      <Button colorScheme='blue' onClick={handlerSearch}>Search</Button>
    </div>
  )
}

export default FiltersMovies