import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import { Type } from "./types";

function App() {
  const types: Type[] = [
    { name: "Movies", value: "movie" },
    { name: "Series", value: "series" },
    { name: "Games", value: "game" },
  ];
  const [searchText, setSearchText] = useState("Robin Hood");
  const [type, setType] = useState<string>("movie");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(text) => setSearchText(text)} />
        <HStack paddingX={5}>
          {types.map((t) => (
            <Button
              key={t.value}
              isActive={type === t.value}
              onClick={() => setType(t.value)}
            >
              {t.name}
            </Button>
          ))}
        </HStack>
      </GridItem>
      <GridItem area="main">
        <MovieGrid search={searchText} type={type}></MovieGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
