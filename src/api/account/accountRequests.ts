import { BASE_URL, KEY } from '../../../configs'

export const fetchAccountId = async (sessionID: string) => {
  const urlParams = `${BASE_URL}/account?api_key=${KEY}&session_id=${sessionID}`
  const data = await fetch(urlParams)
  const { id } = await data.json()
  return id
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
