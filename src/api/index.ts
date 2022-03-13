import { fetchAccountId, fetchFavouriteMovies, fetchPostFavouriteMovie } from './account/accountRequests'
import { fetchPostToken, fetchRequestToken } from './session/sessionRequests'
import { fetchDetailsMovies, fetchMovies, fetchReviews, fetchSimilarMovies, fetchTrailerMovie } from './movies/moviesRequests'
import { fetchCast, fetchCastMovies } from './cast/castRequests'
import { fetchCompanies } from './companies/companiesRequests'
import { fetchFilterMovies } from './discover/discoverRequests'
import { fetchGenres } from './genres/genresRequests'

export {
  fetchAccountId,
  fetchFavouriteMovies,
  fetchPostFavouriteMovie,
  fetchCast,
  fetchCastMovies,
  fetchCompanies,
  fetchFilterMovies,
  fetchGenres,
  fetchMovies,
  fetchSimilarMovies,
  fetchDetailsMovies,
  fetchRequestToken,
  fetchTrailerMovie,
  fetchReviews,
  fetchPostToken
}
