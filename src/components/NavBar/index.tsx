import React from "react";
import { Flex, Button, HStack } from "@chakra-ui/react";
import SearchBox from "./SearchBox";
import Profile from "./Profile";
import Logo from "./Logo";

interface NavbarProps {
  isLarge: boolean;
}
const Navbar = ({ isLarge }: NavbarProps) => {
  return (
    <Flex
      w="100%"
      h="20"
      as="header"
      px="6"
      mx="auto"
      align="center"
      maxWidth={1480}
      boxShadow="base"
    >
      <Logo isLarge={true} />

      <SearchBox />

      <Flex align="center" ml="auto">
        <HStack
          mx="8"
          pr="6"
          color="gray.300"
          spacing="8"
          borderColor="gray.700"
          borderRightWidth={1}
        >
          <Profile isLarge={true} />
        </HStack>
        <Button
          w="57px"
          h="32px"
          border="2px"
          variant="outline"
          color="yellow.500"
          colorScheme="yellow"
          _hover={{
            bgColor: "gray.800",
            color: "yellow.400",
          }}
        >
          Sair
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
