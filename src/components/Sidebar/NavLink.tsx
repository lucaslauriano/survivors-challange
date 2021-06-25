import {
  Icon,
  Link,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  icon: React.ElementType;
}

export function NavLink({ icon, children, ...props }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
}
