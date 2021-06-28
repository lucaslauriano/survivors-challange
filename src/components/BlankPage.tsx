import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const BlankPage = () => {
  return (
    <Flex justify="center" align="center" direction="column">
      <Box width="700px" mt="6">
        <Image src="/empty3.svg" alt="Picture 02" width={1200} height={611} />
      </Box>
      <Text w="206px" h="48px" px="6" color="gray.500" fontSize="18">
        Ops, no data!
      </Text>
    </Flex>
  );
};

export default BlankPage;
