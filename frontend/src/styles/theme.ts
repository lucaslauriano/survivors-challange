import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#0B0D0F",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#F8F8F2",
    },
    purple: {
      "500": "#7970A9",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  shadows: {
    base: "4px 4px 12px  rgba(0, 0, 0, 0.05)",
  },
  styles: {
    global: {
      body: {
        background: "gray.900",
        color: "gray.50",
      },
    },
  },
});
