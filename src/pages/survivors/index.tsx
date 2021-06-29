import { Box, Flex, Spinner, Heading, Divider } from "@chakra-ui/react";
import React, { useState } from "react";
import BlankPage from "../../components/BlankPage";
import Navbar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import ListSurvivors from "./ListSurvivors";
import { useSurvivors } from "../../hooks/useSurvivor";
import Pagination from "../../components/Pagination";

const Survivors = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error } = useSurvivors(page);

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
          ) : !!data.survivors && data.survivors.length ? (
            <>
              <ListSurvivors
                survivors={data.survivors}
                isLoading={isLoading}
                isFetching={isFetching}
              />
              <Pagination
                currentPage={page}
                onPageChange={setPage}
                totalCountItems={data.totalCount}
              />
            </>
          ) : (
            <BlankPage />
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Survivors;
