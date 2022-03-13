import { BASE_URL, KEY } from '../../../configs'
import { Cast, FullCast } from './model'

export const fetchCast = async (url: string):Promise<FullCast> => {
  const data = await fetch(url)
  const results = await data.json()
  results.results = results.results.filter((cast: any) => cast.profile_path !== null)
  return results
}

export const fetchCastMovies = async (id: string, amountCasts: number): Promise<Cast[]> => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
  const data = await fetch(url)
  const { cast } = await data.json()
  const castFiltered = cast.filter((element: any) => element.profile_path !== null && element.profile_path !== undefined)
  castFiltered.length = amountCasts
  return castFiltered
}
