import {
  Td,
  Tr,
  Th,
  Box,
  Text,
  Icon,
  Thead,
  Table,
  Tbody,
  Button,
  Spinner,
  Checkbox,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { RiUserSearchLine } from "react-icons/ri";
import SkeletonTBody from "../../components/SkeletonTable";
import Pagination from "../../components/Pagination";
import { Survivors } from "../../types/survivors";
import Link from "next/link";

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
  const isLarge = useBreakpointValue({
    small: false,
    lg: true,
  });

  const handleAddSurvivors = async (id: number) => {};
  return (
    <Box>
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
                    <Th px={["4", "4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="yellow" />
                    </Th>
                    <Th px={["4", "4", "4", "6"]} color="gray.300" width="8">
                      Survivor
                    </Th>
                    {isLarge && (
                      <Th px={["4", "4", "4", "6"]} color="gray.300" width="8">
                        Infected
                      </Th>
                    )}
                    <Th
                      px={["4", "4", "4", "6"]}
                      color="gray.300"
                      width="8"
                    ></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/*  {survivors?.map((item) => ( */}
                  <Tr>
                    <Td w="10%" px={["4", "4", "4", "6"]}>
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
                    {isLarge && (
                      <Td w="40%">
                        <Box>
                          <Text fontSize="12">04 de Abril de 2021</Text>
                        </Box>
                      </Td>
                    )}
                    <Td w="5%">
                      <Box>
                        <Link href="/survivors/view" passHref>
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
                        </Link>
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
