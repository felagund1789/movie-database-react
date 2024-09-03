import { SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "../hooks/useMovies";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface Props {
  search: string;
  type: string;
}

const MovieGrid = ({ type, search }: Props) => {
  const skeletons = Array.from(Array(20).keys());
  const { data, isLoading, error } = useMovies({ search, type });

  if (search !== "" && (error || data?.Error))
    return <Text margin={5}>Error: {error?.message || data?.Error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 6 }}
      padding={5}
      spacing={5}
    >
      {isLoading
        ? skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)
        : data?.Search?.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
    </SimpleGrid>
  );
};

export default MovieGrid;
