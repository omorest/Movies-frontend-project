import './DetailsPage.css'
import { Card, Spacer } from '@nextui-org/react'
import { useLocation } from 'react-router-dom'
import { BASE_URL, BASE_URL_IMAGES, KEY } from '../../../configs'
import { Navbar } from '../../components'
import useFetchDetailsMovie from '../../hooks/useFetchDetailsMovie'

// const urlDetails = `${BASE_URL}/movie/popular?api_key=${KEY}`

const DetailsPage = () => {
  const location = useLocation()
  const {
    backdrop_path: backdropPath, poster_path: posterPath, title,
    original_title: originalTitle, release_date: releaseDate, genre_ids: genreIds,
    id, overview
  } = location.state.movie

  const details = useFetchDetailsMovie(`${BASE_URL}/movie/${id}?api_key=${KEY}`)
  const {
    budget, genres, production_companies: productionCompanies,
    revenue, status
  } = details
  // budget, revenue, status, production companies
  const urlImage = `${BASE_URL_IMAGES}${posterPath}`
  return (
    <>
      <Navbar></Navbar>
      <Spacer y={2}/>
      <h1>Details</h1>
      <div className="header">
        <div className="img">
          {/* <Card.Image
              objectFit='contain'
              src={urlImage}
              width='100%'
              height='100%'
              alt={title}
            // css={{ h: '300px' }}
            /> */}
          <img src={urlImage} alt={title} />
        </div>
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={'https://www.youtube.com/embed/19pkBDAWPE8'}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>

      {/* <h1>{backdropPath}</h1>
      <h1>{posterPath}</h1>
      <h1>{title}</h1>
      <h1>{originalTitle}</h1>
      <h1>{releaseDate}</h1>
      <h1>{overview}</h1>
      <h1>{budget}</h1> */}
      {/* <h1>{genres.map((element: any) => <h2>element.name</h2>)}</h1>} */}
      {/* <h1>{productionCompanies}</h1> */}
      {/* <h1>{revenue}</h1>
      <h1>{status}</h1> */}
    </>
  )
}

export default DetailsPage
