import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text fontSize="small">Leon S. Kennedy</Text>
        <Text color="gray.300" fontSize="smaller">
          leon.kennedy@gmail.com
        </Text>
      </Box>
      <Avatar size="sm" name="Leon Kennedy" />
    </Flex>
  );
};

export default Profile;
