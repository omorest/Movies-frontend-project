import { useEffect, useState } from 'react'
import { fetchDetailsMovies } from '../api'

const useFetchDetailsMovie = (url: string) => {
  const [listDetails, setListDetails] = useState([])

  useEffect(() => {
    const requestMovies = async () => {
      const details = await fetchDetailsMovies(url)
      setListDetails(details)
    }
    requestMovies().catch((err) => console.log(err))
  }, [])

  return listDetails
}

export default useFetchDetailsMovie
