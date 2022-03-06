import { FC, useState } from 'react'
import { Input } from '@nextui-org/react'

interface SearchProps {
  onSearch: (value: string) => void
}

const SearchMovie: FC<SearchProps> = ({ onSearch }) => {
  const [value, setValue] = useState<string>('')
  const handlerChange = (event: any) => setValue(event.target.value)
  const handlerEnter = (event: any) => {
    event.preventDefault()
    onSearch(value)
  }

  return (
    <div className="search">
      <form onSubmit={handlerEnter}>
        <Input clearable bordered
          placeholder="Cast, movie, production"
          color="primary"
          width='300px'
          onChange={handlerChange}
        />
      </form>

    </div>
  )
}

export default SearchMovie
