import { BASE_URL, KEY } from '../../../configs'
import { MovieDetails } from './models'

export const fetchMovies = async (url: string) => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((movie: any) => movie.poster_path !== null)
}

export const fetchDetailsMovies = async (id: string):Promise<MovieDetails> => {
  const url = `${BASE_URL}/movie/${id}?api_key=${KEY}`
  const data = await fetch(url)
  const results = await data.json()
  return results
}

export const fetchFavouriteMovies = async (sessionID: string, account_id: number) => {
  const urlParams = `${BASE_URL}/account/${account_id}/favorite/movies?api_key=${KEY}&session_id=${sessionID}`
  const data = await fetch(urlParams)
  const { results } = await data.json()
  return results
}

export const fetchPostFavouriteMovie = async (sessionID: string, account_id: string, id: string, isFavourite: boolean) => {
  const urlParams = `&session_id=${sessionID}`
  const postData = {
    media_type: 'movie',
    media_id: id,
    favorite: isFavourite
  }
  const url = `${BASE_URL}/account/${account_id}/favorite?api_key=${KEY}${urlParams}`
  const response: any = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })

  return response
}
