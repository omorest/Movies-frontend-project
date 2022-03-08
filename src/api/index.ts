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
