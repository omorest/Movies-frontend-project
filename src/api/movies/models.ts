
export interface Movie {
  id: number
  title: string
  poster_path: string
}

export interface MovieDetails {
  id: number
  title: string
  poster_path: string
  overview: string
  genres: object[]
  budget: number
  revenue: number
  production_companies: object[]
  release_date: string
  status: string
}
