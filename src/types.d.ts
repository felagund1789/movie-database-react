export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie" | "series" | "game";
  Poster: string;
}

export interface Type {
  name: string;
  value: string;
}

export interface FetchResponse<T> {
  Search?: T[];
  totalResults?: string;
  Response: string;
  Error?: string;
}
