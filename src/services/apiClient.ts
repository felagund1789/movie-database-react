import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../types";
const apiURL = import.meta.env.VITE_API_URL;
const apikey = import.meta.env.VITE_API_KEY;

const axiosInstance = axios.create({
  baseURL: apiURL,
  params: {
    apikey,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint?: string) {
    this.endpoint = endpoint || "";
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
