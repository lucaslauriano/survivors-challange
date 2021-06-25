import React from "react";
import { Flex, Text, Icon, Stack, Box, Link } from "@chakra-ui/react";
import SearchBox from "./SearchBox";
import { RiDashboardLine, RiUserHeartLine } from "react-icons/ri";

interface SidebarProps {
  isLarge: boolean;
}
const Sidebar = ({ isLarge }: SidebarProps) => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            GENERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" align="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" align="center">
              <Icon as={RiUserHeartLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Survivors
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
