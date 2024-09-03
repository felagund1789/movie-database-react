import { Box, Button, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import useMovies from "../hooks/useMovies";
import { SearchQuery } from "../types";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

interface Props {
  searchQuery: SearchQuery;
}

const MovieGrid = ({ searchQuery }: Props) => {
  const skeletons = Array.from(Array(20).keys());
  const {
    data,
    isLoading,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMovies(searchQuery);

  if (error) return <Text margin={5}>Error: {error?.message}</Text>;

  return (
    <Box padding={5}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 6 }} spacing={5}>
        {isLoading &&
          skeletons.map((skeleton) => <MovieCardSkeleton key={skeleton} />)}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.Search?.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Flex justifyContent="center">
        {searchQuery.search && hasNextPage && (
          <Button marginY={5} onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default MovieGrid;
