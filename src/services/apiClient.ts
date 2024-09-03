import axios from "axios";
const apiURL = import.meta.env.VITE_API_URL;
const apikey = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: apiURL,
  params: {
    apikey,
  },
});
