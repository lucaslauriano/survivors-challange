import React from "react";
import { Flex, Text, Button, HStack, Box, Avatar } from "@chakra-ui/react";
import SearchBox from "./SearchBox";

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
      <Text fontSize="2xl" fontWeight="bold" letterSpacing="tight" w="64">
        survivors
        <Text as="span" fontSize="2xl" ml="1" mt="1" color="yellow.500">
          ☣
        </Text>
      </Text>

      <Flex h="auto" width="100%" align="center" justifyContent="center">
        <SearchBox />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="6"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          {isLarge ? (
            <Flex align="center">
              <Box mr="4" textAlign="right">
                <Text fontSize="small">Leon S. Kennedy</Text>
                <Text color="gray.300" fontSize="smaller">
                  leon.kennedy@gmail.com
                </Text>
              </Box>
              <Avatar size="sm" name="Leon Kennedy" />
            </Flex>
          ) : (
            <Text width="100px">Hello, Leon</Text>
          )}
        </HStack>
        <Button
          w="57px"
          h="32px"
          border="2px"
          variant="outline"
          colorScheme="yellow"
        >
          Sair
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
