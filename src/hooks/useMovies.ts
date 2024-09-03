import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/apiClient";
import { FetchResponse, Movie, SearchQuery } from "../types";

const apiClient = new APIClient<Movie>();

const useMovies = (searchQuery: SearchQuery) =>
  useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", searchQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          type: searchQuery.type,
          s: searchQuery.search,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useMovies;
