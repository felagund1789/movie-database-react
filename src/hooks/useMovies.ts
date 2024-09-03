import axios from "axios";
import { useEffect, useState } from "react";
import { Movie, Response } from "../types";
const apiURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

interface Props {
  search: string;
  type: string;
}

const useMovies = ({ search, type }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<Response<Movie>>(
        `${apiURL}?apikey=${apiKey}&s=${search}&type=${type}`
      )
      .then((res) => {
        if (res.data.Response === "True") {
          setMovies(res.data.Search);
          setError("");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((e) => setError(e.message))
      .finally(() => setIsLoading(false));
  }, [search, type]);

  return { movies, isLoading, error };
};

export default useMovies;
