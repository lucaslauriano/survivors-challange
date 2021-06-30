import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Center,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import Navbar from "../components/NavBar";
import React, { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import AuthFrame from "../components/AuthFrame";
import Input from "../components/Form/Input";
import AuthContext from "../contexts/AuthContext";
import { AuthFormData } from "../types/auth";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient();

export const authFormSchema = yup.object().shape({
  email: yup.string().required("E-mail is required").email("Invalid E-mail"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters."),
});

const App = () => {
  const { login, isAuthenticated } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(authFormSchema),
  });

  const handleAuth: SubmitHandler<AuthFormData> = async (values) => {
    await login(values.email, values.password);
  };

  const isLarge = useBreakpointValue({
    base: false,
    md: true,
  });

  const { errors } = formState;

  return (
    <Flex direction="column" W="100vw" h="100vh">
      <Flex>{isAuthenticated && <Navbar />}</Flex>
      <Flex mt="60px" direction={["column", "column", "row"]}>
        <Center w="100%" mb={["60px", "60px", "0"]}>
          <Box flex="1">
            <Flex justifyContent="center">
              <Heading ml="6" color="yellow.500" fontSize={["32px", "52px"]}>
                <Text
                  w="64"
                  fontSize={["2xl", "5xl"]}
                  fontWeight="bold"
                  color="gray.50"
                  letterSpacing="tight"
                >
                  survivors
                  <Text as="span" fontSize="4xl" ml="2" color="yellow.500">
                    ☣
                  </Text>
                </Text>
              </Heading>
            </Flex>
            <Flex mt="10" ml="16" justifyContent="center">
              {isLarge && <AuthFrame />}
            </Flex>
          </Box>
        </Center>
        <Center w="100%">
          <Flex
            w="100%"
            p="8"
            as="form"
            bg="gray.800"
            flexDir="column"
            maxWidth={360}
            borderRadius={6}
            onSubmit={handleSubmit(handleAuth)}
          >
            <Stack spacing="4">
              <Input
                id="email"
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
              <Input
                id="password"
                name="password"
                type="password"
                label={
                  <Flex>
                    <Text>Password </Text>
                  </Flex>
                }
                error={errors.password}
                {...register("password")}
              />
            </Stack>

            <Button
              mt="50px"
              bg="yellow.500"
              type="submit"
              color="white"
              colorScheme="yellow"
              isLoading={formState.isSubmitting}
              isFullWidth
              borderRadius={6}
            >
              Log In
            </Button>
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
};

export default App;
