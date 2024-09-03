import { Grid, GridItem } from "@chakra-ui/react";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";

function App() {
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
        <MovieGrid search={"Robin Hood"}></MovieGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
