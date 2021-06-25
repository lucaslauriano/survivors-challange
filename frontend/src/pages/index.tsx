import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  Button,
  Center,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import Input from "../components/Form/Input";

const App = () => {
  const isLarge = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        w="100%"
        as="form"
        bg="gray.800"
        p="8"
        flexDir="column"
        maxWidth={360}
        borderRadius={6}
      >
        <Stack spacing="4">
          <Input id="email" name="email" type="email" label="E-mail" />
          <Input
            id="password"
            name="password"
            type="password"
            label={
              <Flex>
                <Text>Password </Text>
              </Flex>
            }
          />
        </Stack>

        <Button
          mt="16px"
          bg="yellow.500"
          type="submit"
          color="white"
          colorScheme="yellow"
          isFullWidth
          borderRadius={6}
        >
          Log In
        </Button>
      </Flex>
    </Flex>
  );
};

export default App;
