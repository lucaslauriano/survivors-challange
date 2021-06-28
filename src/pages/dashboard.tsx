import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import AreaChart from "../components/AreaChart";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";

export default function Dashboar() {
  return (
    <Flex direction="column" h="100vh">
      <Navbar />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth={320} aling="flex-start">
          <AreaChart title="Inffefcteds - Week" />
          <AreaChart title="Inffefcteds - Month" />
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
