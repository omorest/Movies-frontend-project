import { BASE_URL, KEY } from '../../configs'

export const fetchMovies = async (url: string) => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((element: any) => element.poster_path !== null)
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

export const fetchDetailsMovies = async (id: string) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${KEY}`
  const data = await fetch(url)
  const results = await data.json()
  return results
}

export const fetchCastMovies = async (id: string, amountCasts: number) => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
  console.log(url)
  const data = await fetch(url)
  const { cast } = await data.json()
  console.log({ cast })
  cast.length = amountCasts
  return cast
}
