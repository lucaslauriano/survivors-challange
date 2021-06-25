import { Flex, Box, Text, Avatar } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearch2Line } from "react-icons/ri";

interface ProfileProps {
  isLarge: boolean;
}

const Profile = ({ isLarge }: ProfileProps) => {
  return (
    <>
      {isLarge ? (
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text fontSize="small">Leon S. Kennedy</Text>
            <Text color="gray.300" fontSize="smaller">
              leon.kennedy@gmail.com
            </Text>
          </Box>
          <Avatar size="sm" name="Leon Kennedy" />
        </Flex>
      ) : (
        <Text width="100px">Hello, Leon</Text>
      )}
    </>
  );
};

export default Profile;
