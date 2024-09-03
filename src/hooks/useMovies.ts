import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { FetchResponse, Movie } from "../types";

interface Props {
  search: string;
  type: string;
}

const useMovies = ({ search, type }: Props) =>
  useQuery<FetchResponse<Movie>, Error>({
    queryKey: ["movies", type, search],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Movie>>("", {
          params: {
            type,
            s: search,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useMovies;
