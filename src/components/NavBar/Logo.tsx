import { Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      survivors
      <Text as="span" fontSize="2xl" ml="1" mt="1" color="yellow.500">
        ☣
      </Text>
    </Text>
  );
};

export default Logo;
