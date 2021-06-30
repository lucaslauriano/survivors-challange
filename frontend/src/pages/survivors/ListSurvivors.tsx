import {
  Td,
  Tr,
  Th,
  Tag,
  Box,
  Text,
  Icon,
  Thead,
  Table,
  Tbody,
  Button,
  Checkbox,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import {
  RiAlertFill,
  RiHeartPulseFill,
  RiUserSearchLine,
} from "react-icons/ri";

import SkeletonTBody from "../../components/SkeletonTable";
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
  const isLarge = useBreakpointValue({
    small: false,
    lg: true,
  });

  return (
    <>
      {!isLoading && isFetching ? (
        <SkeletonTBody />
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Th px={["4", "6"]} color="gray.300">
                <Checkbox colorScheme="yellow" />
              </Th>
              <Th px={["4", "6"]} color="gray.300">
                Survivor
              </Th>
              {/*   {isLarge && (
                <Th px={["4", "6"]} color="gray.300">
                  Created At
                </Th>
              )} */}
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
                  {/*       {isLarge && (
                    <Td>
                      <Text fontSize="12">{formatDate(item.createdAt)}</Text>
                    </Td>
                  )} */}

                  <Td>
                    <Box>
                      {item.infected ? (
                        <Tag colorScheme="red">
                          <Icon color="red.400" as={RiAlertFill} />
                          <Text ml={1} mt="2px">
                            Infected
                          </Text>
                        </Tag>
                      ) : (
                        <Tag colorScheme="green">
                          <Icon color="green.400" as={RiHeartPulseFill} />
                          <Text ml={1} mt="2px">
                            Healthy
                          </Text>
                        </Tag>
                      )}
                    </Box>
                  </Td>
                  <Td>
                    <Box>
                      <Link
                        as={`/survivors/${item.id}`}
                        href={`/survivors/${item.id}`}
                        passHref
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          color="gray.50"
                          colorScheme="gray"
                          leftIcon={<Icon as={RiUserSearchLine} />}
                          _hover={{
                            bgColor: "gray.800",
                            color: "gray.400",
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
    </>
  );
};

export default ListSurvivors;
