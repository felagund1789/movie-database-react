import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { FetchResponse, Movie, SearchQuery } from "../types";

const apiClient = new APIClient<Movie>();

const useMovies = (searchQuery: SearchQuery) =>
  useInfiniteQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", searchQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          type: searchQuery.type,
          s: searchQuery.search,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const pages = Math.ceil(parseInt(lastPage.totalResults) / 10);
      return pages === allPages.length ? undefined : allPages.length + 1;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useMovies;
