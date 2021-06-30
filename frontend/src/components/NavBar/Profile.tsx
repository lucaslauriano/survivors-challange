import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text fontSize="small">{user?.name}</Text>
        <Text color="gray.300" fontSze="smaller">
          {user?.email}
        </Text>
      </Box>
      <Avatar size="sm" name="Leon Kennedy" />
    </Flex>
  );
};

export default Profile;
