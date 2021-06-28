import {
  Box,
  Flex,
  Spinner,
  Heading,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import BlankPage from "../../components/BlankPage";
import Navbar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import ListSurvivors from "./ListSurvivors";

const Survivors = () => {
  // const { data, isLoading, isFetching, error } = useInfecteds();

  const data = [];
  const isLoading = false;
  const isFetching = false;
  const isLarge = useBreakpointValue({
    base: false,
    md: true,
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/survivors")
      .then((response) => response.json())
      .then((data) => console.log("data", data));
  }, []);

  return (
    <Box>
      <Navbar />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={6} bg="gray.800" p="8">
          <Heading size="md" fontWeight="normal">
            Survivors
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          {isLoading ? (
            <Flex>
              <Spinner />
            </Flex>
          ) : /* !!data && data.length  */ true ? (
            <ListSurvivors isLoading={isLoading} isFetching={isFetching} />
          ) : (
            <BlankPage />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Survivors;
