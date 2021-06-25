import {
  Td,
  Tr,
  Th,
  Box,
  Flex,
  Text,
  Thead,
  Table,
  Tbody,
  Button,
  Spinner,
  Checkbox,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { RiUserSearchLine } from "react-icons/ri";
import SkeletonTBody from "../../components/SkeletonTable";
import Pagination from "../../components/Pagination";
import { Survivors } from "../../types/survivors";

interface ListSurvivorsProps {
  survivors?: Survivors[];
  isFetching?: boolean;
  isLoading?: boolean;
}

const ListSurvivors = ({
  isLoading,
  isFetching,
  survivors,
}: ListSurvivorsProps) => {
  const handleAttendSurvivors = async (id: number) => {};

  return (
    <Box mb="8">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Table colorScheme="whiteAlpha">
            {!isLoading && isFetching ? (
              <SkeletonTBody />
            ) : (
              <>
                <Thead>
                  <Tr>
                    <Th px="6" color="gray.300" width="8">
                      <Checkbox colorScheme="yellow" />
                    </Th>
                    <Th px="6" color="gray.300" width="8">
                      Survivor
                    </Th>
                    <Th px="6" color="gray.300" width="8">
                      Infected
                    </Th>
                    <Th px="6" color="gray.300" width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/*  {survivors?.map((item) => ( */}
                  <Tr>
                    <Td w="10%" px="6">
                      <Checkbox colorScheme="yellow" />
                    </Td>
                    <Td w="45%">
                      <Box>
                        <Text fontWeight="bold" color="gray.100">
                          Leon S. Kennedy
                          {/* {`${item.survivor.firstName} ${item.survivor.lastName} `} */}
                        </Text>
                        <Text fontSize="sm" color="gray.300">
                          leon.kennedy@gmail.com
                        </Text>
                      </Box>
                    </Td>
                    <Td w="40%">
                      <Box>
                        <Text fontSize="12">04 de Abril de 2021</Text>
                      </Box>
                    </Td>
                    <Td w="5%">
                      <Box>
                        <Button
                          size="sm"
                          variant="outline"
                          color="blue.200"
                          colorScheme="blue"
                          leftIcon={<Icon as={RiUserSearchLine} />}
                          _hover={{
                            bgColor: "gray.800",
                            color: "blue.400",
                          }}
                        >
                          View
                        </Button>
                      </Box>
                    </Td>
                  </Tr>
                  {/*      ))} */}
                </Tbody>
              </>
            )}
          </Table>
          <Pagination />
        </>
      )}
    </Box>
  );
};

export default ListSurvivors;
