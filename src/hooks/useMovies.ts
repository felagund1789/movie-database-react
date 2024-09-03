import axios from "axios";
import { useEffect, useState } from "react";
import { Movie, Response } from "../types";
const apiURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const useMovies = (search: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<Response<Movie>>(`${apiURL}?apikey=${apiKey}&s=${search}`)
      .then((res) => setMovies(res.data.Search))
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [search]);

  return { movies, isLoading, error };
};

export default useMovies;
