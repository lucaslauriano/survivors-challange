import {
  Box,
  Flex,
  Icon,
  Button,
  Spinner,
  Heading,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import BlankPage from "../../components/BlankPage";
import Navbar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import ListSurvivors from "./ListSurvivors";
import { RiUserAddLine } from "react-icons/ri";

const Survivors = () => {
  // const { data, isLoading, isFetching, error } = useInfecteds();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const data = [];
  const isLoading = false;
  const isFetching = false;

  const isLarge = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box>
      <Navbar isLarge={true} />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar isLarge={true} />

        <Box flex="1" borderRadius={6} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Survivors
            </Heading>
            <Button
              size="sm"
              variant="solid"
              onClick={onOpen}
              leftIcon={<Icon as={RiUserAddLine} />}
              colorScheme="yellow"
            >
              Infected
            </Button>
          </Flex>

          {isLoading ? (
            <Flex>
              <Spinner />
            </Flex>
          ) : /* !!data && data.length  */ true ? (
            <ListSurvivors isLoading={isLoading} isFetching={isFetching} />
          ) : (
            <BlankPage />
          )}

          <Button
            size="sm"
            variant="outline"
            color="yellow.500"
            colorScheme="yellow"
            _hover={{
              bgColor: "gray.800",
              color: "yellow.400",
            }}
          >
            Help
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Survivors;
