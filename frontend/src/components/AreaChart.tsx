import { Box, theme, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const series = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 61, 18, 109],
  },
];
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[400],
  },
  theme: {
    monochrome: {
      enabled: true,
      color: theme.colors.yellow[500],
    },
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
      "2021-03-24T00:00:00.000Z",
      "2021-03-25T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
    },
    opacityFrom: 0.7,
    opacityTo: 0.3,
  },
};

interface AreaChart {
  title: string;
}

const AreaChart = ({ title }: AreaChart) => {
  return (
    <Box p={["6", "8"]} pb="4" bg="gray.800" borderRadius={8}>
      <Text fontSize="lg" mb="4">
        {title}
      </Text>
      <Chart options={options} series={series} type="area" height={160} />
    </Box>
  );
};

export default AreaChart;
