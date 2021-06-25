import {
  Flex,
  Text,
  Button,
  HStack,
  Box,
  Avatar,
  SimpleGrid,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chart from "react-apexcharts";

const series = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 61, 18, 109],
  },
];
const options = {};

export default function Dashboar() {
  return (
    <Flex direction="column" h="100vh">
      <Navbar isLarge={true} />
      <Flex w="100%" px="6" mx="auto" as="header" maxWidth={1480}>
        <Sidebar isLarge={true} />

        <SimpleGrid flex="1" gap="4" minChildWidth={320} aling="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Infecteds - Week
            </Text>
            <Chart type="area" height={160} options={options} series={series} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Infecteds - Month
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
