import { fetchFavouriteMovies } from '../../api'
import { Movie, MovieDetails } from '../../api/movies/models'

export const searchMovie = async (favouriteMovies: Movie[], detailsMovies: MovieDetails, total_pages: number, accountId: number) => {
  let isFavouriteMovie = favouriteMovies.find((movie: any) => movie.id === detailsMovies?.id)
  if (!isFavouriteMovie) {
    for (let page = 2; page <= total_pages; page++) {
      const { results: favouriteMovies } = await fetchFavouriteMovies(localStorage.getItem('sessionId') as string, accountId, page)
      isFavouriteMovie = favouriteMovies.find((movie: any) => movie.id === detailsMovies?.id)
      if (isFavouriteMovie) break
    }
  }
  return isFavouriteMovie
}
