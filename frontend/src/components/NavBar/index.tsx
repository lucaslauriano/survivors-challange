import React, { useContext } from "react";
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
import { RiLogoutCircleRLine, RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../hooks/useSidebarDrawer";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
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

        {isAuthenticated && (
          <Flex align="center" ml="auto">
            <Button
              color="yellow.500"
              border="2px"
              onClick={logout}
              _hover={{
                bgColor: "gray.800",
                color: "yellow.400",
              }}
              variant="outline"
              alignSelf="flex-end"
              colorScheme="yellow"
            >
              <IconButton
                aria-label="Open navigation"
                icon={<Icon as={RiLogoutCircleRLine} fontSize="24" />}
                variant="unstyled"
                onClick={onOpen}
                mr="2"
                _focus={{
                  boxShadow: "none",
                }}
              />
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
