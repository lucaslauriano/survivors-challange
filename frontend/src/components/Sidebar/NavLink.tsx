import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../ActiveLink";
interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: React.ElementType;
  href: string;
}

export function NavLink({ icon, children, href, ...props }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
