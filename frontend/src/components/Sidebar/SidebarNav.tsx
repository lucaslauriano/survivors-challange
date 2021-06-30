import { Stack } from "@chakra-ui/react";
import { RiDashboardLine, RiUserHeartLine } from "react-icons/ri";
import { NavItem } from "./NavItem";
import { NavLink } from "./NavLink";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavItem title="GENERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/survivors" icon={RiUserHeartLine}>
          Survivors
        </NavLink>
      </NavItem>
    </Stack>
  );
}
