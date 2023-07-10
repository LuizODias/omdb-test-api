export interface Params {
  title: string,
  type?: 'movie' | 'serie'
}

export interface Rating {
  source: string,
  value: string
}

export interface MovieSerie {
  title: string, 
  year: string,
  runtime: string,
  genre: string,
  ratings: Rating[],
  poster: string,
  plot: string,
}

export interface API {
  Title: string,
  Plot: string,
  Actors: string,
  imdbRating: string,
  Poster: string
}
