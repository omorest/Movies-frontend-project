
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

export interface TrailerMovie {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string,
  id: string,
}

export interface AuthorDetails {
  name: string
  username: string
  avatar_path: string
  rating: number
}

export interface Review {
  author: string
  author_details: AuthorDetails
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}
