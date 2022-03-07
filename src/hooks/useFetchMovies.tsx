import { useEffect, useState } from 'react'
import { fetchMovies } from '../api'

const useFetchMovies = (url: string) => {
  const [listMovies, setListMovies] = useState([])

  useEffect(() => {
    const requestMovies = async () => {
      const movies = await fetchMovies(url)
      setListMovies(movies)
    }
    requestMovies().catch((err) => console.log(err))
  }, [])

  return listMovies
}

export default useFetchMovies
