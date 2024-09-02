import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding={2} justifyContent="space-between">
      <HStack>
        <Image src={logo} boxSize={16} />
        <Heading>Movie Database</Heading>
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
