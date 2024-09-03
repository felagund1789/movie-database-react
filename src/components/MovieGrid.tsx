import { SimpleGrid, Text } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import useMovies from "../hooks/useMovies";
import MovieCardSkeleton from "./MovieCardSkeleton";
interface Props {
  search: string;
}

const MovieGrid = ({ search }: Props) => {
  const skeletons = Array.from(Array(20).keys());
  const { movies, isLoading, error } = useMovies(search);

  if (error) return <Text margin={5}>Error: {error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
      padding={5}
      spacing={5}
    >
      {isLoading
        ? skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)
        : movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
    </SimpleGrid>
  );
};

export default MovieGrid;
