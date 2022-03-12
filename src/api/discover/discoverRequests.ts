import { urlFilterMovies } from '../urlsApi'

export const fetchFilterMovies = async ({ genres, rate, releaseDate }: any, page: number = 1) => {
  const urlParamGenres = (genres && genres.length > 0) ? `&with_genres=${genres.join(',')}` : ''
  const urlParamRate = rate ? `&vote_average.gte=${rate}` : ''
  const urlParamReleaseDate = releaseDate ? `&release_date.gte=${releaseDate}` : ''
  const url = `${urlFilterMovies}${urlParamGenres}${urlParamRate}${urlParamReleaseDate}&page=${page}`

  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((movie: any) => movie.poster_path !== null)
}
