import { Box, Flex, Spinner, Heading, Divider } from "@chakra-ui/react";
import React from "react";
import BlankPage from "../../components/BlankPage";
import Navbar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import ListSurvivors from "./ListSurvivors";
import { useSurvivors } from "../../hooks/useSurvivor";

const Survivors = () => {
  const { data, isLoading, isFetching, error } = useSurvivors();

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
            <Flex justify="center" align="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center" align="center">
              Failed!
            </Flex>
          ) : !!data && data.length ? (
            <ListSurvivors
              survivors={data}
              isLoading={isLoading}
              isFetching={isFetching}
            />
          ) : (
            <BlankPage />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Survivors;
