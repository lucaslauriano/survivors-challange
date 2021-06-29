import React, { useState } from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Button,
  Heading,
  Divider,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import Link from "next/link";
import Navbar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Input from "../../components/Form/Input";
import { useMutation, useQuery } from "react-query";
import { api } from "../../utils/axios";
import { useRouter } from "next/router";
import { queryClient } from "../../services/queryClient";

interface SurvivorProps {
  isOpen: boolean;
  onClose: () => void;
}

const Survivor = ({ isOpen, onClose }: SurvivorProps) => {
  const router = useRouter();
  const { suvivorId } = router.query;

  const {
    data: survivor,
    isLoading,
    error,
  } = useQuery("survivors", async () => {
    const response = await api.get(`survivors/${suvivorId}`);
    return response.data.survivor;
  });

  const updateSurvivor = useMutation(
    async (id: number) => {
      const { data } = await api.put(`survivors/${id}`, {
        ...survivor,
        infected: true,
        created_at: new Date(),
      });

      return data.response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("survivors");
      },
    }
  );

  const handleUpdateSurvivor = async (id: number) => {
    await updateSurvivor.mutateAsync(id);
  };

  return (
    <Box>
      <Navbar />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={6} bg="gray.800" p="8">
          <Heading size="md" fontWeight="normal">
            View Survivors
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          {isLoading ? (
            <Spinner />
          ) : (
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                <Input
                  name="name"
                  label="Survivor's Name"
                  color="gray.50"
                  isDisabled={true}
                  value={survivor?.name}
                />
                <Input
                  name="email"
                  type="email"
                  color="gray.50"
                  value={survivor?.email}
                  label="Survivor's E-mail"
                  isDisabled={true}
                />
              </SimpleGrid>
            </VStack>
          )}

          <Flex mt="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Link href="/survivors" passHref>
                <Button colorScheme="whiteAlphs">Cancel</Button>
              </Link>
              <Button
                colorScheme="yellow"
                isDisabled={survivor?.infected}
                onClick={() => handleUpdateSurvivor(survivor.id)}
              >
                Mark as infected
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Survivor;
