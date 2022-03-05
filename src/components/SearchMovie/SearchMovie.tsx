import './SearchMovie.css'
import { FC, useState } from 'react'
import { Input } from '@nextui-org/react'
import { useNavigate } from 'react-router-dom'

const SearchMovie: FC<any> = () => {
  const [value, setValue] = useState<string>('')
  const handlerChange = (event: any) => setValue(event.target.value)
  const navigate = useNavigate()
  const handlerEnter = (event: any) => {
    event.preventDefault()
    navigate('/movies', { state: { inputValue: value } })
  }

  return (
    <div className="search">
      <form onSubmit={handlerEnter}>
        <Input clearable bordered
          className="input-search"
          placeholder="Cast, movie, production"
          color="primary"
          status='primary'
          width='300px'
          onChange={handlerChange}
        />
      </form>
    </div>
  )
}

export default SearchMovie
