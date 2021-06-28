import {
  Td,
  Tr,
  Flex,
  Table,
  Tbody,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";
import React from "react";

const SkeletonTBody = () => {
  return (
    <Table colorScheme="whiteAlpha">
      <Tbody>
        <Tr>
          <Td w="5%">
            <SkeletonCircle />
          </Td>
          <Td w="75%">
            <SkeletonText />
          </Td>

          <Td w="20%">
            <SkeletonText />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default SkeletonTBody;
