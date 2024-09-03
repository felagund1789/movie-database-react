import { SimpleGrid } from "@chakra-ui/react";
import { Movie } from "../types";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

const MovieGrid = ({ movies }: Props) => {
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
