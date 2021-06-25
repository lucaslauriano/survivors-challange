import { Button } from "@chakra-ui/react";
interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
}

const PaginationItem = ({ isCurrent = false, number }: PaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="xs"
        width="2"
        fontSize="xs"
        disabled
        _disabled={{
          bg: "yellow.500",
          cursor: "default",
        }}
        colorScheme="yellow"
      >
        1
      </Button>
    );
  }

  return (
    <Button
      size="xs"
      width="2"
      fontSize="xs"
      bgColor="gray.700"
      colorScheme="gray"
      _hover={{
        bg: "gray.200",
        color: "gray.700",
        cursor: "default",
      }}
    >
      2
    </Button>
  );
};

export default PaginationItem;
