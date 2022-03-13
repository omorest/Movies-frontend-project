import { BASE_URL, KEY } from '../../../configs'
import { FullMovies } from '../movies/models'

export const fetchAccountId = async (sessionID: string): Promise<number> => {
  const urlParams = `${BASE_URL}/account?api_key=${KEY}&session_id=${sessionID}`
  const data = await fetch(urlParams)
  const { id } = await data.json()
  return id
}

// export const fetchFavouriteMovies = async (sessionId: string, accountId: number): Promise<Movie[]> => {
//   const urlParams = `${BASE_URL}/account/${accountId}/favorite/movies?api_key=${KEY}&session_id=${sessionId}`
//   const data = await fetch(urlParams)
//   const { results } = await data.json()
//   return results
// }
export const fetchFavouriteMovies = async (sessionId: string, accountId: number, page: number): Promise<FullMovies> => {
  const urlParams = `${BASE_URL}/account/${accountId}/favorite/movies?api_key=${KEY}&session_id=${sessionId}&page=${page}`
  const data = await fetch(urlParams)
  const results = await data.json()
  return results
}

export const fetchPostFavouriteMovie = async (sessionId: string, accountId: number, id: number, isFavourite: boolean) => {
  const urlParams = `&session_id=${sessionId}`
  const postData = {
    media_type: 'movie',
    media_id: id,
    favorite: isFavourite
  }
  const url = `${BASE_URL}/account/${accountId}/favorite?api_key=${KEY}${urlParams}`
  const response: any = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  return response
}
