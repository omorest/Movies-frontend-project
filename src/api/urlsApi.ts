import { KEY } from '../../configs'

const BASE_URL = 'https://api.themoviedb.org/3'
// const BASE_URL_IMAGES = 'https://image.tmdb.org/t/p/w500'

export const urlSearchMovies = `${BASE_URL}/search/movie?api_key=${KEY}`
export const urlSearchCasts = `${BASE_URL}/search/person?api_key=${KEY}`
export const urlSearchCompanies = `${BASE_URL}/search/company?api_key=${KEY}`
export const urlPopularMovies = `${BASE_URL}/movie/popular?api_key=${KEY}`
export const urlRequestToken = `${BASE_URL}/authentication/token/new?api_key=${KEY}`
export const urlPostToken = `${BASE_URL}/authentication/session/new?api_key=${KEY}`
export const urlFavouritesMovies = `${BASE_URL}/account/favorite/movies?api_key=${KEY}`
export const urlPostFavouriteMovie = `${BASE_URL}/account/favorite?api_key=${KEY}`
export const urlFilterMovies = `${BASE_URL}/discover/movie?api_key=${KEY}`
