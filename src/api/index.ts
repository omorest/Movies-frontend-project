export const fetchMovies = async (url: string) => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results
}

export const fetchDetailsMovies = async (url: string) => {
  const data = await fetch(url)
  const results = await data.json()
  return results
}
