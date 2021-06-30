import { Box, Stack, Text } from "@chakra-ui/react";

interface NavItemProps {
  title: string;
  children: React.ReactNode;
}

export function NavItem({ title, children }: NavItemProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
