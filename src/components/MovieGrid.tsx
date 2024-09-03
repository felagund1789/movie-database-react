import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";
interface Props {
  search: string;
}

const MovieGrid = ({ search }: Props) => {
  const { movies, isLoading, error } = useMovies(search);

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
