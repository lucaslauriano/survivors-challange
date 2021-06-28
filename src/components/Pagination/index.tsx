import { Text, Flex, Stack } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

const Pagination = () => {
  return (
    <Stack
      w="100%"
      mt="8"
      flex="1"
      align="center"
      justify={["center", "space-between"]}
      direction={["column", "row"]}
    >
      <Stack direction="row">
        <Text fontWeight="700">0 -</Text>
        <Text fontWeight="700">10 de</Text>
        <Text fontWeight="700">100</Text>
      </Stack>

      <Stack direction="row">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={2} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  );
};

export default Pagination;
