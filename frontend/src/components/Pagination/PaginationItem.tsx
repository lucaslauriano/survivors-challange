import { Button } from "@chakra-ui/react";
interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

const PaginationItem = ({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) => {
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
        {number}
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
      onClick={() => onPageChange(number)}
      _hover={{
        bg: "gray.200",
        color: "gray.700",
        cursor: "default",
      }}
    >
      {number}
    </Button>
  );
};

export default PaginationItem;
