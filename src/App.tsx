import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import { useState } from "react";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import { SearchQuery, Type } from "./types";

function App() {
  const types: Type[] = [
    { name: "Movies", value: "movie" },
    { name: "Series", value: "series" },
    { name: "Games", value: "game" },
  ];
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    search: "",
    type: "movie",
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(text) => setSearchQuery({ ...searchQuery, search: text })}
        />
        <HStack paddingX={5}>
          {types.map((t) => (
            <Button
              key={t.value}
              isActive={searchQuery.type === t.value}
              onClick={() => setSearchQuery({ ...searchQuery, type: t.value })}
            >
              {t.name}
            </Button>
          ))}
        </HStack>
      </GridItem>
      <GridItem area="main">
        <MovieGrid searchQuery={searchQuery}></MovieGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
