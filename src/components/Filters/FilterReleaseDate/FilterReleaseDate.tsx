import './FilterReleaseDate.css'
import { FC } from 'react'

interface FilterReleaseDateProps {
  onFilterChange: (valueDate: string) => void
  dateValue?: string
}

const FilterReleaseDate: FC<FilterReleaseDateProps> = ({ onFilterChange, dateValue }) => {
  const handlerChange = (event: any) => onFilterChange(event.target.value)

  return (
    <div className="filter-release-date">
      <div className="text-genre">Release date</div>
      <input type="date" onChange={handlerChange} defaultValue={dateValue}/>
    </div>
  )
}

export default FilterReleaseDate
