import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";

function App() {
  const [searchText, setSearchText] = useState("Robin Hood");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(text) => setSearchText(text)} />
      </GridItem>
      <GridItem area="main">
        <MovieGrid search={searchText}></MovieGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
