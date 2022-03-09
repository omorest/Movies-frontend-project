import { BASE_URL, KEY } from '../../configs'
const urlFilterMovies = `${BASE_URL}/discover/movie?api_key=${KEY}`

export const fetchMovies = async (url: string) => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((movie: any) => movie.poster_path !== null)
}

export const fetchCasts = async (url: string) => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((cast: any) => cast.profile_path !== null)
}

export const fetchCompanies = async (url: string) => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((company: any) => company.logo_path !== null)
}

export const fetchGenres = async () => {
  const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`
  const data = await fetch(url)
  const { genres } = await data.json()
  return genres
}

export const fetchFilterMovies = async ({ genres, rate, releaseDate }: any) => {
  const urlParamGenres = (genres && genres.length > 0) ? `&with_genres=${genres.join(',')}` : ''
  const urlParamRate = rate ? `&vote_average.gte=${rate}` : ''
  const urlParamReleaseDate = releaseDate ? `&release_date.gte=${releaseDate}` : ''
  const url = `${urlFilterMovies}${urlParamGenres}${urlParamRate}${urlParamReleaseDate}`

  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((movie: any) => movie.poster_path !== null)
}
