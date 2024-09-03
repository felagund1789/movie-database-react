import { Grid, GridItem, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import { Movie, Response } from "./types";
const apiURL = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<Response<Movie>>(`${apiURL}?apikey=${apiKey}&s=Robin+Hood`)
      .then((res) => setMovies(res.data.Search))
      .catch((e) => setError(e.message));
  }, []);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        {error ? (
          <Text margin={5}>Error: {error}</Text>
        ) : (
          <MovieGrid movies={movies}></MovieGrid>
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
