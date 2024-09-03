export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "game",
  Poster: string;
}

export interface Response<T> {
  Search: T[];
  totalResults: string;
  Response: string;
  Error: string;
}
