import { BASE_URL, KEY } from '../../configs'
import { urlPostToken, urlRequestToken } from './urlsApi'

const urlFilterMovies = `${BASE_URL}/discover/movie?api_key=${KEY}`

export const fetchMovies = async (url: string) => {
  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((movie: any) => movie.poster_path !== null)
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

export const fetchGenres = async () => {
  const url = `${BASE_URL}/genre/movie/list?api_key=${KEY}`
  const data = await fetch(url)
  const { genres } = await data.json()
  return genres
}

export const fetchFilterMovies = async ({ genres, rate, releaseDate }: any, page: number = 1) => {
  const urlParamGenres = (genres && genres.length > 0) ? `&with_genres=${genres.join(',')}` : ''
  const urlParamRate = rate ? `&vote_average.gte=${rate}` : ''
  const urlParamReleaseDate = releaseDate ? `&release_date.gte=${releaseDate}` : ''
  const url = `${urlFilterMovies}${urlParamGenres}${urlParamRate}${urlParamReleaseDate}&page=${page}`

  const data = await fetch(url)
  const { results } = await data.json()
  return results.filter((movie: any) => movie.poster_path !== null)
}

export const fetchDetailsMovies = async (id: string) => {
  const url = `${BASE_URL}/movie/${id}?api_key=${KEY}`
  const data = await fetch(url)
  const results = await data.json()
  return results
}

export const fetchCastMovies = async (id: string, amountCasts: number) => {
  const url = `${BASE_URL}/movie/${id}/credits?api_key=${KEY}`
  const data = await fetch(url)
  const { cast } = await data.json()
  const castFiltered = cast.filter((element: any) => element.profile_path !== null && element.profile_path !== undefined)
  castFiltered.length = amountCasts
  return castFiltered
}

export const fetchRequestToken = async () => {
  const data = await fetch(urlRequestToken)
  const { request_token: requestToken } = await data.json()
  return requestToken
}

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

export const fetchPostToken = async (token: string) => {
  const postData = {
    request_token: token
  }

  const response: any = await fetch(urlPostToken, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
  })

  const { session_id: sessionId } = await response.json()
  return sessionId
}
