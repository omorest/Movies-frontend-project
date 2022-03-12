import { BASE_URL, KEY } from '../../../configs'
import { Movie, MovieDetails } from './models'

export const fetchMovies = async (url: string):Promise<Movie[]> => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((movie: any) => movie.poster_path !== null)
}

export const fetchDetailsMovies = async (id: string): Promise<MovieDetails> => {
  const url = `${BASE_URL}/movie/${id}?api_key=${KEY}`
  const data = await fetch(url)
  const results = await data.json()
  return results
}
