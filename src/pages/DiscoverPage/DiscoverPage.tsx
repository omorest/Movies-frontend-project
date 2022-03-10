import './DiscoverPage.css'
import { useState } from 'react'
import { CarouselMovies, Navbar } from '../../components'
import FiltersMovies from '../../components/FiltersMovies/FiltersMovies'
import { fetchFilterMovies } from '../../api'

const DiscoverPage = () => {
  const [movies, setMovies] = useState<any[]>([])
  const handlerMovies = async (filters: any) => {
    const filteredMovies = await fetchFilterMovies(filters)
    console.log(filteredMovies)
    setMovies(filteredMovies)
  }

  return (
    <>
      <Navbar />

      <div className="container-discover">
        <div className="filters">
          <FiltersMovies onSearchFilterMovies={handlerMovies}/>
        </div>
        <div className="movies">
          <CarouselMovies isTypeGrid={true} listMovies={movies}/>
        </div>
      </div>
    </>
  )
}

export default DiscoverPage
