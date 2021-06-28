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
} from "@chakra-ui/react";
import { ptBR } from "date-fns/locale";
import { registerLocale } from "react-datepicker";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Link from "next/link";
import { api } from "../../utils/axios";
import { useInfecteds } from "../../hooks/useInfecteds";
import { queryClient } from "../index";
import Navbar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";
import Input from "../../components/Form/Input";

interface ScheduleConsultationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ConsultationFormData = {
  patient: number;
  date: string;
};

const ViewSurvivorModal = ({
  isOpen,
  onClose,
}: ScheduleConsultationsModalProps) => {
  const { data: inefctedsData } = useInfecteds();

  registerLocale("pt-BR", ptBR);

  const createConsultation = useMutation(
    async (values: ConsultationFormData) => {
      const consultation = {
        patientId: values.patient,
        date: startDate,
      };
      const response = await api.post("consultations", {
        ...consultation,
      });

      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("consultations");
        onClose && onClose();
      },
    }
  );
  const [startDate, setStartDate] = useState(new Date());
  const handleChangeData = (date) => {
    setStartDate(date);
  };
  const { register, handleSubmit, formState } = useForm();
  const handleSchecuelConsultation: SubmitHandler<ConsultationFormData> =
    async (values) => {
      if (values.patient && startDate) {
        createConsultation.mutateAsync(values);
      }
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

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Survivor's Name" />
              <Input name="email" type="email" label="Survivor's E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Password" />
              <Input
                name="passwordConfirmation"
                type="password"
                label="Confirmation"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Link href="/survivors" passHref>
                <Button colorScheme="whiteAlphs">Cancel</Button>
              </Link>
              <Button colorScheme="yellow">Infected</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ViewSurvivorModal;
