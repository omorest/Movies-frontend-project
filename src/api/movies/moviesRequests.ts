import { BASE_URL, KEY } from '../../../configs'
import { FullMovies, Movie, MovieDetails, Reviews, TrailerMovie } from './models'

export const fetchMovies = async (url: string):Promise<FullMovies> => {
  const data = await fetch(url)
  const results = await data.json()
  results.results = results.results.filter((movie: any) => movie.poster_path !== null)
  return results
}

export const fetchSimilarMovies = async (id: string, amountMovies: number):Promise<Movie[]> => {
  const data = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${KEY}`)
  const { results } = await data.json()
  const resultsFiltered = results.filter((movie: any) => movie.poster_path !== null)
  resultsFiltered.length = amountMovies
  return resultsFiltered
}

export const fetchDetailsMovies = async (id: string): Promise<MovieDetails> => {
  const url = `${BASE_URL}/movie/${id}?api_key=${KEY}`
  const data = await fetch(url)
  const results = await data.json()
  return results
}

export const fetchTrailerMovie = async (id: number): Promise<TrailerMovie> => {
  const url = `${BASE_URL}/movie/${id}/videos?api_key=${KEY}`
  const data = await fetch(url)
  const { results } = await data.json()
  return results[0] || null
}

export const fetchReviews = async (id: number, page: number): Promise<Reviews> => {
  const url = `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&page=${page}`
  const data = await fetch(url)
  const results = await data.json()
  return results
}
