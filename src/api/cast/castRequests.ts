import { BASE_URL, KEY } from '../../../configs'
import { Cast } from './model'

export const fetchCast = async (url: string):Promise<Cast[]> => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((cast: any) => cast.profile_path !== null)
}

export const fetchCastMovies = async (id: string, amountCasts: number): Promise<Cast[]> => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
  const data = await fetch(url)
  const { cast } = await data.json()
  const castFiltered = cast.filter((element: any) => element.profile_path !== null && element.profile_path !== undefined)
  castFiltered.length = amountCasts
  return castFiltered
}
