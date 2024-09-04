import {
  Box,
  Heading,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const multiline = useBreakpointValue({
    base: true,
    lg: false,
  });

  const searchInput = <SearchInput onSearch={onSearch} />;
  return (
    <>
      <HStack padding={2} justifyContent="space-between">
        <Image src={logo} boxSize={12} />
        <Heading>Movie Database</Heading>
        {!multiline && <Box flex={1}>{searchInput}</Box>}
        <ColorModeSwitch />
      </HStack>
      {multiline && (
        <Box paddingBottom={4} paddingX={5}>
          {searchInput}
        </Box>
      )}
    </>
  );
};

export default NavBar;
