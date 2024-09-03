import { Box, Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding={2} justifyContent="space-between">
        <Image src={logo} boxSize={12} />
        <Heading>Movie Database</Heading>
        <Box flex={1}>
          <SearchInput onSearch={onSearch} />
        </Box>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
