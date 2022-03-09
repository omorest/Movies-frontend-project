import './SearchInput.css'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '@chakra-ui/react'

interface SearchInputProps {
  onSearch: () => void
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const [value, setValue] = useState<string>('')
  const handlerChange = (event: any) => setValue(event.target.value)
  const navigate = useNavigate()
  const handlerEnter = (event: any) => {
    event.preventDefault()
    navigate('/search', { state: { inputValue: value } })
    onSearch()
  }

  return (
    <div className="search">
      <form onSubmit={handlerEnter}>
        <Input
          placeholder='Cast, movie, production'
          size='lg'
          focusBorderColor='blue.400'
          isFullWidth={false}
          width={'70%'}
          onChange={handlerChange}
          borderColor='blue.400'
        />
      </form>
    </div>
  )
}

export default SearchInput
