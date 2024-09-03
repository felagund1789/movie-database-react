import { Grid, GridItem } from "@chakra-ui/react";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import { Movie } from "./types";

function App() {
  const movies: Movie[] = [
    {
      Title: "Robin Hood",
      Year: "2010",
      imdbID: "tt0955308",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5NzcwMzEwOF5BMl5BanBnXkFtZTcwNjg5MTgwMw@@._V1_SX300.jpg",
    },
    {
      Title: "Robin Hood: Prince of Thieves",
      Year: "1991",
      imdbID: "tt0102798",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTUyMjA5NDktNWY5Ny00ZWU4LWE4Y2ItMDYzZTk0NzU3ZWMyXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Robin Hood",
      Year: "1973",
      imdbID: "tt0070608",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjUwMzhkM2ItMTU2OC00OTQ5LWJlMDUtMzRmYjc0NDUyNGVhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Robin Hood: Men in Tights",
      Year: "1993",
      imdbID: "tt0107977",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZGYyNmU2NmEtNGU1ZS00YjFkLWI0MWQtZjU2MmUxZDAyN2UxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Robin Hood",
      Year: "2018",
      imdbID: "tt4532826",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTRhODA2M2QtNTgwNi00ZWUyLTlhMDQtN2M2OGEwNTU3NGRjXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Adventures of Robin Hood",
      Year: "1938",
      imdbID: "tt0029843",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjZjOTU3MTMtYTM5YS00YjZmLThmNmMtODcwOTM1NmRiMWM2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
    },
    {
      Title: "Paradise Lost: The Child Murders at Robin Hood Hills",
      Year: "1996",
      imdbID: "tt0117293",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EzNWNlZGYtMjQ1YS00YTI4LThkYTctNjRjYzI1NDdmNjEyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "Robin Hood",
      Year: "1991",
      imdbID: "tt0102797",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjdkMzUyMTAtNzk0MC00OTUxLWFhMWMtYTgxY2YyMWJmMzk3XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX300.jpg",
    },
    {
      Title: "Robin Hood: The Rebellion",
      Year: "2018",
      imdbID: "tt7052244",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2RmZTAwNDMtM2FjMi00ZjllLThkNjktNTM2MWMzYmFiMzBjXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Robin Hood Daffy",
      Year: "1958",
      imdbID: "tt0052139",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRhZDczZTQtMTVmMy00YWMwLTgzMjctODM4OTNhMzRhN2Q2XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
    },
  ];
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
        <MovieGrid movies={movies}></MovieGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
