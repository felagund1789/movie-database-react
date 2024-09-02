import { Button, Grid, GridItem } from "@chakra-ui/react";
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
        <Button>Button</Button>
      </GridItem>
    </Grid>
  );
}

export default App;
