import {
  Flex,
  Text,
  Button,
  HStack,
  Box,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboar() {
  return (
    <Flex direction="column" h="100vh">
      <Navbar isLarge={true} />
      <Flex w="100%" px="6" mx="auto" as="header" maxWidth={1480}>
        <Sidebar isLarge={true} />

        <SimpleGrid flex="1" gap="4" minChildWidth={320} aling="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8}></Box>
          <Box></Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
