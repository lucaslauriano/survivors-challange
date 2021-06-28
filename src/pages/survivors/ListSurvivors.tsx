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
import Link from "next/link";
import { RiUserSearchLine } from "react-icons/ri";

import SkeletonTBody from "../../components/SkeletonTable";
import Pagination from "../../components/Pagination";
import { Survivors } from "../../types/survivors";
import { formatDate } from "../../utils/format";

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

  return (
    <>
      {!isLoading && isFetching ? (
        <SkeletonTBody />
      ) : (
        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th px={["4", "6"]} color="gray.300">
                <Checkbox colorScheme="yellow" />
              </Th>
              <Th px={["4", "6"]} color="gray.300">
                Survivor
              </Th>
              {isLarge && (
                <Th px={["4", "6"]} color="gray.300">
                  Created At
                </Th>
              )}
              <Th px={["4", "6"]} color="gray.300">
                Infected
              </Th>
              <Th px={["4", "6"]} color="gray.300"></Th>
            </Tr>
          </Thead>
          <Tbody>
            <>
              {survivors?.map((item) => (
                <Tr key={item.id}>
                  <Td px={["4", "4", "4", "6"]}>
                    <Checkbox colorScheme="yellow" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold" color="gray.100">
                        {item.name}
                      </Text>
                      <Text fontSize="sm" color="gray.300">
                        {item.email}
                      </Text>
                    </Box>
                  </Td>
                  {isLarge && (
                    <Td>
                      <Text fontSize="12">{formatDate(item.createdAt)}</Text>
                    </Td>
                  )}
                  <Td>
                    <Box>{item.infected ? <>Yes</> : <>No</>}</Box>
                  </Td>
                  <Td>
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
              ))}
            </>
          </Tbody>
        </Table>
      )}
      <Pagination />
    </>
  );
};

export default ListSurvivors;
