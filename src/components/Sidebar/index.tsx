import React from "react";
import { Text, Icon, Stack, Box, Link } from "@chakra-ui/react";
import { RiDashboardLine, RiUserHeartLine } from "react-icons/ri";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";

interface SidebarProps {
  isLarge: boolean;
}
const Sidebar = ({ isLarge }: SidebarProps) => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavItem title="GENERAL">
          <NavLink icon={RiUserHeartLine}>Dashboard</NavLink>
          <NavLink icon={RiUserHeartLine}>Survivors</NavLink>
        </NavItem>
      </Stack>
    </Box>
  );
};

export default Sidebar;
