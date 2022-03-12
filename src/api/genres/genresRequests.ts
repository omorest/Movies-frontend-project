import { BASE_URL, KEY } from '../../../configs'

export const fetchGenres = async (): Promise<string[]> => {
  const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`
  const data = await fetch(url)
  const { genres } = await data.json()
  return genres
}
