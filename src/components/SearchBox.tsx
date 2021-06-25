import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchBox = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      py="2"
      px="8"
      ml="6"
      bg="gray.800"
      flex="1"
      color="gray.200"
      maxWidth={400}
      position="relative"
      alignSelf="center"
      borderRadius="full"
    >
      <Input
        px="4"
        mr="4"
        color="gray.50"
        variant="unstyled"
        ref={searchInputRef}
        placeholder="Search"
        _placeholder={{
          color: "gray.400",
        }}
      />
      <Icon as={RiSearch2Line} fontSize="20" mt="2px" />
    </Flex>
  );
};

export default SearchBox;
