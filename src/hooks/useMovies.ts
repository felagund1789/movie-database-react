import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse, Movie, SearchQuery } from "../types";

const useMovies = (searchQuery: SearchQuery) =>
  useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", searchQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Movie>>("", {
          params: {
            type: searchQuery.type,
            s: searchQuery.search,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useMovies;
