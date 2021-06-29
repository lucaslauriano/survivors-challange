import { Text, Flex, Stack } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  totalCountItems: number;
  itemsPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePages(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

const Pagination = ({
  totalCountItems,
  itemsPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) => {
  const lastPage = Math.ceil(totalCountItems / itemsPerPage);

  const previousPage =
    currentPage > 1
      ? generatePages(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPage =
    currentPage < lastPage
      ? generatePages(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

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

      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && <Text>...</Text>}
          </>
        )}

        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationItem
                key={page}
                number={page}
                onPageChange={onPageChange}
              />
            );
          })}

        <PaginationItem
          number={currentPage}
          isCurrent
          onPageChange={onPageChange}
        />

        {nextPage.length > 0 &&
          nextPage.map((page) => {
            return (
              <PaginationItem
                key={page}
                onPageChange={onPageChange}
                number={page}
              />
            );
          })}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <Text>...</Text>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Pagination;
