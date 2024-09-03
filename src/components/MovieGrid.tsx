import { SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Movie, Response } from "../types";
import MovieCard from "./MovieCard";
const apiURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

interface Props {
  search: string;
}

const MovieGrid = ({ search }: Props) => {
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

  if (isLoading) return <Text margin={5}>Loading...</Text>;

  if (error) return <Text margin={5}>Error: {error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
      padding={5}
      spacing={5}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
