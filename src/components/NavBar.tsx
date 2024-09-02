import { Heading, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack padding={2}>
      <Image src={logo} boxSize={16} />
      <Heading>Movie Database</Heading>
    </HStack>
  );
};

export default NavBar;
