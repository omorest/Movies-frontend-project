import './SearchInput.css'
import { SearchIcon } from '@chakra-ui/icons'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

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
      <form onSubmit={handlerEnter} className="form">
        <InputGroup size='lg'>
          <InputLeftElement
            pointerEvents='none'
            children={<SearchIcon color='#171923' />}
          />
          <Input
            variant='flushed'
            placeholder='Cast, movie, production'
            // size='lg'
            focusBorderColor='#171923'
            onChange={handlerChange}
            borderColor='#171923'
            color='#171923'
          />
        </InputGroup>
      </form>
    </div>
  )
}

export default SearchInput
