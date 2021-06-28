import React from "react";
import {
  Flex,
  Icon,
  Button,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import SearchBox from "./SearchBox";
import Profile from "./Profile";
import Logo from "./Logo";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../hooks/useSidebarDrawer";

const Navbar = () => {
  const { onOpen } = useSidebarDrawer();
  const isLarge = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      h="20"
      as="header"
      px="6"
      mx="auto"
      align="center"
      maxWidth={1480}
      boxShadow="base"
    >
      {!isLarge && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} fontSize="24" />}
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          _focus={{
            boxShadow: "none",
          }}
        />
      )}
      {isLarge && <Logo />}
      <SearchBox />

      <Flex align="center" ml="auto">
        {isLarge && (
          <HStack
            mx="8"
            pr="8"
            color="gray.300"
            spacing="8"
            borderColor="gray.700"
            borderRightWidth={1}
          >
            <Profile />
          </HStack>
        )}
        <Button
          w="57px"
          h="32px"
          color="yellow.500"
          border="2px"
          _hover={{
            bgColor: "gray.800",
            color: "yellow.400",
          }}
          variant="outline"
          alignSelf="flex-end"
          colorScheme="yellow"
        >
          Sair
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
